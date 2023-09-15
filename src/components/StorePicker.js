import React from 'react';
import PropTypes from 'prop-types';
import {getFunName} from '../helpers'

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    mainInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    }

    goToStore = (e) => {
        e.preventDefault();
        const storeName = this.mainInput.current.value;
        this.props.history.push(`/store/${storeName}`); // push() sirve para no recargar el sitio
    }

    render() {
        return (
            <React.Fragment>
                {/* <p>Fish</p> */}
                {/* {console.log(this)} */}
                <form action="" className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please enter a store</h2>
                    <input 
                        type="text"
                        ref={this.mainInput}
                        placeholder={getFunName('Store Name')} 
                        required 
                    />
                    <button type="submit">Visit Store</button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;