import {combineReducers} from 'redux';
import carsReducer from './CarsReducer';

export default combineReducers({
    cars:carsReducer, 
});