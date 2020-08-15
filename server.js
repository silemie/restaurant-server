const low = require('lowdb')
const http = require('http') 
const fs = require('fs') 
const path = require('path')
const url = require('url')
const express = require('express')

const app = express()
app.get('/', (req, res) => {
    res.send("This is resturant web server")
  })
app.listen(8080)


// register

// login

// setfavourite

// unsetfavourite

// logout

// get_business

// reserve
