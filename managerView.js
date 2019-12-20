//requirements:
var mysql = require('mysql'); 
var inquirer = require('inquirer'); 

//connect to mysql: 
const connection = mysql.createConnection({
    host: 'localhost', 
    port: '3306',
    user: 'root', 
    password: 'root', 
    database: 'bamazonManagerView'
})

connection.connect(function(err) { 
    if(err) throw err;
    console.log('connection as id ' + connection.threadId); 
    // connection.query('SELECT * FROM products')....
    start(); 
})

//build inquirer: 

function start() { 
    inquirer
        .prompt ([
            {
                type: 'list', 
                message: 'Which menu option would you like to choose?',
                choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
                name: 'menuChoice'
            }
        ])
        .then(function(answer) { 
            if (answer.menuChoice === 'View Products for Sale') {
                showProducts(); 
            } else if (answer.menuChoice === 'View Low Inventory') {
                showLowInventory();
            } else if (answer.menuChoice === 'Add to Inventory') { 
                addInventory(); 
            } else if (answer.menuChoice === 'Add New Product') {
                addNewProduct(); 
            }
        })
}

const showProducts() {
    //show all products: 
}

const showLowInventory() { 
    //show all items with a lower stock quantity than 5:
}

const addInventory() { 
    //add more of any item already in store:
}

const addNewProduct() { 
    //add a new product:
}
