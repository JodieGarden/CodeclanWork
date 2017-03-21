require"pg"
class SpaceBounty
attr_reader :name, :species, :danger_level, :favourite_weapon 
  def initialize(options)
    @id = options['id'] if options['id'] != nil
    @name = options['name']
    @species = options['species']
    @danger_level = options['danger_level'] 
    @favourite_weapon = options['favourite_weapon']


  end


  def save()
    db = PG.connect({ dbname: 'space_bounties', host: 'localhost'})
    sql = "INSERT INTO space_bounties (name, species, danger_level, favourite_weapon) VALUES ('#{name}', '#{species}', '#{danger_level}', '#{favourite_weapon}') returning *;"
    @id = db.exec(sql)[0]["id"].to_i
    db.close
  end

  def update()
    db = PG.connect({ dbname: 'space_bounties', host: 'localhost'})
    sql = "UPDATE space_bounties SET (name, species, danger_level, favourite_weapon) = ('#{@name}', '#{@species}', '#{@danger_level}', '#{@favourite_weapon}')WHERE id = #{@id};"
    db.exec(sql)
    db.close
  end



  # #class methods 
  def self.all()
    db = PG.connect({ dbname: 'space_bounties', host: 'localhost'})
    sql = "SELECT * FROM space_bounties"
    bounties = db.exec(sql)
    db.close
    return bounties.map{|bounty| SpaceBounty.new(bounty)}




  end

  def self.delete_all()
    db = PG.connect({ dbname: 'space_bounties', host: 'localhost'})
    sql = "DELETE FROM bounties WHERE id=#{@id}"
    db.exec(sql)
    db.close

  end
end