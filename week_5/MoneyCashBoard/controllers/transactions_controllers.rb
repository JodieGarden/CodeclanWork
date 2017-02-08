require( 'sinatra' )
require( 'sinatra/contrib/all' )
require('pry-byebug')
require('./models/users')
require('./models/tags')
require('./models/transactions')

get '/transactions' do
  @transactions = Transaction.all
  erb(:"transactions/index")
end

post '/transactions' do
  @transactions = Transaction.new(params)
  transaction.save
  erb(:"transactions/create")
end

get '/transactions/:id' do
  @transactions = Transaction.find(params[:id])
  transaction.save
  erb(:"transactions/show")
end