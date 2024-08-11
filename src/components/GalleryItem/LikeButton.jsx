import {useState} from 'react';
import axios from 'axios';

function LikeButton ({item, getGalleryList}) {
    let [likeIncreased, setLikeIncreased] = useState(true);


    const toggleStatus = () => {
        setLikeIncreased(!likeIncreased)
        likeUpdate()
    }


    const likeUpdate = () =>{
        console.log(item.id)
        likeIncreased ?
        // increase or decrease likes based upon the click toggle
        (axios({
            method: 'PUT',
            url: `/api/gallery/like/${item.id}`,
            data: {change: 1}
         })
         .then((response) => (
                getGalleryList()
            ))
        .catch((error) => {
            console.log('error increasing likes',error);
         })
        )
        :
        (axios({
            method: 'PUT',
            url: `/api/gallery/like/${item.id}`,
            data: {change: -1}
         })
         .then((response) => (
                getGalleryList()
            ))
        .catch((error) => {
            console.log('error decreasing likes',error);
         })

        )
    }

    const displayHeart = item.likes > 0 ? 
        (<span>❤️</span>):(<span>♡</span>)
    

   

    return (
        <>
        <button className={likeIncreased ? 'red':'blue'} data-testid="like" onClick={toggleStatus}>LIKE</button> 
        <span>  {displayHeart} {item.likes}</span>
        </>
    )
}


export default LikeButton;