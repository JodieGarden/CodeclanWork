require('pg')
require_relative("../db/SqlRunner")
class Customers 
  attr_reader :id
  attr_accessor :name, :funds

  def initialize(options)
    @id = options['id'].to_i
    @name = options['name']
    @funds = options['funds'].to_i
  end

  def save 
    sql="INSERT INTO customers(name, funds) VALUES ('#{@name}', #{@funds}) returning id;"
    customers = SqlRunner.run(sql).first
    @id = customers['id'].to_i

  end


  def update
    db = PG.connect({ dbname: 'CodeClanCinema', host: 'localhost'})
    sql = "UPDATE customers SET (name, funds) = ('#{@name}', #{@funds}) WHERE id = #{@id}"
    db.exec(sql)
    db.close
  end


  def self.all

    db = PG.connect({ dbname: 'CodeClanCinema', host: 'localhost'})
    sql = "SELECT * FROM customers;"
    customers = db.exec(sql)
    db.close
    return customers.map{|customer| Customers.new(customer)}
  end



  def self.delete_all() 
    sql = "DELETE FROM customers"
    SqlRunner.run(sql)
  end







end
