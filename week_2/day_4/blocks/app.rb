def map (items)
  result =[]
  for item in items 
    result << yield(item)

  end
  return result
end

def up_to_you
  return yield 
end

def up_to_you_hello
  name = " Jodie"
  return yield (name)
end