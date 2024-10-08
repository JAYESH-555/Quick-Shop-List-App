//CSS Imports
import './ShoppingList.css'

// Component Imports
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from '../ItemList/ItemList';

// Context Imports
import { ShoppingItemsContext, ShoppingDispatchContext } from '../../providers/ShoppingContext';

// Toast Container Imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useReducer } from 'react';


// Reducer Imports
import ItemReducer from '../../reducers/itemReducer';

function ShoppingList(){

 

    // Using reducer for cleaner implementation
    const[shoppingItems, dispatch] = useReducer(ItemReducer, []);

    return(
        <>
            <ShoppingItemsContext.Provider value={shoppingItems}>
                <ShoppingDispatchContext.Provider value={dispatch}>
                    <Header/>
                    <ToastContainer/>
                    <div className="shopping-list">
                        <InputItem/>
                        <ItemList/>
                    </div>
                </ShoppingDispatchContext.Provider>
            </ShoppingItemsContext.Provider>
        </>
    );
}

export default ShoppingList;