require( 'minitest/autorun' )
require( 'minitest/rg' )

class FizzBuzzTest < MiniTest::Test

end 

def test_fizz_buzz_returns_number
  assert_equal(1, fizz_buzz(1))
end