const express = require('express');
const app = express();
const cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE"
}

app.use(cors(corsOptions));

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use(require('./routes/index'));


app.listen(3000);
console.log('Server on port 3000');