use farm;

db.animals.insert(
{
  name: "Erik",
  type: "Elephant"
});

db.animals.insert({
  name:"Fred",
  type: "Frog"
});

// db.animals.find({name: "Fred"}).pretty();

// db.animals.update(
//   {name: "Fred"},
//   {
//     $set:{type: "Flamingo"}
//   }
// );

// db.animals.find({name: "Fred"}).pretty();

db.animals.remove({name: "Fred"});

db.animals.find();

db.dropDatabase();

