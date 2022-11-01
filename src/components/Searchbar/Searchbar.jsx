import React, { Component } from 'react'
import { SearchbarHeader, SearchForm, Button, SearchFormInput } from "./Searchbar.styled"
import { GoSearch } from "react-icons/go";
import { IconContext } from "react-icons"

export class Searchbar extends Component {
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
}