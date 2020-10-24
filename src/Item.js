import React, { Fragment } from 'react';

const Item = ({itemValue}) => {
    const deleteListItem = (event) => { // funkcja usuwająca dany element po naciśnięciu przycisku delete
        const target = event.target.parentNode;
        const targetParent = target.parentNode;
        targetParent.removeChild(target);
    }

    return (
        <Fragment>
        <div className='output-list-item'>
            <li className='li-item'>{itemValue}</li>
            <div className='output-break'></div>
            <button onClick={deleteListItem} className='delete-item-button'>Delete task</button>
        </div>
        </Fragment>
    )
}

export default Item;