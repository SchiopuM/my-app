import { logRequestThunk } from "./auth-reducer"

const INITIALISED = 'INITIALISED'

const initialState = {
    toggle: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALISED:
            return {
                ...state,
                toggle: true
            }
        default:
            return state
    }
}


const initialisedAC = () => {
    return {
        type: INITIALISED
    }
}

export const initialiseApp = () => (dispatch) => {
    const promise = dispatch(logRequestThunk())
    Promise.all([promise]).then(() => {dispatch(initialisedAC())} )
}

export default appReducer