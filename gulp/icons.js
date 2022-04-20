import gulp from "gulp";
import svgstore from "gulp-svgstore";

import Path from "./_const.js";
import { readdirSync } from "fs";

export default function icons(done) {
	const folders = readdirSync("source/icons");

	folders.forEach((folder) =>
		gulp
			.src(`source/icons/${folder}/*.svg`)
			.pipe(
				svgstore({
					inlineSvg: true,
				})
			)
			.pipe(gulp.dest(Path.ICON.build))
	);

	done();
}
