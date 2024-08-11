import { useState } from 'react';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton.jsx';
import './galleryItem.css'

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
         <span> {displayItem}</span> 
         <LikeButton key={item.id} item={item} getGalleryList={getGalleryList} /> 
         <DeleteButton item={item} getGalleryList={getGalleryList} /> 
        </div>
    )
}

export default GalleryItem;

