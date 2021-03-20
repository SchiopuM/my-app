import React from 'react'
import style from './Post.module.css'
const Post = () => {
    return(
        <div className={style.wrapper}>
            <div className={style.image}>
                <img src={'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg'}/>
            </div>
            <div>
                Spider-Man
            </div>
            <div className={style.button}>
                <button>Add new post</button>
            </div>
        </div>

    )
}

export default Post