const fastify = require('fastify')({
    logger: true,
})

const productRoutes = require('./routes/products.routes')
const swagger = require('./utils/swagger')

require('./utils/db')

fastify.register(require('fastify-swagger'), swagger.option)

fastify.get('/', (request, reply) => {
    reply.send({ Hello: "World" })
})

productRoutes.forEach((route) => {
    fastify.route(route);
})





const start = async () => {
    await fastify.listen(3000)
    fastify.log.info(`Server listening un ${fastify.server.address().port}`)
} 

start();