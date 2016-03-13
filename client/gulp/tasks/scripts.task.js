/* jshint node:true */
// gulp/tasks/build/scripts.js
'use strict';

// ----------------------------------
// available tasks:
//    'gulp build:js' : main js task
// ----------------------------------
// config:
//     config.task.build : task name
// ----------------------------------

var modPath = require('path');
var rootPath = require('app-root-path').path;

module.exports = function(gulp, plugins, path, config) {

    // copy js files task
    gulp.task(config.task.build + ':js',
        'Build and copy js files to prod folder', function() {
            var files = [
                modPath.join(rootPath, 'bower_components/aventadorjs/dist/aventador.js'),
                modPath.join(rootPath, 'bower_components/qwest/qwest.min.js'),
                modPath.join(rootPath, 'bower_components/riot/riot.js'),
                modPath.join(rootPath, 'src', 'js', 'app.js'),
            ];

        return gulp.src(files)
            .pipe(plugins.debug())
            .pipe(plugins.concat('app.js'))
            .pipe( gulp.dest(modPath.join(rootPath, 'public', 'javascripts/')) );
    });
};
