
// Invoke this client using the command Line as below
// node BookStoreClient.js GET ISB100
// node BookStoreClient.js LIST


const dao = require('./dao.js');

var operation = process.argv[2];
if(operation === "LIST"){
    dao.getBooks(function(err, data){

        if (err) {
            console.log("Error Occured During Get Books Operation : " + JSON.stringify(err, ['message'], 2));
        } else {
            data.Items.forEach(function(item) {
                if(item.stock<5){
                    item.alert="Avalability of this book is Less than 5";
                }else{
                    item.alert="";
                }
                console.log("Book Id : ", item.bookid + ", Book Name : " + item.bookname+", Count :"+item.stock + " ,Note :"+item.alert);
            });
        }

    });
}
console.log("----------------------------------------------------------------------------");

if(operation === "GET"){
    
    if(process.argv[3]){

        dao.getBookById(process.argv[3], function(err, data){

            if (err) {
                console.log("Error Occured During Get Book Operation : " + JSON.stringify(err, ['message'], 2));
            } else {
                if(data.Item.stock<5){
                    data.Item.alert="Avalability of this book is Less then 5";
                }else{
                    data.Item.alert="";
                }
                //console.log("Book item :",JSON.stringify(data.Item, ['author','description','alert'], 2) );
                console.log("Book author : ", data.Item.author + ", Book Description : " + data.Item.description);
            }
        });
    } else{
        console.log("Please enter the Book number after GET")
    }
}