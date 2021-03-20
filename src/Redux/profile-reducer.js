import {profileAPI} from "../DataAccesLayer/API";

const ADD_COMMENT = "ADD-COMMENT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_STATUS = "GET_STATUS";


const initialState = {
    userProfile: null,
    commentData: [
        {id: 1, comment: "yoo my friend", likesCount: 11},
        {id: 2, comment: "yoo", likesCount: 21},
        {id: 3, comment: "my favorite move", likesCount: 5},
    ],
    status: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            let text = action.comment
            return  {
            ...state,
            commentData: [...state.commentData, {id: 10, comment: text, likesCount: 5},],
        }

        case SET_USER_PROFILE: return  {
            ...state,
            userProfile: action.userProfile
        }
        case GET_STATUS: return  {
            ...state,
            status: action.status
        }
        default:
            return state;
    }
};

export const addCommentActionCreator = (comment) => {
    return {
        type: ADD_COMMENT,
        comment: comment
    };
};

export const setUserProfileAC = (userProfile) => {
    return {
        type: SET_USER_PROFILE,
        userProfile: userProfile,
    };
};
const getStatusAC = (status) => {
    return {
        type: GET_STATUS,
        status: status
    }
}

export const setProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then( response => {
            dispatch(setUserProfileAC(response.data))
        } )
    }
}
export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(respunse => {
            return dispatch(getStatusAC(respunse.data))
        })
    }
}

export const updateUserStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0){
                dispatch(getStatusAC(status))
            }
        })
    }
}

export default profileReducer;
