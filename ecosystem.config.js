module.exports = {
  apps: [{
    name: 'code-deploy-http-agent',
    script: 'src/server.js',
    watch: 'false',
    env: {
      NODE_ENV: "production",
    }
  }],
};
