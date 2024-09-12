const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config()
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.post('/login', async (req, res) => {
    const token = jwt.sign({
        name: 'admin',
        id: 1
    }, process.env.TOKEN_SECRET)
    
    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
});
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Hello World'
    })
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})