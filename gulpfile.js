var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

var config = {
    src: './src',
    dist: 'dist',
    build: 'build',
    test: 'test'
};
var pkg = require('./package.json');

gulp.task('browserify', function() {
    return browserify(config.src + '/main.js')
        .bundle()
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(source(pkg.name + '.js'))
        .pipe(gulp.dest(config.dist));
});