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
        <li>
          <h3>${this.charities[i].name} (Charity number is ${this.charities[i].id})</h3>
          <img src=${this.charities[i].image} />
          <button class="charity-button" id="button_${this.charities[i].id}"> Donate to this Charity </button>
        </li>
        `
      }

      // const charityButton = document.querySelector('.charity-button');

      var elements = document.getElementsByClassName("charity-button");

      Array.from(elements).forEach(function(element) {
        element.addEventListener('click',  (e) => {
          //popup.style.display = 'block';
          createForm.style.display = 'block'
          console.log(`id is: ${e.target.id}`)
          let charityId = e.target.id.split('_')[1]
          document.getElementById('charity-id').value = charityId;
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('amount').value = '';

          var elem = document.getElementById('createFormResponse')
          console.log(`elem: ${elem}`)
          if (elem){
            elem.style.display = 'none'
          }

          var elem2 = document.getElementById('results')
          console.log(`elem2: ${elem2}`)
          if (elem2){
            elem2.style.display = 'none'
          }

        });
      });

    }
  }

