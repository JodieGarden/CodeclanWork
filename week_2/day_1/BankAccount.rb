class BankAccount 

 attr_accessor :account_name
 attr_reader :balance

 def initialize(account_name, balance, type)


  @account_name = account_name
  @balance = balance
  @type = type
end 

def pay_in(amount)

 @balance  += amount
end
def pay_monthly_fee 

  if @type == "Business"
    @balance -= 50s

  elsif @type == "Personal"
    @balance -= 10
  end
end
end

