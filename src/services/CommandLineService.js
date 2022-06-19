const { exec } = require("child_process");

const CommandLineService = () => {
    const execute = async (command) => {
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                console.log(error, stderr)
                if (error) reject(error.message)
                if (stderr) reject(stderr.message)

                resolve(stdout)
            });
        })
    }

    return { execute }
}

module.exports = { CommandLineService }