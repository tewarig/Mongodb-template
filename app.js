const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true,"Please check your data entry no name"]  //validation
  },
  rating: {
    type: Number,
    min:1,
    max:10
  },
  review: String
});

 const Fruit = mongoose.model("Fruit",fruitSchema);
 const fruit = new Fruit ({
   name:"Qwerty",
   rating: 8,
   review: "pretty solid as a fruit"
 });

 //fruit.save();
 const personSchema = new mongoose.Schema({
   name:String,
   age:Number,
   favouriteFruit: fruitSchema
 });
 const pineapple = new Fruit ({
   name:"Pineapple",
   rating: 9,
   review: "Great Fruit"
 });
 pineapple.save();

 const Person = mongoose.model("Person" , personSchema);
 const person = new Person({
   name:"John",
   age:37
 });
// person.save();
const ammy = new Person({
  name:"Ammy",
  age:37,
  favouriteFruit:pineapple
});
person.save();


 const Kiwi = new Fruit({
   name:"kiwi" ,
   score:10,
   review:"The best Fruit!"
 });
 const Orange = new Fruit({
   name:"Orange" ,
   score:10,
   review:"The best Fruit!"
 }); const Banana = new Fruit({
    name:"Banana" ,
    score:3,
    review:"The best Fruit!"
  });
/*  Fruit.insertMany([Kiwi,Orange,Banana],function (err) {
     if (err){
       console.log(err);
       }
       else{
         console.log("Success");
       }
  });
  */
   Fruit.find(function(err,fruits){
    if(err){
      console.log(err);
    }else
    {
      // console.log(fruits);
      mongoose.connection.close();
      fruits.forEach(function(fruit){
        console.log(fruit.name);
      });
    }
  })

  /* Fruit.updateOne({_id: "5e833be09814b76a59086f41"},{name:"Peach"},function(err){
    if(err){
      console.log(err);

    }else{
      console.log("sucess");

    }
  })
*/

/*
Fruit.deleteOne({name:"Peach"},function(err){
  if(err){
    console.log(err);

  }else{
    console.log("sucess");}
  });

*/
/*
Person.deleteMany({name:"John"},function(err){
  if(err){
    console.log(err);

  }else{
    console.log("sucess");}
  });
*/
