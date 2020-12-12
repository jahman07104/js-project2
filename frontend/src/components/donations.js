const BASE_URL = 'http://localhost:3000'

const searchCharity = document.getElementById('searchCharity');
// Search input
// searchCharity.addEventListener('keyup',(e) => {
//   // to get input text from donor
//   const donorText = e.target.value;
//     if (donorText !== ''){
//     console.log(donorText)
//   }
// });
//  variables for Donor popup

const button = document.querySelector('.button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close'); 
const createForm = document.getElementById('create-donation')
const updateForm = document.getElementById('update-donation')


// Donor pop up maybe for third fetch to update.??
close.addEventListener('click', () => {
 


 popup.style.display = 'none';
console.log('here ------------------------- !!!!!')
 
  

});

popup.addEventListener('click', () => {

  updateForm.className = 'newpopS'
  console.log('here  yooo---------------------- !!!!!')
 popup.style.display = 'none';
 
});

// Donor create form
createForm.addEventListener('submit', function(e) {
  // prevent auto submission
  e.preventDefault()
  console.log('submitting donation form')
  const charityId = document.getElementById('charity-id').value
  const charityName = document.getElementById('charity-name').value
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const amount = document.getElementById('amount').value
  let donation = new Donation({ charity_id: charityId, donor_name: name, donor_email: email, donor_amount: amount })
  updateForm.className = 'newpops'
  //adapter = new DonationsAdapter()
  DonationsAdapter.addDonation(donation)
})

// make Donor update (PUT) request

updateForm.addEventListener('submit', function(e) {
  // prevent auto submission
  e.preventDefault()
  console.log('submitting donation update form')
  const id = document.getElementById('id').value
  const name = document.getElementById('updated-name').value
  const email = document.getElementById('updated-email').value
  const amount = document.getElementById('updated-amount').value
  let donation = new Donation({ id: id, donor_name: name, donor_email: email, donor_amount: amount })
  //adapter = new DonationsAdapter()
  DonationsAdapter.updateDonation(donation)
})
