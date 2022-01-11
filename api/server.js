
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
let companies = []


app.get("/getCompanies",(req,res)=>{
    res.status(200).json({dados:companies})
})

app.post("/companies",(req,res)=>{
    companies.push(req.body)
    res.status(200).json({message:"Registered by sucess!"})
})

app.delete("/delete/:company", (req,res)=>{
    companies.splice(req.params.company.id);
    res.status(200).json({message:"Deleted by sucess!"})
})

app.get("/show/:id",(req, res)=>{
    const companyChosen = companies.filter((company)=>company.id=== parseInt(req.params.id));
    if(companyChosen.length ===0){
        res.status(404).json({message:"Company not found"})
    }else{
        res.status(200).json(companyChosen[0])
    }
});

app.post("/edit",(req,res)=>{
    const body = req.body
    companies = companies.map((company)=> (company.id === body.id ? body: company))
    res.status(200).json({message:"Update by sucess!"})
})


app.listen(5000, ()=>console.log("Servidor rodando!"))

