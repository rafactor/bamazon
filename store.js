var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazonDB"
});


connection.connect(function(err) {
  if (err) throw err;
    console.log("connected as id " + connection.threadId);
  afterConnection();
});

var query = 'SELECT * FROM products'

function afterConnection() {
    connection.query(query, function(err, res) {

    if (err) throw err;
    console.log(res);
    connection.end();
  });
}