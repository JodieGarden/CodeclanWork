require "minitest/autorun"
require "minitest/rg"
require_relative "../Person"

class TestPerson < MiniTest::Test
  def setup 
    @person1 = Person.new("Jodie" "Garden")

  end

  def test_talk
    assert_equal(" My name is Jodie Garden", @person1.talk)
  end

end