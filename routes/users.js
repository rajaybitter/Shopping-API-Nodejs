var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/login', function(request, response){
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

router.post('/register', function(request, response){
	console.log('Registration attempt');
	var valid = false;

	//Database stuff
	if(valid){
		var body = {"code": "200", "message": "Registration successful"};
	}else{
		var body = {"code": "400", "message": "Registration failed"};
	}
});

router.post('/upload-photo', function(request, response){
	console.log('Photo upload attempt');
});

router.post('/update', function(request, response){
	console.log('Info update attempt');
});

module.exports = router;
