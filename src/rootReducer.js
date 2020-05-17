import { combineReducers } from 'redux';
import types from '../src/CompareProduct/types';

const INITIAL_STATE = {
    featuresList: [],
    productImages: {},
    productTitles: {},
    productPricingSummary: {}
}

const intializeReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.SET_FEATURE_LIST:
            return {
                ...state,
                featuresList: action.payload
            };
        case types.SET_PRODUCT_IMAGES:
            return {
                ...state,
                productImages: action.payload
            };
        case types.SET_PRODUCT_TITLES:
            return {
                ...state,
                productTitles: action.payload
            };
        case types.SET_PRODUCT_PRICING_SUMMARY:
            return {
                ...state,
                productPricingSummary: action.payload
            };

        default:
            return state;
    }
}

export default combineReducers({
    productsInfo: intializeReducer
});
