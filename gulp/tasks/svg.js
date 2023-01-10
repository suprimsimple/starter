import svgstore from "svgstore"
import { readFileSync, writeFileSync } from "fs"
import glob from "glob"
const { sync } = glob
import config from "../config.js"
import { resolve, relative } from "path"
import { optimize } from "svgo"

const svgSprite = (cb) => {
	const sprite = svgstore()
	const files = sync(`${config.svg}/**/*.svg`)

	const svgoConfig = {
		plugins: [
			{
				name: "preset-default",
				params: {
					overrides: {
						convertColors: {
							currentColor: true,
						},
						removeViewBox: false,
					},
				},
				removeDimensions: true,
			},
		],
	}

	const optimizerTasks = []
	for (let file of files) {
		let result = optimize(readFileSync(resolve(file)), svgoConfig)
		optimizerTasks.push([result, file])
	}

	Promise.all(optimizerTasks).then((optimisedTaskResults) => {
		optimisedTaskResults.forEach(([optimised, file]) => {
			sprite.add(
				relative(config.svg, file).replace(/.svg$/i, ""),
				optimised.data
			)
		})

		writeFileSync(resolve(`${config.dist}/sprite.svg`), sprite)
		cb()
	})
}

export default svgSprite
