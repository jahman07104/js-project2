 // Search Input
class Charities {
  constructor(id, name, image){
    this.charities = []
    this.adapter = new CharitiesAdapter()
    this.id = id
    this.name = name
    this.image = image
    // this.bindEventListeners()
    this.getCharities()
  }
  getCharities() {
    this.adapter
    .getCharities()
    .then(charities => {
      charities.forEach(charity => this.charities.push(charity))
    })
        .then(() => {
          this.render()       
        });
  }

  render() {
    for (let i =0; i < this.charities.length; i++){
    console.log ('my charities are',this.charities[i])
    console.log('this.charities[i].image', this.charities[i].image); 
    
    let placecard = document.querySelector('.placecard')
      placecard.innerHTML += `
        <div class="donation-card">
          <h3 class="charity-title">${this.charities[i].name}</h3>
          <img src=${this.charities[i].image} />

          <button class="charity-button" id="button_${this.charities[i].id}_${this.charities[i].name}"> Donate to this Charity </button>
        </div>
        `
      }

      // const charityButton = document.querySelector('.charity-button');

      let elements = document.getElementsByClassName("charity-button");

      Array.from(elements).forEach(function(element) {
        element.addEventListener('click',  (e) => {
          //popup.style.display = 'block';
          createForm.style.display = 'block'
          console.log(`id is: ${e.target.id}`)
          let charityId = e.target.id.split('_')[1]
          let charityName = e.target.id.split('_')[2]
          document.getElementById('charity-id').value = charityId;
          document.getElementById('charity-name').value = charityName;
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('amount').value = '';

          let elem = document.getElementById('createFormResponse')
          console.log(`elem: ${elem}`)
          if (elem){
            elem.style.display = 'none'
          }

          let elem2 = document.getElementById('results')
          console.log(`elem2: ${elem2}`)
          if (elem2){
            elem2.style.display = 'none'
          }

        });
      });

    }
  }

