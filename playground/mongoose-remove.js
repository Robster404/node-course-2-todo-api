const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {users} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//	console.log(result);
//});


Todo.findByIdAndRemove('5b0fb56b0d47f722c7a64098').then((todo) => {
	console.log(todo);
});