const handlers = {}

handlers.hello = (req, callback) => {
	const name = typeof req.queryStringObject.name === 'string' && req.queryStringObject.name.trim().length > 0 ? req.queryStringObject.name.trim() : false
	let greeting = "Hola mundo!"
	if (name) {
		greeting = `Hola ${name}`
	}
	const data = {
		greeting,
	}
	callback(200, data)
}

handlers.notFound = (req, callback) => {
	const data = {
		error: "Not found",
	}
	callback(404, data)
}

module.exports = handlers
