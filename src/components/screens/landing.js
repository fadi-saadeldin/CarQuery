import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { getCarsYears, getCarsMakes, getCarsInfo, getCarsModels ,clearSearchResuls} from '../../actions';
import { connect } from 'react-redux';
import CarsList from '../common/cars-list';
import {
    DropDownField
} from '../common/data-field';
yearsList = [];

class Landing extends Component {
    constructor(props) {
        super(props);
        this.onSelectYear =
        this.onSelectYear.bind(this);
        this.onSelectMake = this.onSelectMake.bind(this);
        this.onSelectModel = this.onSelectModel.bind(this);

    }
    state = {
        selectedYear: '',
        selectedMake: '',
        selectedModel: ''
    }
    /**
     * on Select car year, will get all cars make for selected year
     * @param {number} year 
     */
    onSelectYear(year) {
        // clear dropdown values in case the user change the car year again
        this.setState({ selectedYear: year,selectedMake:'',selectedModel:''});
        // get cars makes and clear the search results to get new data
        this.props.getCarsMakes(year);
        this.props.clearSearchResuls();
    }
    /**
     * on select car make, will get car modeles for selected make and year
     * @param {string} make 
     */
    onSelectMake(make) {
        this.setState({ selectedMake: make,selectedModel:'' })
           // get cars models and clear the search results to get new data
        this.props.getCarsModels(make, this.state.selectedYear);
        this.props.clearSearchResuls();
    }
     /**
     * on select car moldel, will get car modeles for selected make,year and model
     * @param {string} model 
     */
    onSelectModel(model) {
        this.setState({ selectedModel: model })
        this.props.getCarsInfo(this.state.selectedMake, this.state.selectedYear, model)
    }

    componentDidMount() {
        // on mount the component will get years range
        this.props.getCarsYears();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.yearsRange) {
            while (nextProps.yearsRange.min_year <= nextProps.yearsRange.max_year) {
                yearsList.push(nextProps.yearsRange.min_year++);
            }
        }
    }
    render() {
        return (
            <View style={styles.view}>
                <DropDownField
                    baseColor="#000"
                    filledValueColor="#000"
                    dropdownPosition={1}
                    value={this.state.selectedYear}
                    placeholderText={'Select Car Year'}
                    onChangeText={this.onSelectYear}
                    options={yearsList.reverse()} />
                {(this.props.carsMakes.length > 0) ?
                    <DropDownField
                        baseColor="#000"
                        filledValueColor="#000"
                        dropdownPosition={1}
                        value={this.state.selectedMake}
                        placeholderText={'Select Car Make'}
                        onChangeText={this.onSelectMake}
                        options={this.props.carsMakes} />
                    : <View />
                }
                {(this.props.carsModels.length > 0) ?
                    <DropDownField
                        baseColor="#000"
                        filledValueColor="#000"
                        dropdownPosition={1}
                        value={this.state.selectedModel}
                        placeholderText={'Select Car Model'}
                        onChangeText={this.onSelectModel}
                        options={this.props.carsModels} />
                    : <View />
                }
                 {(this.props.carsInfo.length > 0) ?
                <CarsList carsInfo={this.props.carsInfo} />
                : <View />
            }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: 70,
        marginLeft: 40,
        marginRight: 40
    },

});
const mapStateToProps = ({ cars }) => {
    const { yearsRange, carsMakes, carsModels, carsInfo } = cars;
    return { yearsRange, carsMakes, carsModels, carsInfo };
};
export default connect(mapStateToProps, { getCarsYears, getCarsMakes, getCarsInfo, getCarsModels,clearSearchResuls })(Landing);