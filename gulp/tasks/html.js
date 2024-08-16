import panini from "panini";

export const html = () => {
    panini.refresh();
    return app.gulp.src(app.path.src.html, {base : app.path.srcPath})
        .pipe(panini({
            root:       app.path.srcPath,
            layouts:    `${app.path.srcPath}/layouts/`,
            partials:   `${app.path.srcPath}/partials/`,
            helpers:    `${app.path.srcPath}/helpers/`,
            data:       `${app.path.srcPath}/data/`
        }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());

    
}