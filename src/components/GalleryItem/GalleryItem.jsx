// import '../App/App.css';
// import DeleteButton from '../DeleteButton/DeleteButton';
import { useState } from 'react';
import axios from 'axios';
// import './ShoppingItems.css'


function GalleryItem({ item, getGalleryList }) {

    const handleNameChange = (e) => {
        axios({
            method: `PATCH`,
            url: `/api/list/${item.id}`,
            data: {
                itemName: e.target.value,
                itemQuantity: currentQuant,
                itemUnit: currentUnit
            }
        })
            .then(res => {
                setCurrentName(e.target.value)
            })
            .catch(err => {
                console.log(`Err in handleNameChange: ${err}`)
            })
    }

console.log(item.id)
    return(
        <div data-testid="galleryItem" className="picContainer">
         <h2>{item.title}</h2>
         <img src={item.url}/>
         {item.description}
            
        </div>
    )
}

export default GalleryItem;