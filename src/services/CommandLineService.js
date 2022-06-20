const { exec } = require("child_process");
const shell = require('shelljs');

const CommandLineService = () => {
    const execute = async (command) => {
        return new Promise((resolve, reject) => {
            shell.exec(command, (code, stdout, stderr) => {
                console.log('Exit code:', code);
                console.log('Program output:', stdout);
                console.log('Program stderr:', stderr);
                resolve('true')
            });
        })
    }

    return { execute }
}

module.exports = { CommandLineService }