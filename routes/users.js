var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/user/login', function(request, response){
	console.log('Login attempt');
	var valid = false;

	//Database stuff
	if(valid){
		var body = {"code":"200" , "message": "Login successful"};
	}else{
		var body = {"code":"300" , "message": "Login successful"};
	}
	response.send(body)
});

router.post('/user/register', function(request, response){
	console.log('Registration attempt');
	var valid = false;

	//Database stuff
	if(valid){
		var body = {"code": "200", "message": "Registration successful"};
	}else{
		var body = {"code": "400", "message": "Registration failed"};
	}
});

router.post('/user/upload-photo', function(request, response){
	console.log('Photo upload attempt');
});

router.post('/user/update', function(request, response){
	console.log('Info update attempt');
});

module.exports = router;
