const express = require('express')
const cons = require('consolidate')
const app = express()
const path = require("path")

app.use(express.static('dist'));
app.engine('dust', cons.dust)
app.set('views', path.resolve(__dirname, './views'))
app.set('view engine', 'dust')

app.get('/*', (req, res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('Checkbook app listening on port 3000')
})
