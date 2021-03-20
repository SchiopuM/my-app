import React from 'react'
import style from "./CommentItem.module.css";

const CommentItem = (props) => {


    return (
        <div>
            <div className={style.commentItem}>
                <img src='https://i.pinimg.com/originals/18/72/9c/18729ceeea87af05b3bf62ca12c9ebe9.jpg'/>
                <span>{props.comment}</span>
                <div>Likes: {props.likesCount}</div>
            </div>

        </div>

    )
}

export default CommentItem