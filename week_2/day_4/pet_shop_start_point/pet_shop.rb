require_relative('pet')

class PetShop

  def initialize (input_pets)
    @pets = input_pets
  end

  def pet_type (name)
    found_pet = @pets.find{|pet| pet.name == name}
    return found_pet.type

  end

  def get_names_of_all_pets_of_type(type)
   found_pet = @pets.select {|pet| pet.type == type}
   return found_pet.collect {|dog| dog.name}
  end

  def get_number_of_pets_costing_at_least(cost)
    @pets.count {|pet| pet.price >= cost}
  end




 #  def get_number_of_pets_costing_at_least(cost)
 #  found_pet = @pets.select {|pet| pet.price >= cost}
 #  return found_pet.map {|pet|}



 # end
end