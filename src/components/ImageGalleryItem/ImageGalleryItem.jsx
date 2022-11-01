import React, {Component} from "react";
import { ImageItem, Image } from "./ImageGalleryItem.styled"
import { Modal } from "components/Modal/Modal";

export class ImageGalleryItem extends Component {
    state = {
         showModal: false,
    }

    toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

    render() {
        return (
            <div>
            <ImageItem>
            <Image src={this.props.webformatURL} alt={this.props.tags} onClick={this.toggleModal} />
            </ImageItem>
                {this.state.showModal && <Modal onClose={this.toggleModal} imageUrl={this.props.largeImageURL} />}
       
            </div>
         )    
    }
}



             