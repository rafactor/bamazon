// var inquirer = require('inquirer');
var connection = require('./connection');
var promptToSale = require('./promptStore')

var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
})

var displayProducts = require('./displayProducts');

const runCustomer = async () => {
    displayProducts();
    await delay(2);
    promptToSale();
    await delay(2)
    

    return Promise.resolve();
}

runCustomer().then(()=>{
    displayProducts()
    connection.end()});
    

    // console.log('here')
    // .then(console.log('here'))


// connection.connect(function (err) {
//     if (err) {
//         throw err
//     };
//     console.log('Server connected')
//     displayProducts()
    
//     // connection.end()
//     console.log('end connection')
// })


