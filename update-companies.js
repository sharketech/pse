const PseClient = require('./pse.js');
const PSE = new PseClient();

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/companies.js', { flags: 'w' });
var log_stdout = process.stdout;

console.log = function (d) {
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};

(async () => {
    await PSE.getMarket({ sector: 'ALL' })
        .then((data) => {
            console.log(`// ${(new Date()).toISOString()}
data = {
    count: ${data.count},
    records: [`);

            data.records.forEach(i => {
                console.log(i);
                console.log(',');
            });

            console.log(`   ]
};

module.exports = data;`);
        });
})();