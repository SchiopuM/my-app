import React from 'react'
import style from './Messages.module.css'
import {NavLink} from 'react-router-dom'


const MessageUsers = (props) => {
    let lowCaseName = props.name.toLowerCase()
    let path = `/messages/user_${lowCaseName}${props.id}`

    return (


            <div className={style.messageUser}>

                <NavLink to={path}>{props.name}</NavLink>




        </div>


    )
}
export default MessageUsers