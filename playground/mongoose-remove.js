const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/* Todo.remove ({}).then((result) => {
    console.log(result);
});
 */
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

/* Todo.findOneAndRemove({_id: '5ac28e97860a98e5cea65500'}).then((todo) =>{

}); */

Todo.findByIdAndRemove('5ac28e97860a98e5cea65500').then((todo) =>{
    console.log(todo);
});