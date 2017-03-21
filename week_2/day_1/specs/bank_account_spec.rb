

require ('minitest/autorun')
require('minitest/rg')
require_relative('../BankAccount')

class TestBankAccount < MiniTest::Test
  def test_account_name

  account = BankAccount.new("Alastair", 783, "Personal")
  account_two = BankAccount.new("Jodie", 600, "Business")

  account.account_name = ("Alastair")


    assert_equal("Alastair", account.account_name)
    assert_equal("Jodie", account_two.account_name)




  end

 def test_pay_in_to_account
  
  account = BankAccount.new("Alastair", 783, "Personal")
  account.pay_in(1000)
  assert_equal(1783, account.balance)
 end 

 def test_monthly_fee_business
  account = BankAccount.new("Alastair", 500, "Business")
 account.pay_monthly_fee()
 assert_equal(450, account.balance)
 end
 def test_monthly_fee_personal
  account = BankAccount.new("Alastair", 500, "Personal")
  account.pay_monthly_fee()
  assert_equal(490, account.balance)
end
end