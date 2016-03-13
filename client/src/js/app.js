/* jshint node:true */



(function (window, aventador) {
    "use strict";

    var myApp = aventador.module('myApp');

    myApp
        .service('CarsService', function () {
            return {
                getCars: getCars
            };

            function getCars(cb) {
                var result;

                qwest.get('http://localhost:1337/car', null, {
                        cache: true
                    }, null)
                    .then(function (xhr, response) {
                        cb(response);
                    })
                    .catch(function (e, xhr, response) {
                        console.log(response);
                    });

            }
        });

    window.myApp = myApp;
    //
    // var CarsService = myApp.getService('CarsService');
    // CarsService.getCars(function (v) {
    //     console.log(v);
    // });

})(window, aventador);
