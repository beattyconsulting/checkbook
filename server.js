const express = require('express')
const app = express()
const path = require("path");

app.use(express.static('dist'));

app.get('/checkbook',(req,res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.listen(3000, () => {
    console.log('Checkbook app listening on port 3000')
})
