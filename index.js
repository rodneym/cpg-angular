var express = require('express');
var path = require('path');


var versions = {
	"1.0.5": {
		path: "angular-1.0.5"
	  , min: "angular.min.js"
	}
};

var libPath = path.join(__dirname, 'lib');

exports.support = function(ver, root){
	
	if (versions.hasOwnProperty(ver)) {	
		var e = express();
		e.use(root, express.static(path.join(libPath, versions[ver].path)));
		e.use(function(req, res, next) {
			res.locals.angular = path.join(root, versions[ver].min);
			next();
		});

		return e;
	}
	else
		throw ("Requested angular version not supported!");

};
