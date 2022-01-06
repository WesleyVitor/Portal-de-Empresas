
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
const companies = []


app.get("/getCompanies",(req,res)=>{
    res.status(200).json({dados:companies})
})

app.post("/companies",(req,res)=>{
    companies.push(req.body)
    res.status(200).json({message:"Registered by sucess"})

})


app.listen(5000, ()=>console.log("Servidor rodando!"))

