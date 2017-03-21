require_relative('../Wand')
require_relative('../Wizard')
require_relative('../Coven')

@elder_wand = Wand.new("Holly", "Phoenix Feather")
@broken_wand = Wand.new("Oak", "Unicorn Hair")
@elm_wand = Wand.new("Elm", "Dragon HeartString")

@harry= Wizard.new("Harry Potter", @elder_wand)
@ron = Wizard.new("Ron Weasley", @broken_wand)
@hermione = Wizard.new("Hermione Granger", @elm_wand)


coven_1 = Coven.new([@harry, @ron, @hermione])
coven_1.cast_spell("Leviosa")


