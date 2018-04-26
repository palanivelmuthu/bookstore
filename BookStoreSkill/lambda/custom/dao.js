var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});

// Book Schema for reference
var bookSchema = {
    "bookid": "",
    "bookname": "",
    "author": "",
    "description": "",
    "stock": 0
}

let getBooks = function (callback) {

    var getparams = {
        TableName: "BookStore"
    };
    docClient.scan(getparams, function (err,response) {
        if(!err){
            response.Items.forEach(function(item) {
                if(item.stock<5){
                    item.alert='Avalability of book '+item.bookid+' is Less then 5';
                }else{
                    item.alert="";
                }
            });
        }
        callback(err,response);
    });
}

let getBookById = function (bookid,callback) {

    var getparams = {
        TableName: "BookStore",
        Key: {
            bookid:bookid
        }
    };
    docClient.get(getparams, function (err, response) {
        if(!err){
            if(response.Item.stock<5){
                response.Item.alert='Avalability of book  '+response.Item.bookid+' is Less then 5';
            }else{
                response.Item.alert="";
            }
        }        
        callback(err,response);
    });
}

module.exports={
    getBookById,
    getBooks
}