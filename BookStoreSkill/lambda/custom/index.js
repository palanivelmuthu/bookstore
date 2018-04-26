'use strict';
const dao = require('./dao.js');

exports.handler = (event, context, callback) => {

     if(event.httpMethod=="GET" && event.path=='/books'){

        dao.getBooks(function(err, data){

            if (err) {
                callback(err,{body:JSON.stringify(err)});

            } else {
                data.Items.forEach(function(item) {
                });
                callback(err,{body:JSON.stringify(data)});
            }
        });

    }else if(event.httpMethod=="GET" && event.pathParameters.bookid){

        dao.getBookById(event.pathParameters.bookid, function(err, data){

            if (err) {
                callback(err,{body:JSON.stringify(err)});

            } else {
                if(data.Item){
                    callback(err,{body:JSON.stringify(data)});
                }else{
                    callback(err,{body:JSON.stringify({message:'No Books Found'})});
                }
            }
        });
    }
    
};