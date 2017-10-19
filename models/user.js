const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username:{
		type:String,
		required:[true, 'Username is required']
	},
	email:{
		type:String,
		required:[true, 'Email is required']
	}
	password:{
		type:String,
		required:[true, 'Password is required']
	},
	dob:{
		type:String,
		required:[true, 'Date of birth is required']
	},
	location:{
		type:String,
		required:[true, 'location is required']
	},
	salt:{
		type:String,
		required:[true, "Required"]
	}
});

const User = mongoose.Model('user', UserSchema);
module.exports = User;