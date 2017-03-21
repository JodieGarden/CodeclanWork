require_relative"./space_bounty"
require"pry-byebug"

@space_bounty_1 = SpaceBounty.new({"name" => "Crazy Eyes", 
  "species" => "Khajiit", 
  "danger_level" => "ermagerdyerderd", 
  "favourite_weapon" => "Bow & Arrow"})

@space_bounty_2 = SpaceBounty.new({"name" => "Mace Windu", "species" => "Jedi", "danger_level" => "could force choke you", "favourite_weapon" => "purple lightsaber"})

binding.pry

nil