const Gulp = require("gulp");
const imageMin = require("gulp-imagemin");
const htmlMin = require("gulp-htmlmin");
const Concat = require("gulp-concat");

// start gulp
Gulp.task("default", () => {
    return console.log("Gulp is open");
});

// copy HTML files to the dist folder
Gulp.task("copyHTML", () => {
    Gulp.src("assets/*.html").pipe(Gulp.dest("dist"));
});
// minify HTML files
Gulp.task("minifyHTML", () => {
    return Gulp.src("assets/*.html")
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(Gulp.dest("dist"));
});

// Minimize the size of the images
Gulp.task("imagemin", () => {
    Gulp.src("images/*").pipe(imageMin()).pipe(Gulp.dest("dist/images"));
});

// concatinate js files
Gulp.task("scripts", () => {
    return Gulp.src("./js/*.js").pipe(Concat("all.js")).pipe(Gulp.dest("./dist/js"));
});
