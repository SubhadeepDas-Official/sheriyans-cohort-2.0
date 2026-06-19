const app = require("./src/app")

const mongoose = require("mongoose")

const connectToDb = () => {
  mongoose.connect("mongodb+srv://subhadeepworksofficial_db_user:PNdgl7xzBX4VXcUu@cluster0.bcnchsa.mongodb.net/demo-database")
  .then(() => {
    console.log("Connected to Database");
  })
}

connectToDb()

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  
})