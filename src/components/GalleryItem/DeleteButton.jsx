import {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function DeleteButton ({item, getGalleryList}) {
    const handleDelete = () => {
        Swal.fire({
            title: "Remove this item?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Yes",
            denyButtonText: "No"
            }).then((result) => {
                if (result.isConfirmed) {
                axios.delete(`/api/gallery/${item.id}`)
                    .then(response => {
                        getGalleryList()
                    })
                    .catch(err => {
                        console.log(`Error Deleting item!`, err)
                    }) 
            }
        })
    }

    return(
        <button className='deleteThis' onClick={handleDelete}>     ❌</button>
    )
}

export default DeleteButton;