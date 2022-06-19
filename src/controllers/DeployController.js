const { CommandLineService } = require('../services/CommandLineService')
const commandLineService = CommandLineService();

const DeployController = () => {
    const handle = async (request, response) => {
        await commandLineService.execute('cd ~/dev/church/church-managment-bff && ./scripts/install.sh');

        return response.status(200).json({ message: "sucesso" });
    }

    return { handle }
}

module.exports = { DeployController }