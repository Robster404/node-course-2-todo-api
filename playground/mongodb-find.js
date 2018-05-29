const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log(err);
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
//	db.collection('Todos').find({
//		_id: new ObjectID('5b0cd5fe0d47f722c7a5da33')
//	}).toArray().then((docs) => {
//		console.log('Todos');
//		console.log(JSON.stringify(docs, undefined, 2));
//	}, () => {
//		console.log('Unable to fetch Todos');
//	});
	
//	db.collection('Todos').find().count().then((count) => {
//		console.log(`Todos count: ${count}`);
//		console.log(JSON.stringify(docs, undefined, 2));
//	}, () => {
//		console.log('Unable to fetch Todos');
//	});
	
//	db.collection('Users').find({
//		name: 'Rob'
//	}).toArray().then((docs) => {
//		console.log('Rob Users');
//		console.log(JSON.stringify(docs, undefined, 2));
//	}, () => {
//		console.log('Unable to fetch Todos');
//	});
//	or
	db.collection('Users').find({name: 'Rob'}).toArray().then((docs) => {
		console.log('Rob Users');
		console.log(JSON.stringify(docs, undefined, 2));
	});
	
	db.close();
});