/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3003;
const app = express();

app.use(compression())
app.use(express.static('dist'))

// app.get('/users', function(req, res){
//   res.json([
//     {
//       "id": 1,
//       "firstName": "Sajjad",
//       "lastName": "Abuu",
//       "email": "sajjad@gmail.com"
//     }
//   ])
// })

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+ port);
  }
});
