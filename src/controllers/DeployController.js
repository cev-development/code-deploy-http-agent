const { CommandLineService } = require('../services/CommandLineService')
const commandLineService = CommandLineService();

const DeployController = () => {
    const install = async (request, response) => {
        try {
            console.log('---------- Installing ------')
            console.log('----- Updating Repository ')
            console.log(await commandLineService.execute('cd ~/dev/church/church-managment-bff/ && git pull'));
            console.log('----- Installing Dependencies ')
            console.log(await commandLineService.execute("cd ~/dev/church/church-managment-bff/ && yarn"));
            console.log('----- Building ')
            console.log(await commandLineService.execute("cd ~/dev/church/church-managment-bff/ && babel src --extensions \".js,.ts\" --out-dir dist --copy-files"));
            // console.log('----- Building project ')
            // console.log(await commandLineService.execute("cd ~/dev/church/church-managment-bff/ && npx babel-cli src --extensions \".js,.ts\" --out-dir dist --copy-files"));
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