import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList ({galleryList, getGalleryList}) {

    return(
        <div data-testid="galleryList" className='itemCard'>
            {galleryList.map((item) => {
            return (
            <GalleryItem  key={item.id} item={item} getGalleryList={getGalleryList} />
            )})}
        </div>
    )
}

export default GalleryList;