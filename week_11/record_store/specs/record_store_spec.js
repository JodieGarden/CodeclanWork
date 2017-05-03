var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');

var testShop = new RecordStore('Records, a sound purchase','Glasgo');
var testRecord = new Record('MILCK', 'Quiet', 10);

describe('RecordStore', function(){
  it('should have a name', function(){
    assert.equal('Records, a sound purchase', testShop.name);
  })
  it('should have a location', function(){
    assert.equal('Glasgo', testShop.city);
  })
  it('should have an empty inventory', function(){
      assert.equal(0, testShop.inventory.length);
  })
  it('should have 0 balance', function(){
    assert.equal(0, testShop.balance);
  })
  it('should be able to add a record to inventory', function(){
    testShop.addToInventory(testRecord);
    assert.equal(1, testShop.inventory.length)
  })
  it('should be able to print record details', function(){
    testShop.addToInventory(testRecord);
    assert.equal(" MILCK new album Quiet is priced at £10", testRecord.printRecordDetails());
  })
})