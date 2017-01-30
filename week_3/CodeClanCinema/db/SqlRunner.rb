require('pg')
require_relative('../models/Customers')
require_relative('../models/Films')
require_relative('../models/Tickets')

class SqlRunner

  def self.run( sql )
    begin
      db = PG.connect({ dbname: 'CodeClanCinema', host: 'localhost' })
      result = db.exec(sql)
    ensure
      db.close
    end
    return result
  end

end