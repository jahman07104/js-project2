class CharitiesAdapter {
  constructor() {
    this.baseUrl = 
    'http://localhost:3000/charities'
  }

    getCharities() {
      return fetch(this.baseUrl).then(res => res.json()
      )
    }
}