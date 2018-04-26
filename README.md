# bookstore
This repository gives you simple api in node js that connects to Dynamo DB

API Gateway URLs :

#---https://m6x606vg54.execute-api.us-east-1.amazonaws.com/BookStoreAPI/books<br>

#---https://m6x606vg54.execute-api.us-east-1.amazonaws.com/BookStoreAPI/books/ISB100 <br>

#---https://m6x606vg54.execute-api.us-east-1.amazonaws.com/BookStoreAPI/books/ISB1782


Initial Setup
1. Create a dynamodb table with name BookStore with bookid as primary key.
2. insert below two sample records inorder to run test cases and BookStoreClient.js file.
3.       {
        "author": "James Gosling",
        "bookid": "ISB1782",
        "bookname": "Java in Action",
        "description": "This book covers the basics of Java",
        "stock": 15
        },
        {
        "author": "Ryan Kronenburg",
        "bookid": "ISB100",
        "bookname": "AWS Fundamentals",
        "description": "This book covers the basics of AWS cloud.",
        "stock": 4
      }

4.  Move to BookStoreSkill\lambda\custom directory and run npm install , so that all the dependency gets updated for the project
5.  Create a lambda execution role that has access to dynamodb.
6.  deploy the lambda function.
7.  Run the test cases using the command npm test  which executes all the test cases for two operation.

This package has BookStoreClient.js which can be invoked direcly in Command line using below commands

#----
node BookStoreClient.js GET ISB100

#----
node BookStoreClient.js LIST

#-----


