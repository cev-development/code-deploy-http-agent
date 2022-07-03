const { CommandLineService } = require('../services/CommandLineService')
const projects = require('../../projects.json')

const commandLineService = CommandLineService();

const DeployController = () => {
    const install = async (request, response) => {
        const { project } = request.params;
        if (!projects[project]) return response.status(404).json({ message: "Project Not Found" });
        const { install, path } = projects[project].scripts;

        console.log('---------- Installing ----------');
        console.log(await commandLineService.execute(`chmod -R 777 ${path}`));
        console.log(await commandLineService.execute(install));

        return response.status(200).json({ message: "success" });
    }

    const start = async (request, response) => {
        const { project } = request.params;
        if (!projects[project]) return response.status(404).json({ message: "Project Not Found" });
        const { install, path } = projects[project].scripts;

        console.log('---------- Starting ----------');
        console.log(await commandLineService.execute(`chmod -R 777 ${path}`));
        await commandLineService.execute(start);

        return response.status(200).json({ message: "success" });
    }

    return { install, start }
}

module.exports = { DeployController }