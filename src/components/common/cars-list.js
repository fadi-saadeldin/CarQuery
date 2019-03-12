import React, { Component } from 'react';
import {
   ScrollView
} from 'react-native';
import CarCard from './car-card';
class CarsList extends Component {
    state = {
        selectedCar: null
    }
    render() {
        return (
            <ScrollView>
                {this.props.carsInfo.map(item => (
                    <CarCard key={item.model_id}
                        info={item}
                        selected={this.state.selectedCar}
                        onSelectCar={() => { this.setState({ ...this.state, selectedCar: item.model_id }) }}
                    />))
                }
            </ScrollView>
        )
    }
}
export default CarsList;

