const dao = require('./dao.js');
const expect = require('expect');

var bookListresponse;
var bookIdResponse;
var bookId='ISB100';

it('Get Books Operation should list all books',(done)=>{
    dao.getBooks(function(err,data){
       bookListresponse = data;
       var count =  data.Items.length;
       expect(count).toNotBe(0).toBeA('number');
       done();
    })
});

it('Get Books Operation should expect bookid in Books',()=>{
    bookListresponse.Items.forEach(function(item) {
            expect(item.bookid).toExist();   
    })
});

it('Get Books Operation should expect authorName in Books',()=>{
    bookListresponse.Items.forEach(function(item) {
        expect(item.author).toExist();  
    })
});

it('Get Books Operation should expect BookName in Books',()=>{
    bookListresponse.Items.forEach(function(item) {
        expect(item.bookname).toExist();   
    })
});

it('Get Books Operation should Book stock not to be Zero',()=>{
    bookListresponse.Items.forEach(function(item) {
        expect(item.stock).toNotBe(0).toBeA('number');
    })
});

it('Get Books Operation should Book object has book id field',()=>{
    bookListresponse.Items.forEach(function(item) {
        expect(item).toInclude({bookid:item.bookid});
    })
});

it('Get Books Operation should alert when book count less than 5',()=>{
    bookListresponse.Items.forEach(function(item) {
        if(item.stock<5)
            expect(item.alert).toBe('Avalability of book '+item.bookid+' is Less then 5');
    })
});

it('Get BookById Operation should return one Book Object',(done)=>{
    dao.getBookById(bookId,function(err,data){
       bookIdResponse = data;
       var item = bookIdResponse.Item;
       expect(item).toExist();
       done();
    })
});

it('Get BookById Operation should Book object has book id field',()=>{
    expect(bookIdResponse.Item).toInclude({bookid:bookIdResponse.Item.bookid});
});

it('Get BookById Operation should alert when book count less than 5',()=>{
    expect(bookIdResponse.Item.alert).toBe('Avalability of book  '+bookId+' is Less then 5');
});

it('Get BookById Operation should expect BookName in Book',()=>{
        expect(bookIdResponse.Item.bookname).toExist();   
});

it('Get BookById Operation should expect author in Book',()=>{
    expect(bookIdResponse.Item.author).toExist();   
});

it('Get BookById Operation should expect description in Book',()=>{
    expect(bookIdResponse.Item.description).toExist();   
});