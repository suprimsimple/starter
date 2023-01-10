const util = require('util');
const utils = require.main.require('./utils')
const description = `⏳ Set up Nitro site now...

`;

module.exports = {
  run(ui) {
    console.clear();
    ui.updateBottomBar(description);
    return utils.exec(`nitro add`);
  }
}