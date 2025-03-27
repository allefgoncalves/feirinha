import express, {json} from 'express';
import { items } from "./items.js";
import { add_item, list_item, remove_item, list_item_id, list_item_type } from "./itensService.js";
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

app.get("/items",(req,res)=>{
    const { type } = req.query;
    if( type ){
        return res.status(200).send(list_item_type( type )); 
    }
    return res.status(200).send(list_item());    
});

app.get("/items/:id",(req,res)=>{
    const id = req.params.id;
    if (id > items.length || id < 1){
        return res.status(404).send('');
    }
    return res.status(200).send(list_item_id(id));  
});

app.post("/items", (req, res) => {
    const item = req.body;
    if (item.name === ''){  
        return res.status(422).send('Preencha o nome do item!');
	}
    
    if (item.quantity === ''){  
        return res.status(422).send('Preencha a quantidade!');
	}
    
    if (item.type === ''){  
        return res.status(422).send('Preencha o tipo!');
	}

    if ( items.some(I => I.name === item.name) ){
        return res.status(409).send('');
    }
    return res.status(201).send( add_item(item));
});

app.listen(5000);