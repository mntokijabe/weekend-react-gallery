import {useState} from 'react';
import axios from 'axios';


function AddItemForm({getGalleryList}) {
    let [itemUrl, setItemUrl] = useState('');
    let [itemDescription, setItemDescription] = useState('');
    let [itemTitle, setItemTitle] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: '/api/gallery',
            data: {
                itemTitle: itemTitle,
                itemUrl: itemUrl,
                itemDescription: itemDescription
            }
        })
        .then((response) => {
            getGalleryList();
            setItemUrl('');
            setItemTitle('');
            setItemDescription('')
        })
        .catch((error) => {
            console.log('error submitting new picture',error);

        })
    }
return (
    <form className="formSubmit" onSubmit={handleFormSubmit}>
        <h2>Add another photo?</h2>
        <label>Picture Title</label>
        <input required
            type='text'
            value={itemTitle}
            placeholder='Title'
            onChange={(e) => setItemTitle(e.target.value)}/>
        <label>Picture URL</label>
        <input required
            type='text'
            value={itemUrl}
            placeholder='URL'
            onChange={(e) => setItemUrl(e.target.value)}/>
        <label>Picture Description</label>
        <input required
            type='text'
            value={itemDescription}
            placeholder='Description'
            onChange={(e) => setItemDescription(e.target.value)}/>
            <button className='picSubmit'>Submit</button>
    </form>
)

}

export default AddItemForm;