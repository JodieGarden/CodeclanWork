require("minitest/autorun")
require("minitest/rg")
require_relative("../Bear")

class TestBear < MiniTest::Test

  def setup
    @Bear1 = Bear.new("Yogi")
  end

  def test_bear_name
    assert_equal("Yogi", @Bear1.name)
  end

  def test_stomach_is_empty
    assert_equal(0, @Bear1.empty_stomach)

  end
end