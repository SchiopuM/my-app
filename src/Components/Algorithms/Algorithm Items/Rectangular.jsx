import React from 'react'
import style from '../AlgorithmsStyle.module.css'
import {Field, Form} from "react-final-form";

const RunAlgorithm = (props) => {
    return (
        <Form onSubmit={values => props.rectangularAC(values.h,values.w)}>
            {
                ({handleSubmit}) => {
                    return <form onSubmit={handleSubmit}>
                       Height: <Field name={'h'} component={'input'} placeholder={'input height'} /> <br/>
                       Width: <Field name={'w'} component={'input'} placeholder={'input width'} /> <br/>
                        <button>Run</button>
                    </form>
                }
            }
        </Form>
    )
}

const Rectangular = (props) => {


    return (
        <div className={style.mainContent}>
            <div>
                <h3>{props.rectangular.title}</h3>
                <h4>{props.rectangular.description}</h4>
                <div className={style.rec}>
                    {props.rectangular.result}
                </div>
                <RunAlgorithm rectangularAC={props.rectangularAC} />
            </div>


        </div>

    )
}

export default Rectangular