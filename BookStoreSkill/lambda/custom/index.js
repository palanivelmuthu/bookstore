'use strict';
const dao = require('./dao.js');

exports.handler = (event, context, callback) => {

    //console.log("Event Content------->",event);
    //var testid = event.queryStringParameters.bookid;

    //console.log("Event Content------->",event.pathParameters.bookid);

    if(event.httpMethod=="GET" && event.path=='/books'){

        dao.getBooks(function(err, data){

            if (err) {
                console.log("Error Occured During Get Books Operation : " + JSON.stringify(err, ['message'], 2));
                callback(err,{body:JSON.stringify(err)});

            } else {
                data.Items.forEach(function(item) {
                    console.log("Book Id : ", item.bookid + ", Book Name : " + item.bookname+", Count :"+item.stock + " ,Note :"+item.alert);
                });
                callback(err,{body:JSON.stringify(data)});
            }
        });

    }else if(event.httpMethod=="GET" && event.pathParameters.bookid){

        dao.getBookById(event.pathParameters.bookid, function(err, data){

            if (err) {
                console.log("Error Occured During Get Book Operation : " + JSON.stringify(err, ['message'], 2));
                callback(err,{body:JSON.stringify(err)});

            } else {
                callback(err,{body:JSON.stringify(data)});
                console.log("Book author : ", data.Item.author + ", Book Description : " + data.Item.description);
            }
        });
    }
    
};