import types from '../types'

const setFeatureList = (value) => (dispatch) => {
    dispatch({ 
        type: types.SET_FEATURE_LIST,
        payload: value
    });
}

const setProdcutTitles = (value) => (dispatch) => {
    dispatch({ 
        type: types.SET_PRODUCT_TITLES,
        payload: value
    });
}

const setProductImages = (value) => (dispatch) => {
    dispatch({ 
        type: types.SET_PRODUCT_IMAGES,
        payload: value
    });
}

const setProdcitPricingImages = (value) => (dispatch) => {
    dispatch({ 
        type: types.SET_PRODUCT_PRICING_SUMMARY,
        payload: value
    });
}

export {
    setFeatureList,
    setProdcutTitles,
    setProductImages,
    setProdcitPricingImages
}