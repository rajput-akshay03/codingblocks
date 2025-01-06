const express=require("express");
const app=express();
const db = require('./db/dbConnection');
const bodyParser = require('body-parser');

const blogRoutes = require('./Routes/blogRoutes');


app.use(bodyParser.json());
app.use(express.json());

app.use(blogRoutes);

app.listen(3000,()=>{
      console.log("akshay");
})
app.get('/api/v1', async (req, res) => {

  res.json({
     message:"running fine"
  })
});
