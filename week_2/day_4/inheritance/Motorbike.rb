require_relative ("./vehicle")

class Motorbike < Vehicle

  def initialize 

    super(2)


  end

  def drive()
    return super() + " I'm a motorbike."
  end

  def wheelie 
    return "WHEEEE!"


  end




end