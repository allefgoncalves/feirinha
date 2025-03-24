import { items } from "./items.js";

export function add_item(name, quantity, type) {
    const item = { id: items.length + 1, name, quantity, type };
    items.push(item);
    return item;
}

export function list_item() {
    return items;
}

export function remove_item(id) {
    const index = items.findIndex(items => items.id === id);
    if (index !== -1) {
        return items.splice(index, 1)[0]; 
    }
    return null;
}

export function list_item_id(id){
    return items.find((I)=>{
        return I.id == Number(id)}
    ); 
}