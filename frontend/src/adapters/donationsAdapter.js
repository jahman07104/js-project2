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
              results.innerHTML = `

              <div id='createFormResponse'>
                <p> Thank you ${donation.donor_name}, for your donation to charity number ${donation.charity_id}</p>
                <p>  your email is ${donation.donor_email}</p>
                <p> your donation amount is ${donation.donor_amount}</p>
              </div>

              ` 
              createForm.style.display = 'none'
              updateForm.style.display = 'block'
          })
      }

      static updateDonation(donation) {
        console.log(`in updateDonation function: ${JSON.stringify(donation)}`)
  
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
                console.log(donation)
                const results = document.getElementById('results')
  
                results.innerHTML = `<p> Here is is your Updated Donation! ${donation.donor_name}</p>
                <p> your donation amount is now ${donation.donor_amount}</p>` 

                results.style.display = 'block'
                updateForm.style.display = 'none'
              })
    }
  }