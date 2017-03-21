class Person
# attr_reader :name
def initialize (first_name, second_name)
  @first_name = first_name
  @second_name = second_name

  def talk 
    return "My name is #{@first_name} #{@last_name}"
  end

 end