const mysql = require("mysql");
const inquirer = require("inquirer");
const promise = require("bluebird");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "sunshine4",
  database: "Bamazon"
});

let products = [];

const query = promise.promisify(connection.query, { context: connection }); 

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  displayAllItems();
});

function displayAllItems(){
  grabAllProductsFromDB();
}


function askUser() {
  let requestedProduct = {};
  inquirer
    .prompt({
      name: "requestedProductId",
      type: "input",
      message: "What is the ID number of the item you want to purchase?"
      })     
  .then(function (answer) {
    requestedProduct.id = answer.requestedProductId;
    inquirer
    .prompt({
      name: "requestedProductQuantity",
      type: "input",
      message: "Specify the quantity for Item " + answer.requestedProductId + " :"
    })
    .then(function(answer){
      requestedProduct.quantity = answer.requestedProductQuantity;
      updateProductQuantity(requestedProduct);

    });
  });



}

function updateProductQuantity(requestedProduct){
  query("SELECT stock_quantity FROM products WHERE item_id = " + requestedProduct.id)
  .then(function(result) {
    if (result[0].stock_quantity >= requestedProduct.quantity) {
     let remainingQuantity = (result[0].stock_quantity - requestedProduct.quantity); 
      console.log(remainingQuantity);
      query(`UPDATE products SET stock_quantity = ${remainingQuantity} WHERE item_id = ${requestedProduct.id}`)
      .then(function(result) {
          console.log('Item quantity available and item was ordered'); 
      });
    } else {
        // Requested quantity not available 
        console.log('Item quantity not available'); 
    }

  });
}

function grabAllProductsFromDB() {
  console.log('Entered grabAllProductsFromDB'); 
  query("SELECT * FROM products")
    .then(function(results) {
      console.log('Inside THEN for grabAllProductsFromDB'); 
        for (var i = 0; i < results.length; i++) {
          products.push(results[i]);
          console.log(results[i].item_id + " | " + results[i].product_name + " | " + results[i].department_name + " | " + results[i].price + " | " + results[i].stock_quantity);
        }
      console.log("-----------------------------------");  
      askUser();

    })
    .catch(function(error) {
      console.log('ERROR: ' + error); 
    });
}