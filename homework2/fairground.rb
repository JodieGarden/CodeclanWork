def fairground (weight, height)
  return (weight >= 40 && height >= 1.4)
end
puts fairground( 80, 1.5 )

fairground =gets.chomp.to_s
