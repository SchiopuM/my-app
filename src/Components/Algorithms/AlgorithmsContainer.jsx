import React from 'react'
import Algorithms from "./Algorithms";
import {connect} from "react-redux";
import {rectangularAC, reverseStringAC,} from "../../Redux/algorithms-reducer";

const stateData = (state) => {
    return {
        algorithmData: state.algorithms.algorithmData
    }
}

const reducerData = (dispatch) => {
    return {
        reverseStringAC: (text) => {
            dispatch(reverseStringAC(text))
        },
        rectangularAC: (h,w) => {
            dispatch(rectangularAC(h,w))
        }

    }
}

const AlgorithmsContainer = connect (stateData, reducerData)(Algorithms)

export default AlgorithmsContainer