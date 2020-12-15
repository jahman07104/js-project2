class DonationsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000'
  }

  static addDonation(donation) {
    let configObject = {
    method: 'POST',
    headers: {
      'content-type': 'application/json', 
    },
    body: JSON.stringify(donation)
    }

    return fetch(`${BASE_URL}/donations`, configObject)
    .then(res => res.json())
    .then(function(donation) {
    
    let form = document.getElementById('update-donation')
    form.innerHTML = `
    <form action="/action_page.php" method="post">
      <div class="form-group">
        <input type="hidden" class="form-control" name='id' id="id" value=${donation.id}>
      </div>
      <div class="form-group">
        <label for="name">Donor Name:</label>
        <input type="name" class="form-control" id="updated-name" value=${donation.donor_name}>
      </div>
      <div class="form-group">
        <label for="email">Donor Email :</label>
        <input type="email" class="form-control" id="updated-email" value=${donation.donor_email}>
      </div>
      <div class="form-group">
        <label for="pwd">Donation amount:</label>
        <input type="text" class="form-control" id="updated-amount" value=${donation.donor_amount}>
      </div>
      <div class="checkbox">
        <label><input type="checkbox"> Remember me</label>
      </div>
      <button color: red type="submit" class="btn  btn-default">Update Donor Info</button>
    </form>
    ` 
    createForm.style.display = 'none'
    updateForm.style.display = 'block'
    })
  }

    static updateDonation(donation) {
     
    let configObject = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json', 
      },
      body: JSON.stringify(donation)
    }

    return fetch(`${BASE_URL}/donations/${donation.id}`, configObject)
    .then(res => res.json())
    .then(function(donation) {
    const results = document.getElementById('results')

    results.innerHTML = `<div id='updateDonationMessage'>
    <p> Thank you ${donation.donor_name} on behalf of all our charities </p>
    <p> Here is is your Updated Donation</p>
    <p> your donation amount is now ${donation.donor_amount}</p>
    <p> click Reset to reset form or choose another charity</p>
    <button id='resetButton'> Reset </button>
    </div>`
    document.getElementById("resetButton").onclick = function() {
      document.getElementById("updateDonationMessage").innerHTML = "";
    };
    results.style.display = 'block'
    updateForm.style.display = 'none'
    })
  }
}
