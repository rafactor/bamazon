var connection = require('./connection');
var promptToSale = require('./promptStore')

var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
})

var displayProducts = require('./displayProducts');

console.log('\n\n **************************      WELCOME TO BAMAZON SALES SYSTEM      ************************** \n\n')

const runCustomer = async () => {
    displayProducts();
    await delay(2);
    promptToSale();
    await delay(2)
    
    // return Promise.resolve();
}

connection.connect(function(){
    runCustomer()
})




