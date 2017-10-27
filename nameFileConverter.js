'use strict';

const fs = require('mz/fs');
const _ = require('lodash');

const database = {};

const makeIntoJSON = function (inputFile, outputFilename, year) {
    fs.readFile(inputFile, 'utf8')
        .then((contents) => {
        contents = contents.split('\r\n');
        contents = _.forEach(contents, function (item, index) {
            contents[index] = item.split(',');
        });
    fs.writeFile(outputFilename, `(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .service('yob${year}', yob${year});

    /** @ngInject */
    function yob${year}() {
        this.year = function () {
            let data = JSON.parse(\`${JSON.stringify(contents)}\`);
            data.pop();
            return data;
        }
    }
})();`);
    }).catch(err => console.error(err));
};

for (let year = 1880; year <= 2016; year++) {
    const inputfile = 'names/yob' + year + '.txt';
    const outputfile = 'src/app/data/bigList/' + year + '.js';
    makeIntoJSON(inputfile, outputfile, year);
}
