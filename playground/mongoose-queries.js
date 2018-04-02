const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


/* let id = '5ac1f73f4fe9db28cfa216411';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
} */

/* Todo.find({
    _id: id
}).then((todos) => console.log('Todos', todos));

Todo.findOne({
    _id: id
}).then((todo) => console.log('Todo', todo)); */

/* Todo.findById(id).then((todo) => {
    if (!todo) {
        console.log('Id no found');
    } else {
    console.log('Todo By Id', todo)}
}).catch((e) => console.log(e)); */

User.findById('5ac0b7e8ac281b2992584c81').then((user) => {
    if (!user) {
        console.log('Unable to find user');
    }
    
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));