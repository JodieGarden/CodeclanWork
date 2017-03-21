require("minitest/autorun")
require ("minitest/rg")

require_relative("app")

class TestApp < MiniTest::Test

  def test_array_map_add_one
    array = [1,2,3]
    result = array.map { |item| item + 1}
    assert_equal([2,3,4], result)
  end

  def test_adds_one_to_each_item

    assert_equal([2,3,4], map([1,2,3]) { |item| item + 1})
  end

  def test_mulitiply_by_2_each_item
    assert_equal([2,4,6], map([1,2,3]) { |item| item * 2})

  end


  def test_add_up_to_you
    assert_equal(2, up_to_you{1 + 1})


  end

  def test_up_to_you_hello
    assert_equal( "Hello Jodie", up_to_you_hello { |name| "Hello" + name})
  end
end