const { CommandLineService } = require('../services/CommandLineService')
const commandLineService = CommandLineService();

const DeployController = () => {
    const handle = async (request, response) => {
        try {
            console.log('Installing')
            await commandLineService.execute('cd ~/dev/church/church-managment-bff && ./scripts/install.sh');
            console.log('Starting')
            await commandLineService.execute('cd ~/dev/church/church-managment-bff && ./scripts/start.sh');
        } catch (error) {
            console.log(error)
        }

        return response.status(200).json({ message: "sucesso" });
    }

    return { handle }
}

module.exports = { DeployController }