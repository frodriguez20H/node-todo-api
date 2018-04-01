//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    } 
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');

/*     db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5ac0a1f35c9e4a72ffca4d0b')
    }, {
        $set: {
            completed: true
        }
    }, {returnOriginal: false}).then((result) => {
        console.log(result)}); */

    db.collection('Users').findOneAndUpdate(
        {
        name: 'Tere'
    }, {
        $set: {
            location: 'Jaen'
        },
        $inc: { age: 1}, 
    }, {returnOriginal: false}).then((result) => {
        console.log(result)});
    
    //client.close();
});