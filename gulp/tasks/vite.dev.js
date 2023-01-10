import { createServer } from "vite"

const viteDev = () => {
	;(async () => {
		const server = await createServer()
		await server.listen()

		server.printUrls()
	})()
}

export default viteDev
