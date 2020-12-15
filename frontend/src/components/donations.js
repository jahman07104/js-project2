const BASE_URL = 'http://localhost:3000'
// My variables

const searchCharity = document.getElementById('searchCharity');
const button = document.querySelector('.button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close'); 
const createForm = document.getElementById('create-donation')
const updateForm = document.getElementById('update-donation')

// Donor pop up 
close.addEventListener('click', () => {
popup.style.display = 'none';
});

popup.addEventListener('click', () => {
updateForm.className = 'newpopS'
popup.style.display = 'none';
});

createForm.addEventListener('submit', function(e) {
  // prevent auto submission
  e.preventDefault()
  const charityId = document.getElementById('charity-id').value
  const charityName = document.getElementById('charity-name').value
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const amount = document.getElementById('amount').value
  let donation = new Donation({ charity_id: charityId, donor_name: name, donor_email: email, donor_amount: amount })
  updateForm.className = 'newpops'
  DonationsAdapter.addDonation(donation)
})

updateForm.addEventListener('submit', function(e) {
  // prevent auto submission
  e.preventDefault()
  const id = document.getElementById('id').value
  const name = document.getElementById('updated-name').value
  const email = document.getElementById('updated-email').value
  const amount = document.getElementById('updated-amount').value
  let donation = new Donation({ id: id, donor_name: name, donor_email: email, donor_amount: amount })
  DonationsAdapter.updateDonation(donation)
})
