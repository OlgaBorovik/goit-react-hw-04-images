import { Component } from 'react'
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Loader } from "./Loader/Loader"
import { Button } from './Button/Button'
import GlobalStyle from './GlobalStyle/GlobalStyle.styled'
import {Container} from './Container/Container.styled'



export class App extends Component {
  state = {
        page: 1,
        query: '',
        images: [],
        isloading: false,
       
        
    }
  handleFormSubmit = query => {
    this.setState({
      page: 1,
      images: [],
      query
    })
  }
  
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  
  componentDidUpdate(_, prevState) {
    const { query, page } = this.state
    
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({isloading: true})
      fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=29953966-c475d5dff4ed5a25f1b37ba96&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
        .then(data => this.setState(prevState => ({images: [ ...prevState.images, ...data.hits ]}))
      )
      .finally(() => this.setState({isloading: false}))
        
    }
  }
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Searchbar onSubmit={this.handleFormSubmit} />
          {this.state.isloading && <Loader/>}
          {this.state.images && <ImageGallery images={this.state.images}/>}
          {this.state.images.length > 0 && <Button loadMore={this.loadMore} />}
        </Container>
        
      </>

  );
  }

};
