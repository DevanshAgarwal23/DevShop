import { PRODUCT_DETAILs_FAIL, PRODUCT_DETAILs_REQUEST, PRODUCT_DETAILs_SUCCESS, PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS } from '../constants/productConstats'

export const productListReducer = (state = {products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload }
        default: 
            return state
    }
}

export const productDetailsReducer = (state = {product : { reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILs_REQUEST:
            return { loading: true , ...state}
        case PRODUCT_DETAILs_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILs_FAIL:
            return {loading: false, error: action.payload }
        default: 
            return state
    }
}