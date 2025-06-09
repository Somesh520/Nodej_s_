const express = require('express')
const app = express()
const port = 3000
const db=require('./db');

const logRequest=(req,res,next)=>{
  console.log('${ new Date().tolocalString()} Request made to : ${req.originalUrl}');
  next();
  
}

const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.get('/', logRequest, function(req, res) {
  res.send('Hello World!')
})





//for testing purposenode

const menuroute=require('./route/menuroute')

const personroutes=require('./route/routeexpress')

app.use('/person',personroutes)
app.use('/menu',menuroute)
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
