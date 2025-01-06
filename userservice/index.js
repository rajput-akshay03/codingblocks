const express=require("express");
const app=express();
const db = require('./db/dbConnection');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/userRoutes');


app.use(bodyParser.json());
app.use(express.json());
app.use(userRoutes);
app.listen(4000,()=>{
      console.log("akshay");
})
app.get('/', async (req, res) => {

  res.json({
     message:"running fine"
  })
});
