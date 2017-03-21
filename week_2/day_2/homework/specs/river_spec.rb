require("minitest/autorun")
require("minitest/rg")
require_relative("../River")
require_relative("../Bear")
require_relative("../Fish")

class TestRiver < MiniTest::Test

  def setup
    @river_name = River.new("Amazon", [], [])

  end
  def test_river_name
    assert_equal("Amazon", @river_name.name)
  end

  def test_number_of_fish_in_river
    assert_equal(0, @river_name.fish_in_river)
  end
def test_fish_lost_to_bear
  assert_equal(0,@river_name.fish_eaten_by_bear)
end

end