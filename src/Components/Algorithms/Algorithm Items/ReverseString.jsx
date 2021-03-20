import React from 'react'
import style from '../AlgorithmsStyle.module.css'
import {Field, Form} from "react-final-form";

const RunAlgorithm = (props) => {
    return (
        <Form onSubmit={values => props.reverseStringAC(values.textArea)}>
            {
                ({handleSubmit}) => {
                    return <form onSubmit={handleSubmit}>
                        <Field name={'textArea'} component={'textarea'} placeholder={'text'} /> <br/>
                        <button>Run</button>
                    </form>
                }
            }
        </Form>
    )
}

const ReverseString = (props) => {


    return (

            <div>
                <h3>{props.reverseString.title}</h3>
                <h4>{props.reverseString.description}</h4>
                {props.reverseString.result} <br/>
                <RunAlgorithm reverseStringAC={props.reverseStringAC} />
            </div>


    )
}

export default ReverseString