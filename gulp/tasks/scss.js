import autoprefixer from "gulp-autoprefixer";
import cssbeautify from "gulp-cssbeautify";
import removeComments from "gulp-strip-css-comments";
import rename from "gulp-rename";
import cssnano from "gulp-cssnano";
import webpcss from "gulp-webpcss";

import dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.css, {sourcemaps : true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"

            })))
            
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(cssbeautify())
        .pipe(webpcss({
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserlist: ["last 3 versions"],
            cascade: true
        }))
        .pipe(app.gulp.dest(app.path.build.css)) //не сжатая копия
        .pipe(removeComments())
        .pipe(cssnano({
            zindex: false,
            discardComments: {
            removeAll: true
            }
        }))
        .pipe(rename({
            extname: ".min.css"
        }))

        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}
