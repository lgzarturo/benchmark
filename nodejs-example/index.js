const server = require('./server')
const app = {}

app.init = function () {
	server.init()
}

app.init()

module.exports = app
