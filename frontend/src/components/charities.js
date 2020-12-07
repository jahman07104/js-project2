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
          <h3>${this.charities[i].name} (Charity ID = ${this.charities[i].id})</h3>
          <img src=${this.charities[i].image} />
        </li>
        `
      }
    }
  }

