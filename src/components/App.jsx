
import  Searchbar  from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Loader } from "./Loader/Loader"
import { Button } from './Button/Button'
import GlobalStyle from './GlobalStyle/GlobalStyle.styled'
import {Container} from './Container/Container.styled'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'



const App = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])
  const [isloading, setIsloading] = useState(false)
  const [totalHits, setTotalHits] = useState(0)

  
  const handleFormSubmit = query => {
    setPage(1)
    setImages([])
    setQuery(query)
    
  }
  
  const loadMore = () => {
    setPage(prevState => prevState + 1)
  }

  useEffect(() => {
    if (query === '') {
      return
    }
    setIsloading(true) 
    const controller = new AbortController()
    async function fetchImages() {
      try {
        
        const res = await axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=29953966-c475d5dff4ed5a25f1b37ba96&image_type=photo&orientation=horizontal&per_page=12`,
        {
          signal: controller.signal,
        }
        )
      setImages((prevImages) => [...prevImages, ...res.data.hits])
      setTotalHits(res.data.totalHits)
      }
      catch (error) { 
        console.log(error.message)
      }
    }
    
  fetchImages()
  setIsloading(false)
    return () => { controller.abort() }}, [query, page] )
    
  
    return (
      <>
        <GlobalStyle />
        <Container>
          <Searchbar onSubmit={handleFormSubmit} />
          {isloading && <Loader />}
          {images && <ImageGallery images={images} />}
          {images.length > 0 && images.length !== totalHits && <Button loadMore={loadMore} />}
        </Container>
        
      </>

    );
  

  }


export default App