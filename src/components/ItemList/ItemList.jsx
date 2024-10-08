// Importing React
import React, { useContext } from 'react';

// CSS Imports
import './ItemList.css'

// Component Imports
import Item from "../Item/Item";

// Context Imports
import { ShoppingItemsContext, ShoppingDispatchContext } from '../../providers/ShoppingContext';

// Font-Awesome Icons Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// Utils import for toasts
import { showError } from '../../utils/showToasts'; 



function ItemList(){

    const shoppingItems = useContext(ShoppingItemsContext);
    const dispatch = useContext(ShoppingDispatchContext);


    return(
        <div className="shopping-item-wrapper">
            {
                shoppingItems && shoppingItems.map(item => {
                    return(
                        <div key={item.id} className='items-list'>
                            <div className='change-quantity add-item'
                                onClick={() => dispatch({type: 'Increment_Item', itemId: item.id})}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </div>

                            <Item
                                itemName={item.name}
                                quantity={item.quantity} 
                            />

                            <div className='change-quantity remove-item'
                                onClick={() => {
                                    if(item.quantity == 1) showError(`${item.name} was removed from the list`);
                                    dispatch({type: 'Decrement_Item', itemId: item.id})   
                                }}
                            > 
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default React.memo(ItemList);