import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
    static propTypes = {
        // shape() check the object 
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        // check if it is a function
        addToOrder: PropTypes.func,
    }

    render() {
        const {image, name, price, desc, status} = this.props.details;
        const isAvailable = status === 'available';
        return(
            <li className="menu-fish">
                {/* <p>{this.props.details.name}</p> */}
                <img src={image} className="" alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button 
                    type="button" 
                    disabled={!isAvailable}
                    onClick={() => this.props.addToOrder(this.props.index)}>
                    {isAvailable ? 'Add to Order' : 'Sold out'}
                </button>
            </li>
        )
    }
}

export default Fish;