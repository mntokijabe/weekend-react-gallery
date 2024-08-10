// import '../App/App.css';
// import DeleteButton from '../DeleteButton/DeleteButton';
import { useState } from 'react';
import axios from 'axios';



function GalleryItem({ item, getGalleryList }) {
    let [displayImage, setDisplayImage] = useState(false);

    // const handleNameChange = (e) => {
    //     axios({
    //         method: `PATCH`,
    //         url: `/api/list/${item.id}`,
    //         data: {
    //             itemName: e.target.value,
    //             itemQuantity: currentQuant,
    //             itemUnit: currentUnit
    //         }
    //     })
    //         .then(res => {
    //             setCurrentName(e.target.value)
    //         })
    //         .catch(err => {
    //             console.log(`Err in handleNameChange: ${err}`)
    //         })
    // }

const toggleStatus = () => {
        setDisplayImage(!displayImage)
    }

    
const displayItem = displayImage ?
    (<span 
        data-testid="toggle" 
        onClick={toggleStatus} 
        className="displayItem">
        {item.description}
     </span>
    )
    :
    (<img 
        data-testid="toggle" 
        onClick={toggleStatus} 
        className="displayItem" 
        src={item.url}/>
    )



    return(
        <div data-testid="galleryItem" className="picContainer">
         <h2>{item.title}</h2>
         {displayItem}  
        </div>
    )
}

export default GalleryItem;

