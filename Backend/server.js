
const express = require("express");

const app = express();

const PORT = 3000;

// get, request to the backend 
// post, sending info to the backend
// two paramaters, string specifiying the path and the function
// status code indicates the state of your request

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Welcome to the Song Guessing Challenge!"
    })

})

app.get("/random", (req, res) => {
    res.status(200).send ({
        num1: Math.ceil((Math.random() * 10 )),
        num2: Math.ceil((Math.random() * 10 )),
    })

})

app.listen(PORT, () => {
    console.log("app running");
})