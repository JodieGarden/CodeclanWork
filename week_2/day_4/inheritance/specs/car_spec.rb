require "minitest/autorun"
require "minitest/rg"
require_relative "../car"

class TestCar < MiniTest::Test

  def setup 
    @car = Car.new ("Bugatti")

  end

  def test_drive
    assert_equal("Brrrm! I'm a car.", @car.drive())

  end

  def test_number_wheels
    assert_equal(4, @car.number_of_wheels   ) 

  end
def test_car_model
  assert_equal("Bugatti", @car.model)
end


end