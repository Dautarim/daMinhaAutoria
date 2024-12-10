import express from "express";
const app = express()
app.use(express.json())

const dados = [
    { id: 1, title: "delectus aut autem", completed: false },
    
    { id: 2, title: "quis ut nam facilis et officia qui", completed: false },
    
    { id: 3, title: "fugiat veniam minus", completed: false },
    
    { id: 4, title: "et porro tempora", completed: true },
    
    { id: 5, title: "laboriosam mollitia et enim quasi adipisci quia provident illum", completed: false },
]

function filterId(id){return dados.filter( e => e.id == id)}
function filterIDX(id){return dados.findIndex( e => e.id == id)}

//ROTAS
app.get("/",(req, res)=>{res.status(200).json({dados}) ;
res.send("OLÁ MUNDO ...")})//get all
app.get("/:id",(req, res)=>{res.status(200).json(filterId(req.params.id))})//get id

app.post("/",(req, res)=>{
    dados.push({id:req.body.id, title:req.body.title, completed:req.body.completed})
    res.status(201).json(dados) }) //post

app.put("/:id",(req, res)=>{
    const nm = filterIDX(req.params.id) 
    dados[nm].id = req.body.id;
    dados[nm].title = req.body.title;
    dados[nm].completed = req.body.completed
    res.status(200).json(filterId(req.params.id)) }) //PUT
    
app.delete("/:id",(req, res)=>{
    dados.splice(filterIDX(req.params.id), 1)
    res.status(200).json(dados) })

export default app
//CREATE SCHEMA `bd_persons` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
