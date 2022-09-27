const express = require("express")
const db = require("./db")
const booksRoute = require("./route/books")

require("dotenv").config()

const PORT = process.env.PORT

const app = express()

//Connecting to MongoDB instance
db.connectToMongoDB()

app.use(express.json())

app.use("/books", booksRoute)

app.get("/", (req, res) =>{
    res.send("Welcome Home!")
})

app.listen(PORT, () =>{
    console.log(`Server started on PORT: http://localhost:${PORT}`)
})