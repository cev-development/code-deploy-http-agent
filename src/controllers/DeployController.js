const { CommandLineService } = require('../services/CommandLineService')
const commandLineService = CommandLineService();

const DeployController = () => {
    const install = async (request, response) => {
        console.log('---------- Installing ----------');
        console.log(await commandLineService.execute(process.env.SCRIPT_INSTALL));

        return response.status(200).json({ message: "success" });
    }

    const start = async (request, response) => {
        console.log('---------- Starting ----------');
        await commandLineService.execute(process.env.SCRIPT_START);

        return response.status(200).json({ message: "success" });
    }

    return { install, start }
}

module.exports = { DeployController }