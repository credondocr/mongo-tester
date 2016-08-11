#! /usr/bin/env node

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Connection URL
var url = process.argv[2]
if(url != null || url != undefined) {
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    console.log('Connected succesfully to server ' + url)
    console.log('Fetching collections')
    db.listCollections().toArray((err, collections) => {
      collections.map( (collection) => {
        console.log(collection.name)
      })
    })
    db.close()
  })
} else {
  console.log('Database is needed');
}
