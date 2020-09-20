const qs = require('qs')
const fastify = require('fastify')({logger: true, querystringParser: str => qs.parse(str)})
const port = 3000

fastify.get('/hello/:name', async(req, res) => {
	let greeting = 'Hello world!'
	if (req.params.name) {
		greeting = `Hello ${req.params.name}`
	}
	return { greeting, }
})

const start = async() => {
	try {
		await fastify.listen(port)
		fastify.log.info(`Listening ${fastify.server.address().port}`)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

start()
