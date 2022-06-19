const { Router } = require('express');

const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated');

const { DeployController } = require('../controllers/DeployController')

const deployController = DeployController();

const deployRoutes = Router();

deployRoutes.post(
    '/deploy',
    ensureAuthenticated,
    deployController.handle
);

module.exports = { deployRoutes }