  class DonationsAdapter {
  
    constructor() {
      this.baseUrl = 'http://localhost:3000'
    }

    static addDonation(donation) {
      console.log(`in addDonation function: ${JSON.stringify(donation)}`)

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
              console.log(donation)
              const results = document.getElementById('results')

              results.innerHTML = ` <p> the name of the donor is ${donation.donor_name}</p>
              <p> the email of the donor is ${donation.donor_email}</p>
              <p> the amount of the donation is ${donation.donor_amount}</p>` 
             })
      }
  }