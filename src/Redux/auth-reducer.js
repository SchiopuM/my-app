import { authMe } from "../DataAccesLayer/API";

const SET_USER_DATA ='SET_USER_DATA'

const initialState = {

        email: null,
        id: null,
        login: null,
        isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export  const setUserDataAC = (email, id, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            email: email,
            id: id,
            login: login,
            isAuth: isAuth
        }
    }
}

export const logRequestThunk = () => {
    return (dispatch) => {
        authMe.logRequest().then(data =>{

            if (data.resultCode === 0) {
                dispatch(setUserDataAC(data.data.email ,data.data.id,data.data.login, true))
            } })
    }
}

export const logInThunk = (email, password, rememberMe) => (dispatch) => (

    authMe.logIn(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            return dispatch(setUserDataAC())
        } 
    })
)

export const logOutThunk = () => (dispatch) => (
    authMe.logOut().then(data => {
        if (data.resultCode === 0) {
            return dispatch(setUserDataAC(null, null, null, false))
        }
    })
)

export default authReducer