// TODO: Remove for appliation context
var templateVars = {
    site: {
        title: 'Mackun Web'
    }
};

import gulp from 'gulp';


gulp.task('copy-lib', () => {
    gulp.src(['src/**/*.css', 'src/**/*.jsx'])
        .pipe(gulp.dest('lib/'));
});

import ect from 'gulp-ect';
gulp.task('compile:ect', () => {
    gulp.src(['src/**/*.ect'])
        .pipe(ect({data: templateVars}))
        .pipe(gulp.dest('lib/'));
});

import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.js';
gulp.task('webpack', () => {
    gulp.src(webpackConfig.entry.jsx)
        .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./static'));
});

gulp.task('default', ['compile:ect', 'copy-lib']);