require_relative('Customers')
require_relative('Films')
require_relative('Tickets')

require('pry-byebug')

customer1 = Customers.new({'name' => 'Thor', 'funds' => 100})
customer2 = Customers.new({'name' => 'Ignacious', 'funds' => 450})

customer1.save
customer2.save

film1 = Films.new({'title' => 'Lion', 'price' => 10})
film2 = Films.new({'title' => 'T2', 'price' => 9})

film1.save
film2.save
binding.pry

ticket1 = Tickets.new({'film_id' => film1.id, 'customer_id' => customer1.id})
ticket2 = Tickets.new({'film_id' => film2.id, 'customer_id' => customer2.id})



nil