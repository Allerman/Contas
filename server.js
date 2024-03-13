const express = require("express");
const http =require('http');
const path = require("path");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,"public")));

app.get('/', function(req, res){
    res.render("index");
});

server.listen(port,() => {
    console.log(`system running on port ${port}`)
});
