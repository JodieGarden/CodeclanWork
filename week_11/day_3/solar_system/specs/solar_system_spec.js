var assert = require('assert');
var Planet = require('../planet');
var SolarSystem = require('../solar_system');

describe('Solar_System', function(){
  var solar_system;
  var planet;
  beforeEach(function(){
    solar_system = new SolarSystem('Snickers', []);
    planet = new Planet('Lady Garden')
  });
  it('Should have a name snickers', function(){
    assert.equal('Snickers', solar_system.name);
  });
  it('Should be an empty array', function(){
    assert.equal(0, solar_system.planets.length);
  });
  it('Should be an array with 1 in it', function(){
    solar_system.addPlanet(Planet)
    assert.equal(1, solar_system.planets.length);
  })
});