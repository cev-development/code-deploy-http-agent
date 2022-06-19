const { Router } = require('express');

const { deployRoutes } = require('./deploy.routes')

const routes = Router();

routes.use(deployRoutes);

module.exports = { routes }