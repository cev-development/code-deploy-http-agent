const { CommandLineService } = require('../services/CommandLineService')
const commandLineService = CommandLineService();

const DeployController = () => {
    const install = async (request, response) => {
        try {
            console.log('---------- Installing ------');
            console.log(await commandLineService.execute('cd ~/dev/church/church-managment-bff && git pull && yarn install --production=false && yarn build'));
        } catch (error) {
            console.log(error)
        }

        return response.status(200).json({ message: "sucesso, installed" });
    }

    const start = async (request, response) => {
        try {
            console.log('Starting')
            await commandLineService.execute('cd ~/dev/church/church-managment-bff && ./scripts/start.sh');
        } catch (error) {
            console.log(error)
        }

        return response.status(200).json({ message: "sucesso, started" });
    }


    return { install, start }
}

module.exports = { DeployController }