var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://modemongo:Op09IKNQtMizrJ84KNd5mytGJ0LyTILfJ3T9Nx5WKg0F7VYK9FcV7eK24OlS80Rm1O3XFODTC30fqHs5FD6taw==@modemongo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@modemongo@'

const createCollection = (name,age,fav_hero)=>{
    MongoClient.connect(url, function(err, database) {
        if (err) throw err;
        var DB = database.db("favourite-superheroes");
        var inputObject = { name: name, age: age ,favourite_hero: fav_hero };
        DB.collection("favourite-superheroes").insertOne(inputObject, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          console.log(inputObject)
          database.close();
        });
      });
}

const findCollections =(inputQuery)=>{
    MongoClient.connect(url, function(err, database) {
        if (err) throw err;
        var DB = database.db("favourite-superheroes");
        DB.collection("favourite-superheroes").find(inputQuery).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          database.close();
        });
      });
}
module.exports={
    createCollection,
    findCollections
}