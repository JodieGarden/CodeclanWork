require('pg')
require_relative("../db/SqlRunner")

class Films
  attr_reader :id
  attr_accessor :title, :price
  
  def initialize(options)
    @id = options['id'].to_i
    @title = options['title']
    @price = options['price'].to_i
  end

  def save 
    sql="INSERT INTO films(title, price) VALUES ('#{@title}', #{@price}) returning id;"
    films = SqlRunner.run(sql).first
    @id = films['id'].to_i
  end


  def update
    db = PG.connect({ dbname: 'CodeClanCinema', host: 'localhost'})
    sql = "UPDATE Films SET (title, price) = ('#{@title}', #{@price}) WHERE id = #{@id}"
    db.exec(sql)
    db.close
  end


  def self.all
    db = PG.connect({ dbname: 'CodeClanCinema', host: 'localhost'})
    sql = "SELECT * FROM films;"
    films = db.exec(sql)
    db.close
    return films.map{|film| Films.new(film)}


  end




# def self.delete_all() 
#   db = PG.connect({ dbname: 'CodeClanCinema', host: 'localhost'})
#   sql = "DELETE FROM Films"
#  db.exec(sql)
#   db.close
# end


def self.delete_all() 
  sql = "DELETE FROM customers"
  SqlRunner.run(sql)
end
# 


end