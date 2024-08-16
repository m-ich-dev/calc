import uglify from "gulp-uglify";
import plumber from "gulp-plumber";
import browsersync from "browser-sync"
import notify from "gulp-notify";
import newer from "gulp-newer";


export const plugins = {
    uglify : uglify,
    plumber : plumber,
    browsersync : browsersync,
    notify : notify,
    newer : newer,
  
}