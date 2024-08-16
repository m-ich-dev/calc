import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}   

import { serve } from "./gulp/tasks/serve.js"
import { clean } from "./gulp/tasks/clean.js";
import { scss } from "./gulp/tasks/scss.js";
import { html } from "./gulp/tasks/html.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js"
import { fonts } from "./gulp/tasks/fonts.js";

function watchFiles() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.css, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.fonts, fonts);
}

const build = gulp.parallel(html,scss, js, images, fonts);
const watch = gulp.series(clean, build, gulp.parallel(watchFiles, serve));


gulp.task('default', watch);