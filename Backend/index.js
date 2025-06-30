require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/api/jokes', (req, res) => {
    const Jokes = [
        {
            id: 0,
            title: "Joke 0",
            content: "hello Joke zero"
        },

        {
            id: 1,
            title: "Joke 1",
            content: "hello Joke one"
        },

        {
            id: 2,
            title: "Joke 2",
            content: "hello Joke two"
        },

        {
            id: 3,
            title: "Joke 3",
            content: "hello Joke three"
        },
        {
            id: 4,
            title: "Joke 4",
            content: "hello Joke fourth"
        },
        {
            id: 5,
            title: "Joke 5",
            content: "hello Joke five"
        },
    ]
    res.send(Jokes)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})