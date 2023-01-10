import gulp from "gulp"
import path from "./gulp/config.js"
import htmlmin from "gulp-htmlmin"
import gulpMinifyInline from "gulp-minify-inline"
import viteDevTask from "./gulp/tasks/vite.dev.js"
import viteBuildTask from "./gulp/tasks/vite.build.js"
import cleanTask from "./gulp/tasks/clean.js"
import copyTask from "./gulp/tasks/copy.js"
import imageTask from "./gulp/tasks/image.js"
import svgTask from "./gulp/tasks/svg.js"
import manifestTask from "./gulp/tasks/manifest.js"
import setNodeEnv from "./gulp/tasks/nodeEnv.js"
export const dev =  gulp.series(
		setNodeEnv("development"),
		cleanTask,
		gulp.parallel(viteDevTask, function watchAll() {
			gulp.watch(
				`${path.static}/**/*`,
				{
					ignoreInitial: false,
				},
				copyTask
			)
			gulp.watch(
				`${path.image}/**/*`,
				{
					ignoreInitial: false,
				},
				imageTask
			)
			gulp.watch(
				`${path.svg}/**/*`,
				{
					ignoreInitial: false,
				},
				svgTask
			)
		})
	);


	const htmlTask = () => {
		return gulp.src(`${path.public}/**/*.html`)
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest(`${path.public}`))
	}

	const minifyhtmlLine = () => {
		return gulp.src(`${path.public}/**/*.html`)
		.pipe(gulpMinifyInline())
		.pipe(gulp.dest(`${path.public}`))
	}




const build = gulp.series(
	setNodeEnv("production"),
	cleanTask,
	gulp.parallel(copyTask, svgTask, imageTask, viteBuildTask),
	manifestTask,
	htmlTask,
	minifyhtmlLine
)

export { build as build }

export default build
