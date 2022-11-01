import PropTypes from 'prop-types'
import {ButtonLoadMore} from './Button.styled'

export function Button({ loadMore }) {
    return (
        <ButtonLoadMore type="button" onClick={loadMore}>Load more</ButtonLoadMore>
)
    }
    
    


Button.propType = {
    onClick: PropTypes.func
}