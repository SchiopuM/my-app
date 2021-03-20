import {usersAPI} from "../DataAccesLayer/API";

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_FETCH = 'TOGGLE_FETCH'
const FOLLOWING_IN_PROCESS = 'FOLLOWING_IN_PROCESS'

const initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {

                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {

                        return {...u, followed: true}

                    }
                    return u
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {

                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, usersData: action.users,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.pageNumber,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.usersCount,
            }
        case TOGGLE_FETCH:
            return {
                ...state, isFetching: action.isFetching,
            }
        case FOLLOWING_IN_PROCESS:
            return {
                ...state, followingInProgress: action.progress ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        default:
            return state
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unFollowAC = (userId) => {
    return {
        type: UN_FOLLOW,
        userId: userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPageAC = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber: pageNumber
    }
}
export const setTotalUsersCountAC = (usersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        usersCount: usersCount
    }
}
export const toggleFetchAC = (isFetching) => {
    return {
        type: TOGGLE_FETCH,
        isFetching: isFetching
    }
}
export const followingInProgressAC = (progress, userID) => {
    return {
        type: FOLLOWING_IN_PROCESS,
        progress: progress,
        userID: userID
    }
}

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetchAC(true))
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsersAC(response.data.items))
            dispatch(setTotalUsersCountAC(response.data.totalCount / 1000))
            dispatch(toggleFetchAC(false))
        })
    }
}

export const followRequestFunk = (u) => {

    return (dispatch) => {
        dispatch(followingInProgressAC(true,u))
        usersAPI.followRequest(u).then(response =>{if (response.data.resultCode == 0) {
           dispatch( unFollowAC(u))}
            dispatch(followingInProgressAC(false,u))
        })}
}
export const unFollowRequestFunk = (u) => {
    return (dispatch) => {
        dispatch(followingInProgressAC(true,u))
        usersAPI.unFollowRequest(u).then(response =>{
            if (response.data.resultCode == 0) {
            dispatch( unFollowAC(u))}
            dispatch(followingInProgressAC(false,u))
        })}
}

export default usersReducer