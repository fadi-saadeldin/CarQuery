import {
  GET_CARS_YEARS_RANGE,
  GET_CARS_MAKES,
  GET_CARS_MODELS,
  GET_CARS_INFO
} from './types';
const baseUrl = 'https://www.carqueryapi.com/api/0.3/?cmd=';




/**
 *  get cars years range
 */
export const getCarsYears = () => {
  return async (dispatch) => {
    let response = await fetch(baseUrl+'getYears', {
      method: 'GET'
    });
    let res = await response.json();
    dispatch({
      type: GET_CARS_YEARS_RANGE,
      payload: res.Years,
    });
  }
}
/**
 *  get cars Makes for spicfic year 
 */
export const getCarsMakes = (year) => {
  return async (dispatch) => {
    let response = await fetch(baseUrl+`getMakes&year=${year}&sold_in_us=1`, {
      method: 'GET'
    });
    let res = await response.json();
    const makesData = res.Makes;
    const keys = Object.keys(makesData);
    const values = Object.values(makesData);
    const makesList = [];
    keys.forEach(function (item, key) {
      makesList.push(
       values[key].make_id
      )
    });
    dispatch({
      type: GET_CARS_MAKES,
      payload: makesList,
    });
  }
}
/**
 *  get cars model for spicfic year and make 
 */
export const getCarsModels = (make,year) => {
  return async (dispatch) => {
    let response = await fetch(baseUrl+`getModels&make=${make}&year=${year}&sold_in_us=1`, {
      method: 'GET'
    });
    let res = await response.json();
    const modelsData = res.Models;
    const keys = Object.keys(modelsData);
    const values = Object.values(modelsData);
    const modelsList = [];
    keys.forEach(function (item, key) {
      modelsList.push(
       values[key].model_name
      )
    });
    dispatch({
      type: GET_CARS_MODELS,
      payload: modelsList,
    });
  }
}
/**
 *  get cars info  for spicfic year make and model
 */
export const getCarsInfo = (make,year,model) => {
  return async (dispatch) => {
    let response = await fetch(baseUrl+`getTrims&make=${make}&year=${year}&model=${model}`, {
      method: 'GET'
    });
    let res = await response.json();
    dispatch({
      type: GET_CARS_INFO,
      payload: res.Trims,
    });
  }
}

/**
 *  Clear search results when change the filter values
 */
export const clearSearchResuls = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_CARS_INFO,
      payload: '',
    });
  }
}