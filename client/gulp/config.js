/* jshint node:true */
// gulp/config.js
'use strict';

// require gulp-util & paths
var gutil = require('gulp-util');
var path = require('./paths.js');

// project local url
var url = 'gulp.dev';

// define options
module.exports = {
    // tasks names
    task: {
        scripts: 'js',
        build: 'build'
    },

    // error handler
    error: function (error) {
        // output an error message
        gutil.log(
            gutil.colors.red(
                '\n\------------------------------\n\Error in plugin (' +
                gutil.colors.green(error.plugin) + '):\n\ ' + gutil
                .colors.blue(error.message) +
                '------------------------------'
            )
        );
        // emit the end event, to properly end the task
        this.emit('end');
    }
};
