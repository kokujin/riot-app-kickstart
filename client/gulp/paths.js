/* jshint node:true */
// gulp/paths.js
'use strict';

// base paths
var src = './source/';
var dist = './build/';
var dev = 'dev/';
var prod = 'prod/';
var assets = 'assets/';

// taks paths
module.exports = {
    to: {
        // dest folders
        dist: {
            dev: dist + dev,
            prod: dist + prod,
            main: dist
        },
        dev: dev,
        prod: prod,

        // js files
        js: {
            src: {
                main: src + 'js/main.js',
                copy: src + 'js/**/*.js'
            },
            vendor: src + 'js/vendor/',
            dist: {
                dev: dist + dev + assets + 'js',
                prod: dist + prod + assets + 'js'
            }
        },

    }
};
