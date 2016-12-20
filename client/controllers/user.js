
//-----------------users----------------------

app.get('/api/users', function(req, res){
	console.log("List of User-->");
	User.getusers(function(err, users){
		if(err){
			throw err;
		}
		console.log("List of User-->" + users);
		res.json(users);
	});
});

app.get('/api/users/:_id', function(req, res){
	User.getUserById(req.params._id, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.post('/api/users', function(req, res){
	var user = req.body;
	User.addUser(user, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.put('/api/users/:_id', function(req, res){
	var id = req.params._id;
	var user = req.body;
	User.updateUser(id, user, {}, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.delete('/api/users/:_id', function(req, res){
	var id = req.params._id;
	User.removeUser(id, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});