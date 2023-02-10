import './ImageList.css';
import ImageShow from './ImageShow';

const ImageList = ({ images }) => {
  return (
    <div className='image-list'>
      {images.map(image => (
        <ImageShow key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
