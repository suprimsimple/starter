import { build } from "vite"

const viteBuild = (cb) => {
	;(async () => {
		await build()
		cb()
	})()
}

export default viteBuild
