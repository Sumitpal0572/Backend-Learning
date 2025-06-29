require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Sumit Kumar Pal')
})

app.get('/Youtube', (req, res) => {
    res.send('Programmer_sumit04')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})