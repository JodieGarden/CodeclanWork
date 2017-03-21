class Wand
  attr_reader :wand_material, :wand_core

  def initialize(wand_material, wand_core)
    @wand_material = wand_material
    @wand_core = wand_core
  end

  def cast(spell)
    if @wand_material == "Holly" && @wand_core == "Phoenix Feather"
      return spell.upcase
    end
    return spell
  end
end
