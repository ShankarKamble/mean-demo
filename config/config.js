// Load app configuration
var _ = require('underscore'),
path = require('path'),
rootPath = path.normalize(__dirname + '/..');

module.exports = {
	root: rootPath,
	port: 3000,
    db:"mongodb://localhost/meandemo-dev",
    app: {
        name: "Mean Demo"
    }
}
