var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  it('should mulitply 3 and 5 to get 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(15, calculator.runningTotal);
  })
  it('should divide 21 by 7 and get 3', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  })
  it('should add 1 and 4 to get 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal);
  })
  it('should subtract 4 from 7 to get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  })
  it('should concatenate multiple button clicks', function(){
    calculator.numberClick(7);
    calculator.numberClick(9);
    calculator.numberClick(4);
    calculator.numberClick(1);
    assert.equal(7941, calculator.runningTotal);
  })
  it('should chain multiple operations together', function(){
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('/');
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(32, calculator.runningTotal);
  })  
  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick('=');
    assert.equal(16, calculator.runningTotal);
  })



});
