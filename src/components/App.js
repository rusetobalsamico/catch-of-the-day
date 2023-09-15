import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    // STATE
    state = {
        fishes: {},
        order: {}
    }

    static propTypes = {
        match: PropTypes.object
    }

    // wait until the component is mounted
    componentDidMount() {
        const {params} = this.props.match;
        // first reinstate localstorage
        const localStorageRef = localStorage.getItem(params.storeId);

        if(localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)});
        }

        // sync our state
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            // options
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        // console.log(this.state.order);
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
        // console.log('updating!');
    }

    componentWillUnmount() {
        // when the App component is no longer showing - when the component is unmount
        base.removeBinding(this.ref);
    }

    // CUSTOM FUNCTIONS
    addFish = (fish) => {
        // 1. Take a copy of the existing state (top level)
        const fishes = {...this.state.fishes};
        // 2. Add our new fish to that fishes variable
        fishes[`fish-${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        })
    }

    updateFish = (key, updatedFish) => {
        // make a copy of fishes
        const fishes = {...this.state.fishes};
        // update the state
        fishes[key] = updatedFish;
        // set that to state
        this.setState({
            fishes: fishes
        });
    }

    deleteFish = (key) => {
        // make a copy of fishes
        const fishes = {...this.state.fishes};
        // remove an Item from state
        fishes[key] = null;
        this.setState({
            fishes: fishes
        })
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = (key) => {
        // take a copy of order
        const order = {...this.state.order};
        // either add to the order, or update the number of the order
        order[key] = order[key] + 1 || 1;
        // call setState tu update ourstate object
        this.setState({
            order: order
        })
    }

    removeFromOrder = (key) => {
        // take a copy of order
        const order = {...this.state.order};
        // remove that item from order
        delete order[key];
        // update order state
        this.setState({
            order: order
        })
    }
    
    // RENDER
    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Sea Food Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => {
                            return(
                                <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder} 
                            />
                            )
                        })}
                    </ul>
                </div>
                <Order 
                    // {...this.state} lazy way
                    fishes={this.state.fishes} 
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder} 
                />
                <Inventory 
                    addFish={this.addFish} 
                    updateFish={this.updateFish} 
                    deleteFish={this.deleteFish} 
                    loadSampleFishes={this.loadSampleFishes} 
                    fishes={this.state.fishes}
                />
            </div>
        )
    }
}

export default App;