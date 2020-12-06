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
    "name": "The Bill and Belinda Gates Foundation",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/BillMelindaGatesFoundation.png/600px-BillMelindaGatesFoundation.png"
 },
 {
    "name": "The Donor Group",
    "image": "https://th.bing.com/th/id/OIP.CpnQyrRb6e3XdpFVHkoN4wHaHa?w=190&h=190&c=7&o=5&dpr=1.25&pid=1.7"
    
  },

  {
    "name": "Hearts and Hands around the world",
    "image": "https://th.bing.com/th/id/OIP.dZFVBoDVeX-i1pQiRjj13AHaGo?w=204&h=184&c=7&o=5&dpr=1.25&pid=1.7"
   
  },
  {
    "name": "Unicef rescue Comittee",
    "image": "https://th.bing.com/th/id/OIP.5q9VrCI6R6QFwTTYn3uqKgHaDS?w=333&h=155&c=7&o=5&dpr=1.25&pid=1.7"
    
  },
  {
    "name": "Loving Hands.org",
    "image": "https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Money/11November/CR-Money-Inlinehero-best-and-worst-charities-1119.png"
    
  },
  {
    "name": "Catholic Charities.org",
    "image": "https://www.catholiceducation.org/en/images/aaart/christinapoorlrg.jpg"
  
  },
  {
    "name": "Donate a Dime.org",
    "image": "http://images.clipartpanda.com/charity-clipart-charity-box.jpg"
   },

 {
    "name": "The tree of life Organization",
    "image": "https://image.shutterstock.com/z/stock-vector-modern-charity-organization-logo-charity-tree-of-life-social-event-451463587.jpg",
   
  }
]

charities.each do |charity|
  Charity.create(name: charity[:name], image: charity[:image])
end
