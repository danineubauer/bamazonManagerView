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
    allowInquirer(); 
})

//build inquirer: 

const allowInquirer = function() { 
    inquirer
        .prompt ([
            {
                type: 'list', 
                message: 'Which menu option would you like to choose?',
                choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
                name: 'menuChoice'
            }
        ])
        .then
}
