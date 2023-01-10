const util = require('util');
const utils = require.main.require('./utils')
const description = `⏳ Set up templates based on the css choices...

`;
const fs = require('fs-extra');

module.exports = {
  run(cssType, ui) {
    return new Promise(end => {
      console.clear();
      ui.updateBottomBar(description);

      let src;
      if (cssType === "sass") {
        src = "templates-sass";
        // Delete tailwind.config.js
        if (fs.pathExistsSync("tailwind.config.js")) {
          fs.removeSync("tailwind.config.js");
        }
      } else if (cssType === "tailwindcss") {
        src = "templates-tailwind";
      }
      fs.copySync(src, "templates");
      [`templates-sass`, `templates-tailwind`].forEach(folder => {
        if (fs.pathExistsSync(folder)) {
          fs.removeSync(folder)
        }
      })
      end()
    })
  }
}