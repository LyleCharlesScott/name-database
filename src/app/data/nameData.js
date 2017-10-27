(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .service('nameData', nameData);

    /** @ngInject */
    function nameData(yob1880) {

        console.log(yob1880.year());

    }
})();
