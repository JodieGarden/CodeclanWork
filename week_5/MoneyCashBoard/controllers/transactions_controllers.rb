require( 'sinatra' )
require( 'sinatra/contrib/all' )
require('pry-byebug')
require('./models/users')
require('./models/tags')
require('./models/transactions')

get '/transactions' do
  @transactions = Transaction.all
  @merchants = Merchant.all
  erb(:"transactions/index")
end

get '/transactions/new' do
  @transactions = Transaction.all
  @merchants = Merchant.all
  erb(:"transactions/new")
end

post '/transactions' do
  transaction = Transaction.new(params)
  transaction.save
  redirect to(:"transactions")
end

get '/transactions' do
  @transactions = Transaction.all
  erb(:"transactions/show")
end

post '/transactions/:id/delete' do 
  Transaction.destroy(params[:id])
redirect to(:"transactions/index")

end

get '/transactions/:id/edit' do
  @transaction = Transaction.find(params[:id])
  erb(:"transactions/edit")
end
