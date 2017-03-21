require( 'sinatra' )
require( 'sinatra/contrib/all' )
require_relative('./controllers/users_controllers.rb')

get '/users' do
  @user = Users.all
  @transactions = Transactions.all
  erb( :index )
end


