const express = require("express")

const app = express()  

app.get("/", (req, res) => {
  res.send("Hello world")
})

app.get("/about", (req, res) => {
  res.send("This is about page")
})

app.listen(2000, () => {
  console.log('Server is running on port 2000');
})