const express = require("express")
const book = require("../model/book")
const BookModel = require("../model/book")

const booksRoute = express.Router()

//CRUD routes i.e Create, Read, Update and Delete

//Read
booksRoute.get("/", (req, res) =>{
    BookModel.find({})
        .then((books) => {
            res.status(200).send(books)
        }).catch((err) =>{
            console.log(err)
            res.status(500).send(err.message)
        })

    
})

//Read by Id
booksRoute.get("/:id", (req, res) =>{
    const id = req.params.id
    BookModel.findById(id)
        .then((books) => {
            res.status(200).send(books)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
})

//Create
booksRoute.post("/", (req, res) =>{
    const books = req.body
    console.log(books)

    BookModel.create(books)
        .then((books) =>{
            res.status(201).send({
                message: "Book added successfuly",
                data: books
            })
        }).catch((err) =>{
            res.status(400).send(err)
        })

})


//Update
booksRoute.put("/:id", (req, res) =>{
    const id = req.params.id
    const books = req.body


    BookModel.findByIdAndUpdate(id, books, {new: true})
        .then(books => {
            res.status(201).send(books)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
})

//Delete
booksRoute.delete("/:id", (req, res) =>{
    const id = req.params.id

    BookModel.findByIdAndDelete(id)
        .then((books) => {
            res.status(200).send(books)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
})


module.exports = booksRoute