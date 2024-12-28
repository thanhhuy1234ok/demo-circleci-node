const express = require('express');
const app = express()
const port = 3000

app.get("/", (res, req) => {
    console.log("Hello World")
    return res.send("Hello World")
})

app.get("/ping", (res, req) => {
    return res.send("pong")
})

app.get("/abc", (res, req) => {
    return res.send("Hello abc")
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})