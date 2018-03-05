const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove all of the todos from the database
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Find one and remove
// Todo.findOneAndRemove({_id: '5a9cbfe42549caa85b81d10f'}).then((todo) => {
// 	console.log(todo);
// });

// Remove by id
Todo.findByIdAndRemove('5a9cbfe42549caa85b81d10f').then((todo) => {
	console.log(todo);
});