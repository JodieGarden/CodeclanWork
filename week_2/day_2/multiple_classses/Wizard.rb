class Wizard

  attr_reader :name

  def initialize (name, wand)
    @name = name  
    @wand = wand
  end


  def cast_spell(spell)
    @wand.cast(spell)
  end



end


#    if @wand_material == "Yew" && @wand_core == "Phoenix Feather" 
      #return spell.upcase
   # end
    #return spell