import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
    }
    render() {
        return(
            <div className="inventory">
                <h2>Inventory!!!</h2>
                {Object.keys(this.props.fishes).map(key => {
                    return(<EditFishForm 
                        fish={this.props.fishes[key]} 
                        updateFish={this.props.updateFish} 
                        deleteFish={this.props.deleteFish} 
                        index={key} 
                        key={key} />)
                })}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes} type="button">Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;