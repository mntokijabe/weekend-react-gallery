import { useState, useEffect } from 'react';
import axios from 'axios'
import GalleryList from '../GalleryList/GalleryList.jsx';
import Header from '../Header/Header.jsx';
import AddItemForm from '../AddItemForm/AddItemForm.jsx';


function App() {
  const [galleryList, setGalleryList] = useState([]);
  useEffect(() => {
    getGalleryList()
  },[]
  )

  const getGalleryList = () => {
    axios.get('/api/gallery')
    .then((response) => {
      setGalleryList(response.data)
    })
    .catch((error) => {
      console.log('error getting galleryList', error)
    })
  }

    return (
      <div data-testid="app">
        <Header />
        <main>
          <GalleryList galleryList={galleryList} getGalleryList={getGalleryList} />
          <AddItemForm getGalleryList={getGalleryList} />
        </main>
      </div>
    );
}

export default App;
