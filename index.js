const express=require('express');
const cors=require('cors');
const {mongoclient, MongoClient} = require ('mongodb')


//create a objective  for express
const app=new express();
 app.use(express.json());
  app.use(cors());

  
// res & respond
app.get('/home',(req,res)=>{
    res.send("home page");
  })
  const client=new MongoClient('mongodb+srv://admin:<password>@cluster0.5xm6qbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  client.connect();
  const db = client.db('CVMS');
  const col =db.collection('register');
  
// insert the post the data
app.post('/insert',(req,res)=>{
  console.log(req.body);
  col.insertOne(req.body);
  res.send("successfully received");
})
app.get('/showall',async (req, res) =>
{
  const result=await col.find({}).toArray();
  res.send(result);
});

  app.listen(8081);
  console.log("server Running");