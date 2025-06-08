const express = require('express')
const app = express()
const port = 3000
const db=require('./db');



const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})




//for testing purpose

const menuroute=require('./route/menuroute')

const personroutes=require('./route/routeexpress')

app.use('/person',personroutes)
app.use('/menu',menuroute)
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
