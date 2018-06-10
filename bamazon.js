var sql = require("mysql");
var inquirer = require("inquirer");

var connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "fortnite123",
  port: 3306,
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("She's a tickin");
  start();
});

function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    console.log("Item ID" + " | " + "Product Name" + " | " + "Price" + " | " + "In Stock");
    console.log("---------------------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
  });

  pick();
}

function pick() {
  inquirer
  .prompt({
    name: "ItemID",
    type: "input",
    message: "What is the ID of the item you would like to purchase?",
    choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  })

  .then (function(answer){
    switch (answer.ItemID) {
      case "1":
      connection.query("SELECT * FROM products", function(err, res) {
          console.log(res[0].item_id + " | " + res[0].product_name + " | " + res[0].price + " | " + res[0].stock_quantity);
      })
      break;

      case "2":
      connection.query("SELECT * FROM products", function(err, res) {
          console.log(res[1].item_id + " | " + res[1].product_name + " | " + res[1].price + " | " + res[1].stock_quantity);
      })
      break;

      case "3":
      connection.query("SELECT * FROM products", function(err, res) {
          console.log(res[2].item_id + " | " + res[2].product_name + " | " + res[2].price + " | " + res[2].stock_quantity);
      })
      break;

      case "4":
      connection.query("SELECT * FROM products", function(err, res) {
          console.log(res[3].item_id + " | " + res[3].product_name + " | " + res[3].price + " | " + res[3].stock_quantity);
      })
      break;
    }
    quantity();
  })
}

function quantity() {
  inquirer
  .prompt({
    name: "quantity",
    type: "input",
    message: "How many would you like? Up to 5!",
    choices: ["1", "2", "3", "4", "5"]
  })
}