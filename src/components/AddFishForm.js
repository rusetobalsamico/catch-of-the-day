import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
    // Defining REFs
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descriptionRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addFish: PropTypes.func
    }

    createFish = (e) => {
        e.preventDefault();

        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descriptionRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addFish(fish);
        
        // refresh the form
        e.currentTarget.reset();
        
    }

    render() {
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="description" ref={this.descriptionRef} placeholder="Description" />
                <input name="image" type="text" ref={this.imageRef} placeholder="Image" />
                <button type="submit">Add Fish</button> 
            </form>
        )
    }
}

export default AddFishForm;