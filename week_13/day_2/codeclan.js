use codeclan;

db.createCollection("Students", {capped: true, size:16});

db.Students.insert([{
  name: "John",
  favouriteFood: "Quiche"
},
{
  name: "Daniel",
  favouriteFood: "Quesadilas"
},
{
  name: "Chris",
  favouriteFood: "Jam"
}
]);

db.Students.find().pretty();

db.createCollection("Instructors");

db.Instructors.insert([{
  name: "John",
  favouriteFood: "Quiche"
},
{
  name: "Ally",
  favouriteFood: "jam"
},
{
  name: "Alan",
  favouriteFood: "Jam"
}
]);

db.Instructors.find().pretty();



db.Instructors.createIndex({name: 1})

db.dropDatabase();