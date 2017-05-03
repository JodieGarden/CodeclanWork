var assert = require('assert');
var Record = require('../record');

var testRecord = new Record('Amy Macdonald', 'Under Stars', 12)

describe('Record', function(){
  it('should have a name', function(){
    assert.equal('Amy Macdonald', testRecord.artist);
  })
  it('should have title', function(){
    assert.equal('Under Stars', testRecord.title);
  })
  it('should have price', function(){
    assert.equal(12, testRecord.price)
  })  
  it('should be able to print record details', function(){
    assert.equal(" Amy Macdonald new album Under Stars is priced at £12", testRecord.printRecordDetails());
  })
})