import React, { Fragment } from 'react';
import Item from './Item.js'

const ListItems = ({itemsArr}) => {
    const itemComponent = itemsArr.map((i, index) => {
        if(i.length > 0){
        return (
            <Item key={index} itemValue={i}/>
        )} else {
            return null;
        }
    })
    return (
        <Fragment>
            {itemComponent}
        </Fragment>
    )
}

export default ListItems;