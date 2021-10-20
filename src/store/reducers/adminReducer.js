import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: [],
    times: [],
    topDoctors: [],
    allDoctors: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log("check from adminReducer: ", action)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let genderState = { ...state }
            genderState.genders = action.data
            console.log('check coppyState from adminReducer: ', genderState)
            return {
                ...genderState
            }
        case actionTypes.FETCH_GENDER_FAIDED:
            console.log('check action from FETCH_GENDER_FAIDED adminReducer: ', action)
            return {
                ...state
            }

        //position
        case actionTypes.FETCH_POSITION_SUCCESS:
            let positionState = { ...state }
            positionState.positions = action.data
            console.log('check coppyState from adminReducer: ', positionState)
            return {
                ...positionState
            }
        case actionTypes.FETCH_POSITION_FAIDED:
            console.log('check action from FETCH_POSITION_FAIDED adminReducer: ', action)
            return {
                ...state
            }

        //role
        case actionTypes.FETCH_ROLE_SUCCESS:
            let roleState = { ...state }
            roleState.roles = action.data
            console.log('check coppyState from adminReducer: ', roleState)
            return {
                ...roleState
            }
        case actionTypes.FETCH_ROLE_FAIDED:
            console.log('check action from FETCH_ROLE_FAIDEDadminReducer: ', action)
            return {
                ...state
            }

        //time
        case actionTypes.FETCH_TIME_SUCCESS:
            let timeState = { ...state }
            timeState.times = action.data
            console.log('check coppyState from adminReducer: ', timeState)
            return {
                ...timeState
            }
        case actionTypes.FETCH_TIME_FAILDED:
            console.log('check action from FETCH_ROLE_FAIDEDadminReducer: ', action)
            return {
                ...state
            }

        //top doctor
        case actionTypes.TOP_DOCTOR_SUCCESS:
            state.topDoctors = action.dataDoctors
            return {
                ...state
            }
        case actionTypes.TOP_DOCTOR_FAIlDED:
            state.topDoctors = []
            return {
                ...state
            }
        //all doctors
        case actionTypes.FETCH_ALL_DOCTOR_SUCCESS:
            state.allDoctors = action.dataDoctors
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_DOCTOR_FAIlDED:
            state.allDoctors = []
            return {
                ...state
            }

        default:
            return state;
    }
}

export default adminReducer;