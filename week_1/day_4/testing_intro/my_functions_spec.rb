require('minitest/autorun')
require('minitest/rg')

require_relative('./functions.rb')

class FunctionsTest < MiniTest::Test
  def test_multiply()
    expected_value = 14
    output_value = multiply(3,5)
    assert_equal(expected_value, output_value)
  end
end