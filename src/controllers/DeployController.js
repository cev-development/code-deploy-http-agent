const { CommandLineService } = require('../services/CommandLineService')
const commandLineService = CommandLineService();

const DeployController = () => {
    const handle = async (request, response) => {
        try {
            const teste = await commandLineService.execute('cd ~/dev/church/church-managment-bff && pwd');
            console.log(teste);
        } catch (error) {
            console.log(error)
        }

        return response.status(200).json({ message: "sucesso" });
    }

    return { handle }
}

module.exports = { DeployController }