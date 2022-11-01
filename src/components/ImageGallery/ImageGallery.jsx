import React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import {ImageGalleryList} from './ImageGallery.styled'


export function ImageGallery({images, onClick}) {
    return (
        <div>
            <ImageGalleryList>
                {
                    images.map(({ id, ...otherProps }) => (
                         <ImageGalleryItem key={id} {...otherProps}/> ))
                }
            </ImageGalleryList>
        </div>
    )
}