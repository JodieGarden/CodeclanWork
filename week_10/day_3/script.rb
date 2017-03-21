# question = 'Who should i say hello to?'
# puts question
# input = gets.chomp 
# while input != 'quit'
#   puts 'Okay'
#   puts "Hello, #{input}"
#   puts question
#   input = gets.chomp
# end

def puts_later(word, seconds_to_wait)
  Thread.new do 
    sleep(seconds_to_wait)
    puts word
  end
end

puts "Hi"
bye_thread = puts_later("bye", 4)
puts "What's up?"
late_thread = puts_later("Am i late?", 3)

bye_thread.join
late_thread.join