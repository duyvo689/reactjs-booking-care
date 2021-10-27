import actionTypes from './actionTypes';
import {
    getAllUsers, getAllCodeService, createNewUserService,
    getTopDoctorHomeService, getAllDoctorService, saveDetailDoctorService,
    getAllHandBookService, saveHanbookService
} from '../../services/userService';
import { toast } from 'react-toastify';


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

//time
export const fetchTimeStart = () => {
    return async (dispatch, getStart) => {
        try {
            let res = await getAllCodeService('TIME')
            if (res && res.errCode === 0) {
                dispatch(fetchTimeSucess(res.data))
            } else {
                dispatch(fetchTimeFailded())
            }
        }
        catch (e) {
            dispatch(fetchTimeFailded())
            console.log("check err adminAction: ", e)
        }
    }
}

export const fetchTimeSucess = (timeData) => ({
    type: actionTypes.FETCH_TIME_SUCCESS,
    data: timeData
})

export const fetchTimeFailded = () => ({
    type: actionTypes.FETCH_TIME_FAILDED
})


//create user
export const fetchcreateNewUserStart = (data) => {
    return async (dispatch, getStart) => {
        try {
            let res = await createNewUserService(data)
            console.log("check create new user: ", res)
            if (res && res.errCode === 0) {
                dispatch(fetchSaveUserSucess())
            } else {
                dispatch(fetchSaveUserFailded())
            }
        }
        catch (e) {
            dispatch(fetchSaveUserFailded())
            console.log("check err adminAction: ", e)
        }
    }
}

export const fetchSaveUserSucess = (roleData) => ({
    type: actionTypes.SAVE_USER_SUCCESS,
})

export const fetchSaveUserFailded = () => ({
    type: actionTypes.SAVE_USER_FAIlDED
})

//all user
export const fetchAllUserStart = () => {
    return async (dispatch, getStart) => {
        try {
            let res = await getAllUsers("ALL")
            // let res1 = await getTopDoctorHomeService(3)
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSucess(res.users.reverse()))
            } else {
                toast.error('Fetch all users err!')
                dispatch(fetchAllUserFailded())
            }
        }
        catch (e) {
            dispatch(fetchAllUserFailded())
            console.log("check err adminAction: ", e)
        }
    }
}

export const fetchAllUserSucess = (roleData) => ({
    type: actionTypes.All_USER_SUCCESS,
})

export const fetchAllUserFailded = () => ({
    type: actionTypes.All_USER_FAIlDED
})

//top doctor 
export const fetchTopDoctorStart = () => {
    return async (dispatch, getStart) => {
        try {
            let res = await getTopDoctorHomeService('')
            console.log("check get top doctor from adminAction: ", res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TOP_DOCTOR_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.TOP_DOCTOR_FAIlDED
                })
            }
        }
        catch (e) {
            console.log(" ", e)
            dispatch({
                type: actionTypes.TOP_DOCTOR_FAIlDED
            })
        }
    }
}

//all doctors

export const fetchAllDoctorStart = () => {
    return async (dispatch, getStart) => {
        try {
            let res = await getAllDoctorService('')
            console.log("check get all doctor from adminAction: ", res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_FAIlDED
                })
            }
        }
        catch (e) {
            console.log(" ", e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTOR_FAIlDED
            })
        }
    }
}

// save detail doctor 
export const saveDetailDoctorStart = (data) => {
    return async (dispatch, getStart) => {
        try {
            let res = await saveDetailDoctorService(data)
            if (res && res.errCode === 0) {
                toast.success("Lưu dữ liệu thành công")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                toast.error("Không thành công")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAIlDED
                })
            }
        }
        catch (e) {
            console.log(" ", e)
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAIlDED
            })
        }
    }
}


export const fetchAllHandBookStart = () => {
    return async (dispatch, getStart) => {
        try {
            let res = await getAllHandBookService('')
            console.log("check get all handbook from adminAction: ", res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_BOOK_SUCCESS,
                    dataHandBook: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_BOOK_FAIlDED
                })
            }
        }
        catch (e) {
            console.log(" ", e)
            dispatch({
                type: actionTypes.FETCH_ALL_BOOK_FAIlDED
            })
        }
    }
}

// save one handbook 
export const saveHandBookStart = (data) => {
    return async (dispatch, getStart) => {
        try {
            let res = await saveHanbookService(data)
            if (res && res.errCode === 0) {
                toast.success("Lưu dữ liệu thành công")
                dispatch({
                    type: actionTypes.SAVE_ONE_BOOK_SUCCESS
                })
            } else {
                toast.error("Không thành công")
                dispatch({
                    type: actionTypes.SAVE_ONE_BOOK_FAIlDED
                })
            }
        }
        catch (e) {
            console.log(" ", e)
            dispatch({
                type: actionTypes.SAVE_ONE_BOOK_FAIlDED
            })
        }
    }
}