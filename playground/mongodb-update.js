const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log(err);
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
//	findOneAndUpdate
//	db.collection('Todos').findOneAndUpdate({
//		_id: new ObjectID('5b0d15e10d47f722c7a5ea4e')
//	}, {
//		$set: {
//			completed: true
//		}
//	}, {
//		returnOriginal: false
//	}).then((res) => {
//		console.log(res);
//	});
	
//	challenge
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b0bf9109431442db4f35b9c')
	}, {
		$set: {
			name: 'Rob'
		},
		$inc: {
			age: 1,
		}
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	});
	
//	db.close();
});