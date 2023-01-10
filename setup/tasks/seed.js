const utils = require.main.require('./utils')
const description = `⏳ Seeding database with lightbreeze.sql...

`;

module.exports = {
  run(shouldCreateDb, isNitro, ui) {
    console.clear();
    ui.updateBottomBar(description);

    const config = utils.parseEnv();

    let task = new Promise(r => r());
    if (isNitro) {
      return utils.exec(`nitro db import lightbreeze.sql`);
    } else {
      if (shouldCreateDb) {
        task = utils.exec(`mysql "-u${config.DB_USER}" "--password=${config.DB_PASSWORD}" -e "CREATE DATABASE ${config.DB_DATABASE}";`)
      }
      return task.then(()=>{
        return utils.exec(`mysql "-u${config.DB_USER}" "--password=${config.DB_PASSWORD}" ${config.DB_DATABASE} < lightbreeze.sql`);
      })
    }
  }
}