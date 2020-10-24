import React from 'react';

const ListInput = ({submit, input}) => {
    return (
            <div className='list-input'>
                <input className='input-field' onChange={input} type='text' placeholder='add item' />
                <div className='input-break'></div>
                <button className='input-submit-button' onClick={submit}>Submit</button>
            </div>
    )
}

export default ListInput;