var assert = require('assert');
var Bank = require('../bank');
var Account = require('../account');

describe('Bank', function(){

  var testBank;
  var testAccount;
  before(function(){
    testBank = new Bank();
    testAccount = new Account("Jodie", 1234);
  })

  it('should start with no accounts', function(){
    assert.equal(0, testBank.accounts.length)
  })
  before(function(){
    testBank.add(testAccount);
  })
  it('should be able to add an account', function(){
    assert.equal(1, testBank.accounts.length)
  })

  it('should find account by owner name', function(){
    assert.equal(testAccount, testBank.findByName("Jodie"))
  })

})