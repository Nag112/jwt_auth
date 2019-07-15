const express = require('express');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const loginRouter = require('./routes/loginRouter');
const getData = require('./routes/getData');
//require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(router);
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use('/verifyuser', loginRouter);
app.use('/fetchdata', getData);
app.get('/logout', (req, res) => {
    res.removeHeader('auth-token');
})

app.listen(port, () => {
    console.log(`Server running : ${port}`);
});




