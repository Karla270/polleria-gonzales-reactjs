import React from 'react'
import ItemCount from './ItemCount';
import RawHTML from './RawHTML';


const ItemDetail = ({ item }) => {
    return (
        <>
            <div className='mt-2'>
                <RawHTML children={item.descripcion} />
                <h2 className='mt-2'> <b>S/{item.precio}</b></h2>
                <ItemCount item={item} initial={1}></ItemCount>
            </div>
        </>
    )
}

export default ItemDetail

