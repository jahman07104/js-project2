# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Charities.delete.all

charities = [

  {
    "id": 2,
    "name": "The Donor Group",
    "image": "https://th.bing.com/th/id/OIP.CpnQyrRb6e3XdpFVHkoN4wHaHa?w=190&h=190&c=7&o=5&dpr=1.25&pid=1.7"
    
  },
  {
    "id": 3,
    "name": "Hearts and Hands around the world",
    "image": "https://th.bing.com/th/id/OIP.dZFVBoDVeX-i1pQiRjj13AHaGo?w=204&h=184&c=7&o=5&dpr=1.25&pid=1.7"
   
  }
 
]

charities.each do |charity|
Charity.create(name: charity[:name], image: charity[:image])


end

