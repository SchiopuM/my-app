import React from 'react'
import style from './AlgorithmsStyle.module.css'
import ReverseString from "./Algorithm Items/ReverseString";
import Rectangular from "./Algorithm Items/Rectangular";

const Algorithms = (props) => {

    return (
        <div className={style.mainContent}>
            <ReverseString reverseString={props.algorithmData.reverseString} reverseStringAC={props.reverseStringAC}/>
            <Rectangular rectangular={props.algorithmData.rectangular} rectangularAC={props.rectangularAC}/>
        </div>

    )
}

export default Algorithms