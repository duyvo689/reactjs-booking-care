import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log("check from adminReducer: ", action)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let coppyState = { ...state }
            coppyState.genders = action.data
            console.log('check coppyState from adminReducer: ', coppyState)
            return {
                ...coppyState
            }
        case actionTypes.FETCH_GENDER_FAIDED:
            console.log('check action from FETCH_GENDER_FAIDED adminReducer: ', action)
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;