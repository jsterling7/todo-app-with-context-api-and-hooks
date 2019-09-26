import React, { useState, useEffect } from 'react';
import SubmitButton from './pallet/SubmitButton';
import TextInput from './pallet/TextInput';


const AddTodoFrom = ({ addTodo }) => {

    const textInputRef = React.useRef(null);

    const [hasSubmitted, setHasSubmitted] = useState(false);

    const placeholders = ['make dinner', 'mow the lawn', 'go to the store'];
    const [placeholder, setPlaceholder]  = useState(placeholders[0]);


    useEffect(() => {
        const getNextPlaceHolder = () => {
            return placeholders[(placeholders.indexOf(placeholder) + 1) % placeholders.length]
        };
        let timer;
        if (!hasSubmitted) {
            timer = setTimeout(() => setPlaceholder(getNextPlaceHolder()), 3000)
        }
        return () => {
            clearTimeout(timer);
        }
    });


    const handleSubmit = event => {
        event.preventDefault();
        addTodo(textInputRef.current.value);
        if (!hasSubmitted) {
            setPlaceholder('');
            setHasSubmitted(true);
        }
        textInputRef.current.value = '';
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="form-inline">
                <div className='row justify-content-center'>
                    <div className='col-auto p-0 pr-1'>
                        <TextInput
                            textInputRef={textInputRef}
                            placeholder={placeholder} />
                    </div>
                    <div className='col-auto p-0'>
                        <SubmitButton title='Add Todo' type='primary' size='medium' />
                    </div>
                </div>
            </form>
        </div>
    )
};


export default AddTodoFrom;