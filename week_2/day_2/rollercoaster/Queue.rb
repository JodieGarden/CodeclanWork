class RollerCoasterQueue



  def initialize(name, queue)
    @name = name
    @queue = Array.new()
  end

  def name 
    return @name

  end

  def number_waiting
    return @queue.count
  end

  def join_queue(person)
    @queue << person
  end
end