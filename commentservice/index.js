const express=require("express");
const app=express();
const db = require('./db/dbConnection');
const bodyParser = require('body-parser');
const commentRoutes=require("./Routes/commentRoutes");

app.use(bodyParser.json());
app.use(express.json());

app.use(commentRoutes);
app.listen(5000,()=>{
      console.log("akshay");
})
app.get('/api/v1', async (req, res) => {

  res.json({
     message:"running fine"
  })
});
