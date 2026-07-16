const express = require('express');
const noteModel = require('./models/notes.model');
const cors = require("cors")
const path = require("path")

const app = express();

app.use(express.json());
app.use(cors())
// app.use(express.static("../public"))
app.use(express.static(path.join(__dirname, "..", "public")));

app.post('/api/notes', async (req, res) => {
  const { title, description } = req.body;

  const note = await noteModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: 'Note created successfully',
    note,
  });
});

app.get('/api/notes', async (req, res) => {
  const notes = await noteModel.find(); //find() returns array of objects

  res.status(200).json({
    message: 'Notes fetched successfully',
    notes,
  });
});

app.delete('/api/notes/:id', async (req, res) => {
  await noteModel.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: 'Note deleted successfully',
  });
});

app.patch('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;

  await noteModel.findByIdAndUpdate(id, { description });

  res.status(200).json({
    message: "Note updated successfully"
  })
});

// app.use('*name', (req, res) => {
//   res.sendFile(path.join(__dirname ,"..", "/public/index.html"))
// })
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
