const express = require('express');
const app = express();
// CRUD :POST, GET, PUT, DELETE
app.get('/', (req,res) =>{
    res.status(500).send("Database not connecting");
  } );
// app.get('/products',(req,res) =>{
//    req.query = {
//        limit: 50,
//        q: something
//    }
//    res.send(req.query.q); //converts into an object
// });
app.get('/ab?cd' , (req,res) => {
    res.send("abcd");
})
app.get('/ab+cd' , (req,res) => {
   res.send("abcd");
})
app.get('/user/:id/books/:bookId', (req, res) => {
    console.log(req.query);
    req.send(res.param.id);
})
app.listen(5000);