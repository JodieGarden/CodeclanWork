require_relative("../db/SqlRunner")

class Tickets
  attr_reader :id
  attr_accessor :film_id, :customer_id

  def initialize(options)
    @id = options['id'].to_i
    @film_id = options['film_id'].to_i
    @customer_id = options['customer_id'].to_i
  end

  def save 
    sql="INSERT INTO tickets (customer_id, film_id) VALUES (#{@customer_id}, #{@film_id}) returning id;"
    tickets = SqlRunner.run(sql).first
    @id = tickets['id'].to_i
  end


  # def update
  #   db = PG.connect({ dbname: 'CodeClanCinema', host: 'localhost'})
  #   sql = "UPDATE tickets SET (film_id, customer_id) = (#{@film_id}, #{@customer_id}) WHERE id = #{@id}"
  #   db.exec(sql)
  #   db.close
  # end


  def self.all
    db = PG.connect({ dbname: 'CodeClanCinema', host: 'localhost'})
    sql = "SELECT * FROM customers;"
    tickets = db.exec(sql)
    db.close
    return tickets.map{|ticket| Ticketss.new(ticket)}
  end



  

  def self.delete_all() 
    sql = "DELETE FROM tickets"
    SqlRunner.run(sql)
  end







  # end


end