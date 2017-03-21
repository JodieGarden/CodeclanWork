class River

  def initialize (name, fish_in_river, fish_eaten_by_bear)
    @name = name
    @fish_in_river = Array.new()
    @fish_eaten_by_bear= Array.new()

 



  end

  def name
    return @name
  end

  def fish_in_river
    return @fish_in_river.count
  end

  def fish_eaten_by_bear
    return @fish_eaten_by_bear.count
  end




end 