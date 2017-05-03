var assert = require('assert');
var Account = require('../account');

describe("Account", function(){
  var testAccount;

  beforeEach(function(){
  testAccount = new Account("Ruth", 111, 1000);
  })
  it("should have a name", function(){
    
    assert.equal("Ruth", testAccount.name);
  })
  it("should have a balance", function(){
    assert.equal(1000, testAccount.balance)
  })
})