// // My Variables
// const form = document.querySelector('#charity-form')
// const charitylist = document.querySelector('.collection')
  // const choseCharity = document.querySelector('.choose-charities')
// const clearBtn = document.querySelector('.clear_charities')
// const filter = document.querySelector('#filter')
// const charityInput =  document.querySelector('#charity')

const chooseCharity = document.querySelector('.choose-charities').addEventListener('click', function(){
  console.log('clipped')
  
})
const link = document.querySelector('a').addEventListener('click', onClick)
function onClick(e){
  console.log('pretty')
}
//  console.log(link.getAttribute('href'))
const form = document.querySelector('.charity-form').addEventListener('submit', e =>
{
  e.preventDefault();
const charity =document.querySelector('#charity')
  console.log(charity.value)
});
const para = document.querySelector('p').addEventListener('click', onClick)
function onClick(e){
  console.log('what up')
}
const like = document.querySelector('.like-btn').addEventListener('mouseover', onClick)
function onClick(e){
  e.preventDefault();
  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  val = e.target.innertext = "hey Patty";
  val = e.type

console.log(val)
}

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
      charities.forEach(charities => this.charities.push(charities))
    })
        .then(() => {
          this.render()       
        });
        
    }

  render(){
        for (let i =0; i < this.charities.length; i++){
        console.log ('my charities are',this.charities[i])  
      }
  let placecard = document.querySelector('.placecard')
    placecard.innerHTML += `
    <li>${this.charities[0].name},${this.charities[0].image}</li>
    <li>${this.charities[1].name},${this.charities[1].image}</li>
    <li>${this.charities[2].name},${this.charities[2].image}</li>
    <li>${this.charities[3].name},${this.charities[3].image}</li>
    <li>${this.charities[4].name},${this.charities[4].image}</li>
    <li>${this.charities[5].name},${this.charities[5].image}</li>
    <li>${this.charities[6].name},${this.charities[6].image}</li>
    <li>${this.charities[7].name},${this.charities[7].image}</li>
    `
    "my charity list goes here"
  }

}
