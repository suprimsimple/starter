const fs = require('fs')
const { exec } = require('child_process');
const dotenv =  require('dotenv')

const isRoot = () => {
  return fs.existsSync("craft")
}

const isCssTypeDecided = () => {
  return !(fs.existsSync("templates-sass") && fs.existsSync("templates-tailwind"))
}

const isEnvPresented = () => {
  return fs.existsSync(".env")
}

const parseEnv = () => {
  const content = fs.readFileSync(".env", {encoding:'utf-8'});
  const config = dotenv.parse(content);
  return config;
}

const replaceEnv = (key, value) => {
  const content = fs.readFileSync(".env", {encoding:'utf-8'});
  const regex = new RegExp(`${key}=.*`);
  const newContent = content.replace(regex, `${key}="${value}"`);
  fs.writeFileSync(".env", newContent);
}

const executeCommand = (command) => {
  return new Promise(resolve => {
    const execution = exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      resolve();
    });
    process.stdin.pipe(execution.stdin);
    execution.stdout.pipe(process.stdout);
    execution.stderr.pipe(process.stderr);
  })
}

const isNitroAvailable = () => {
  return fs.existsSync(`/usr/local/bin/nitro`)
}

const utils = {
  isRoot,
  isCssTypeDecided,
  isEnvPresented,
  exec:executeCommand,
  parseEnv,
  replaceEnv,
  isNitroAvailable
}

module.exports = utils
