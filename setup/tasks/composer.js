const utils = require.main.require('./utils')
const description = `⏳ Install php dependencies...

`;

module.exports = {
  run(ui) {
    console.clear();
    ui.updateBottomBar(description);
    return utils.exec(`composer i`);
  }
}