import gulp from "gulp";
import squoosh from "gulp-squoosh";
import path from "path";
import rename from "gulp-rename";

import Path from "./_const.js";
import changed from "gulp-changed";

const SIZES = [
	{
		suffix: "@3x",
		scale: 1,
	},
	{
		suffix: "@2x",
		scale: 2 / 3,
	},
	{
		suffix: "",
		scale: 1 / 3,
	},
];

export default function processImages(done) {
	[Path.IMAGE.backgrounds, Path.IMAGE.pictures].map(function (imagePath) {
		const encodeOptions =
			imagePath === Path.IMAGE.pictures
				? {
					avif: {},
					webp: {
						quality: 80,
					},
				}
				: {};
		return SIZES.forEach(({ suffix, scale }) =>
			gulp
				.src(imagePath)
				.pipe(changed(Path.IMAGE.build))
				.pipe(
					squoosh(({ filePath, width }) => ({
						preprocessOptions: {
							resize: {
								width: width * scale,
							},
						},
						encodeOptions: {
							...encodeOptions,
							// wp2: {}
							...(path.extname(filePath) === ".png"
								? {
									oxipng: {},
								}
								: {
									mozjpeg: {},
								}),
						},
					}))
				)
				.pipe(
					rename({
						suffix,
					})
				)
				.pipe(gulp.dest(Path.IMAGE.build))
		);
	});

	done();
}
