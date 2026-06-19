const express = require('express');

const app = express();

app.use(express.json());

const notes = [];

app.post('/notes', (req, res) => {
  notes.push(req.body);
  // res.send(`Note Created ${notes.length}`);
  res.status(201).json({
    message: `Note Created ${notes.length}`
  })
});

app.get('/notes', (req, res) => {
  // res.send(notes);
  // console.log(notes);
  res.status(200).json({
    notes: notes
  })
});

// : -> used to define a route parameter (also called a dynamic parameter)
// params -> an object that stores dynamic values from the URL path.
app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index]
  // res.send(`Note ${req.params.index} deleted successfully`)
  res.status(200).json({
    message: `Note ${req.params.index} deleted successfully`
  })
})

app.patch("/notes/:index", (req, res) => {
  const note = notes[req.params.index]
  if(!req.body){
    // res.send("Null")
    res.status(400).json({
      message: Null
    })
  }
  if(req.body.title){
    note.title = req.body.title
  }
  if(req.body.description){
    note.description = req.body.description
  }
  // res.send(`Note ${req.params.index} is updated successfully`)
  res.status(200).json({
    message: `Note ${req.params.index} is updated successfully`
  })
})

module.exports = app;
