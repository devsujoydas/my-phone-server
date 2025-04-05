const express = require('express')
const phones = require('./phones.json')
const app = express();
const port = 3000;
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hwllow phone hunterable api')
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = req.params.id;
    const phone = phones.find(phone => phone.id === id);
    res.send(phone)
})


app.listen(port, () => {
    console.log(`My Server is running on port: ${port}`)
})


