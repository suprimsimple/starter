const utils = require.main.require('./utils')
const description = `⏳ Generating .env from .env.example...

`;
const fs = require('fs')


module.exports = {
  run(name, dbName, dbPassword, ui) {
    return new Promise(end => {
      console.clear();
      ui.updateBottomBar(description);

      fs.copyFileSync(".env.example", ".env");

      const config = utils.parseEnv();
      // If security key is "CHANGE_ME" then ask Craft to generate it
      let task = new Promise(r => r());
      let modifyExampleEnv = false;
      if (config.SECURITY_KEY === "CHANGE_ME") {
        task = utils.exec("./craft setup/security-key");
        modifyExampleEnv = true;
      }
      task.then(()=>{
        utils.replaceEnv("DB_DATABASE", dbName);
        utils.replaceEnv("DB_PASSWORD", dbPassword);
        utils.replaceEnv("DEFAULT_SITE_URL", `https://${name}.test`);

        if (modifyExampleEnv) {
          fs.copyFileSync(".env", ".env.example");
        }

        end();
      })
    })
  }
}