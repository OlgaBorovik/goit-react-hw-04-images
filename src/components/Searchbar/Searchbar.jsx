
import { SearchbarHeader, SearchForm, Button, SearchFormInput } from "./Searchbar.styled"
import { GoSearch } from "react-icons/go";
import { IconContext } from "react-icons"
import { useState } from 'react';

const Searchbar = ({onSubmit}) => {
    const[query, setQuery] = useState('')

    const onInputChange = (e) => {
        const{value} = e.currentTarget
        setQuery(value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (query.trim() === '') {
            alert('Введите поисковый запрос')
            return
        }
        onSubmit(query)
        setQuery('')

    }
    
        return (
            <div>
                <SearchbarHeader>
                    <SearchForm onSubmit={handleSubmit}>
                        <Button type="submit">
                            <IconContext.Provider value={{ color: "inherit", size: "2em"}}>
                                <GoSearch />
                            </IconContext.Provider>
                                
                            
                        </Button>

                        <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                            placeholder="Search images and photos"
                            value={query}
                            onChange={onInputChange}
                        />
                    </SearchForm>
                </SearchbarHeader>
            </div>
        )
    
}

export default Searchbar


/*export class Searchbar extends Component {
    state = {
        query: '',
    }

    onInputChange = (e) => {
        this.setState( {query: e.currentTarget.value.toLowerCase() })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.query.trim() === '') {
            alert('Введите поисковый запрос')
            return
        }
        this.props.onSubmit(this.state.query)
        this.setState({query: ''})

    }
    render() {
        return (
            <div>
                <SearchbarHeader>
                    <SearchForm onSubmit={this.handleSubmit}>
                        <Button type="submit">
                            <IconContext.Provider value={{ color: "inherit", size: "2em"}}>
                                <GoSearch />
                            </IconContext.Provider>
                                
                            
                        </Button>

                        <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                            placeholder="Search images and photos"
                            value={this.state.query}
                            onChange={this.onInputChange}
                        />
                    </SearchForm>
                </SearchbarHeader>
            </div>
        )
    }
}*/