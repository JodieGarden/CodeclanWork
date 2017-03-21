class Coven

  attr_reader :members

  def initialize(members)
    @members = members
  end


  def cast_spell(spell)
    for wizard in @members
     puts wizard.cast_spell(spell)
    end
  end
end


