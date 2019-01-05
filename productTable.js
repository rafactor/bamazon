const {table} = require('table');

var productTable = function (data){
let config

config = {
    columns: {
        0: {
            alignment: 'center',
            minWidth: 2,
            width: 2
        },
        1: {
            alignment: 'left',
            minWidth: 30,
            width: 40
        },
        2: {
            alignment: 'left',
            minWidth: 15,
            width: 15
        },
        3: {
            alignment: 'right',
            minWidth: 10,
            width: 10
        }
    }
};

output = table(data, config );

console.log(output);
}

module.exports = productTable;