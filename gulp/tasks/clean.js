// const del = require('delete');
// const { path } = require("../config");
// const fs = require('fs')

import del from "delete"
import path from "../config.js"
import fs from "fs"

const clean = (cb) => {
	del([path.dist], () => {
		fs.mkdir(path.dist, cb)
	})
}

export default clean
