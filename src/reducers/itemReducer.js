// UUID Imports for universal unique ID generator.
import { v4 as uuidv4 } from 'uuid';


function itemReducer(shoppingItems, action){ // action -> {type: 'Add_item'}
    if(action.type == 'Add_Item'){
        return[
                ...shoppingItems, 
                {id: uuidv4(), name: action.itemName, quantity: 1}
        ];
    }
    else if(action.type == 'Increment_Item'){
        const newShoppingItems = shoppingItems.map(item => {
            if(item.id == action.itemId) item.quantity++;
            return item;
        });
        return newShoppingItems;
    }
    else if(action.type == 'Decrement_Item'){
        let newShoppingItems = shoppingItems.map(item =>{
            if(item.id == action.itemId && item.quantity > 0) item.quantity--;
            return item;
        });
        return newShoppingItems.filter(item => item.quantity > 0);
    }
}

export default itemReducer;