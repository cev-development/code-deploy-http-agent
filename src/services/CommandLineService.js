const { exec } = require("child_process");
const shell = require('shelljs');

const CommandLineService = () => {
    const execute = async (command) => {
        return new Promise((resolve, reject) => {
            shell.exec(command, (code, stdout, stderr) => {
                if (stderr) reject(stderr)

                resolve(code)
            });
        })
    }

    return { execute }
}

module.exports = { CommandLineService }