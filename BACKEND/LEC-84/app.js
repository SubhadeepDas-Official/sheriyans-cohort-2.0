const express = require("express")

const app = express() //server is created here

app.get("/", (req, res) => {
  res.send("Server is running")
})

app.listen(4000, () => {
  console.log("Server is running on port 4000");
  
}) //server is started here