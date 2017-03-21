require ('minitest/autorun')
require('minitest/rg')
require_relative('../bank_account.rb')

class TestBankAccount < MiniTest::Test
  def test_account_name

  account = {
      name: "Jodie",
      balance: 783,
      type: "Personal"
    }


    assert_equal("Jodie", get_account_name(account))
    
  end

end