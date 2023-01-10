import gulp from "gulp"
import image from "gulp-image"
import path from "../config.js"

const imageProcessing = () => {
	return gulp
		.src(`${path.image}/**/*`)
		.pipe(
			image({
				optipng: ["-i 1", "-strip all", "-fix", "-o7", "-force"],
				pngquant: ["--speed=1", "--force", 256],
				zopflipng: ["-y", "--lossy_8bit", "--lossy_transparent"],
				jpegRecompress: [
					"--strip",
					"--quality",
					"medium",
					"--min",
					40,
					"--max",
					80,
				],
				mozjpeg: ["-optimize", "-progressive"],
				gifsicle: ["--optimize"],
				svgo: ["cleanupIDs", "removeTitle"],
			})
		)
		.pipe(gulp.dest(`${path.dist}/images`))
}

export default imageProcessing
