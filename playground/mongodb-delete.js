const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log(err);
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
//	deleteMany
//	db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
//		if (result.result.ok == 1) {
//			console.log(`Deleted ${result.result.n}`);
//		} else {
//			console.log(result);
//		}
//	}, () => {
//		console.log('delete failed');
//	});
	
//	deleteOne
//	db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//		console.log(`Deleted ${result.result.n}`);
//	})

//	findOneAndDelete
//	db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//		console.log(result);
//	});
	
//	challenge
//	db.collection('Users').deleteMany({name: 'Rob'}).then((res) => {
//		console.log(`Success: ${res.result.n} documents deleted.`);
//	});
//	db.collection('Users').findOneAndDelete({_id: new ObjectID('5b0d19820d47f722c7a5ecad')}).then((res) => {
//		console.log(JSON.stringify(res, undefined, 2));
//	});
	
//	db.close();
});