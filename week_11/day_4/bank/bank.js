var Bank = function(){
  this.accounts = [];
  this.add = function(account){
    return this.accounts.push(account);
  }
  this.findByName = function(name){
    return this.accounts.find(function(account){
      return account.name === name;
    })
  }
}


module.exports = Bank;