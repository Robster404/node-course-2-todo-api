//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var user = {name: 'Rob', age: 37};
//var {name, age} = user;
//console.log(user);
//console.log(name);
//console.log(age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log(err);
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
//	db.collection('Todos').insertOne({
//		text: 'Something to do',
//		completed: false,
//	}, (err, result) => {
//		if (err) {
//			return console.log('Unable to insert todo', err);
//		}
//		
//		console.log(JSON.stringify(result.ops, undefined, 2));
//	});
	
//	db.collection('Users').insertOne({
//		name: 'Rob',
//		age: 37,
//		location: 'Johannesburg',
//	}, (err, result) => {
//		if (err) {
//			return console.log('Unable to insert user ', err);
//		}
//		
//		console.log(result.ops[0]._id.getTimestamp());
//	});
	
	db.close();
});