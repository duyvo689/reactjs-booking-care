import actionTypes from './actionTypes';
import { getAllCodeService } from '../../services/userService';


//gender
export const fetchGenderStart = () => {
    return async (dispatch, getStart) => {
        try {
            let res = await getAllCodeService('GENDER')
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSucess(res.data))
            } else {
                dispatch(fetchGenderFaided())
            }
        }
        catch (e) {
            dispatch(fetchGenderFaided())
            console.log("check err adminAction: ", e)
        }
    }
}

export const fetchGenderSucess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})

//position
export const fetchPositionStart = () => {
    return async (dispatch, getStart) => {
        try {
            let res = await getAllCodeService('POSITION')
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSucess(res.data))
            } else {
                dispatch(fetchPositionFaided())
            }
        }
        catch (e) {
            dispatch(fetchPositionFaided())
            console.log("check err adminAction: ", e)
        }
    }
}


export const fetchPositionSucess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFaided = () => ({
    type: actionTypes.FETCH_POSITION_FAIDED
})

//role
export const fetchRoleStart = () => {
    return async (dispatch, getStart) => {
        try {
            let res = await getAllCodeService('ROLE')
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSucess(res.data))
            } else {
                dispatch(fetchRoleFaided())
            }
        }
        catch (e) {
            dispatch(fetchRoleFaided())
            console.log("check err adminAction: ", e)
        }
    }
}

export const fetchRoleSucess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})
