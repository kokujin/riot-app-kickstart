/* jshint node:true */
/*
 * Riot App Kickstarter
 *
 * v1.0.0
 */

// gulpfile.js
'use strict';

// ----------------------------------
// available tasks:
//    'gulp'
//    'gulp clean'
//          clean:cache - clean:prod
//    'gulp build'
//          build:fonts - build:css - build:js - build:images - build:html
// ----------------------------------
// plugins:
//     gulp, run-sequence, gulp-util, gulp-plumber
//     gulp-load-plugins, gulp-load-subtasks, gulp-help
//     gulp-nunjucks-render, gulp-cssbeautify
//     gulp-sass, gulp-sourcemaps, browser-sync
//     gulp-prettify, gulp-newer, main-bower-files
//     gulp-flatten, del, gulp-inject, gulp-cached
//     gulp-autoprefixer, sassdoc, gulp-minify-css
//     gulp-rename, lazypipe, gulp-concat, gulp-uncss
//     gulp-strip-css-comments, gulp-filter, gulp-changed
//     browserify, vinyl-source-stream, vinyl-buffer
//     gulp-uglify, watchify, lodash.assign, gulp-imagemin
//     imagemin-pngquant, gulp-favicons, gulp-replace
// ----------------------------------

var gulp = require('gulp-help')(require('gulp'));
var path = require('./gulp/paths.js');
var config = require('./gulp/config.js');
var sequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();


// require all tasks : gulp-load-subtasks
plugins.loadSubtasks('./gulp/tasks/**/*.js', plugins, path, config);

// Build task
// gulp.task(config.task.build, 'main build', function(cb) {
//     sequence(
//     	config.task.build + ':css',
//     	config.task.build + ':js',
//         cb
//     );
// });
