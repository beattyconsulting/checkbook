const path = require('path')

// this converts any import matching the package.json "transform" pattern to the name of the imported file
module.exports = {
	process(src, filename, config, options) {
		return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
	}
}
