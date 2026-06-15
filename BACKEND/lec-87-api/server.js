const express = require("express")

const app = express()

app.use(express.json()) //helps to read data from (req.body) and display it

const notes = []

app.post("/notes", (req, res) => {  //api that sends data from client  to the server
  console.log(req.body);
  notes.push(req.body)
  res.send("Note created")
})

app.get("/notes", (req,res) => {  //api that fetches data from the server to client
  res.send(notes)
})

app.listen(8080, ()=>{
  console.log("Server is running on port 8080")
})  