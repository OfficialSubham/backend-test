require("dotenv").config()
const express = require("express")

const app = express();
const PORT = process.env.PORT
app.get("/",(req, res)=> {
    const jsonData = {
        networks: Math.floor(Math.random() * 10),
        jobs: Math.floor(Math.random() * 10),
        messaging: Math.floor(Math.random() * 10),
        notification: Math.floor(Math.random() * 10),
    }
    res.json(jsonData)
})

app.listen(PORT)