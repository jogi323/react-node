var mongoose = require('mongoose');
mongoose.connect('mongodb://react:react@ds121089.mlab.com:21089/react-node');

const UserSchema  = mongoose.Schema({
    firstname: {type:String, required: true},
    lastname: {type:String, required: true},
    email: {type: String, required: true},
    mobile: {type: Number,required: true},
    image: { type: String},
    password: {type: String}
});

var User = mongoose.model('User', UserSchema );
module.exports = User;
