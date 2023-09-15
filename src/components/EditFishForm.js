import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func
    }

    handleChange = (e) => {
        //console.log(e.currentTarget.value);
        // take a copy of the current fish
        const updatedFish = {
            ...this.props.fish,
            [e.currentTarget.name]: e.currentTarget.value
        }
        //console.log(updatedFish);
        this.props.updateFish(this.props.index, updatedFish);
    }

    render() {
        return(
            <div className="fish-edit">
                <input name="name" value={this.props.fish.name} onChange={this.handleChange} type="text" placeholder="Name" />
                <input name="price" value={this.props.fish.price} onChange={this.handleChange} type="text" placeholder="Price" />
                <select name="status" value={this.props.fish.status} onChange={this.handleChange}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="description" value={this.props.fish.desc} onChange={this.handleChange} placeholder="Description" />
                <input name="image" type="text" value={this.props.fish.image} onChange={this.handleChange} placeholder="Image" />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFishForm;