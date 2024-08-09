import { useState, useEffect } from 'react';
import axios from 'axios'
import GalleryList from '../GalleryList/GalleryList.jsx';


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
        <header>
          <h1>React Gallery</h1>
        </header>
        <main>
          <GalleryList galleryList={galleryList} getGalleryList={getGalleryList} />

        </main>
      </div>
    );
}

export default App;
