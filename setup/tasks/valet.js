const util = require('util');
const utils = require.main.require('./utils')
const description = `⏳ Set up secure valet site now (You may be asked to provide your system password by Valet)...

`;

module.exports = {
  run(name, ui) {
    console.clear();
    ui.updateBottomBar(description);
    return utils.exec(`cd public && valet link ${name} && valet secure ${name}`);
  }
}