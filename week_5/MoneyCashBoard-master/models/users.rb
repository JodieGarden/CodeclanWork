require_relative('../db/SqlRunner')
class Users

  def initialize (options)
    @id = options['id'].to_i
    @first_name = options['first_name']
    @last_name = options['last_name']
    @budget = options['budget'].to_i


    def pretty_name()
      return @first_name.concat("#{@last_name}")
    end

    def save()
      sql = "INSERT INTO users (name, budget) VALUES ('#{@first_name}', '#{@last_name}' #{@budget}) RETURNING *;"
      results = SqlRunner.run(sql).first
    end
  end

  def get_many()
    sql = "SELECT * FROM users"
    results = SqlRunner.run( sql )
    return results.map { |hash| Users.new( hash ) }
  end

  def find(id)
    sql = "SELECT * FROM users WHERE id = #{'id'}"
    user = SqlRunner.run(sql)
    result = Users.new(user.first)
    return result
  end

  def update
    db = PG.connect({ dbname: 'MoneyCashBoard', host: 'localhost'})
    sql = "UPDATE users SET (name, budget) = ('#{@name}', #{@budget}) WHERE id = #{@id}"
    db.exec(sql)
    db.close
  end
 def all()
   sql = "SELECT * FROM users"
   users = SqlRunner.run( sql )
   result = users.map { |user| Users.new( user ) }
   return result
 end
end



