
puts "Please enter your pin number"
pin_code=gets.chomp.to_i
def check_pin (pin)
if (pin_code == 1234)
  puts "9999.99"
else 
  puts "Incorrect Pin"
end