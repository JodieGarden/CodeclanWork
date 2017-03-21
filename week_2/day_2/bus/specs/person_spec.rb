require ("minitest/autorun")
require ("minitest/rg")
require_relative("../Person")

class TestPerson < MiniTest::Test
  def setup 
    @person = Person.new("Jodie", 21)

  end

  def test_person_name
    assert_equal("Jodie", @person.name)
  end

  def test_person_age
    assert_equal(21, @person.age)

  end

end