import {useState} from "react";
import { ImageItem, Image } from "./ImageGalleryItem.styled"
import { Modal } from "components/Modal/Modal";

const ImageGalleryItem = ({webformatURL, tags, largeImageURL}) => {
    const [showModal, setShowModal] = useState(false)

    
    const toggleModal = () => {
    setShowModal(!showModal)
  }

    
        return (
            <>
            <ImageItem>
            <Image src={webformatURL} alt={tags} onClick={toggleModal} />
            </ImageItem>
                {showModal && <Modal onClose={toggleModal} imageUrl={largeImageURL} />}
       
            </>
         )    
}

export default ImageGalleryItem 

             