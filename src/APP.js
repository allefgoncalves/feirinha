import express from 'express';
//import itens from './itens';
import cors from 'cors';

const app = express();
app.use(cors());

const itens = [
    {
    id:"1",
    name: "laranja",
	quantity: "2", 
	type: "fruta",
    },
];

app.get("/itens",(req,res)=>{
    res.send(itens);    
});

app.get("/itens/:id",(req,res)=>{
    
});

app.listen(5000);