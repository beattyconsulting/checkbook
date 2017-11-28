const express = require('express')
const app = express()

app.get('/checkbook', (req, res) => res.send('Beatty Checkbook app'))

app.listen(3000, () => {
    console.log('Checkbook app listening on port 3000')
})
