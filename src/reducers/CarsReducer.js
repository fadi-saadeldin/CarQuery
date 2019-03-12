import {
    GET_CARS_YEARS_RANGE,
    GET_CARS_MAKES,
    GET_CARS_MODELS,
GET_CARS_INFO
} from '../actions/types';

const INITIAL_STATE = {
    yearsRange:"",
    carsMakes:[],
    carsModels:[],
    carsInfo:[]

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
   case GET_CARS_YEARS_RANGE:
            return { ...state, yearsRange: action.payload };
            case GET_CARS_MAKES:
            return { ...state, carsMakes: action.payload };
             case GET_CARS_MODELS:
            return { ...state, carsModels: action.payload };
            case GET_CARS_INFO:
            return { ...state, carsInfo: action.payload };
        default:
            return state;
    }
};