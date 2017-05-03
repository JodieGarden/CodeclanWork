// var array = [1,2,3,4,5];


// for(var item of array){
//   console.log(item);
// }

// array.forEach(function(number){
//   console.log(number * 4)
// });

// var ourForEach = function(array, callBack){
//   for(var item of array){
//     callBack(item);
//   }
// }


// ourForEach(array, function(item){
//   console.log("The item is:", item)
// });

var Bank = function(){
  this.accounts = [100, 1500, 4000,12000];
  this.total = 0;
}

Bank.prototype = {
  setTotal: function(){
    this.total = 0;
    this.accounts.forEach(function(account){
      this.total += account;
    }.bind(this));
  }
}

var bank = new Bank();
console.log("bank total:", bank.total);
bank.setTotal();
console.log("total after:", bank.total);

// Bank.prototype = {
//   setTotal: function(){
//     this.total = 0;
//     var that = this;
//     this.accounts.forEach(function(account){
//       that.total += account;

//     });
//   }
// }