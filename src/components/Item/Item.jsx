// Importing React
import React from 'react';

// CSS Imports
import './Item.css'

function Item({ itemName, quantity }){
    return(
        <div className="item-wrapper">
            <div className="item-name">
                {itemName}
            </div>

            <div className="item-quantity">
                {quantity}
            </div>
        </div>
    );
}

export default React.memo(Item);