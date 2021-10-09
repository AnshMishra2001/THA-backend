const express = require('express');
const app = express();
// CRUD :POST, GET, PUT, DELETE
const checkAdmin = (req,res,next) => {
  console.log("OLA ANDREA, VIVA MEXICO")
  if(req.query.auth === 'abccd') next();
  else res.status(200).send("Only admin access permitted")
};
const sendRes = (req,res) => {
    res.status(200)
    res.json(req.query)
  };
 
 // app.use(checkAdmin);
 /*
 app.get('/', (req,res) =>{
     res.status(200).send("Database not connecting");
   });
*/
app.post('/' , (req,res) => {
  console.log('req-->body = ' , req.body);
  res.json( { text: req.body })
});
 app.get('/products',(req,res) =>{
 res.send(req.query.q); //converts into an object
 })

 app.get('/user/:userId/books/:bookId', (req,res) =>{
    console.log(req.query);
    res.send(req.params.userId);
});
// app.get('/ab?cd' , (req,res) => {
//     res.send("abcd");
// })
// app.get('/ab+cd' , (req,res) => {
//    res.send("abcd");
// })
// app.get('/user/:id/books/:bookId', (req, res) => {
//     console.log(req.query);
//     req.send(res.param.id);
// })
app.listen(5000);