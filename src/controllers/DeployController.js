const { CommandLineService } = require('../services/CommandLineService')
const commandLineService = CommandLineService();

const DeployController = () => {
    const handle = async (request, response) => {
        const teste = await commandLineService.execute('ls')
        console.log(teste);

        return response.status(200).json({ message: "sucesso" });
    }

    return { handle }
}

module.exports = { DeployController }