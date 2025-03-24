import express from 'express';
import { add_item, list_item, remove_item, list_item_id } from "./itensService.js";
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/itens",(req,res)=>{
    res.send(list_item());    
});

app.get("/itens/:id",(req,res)=>{
    res.send(list_item_id(req.params.id));  
});

app.listen(5000);