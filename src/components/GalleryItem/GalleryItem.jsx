// import '../App/App.css';
// import DeleteButton from '../DeleteButton/DeleteButton';
import { useState } from 'react';
import axios from 'axios';
import LikeButton from './LikeButton';


function GalleryItem({ item, getGalleryList }) {
    let [displayImage, setDisplayImage] = useState(false);


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
         <LikeButton key={item.id} item={item} getGalleryList={getGalleryList} /> 
        </div>
    )
}

export default GalleryItem;

