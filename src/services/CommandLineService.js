const { exec } = require("child_process");

const CommandLineService = () => {
    const execute = async (command) => {
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) reject(error.message)
                if (stderr) reject(stderr)

                resolve(stdout)
            });
        })
    }

    return { execute }
}

module.exports = { CommandLineService }