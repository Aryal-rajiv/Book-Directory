const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/' (req, res) => {
    res.send(('Hello Wordl'));
});

const { MongoClient, ServerAPiVersion, ObjectID} =
require('mongodb');
cost uri = "mongodb+srv: //<projectname>:
<password>@cluster0>jsccyr4.mongodb.net/?
    retryWrites=true&w=majority&appName=cluster0";

const cliernt = new MongoClient(uri, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict:true,
        deprecationErrors: true,
    }
});

//Crud operation with Express

// post book data
app.post("/upload_book", aync (req, res) => {
const data = req.body;
const result = await bookCollections.insertOne(data);
res.send(result);

});

//get all books data
app.get("/all_books", aysnc (req, res) => {
const books = bookCollections.find();
const result = await books.toArray();
res.send(result);
});

//update book data
app.patch("/books?:id", async (req, res) =>{
const id = req.params.id;
const updateBookData = req.body;

try{
    
}


});
