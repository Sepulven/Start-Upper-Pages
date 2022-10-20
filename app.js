const express = require('express')
const path = require('path')
const app = express()

const PORT = 8080

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'statics')))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/error', (req, res) => {
    res.render('error')
})
app.listen(PORT, () => {
    console.log(`Already started at localhost:${PORT}`)
})