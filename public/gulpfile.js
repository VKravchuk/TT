var gulp = require('gulp'),
    linker = require('gulp-linker'),
    debug = require('gulp-debug');


const INDEX_HTML_PATH = 'index.html';
const APP_ROOT = '';

const APP_JS_FILES = [
    "bower_components/jquery/dist/jquery.min.js",
    "bower_components/angular/angular.min.js",
    "bower_components/angular-ui-router/release/angular-ui-router.min.js",
    "bower_components/angular-bootstrap/ui-bootstrap.min.js",
    "app/app.js",
    "app/app_routes.js",
    "app/MainCtrl.js",
    "app/components/**/*.js",
    "app/shared/**/*.js"
];

const CSS_APP_FILES = [
    "bower_components/bootstrap/dist/css/bootstrap.css"
];



gulp.task('insert', function () {
    return gulp.src(INDEX_HTML_PATH)
        .pipe(debug())
        // Link the JavaScript
        .pipe(linker({
            scripts: APP_JS_FILES,
            startTag: '<!--js-->',
            endTag: '<!--js end-->',
            fileTmpl: '<script src="%s"></script>',
            appRoot: APP_ROOT
        }))

        .pipe(linker({
            scripts: CSS_APP_FILES,
            startTag: '<!--css-->',
            endTag: '<!--css end-->',
            fileTmpl: '<link rel="stylesheet" href="%s" type="text/css" />',
            appRoot: APP_ROOT
        }))

        // Write modified files to www/
        .pipe(gulp.dest(APP_ROOT));
});