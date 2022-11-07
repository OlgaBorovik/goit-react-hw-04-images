import {useState} from "react";
import { ImageItem, Image } from "./ImageGalleryItem.styled"
import Modal from "components/Modal/Modal";
import PropTypes from 'prop-types'

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

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string
}

export default ImageGalleryItem 

