const express = require('express');
const app = express()
const port = 3000

app.get("/", (res, req) => {
    console.log("Hello World")
    res.send("Hello World")
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})