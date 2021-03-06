const { Router } = require('express');

const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated');
const { DeployController } = require('../controllers/DeployController')

const deployController = DeployController();

const deployRoutes = Router();

deployRoutes.post(
    '/project/:project/deploy/install',
    ensureAuthenticated,
    deployController.install
);

deployRoutes.post(
    '/project/:project/deploy/start',
    ensureAuthenticated,
    deployController.start
);

module.exports = { deployRoutes }
