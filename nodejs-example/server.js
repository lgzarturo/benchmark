const http = require('http')
const url = require('url')
const querystring = require('querystring')
const { StringDecoder } = require('string_decoder')
const helpers = require('./helpers')
const config = require('./config')
const controllers = require('./controllers')

const lib = {}

lib.httpServer = http.createServer(function (req, res) {
	lib.unifiedServer(req, res)
})

lib.unifiedServer = (req, res) => {
	const parseUrl = url.parse(req.url)
	const pathName = parseUrl.pathname
	const trimmedPath = pathName.replace(/^\/+|\/+$/g, '')
	const queryStringObject = querystring.parse(parseUrl.query)
	const method = req.method.toLowerCase()
	const { headers } = req
	const decoder = new StringDecoder('utf-8')
	const lang = headers['accept-language'] !== undefined ? headers['accept-language'] : 'es-mx'
	let buffer = ''

	req.on('data', (data) => {
		buffer += decoder.write(data)
	})

	req.on('end', () => {
		buffer += decoder.end()

		let chooseHandler = typeof lib.router[trimmedPath] !== 'undefined' ? lib.router[trimmedPath] : controllers.notFound

		const data = {
			trimmedPath: trimmedPath,
			queryStringObject: queryStringObject,
			method: method,
			headers: headers,
			lang: lang,
			payload: helpers.parseJsonToObject(buffer),
		}

		chooseHandler(data, (statusCode, payload, contentType) => {
			const type = typeof contentType === 'string' ? contentType : 'json'
			let responseStatusCode = typeof statusCode === 'number' ? statusCode : 200
			let responsePayload = ''
			let responseContentType = 'text/plain'
			const debugColor = statusCode === 200 ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m'

			if (type === 'json') {
				responseContentType = 'application/json'
				responsePayload = JSON.stringify(typeof payload === 'object' ? payload : {})
			} else {
				responseStatusCode = 204
			}

			res.setHeader('Content-Type', responseContentType)
			res.writeHead(responseStatusCode)
			res.end(responsePayload)

			console.log(debugColor, new Date(), trimmedPath, method, statusCode)
		})
	})
}

lib.router = {
	'hello': controllers.hello,
}

lib.init = () => {
	lib.httpServer.listen(config.httpPort, function () {
		console.log('\x1b[36m%s\x1b[0m', `The server HTTP is listening on port ${config.httpPort} in [${config.envName}] mode`)
	})
}

module.exports = lib
