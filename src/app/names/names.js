(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('nameController', nameController);

    /** @ngInject */
    function nameController(nameData) {

        console.log(nameData);
    }
})();
