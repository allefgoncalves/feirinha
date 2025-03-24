import express from 'express';
import { add_item, list_item, remove_item, list_item_id, list_item_type } from "./itensService.js";
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/items",(req,res)=>{
    console.log(req.query);
    const { type } = req.query;
    if( type ){
        return res.send(list_item_type( type )); 
    }
    return res.send(list_item());    
});

app.get("/itens/:id",(req,res)=>{
    res.send(list_item_id(req.params.id));  
});

app.listen(5000);