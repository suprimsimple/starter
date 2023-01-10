import gulp from "gulp"
import path from "../config.js"

const copy = () => {
	return gulp.src(`${path.static}/**/*`).pipe(gulp.dest(path.dist))
}
export default copy
