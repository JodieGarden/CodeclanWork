novar assert = require('assert');
var Planet = require('../planet');
var SolarSystem = require('../solar_system');

describe('Planet', function(){
  var planet

  beforeEach(function(){
    planet = new Planet('Lady Garden');
  });
  it('Should have a name Lady Garden', function(){
    assert.equal('Lady Garden', planet.name);
  });
  it('Should create a new planet and check the name', function(){
    planet1 = new Planet('PLUTO IS A PLANET')
    assert.equal('PLUTO IS A PLANET', planet1.name);
  });
});