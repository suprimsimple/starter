import md5 from "md5"
import glob from "glob"
const { sync } = glob
import config from "../config.js"
import { readFile, readFileSync, writeFile } from "fs"
import { resolve, relative } from "path"

const manifest = (cb) => {
	// Hash svg, css and js
	const manifestPath = `${config.dist}/manifest.json`
	const staticManifest = {}

	const icon = sync(`${config.dist}/sprite.svg`)
	// const cssFiles = glob.sync(`${config.path.dist}/**/*.css`)
	// const jsFiles = glob.sync(`${config.path.dist}/**/*.js`)
	const imgFiles = sync(`${config.dist}/images/**/*{.svg,png,jpg}`)

	readFile(manifestPath, (err, data) => {
		let existingManifestJson = JSON.parse(data)

		for (let f of [...icon, ...imgFiles]) {
			const content = readFileSync(resolve(f))
			const contentHash = md5(content)
			const assetPathFromPublic = `${relative(config.dist, f)}`
			staticManifest[assetPathFromPublic] = {
				file: `${assetPathFromPublic}?v=${contentHash}`,
			}
		}

		let finalManifest = Object.assign(existingManifestJson, staticManifest)

		writeFile(manifestPath, JSON.stringify(finalManifest), cb)
	})
}

export default manifest
