import PropTypes from 'prop-types' ;
import { useEffect } from "react";
import {createPortal} from 'react-dom'
import { OverLay, ModalWindow } from './Modal.styled'


const modalRoot = document.querySelector('#modal-root')

const Modal = ({ onClose, imageUrl, tags }) => {

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
    onClose();
    }
  }; 

  useEffect(() => {
  window.addEventListener('keydown', handleKeyDown)
    return () =>{
    window.removeEventListener('keydown', handleKeyDown)
  }
    
  })

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

    
        return createPortal(
            <OverLay onClick={handleBackdropClick}>
            <ModalWindow>
                <img src={imageUrl} alt={tags} />
            </ModalWindow>
            </OverLay>, 
            modalRoot
        )
    
}

Modal.propTypes = {
  onClose: PropTypes.func,
  imageUrl: PropTypes.string,
  tags:PropTypes.string
}

export default Modal


/*  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
*/