 // Search Input
const searchCharity = document.getElementById('searchCharity');
// Search input
searchCharity.addEventListener('keyup',(e) => {
  // to get input text from donor
  const donorText = e.target.value;
    if (donorText !== ''){
    console.log(donorText)
  }
});
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

  render() {
    for (let i =0; i < this.charities.length; i++){
    console.log ('my charities are',this.charities[i])  
    let placecard = document.querySelector('.placecard')
      placecard.innerHTML += `
        <li>
          <h3>${this.charities[i].name}</h3>
          <img src=${this.charities[i].image}/>
        </li>
        `
      }
    }
  }



//  variables for popup
const button = document.querySelector('.button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close'); 
const form = document.getElementById('form')


// Donor pop up maybe for third fetch to update.??
button.addEventListener('click', () => {
  popup.style.display = 'block';

});

close.addEventListener('click', () => {
  popup.style.display = 'none';

});

popup.addEventListener('click', () => {
  popup.style.display = 'none';

});

// Donor form
form.addEventListener('submit', function(e){
  // prevent auto submission
  e.preventDefault()
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const pwd =document.getElementById('pwd').value
})

// make Donor Post request

