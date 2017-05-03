var Solar_System = function(name){
  this.name = name;
  this.planets = [];
  this.addPlanet = function(Planet){ this.planets.push(Planet);

  }
};


module.exports = Solar_System