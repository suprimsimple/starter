const setNodeEnv = (nodeEnv) => {
	return function setNodeEnv(cb) {
		process.env.NODE_ENV = nodeEnv || "development"
		cb()
	}
}

export default setNodeEnv
