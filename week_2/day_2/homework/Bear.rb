class Bear
attr_accessor :name
  def initialize (name)

    @name = name
    @empty_stomach = Array.new()
    @fish_eaten = Array.new()
  end

  def name 
    return @name
  end

  def empty_stomach
    return @empty_stomach.count
  end
end
