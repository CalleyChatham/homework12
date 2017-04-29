//the connection to the file that contains the server info
var connection = require("./config.js");

// require the npm require package
var inquirer = require("inquirer");

//ask the user for the ID of the product they would like to buy.
var runSearch = function() {
    inquirer.prompt({
        name: "idPlease",
        type: "list",
        message: "What is the item id of the product you'd like to buy?"
        choices: ["item 001", "item 002", "item 003", "item 004", "item 005", "item 006", "item 007", "item 008", "item 009", "item 010"]
    }).then(function(answer) {
        var query ="SELECT item_id FROM products WHERE ?";
        connection.query(query, {idPlease: answer.idPlease }, function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log("item requested: + res[i].item_id");
            }
            runSearch();
        });
    });
};

//ask how many units of the product they would like to buy

