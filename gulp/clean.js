import del from "del";

import Path from "./_const.js";

export default async function clean() {
	return del(Path.PAGE.build);
}
