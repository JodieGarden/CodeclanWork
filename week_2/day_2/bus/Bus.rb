class Bus 

 attr_reader :route_number, :destination, :passengers


 def initialize (route_number,  destination)
  @route_number = route_number
  @destination = destination
  @passengers = Array.new()


def drive
  return "Brum Brum"

end

def get_number_of_passengers()
  return @passengers.size

end

def pick_up(passenger)
  @passengers << passenger
end

def drop_off(passenger)
  @passengers.delete(passenger)
end


def get_aff()
  @passengers.clear
end

end