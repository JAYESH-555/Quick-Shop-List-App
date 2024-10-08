// CSS Imports
import './InputItem.css'

// Toastify CSS Imports
import "react-toastify/dist/ReactToastify.css";

// Utils Imports
import { showSuccess, showError } from '../../utils/showToasts'
import { useContext, useEffect, useState } from 'react';

// Context Imports
import { ShoppingDispatchContext } from '../../providers/ShoppingContext';

// useForm Imports from React Hook Forms
import { useForm } from 'react-hook-form';

function InputItem(){


    const{register, handleSubmit, formState: { errors }, reset} = useForm();

    const dispatch = useContext(ShoppingDispatchContext);

    const handleFormSubmission = (data) => {
        dispatch({
            type: 'Add_Item',
            itemName: data.item
        });
        showSuccess(`${data.item} added to list successfully!`);
        reset();
    };


    useEffect(() => {
        if (errors.item) {
            if (errors.item.type === 'required') {
                showError('Item cannot be empty!');
            } else if (errors.item.type === 'minLength') {
                showError('Item cannot be less than 3 characters!');
            }
        }
    }, [errors.item]);

    
    return(
       <div className='item-input-wrapper'>
            <form onSubmit={handleSubmit(handleFormSubmission)}>
                <input
                    className="item-input"
                    type="text"
                    placeholder="Add Items..."
                    name='item'
                    {...register("item", { required: true, minLength: 3 })}
                />

                <button className='add-item-btn'>
                    Add
                </button>
            </form>
       </div>
    );
}

export default InputItem;