  class Donations
    constructor() {
      this.baseUrl = 
      'http://localhost:3000/charities'
    }

    addDonation() {
      return fetch(this.baseUrl).then(res => res.json()
      )
    }

    addDonatons(value){
      const doantions ={
        body: value
      }
      return fetch(this.baseUrl,{
        method: 'POST',
        headers: {
          'content-type': 'application/json', 
        },
        body: JSON.stringify({name:name, email:email, pwd:pwd })
      })

      .then(res => res.json()
      )};
      .then(function(data){
      console.log(data)
      const results = document.getElementById('results')

      results.innerHTML =` <p> the name of the donor is ${data.donorname}</p>
      <p> the email of the donor is ${data.donoremail}</p>
      <p> the amount of the donation is ${data.donationamount}</p>` 
    