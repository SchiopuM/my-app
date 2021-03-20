import React from 'react'
import style from './Users.module.css'
import userPhoto from "../../Images/userMale.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    return (<div className={style.body}>{props.pages.map(p => {
                return (<span className={props.currentPage === p && style.activePage} onClick={() => {
                    props.onPageChange(p)}
                }>{p}</span>)
            })}
    {props.usersData.map(u => <div className={style.userBody}>
                            <NavLink to={`profile/${u.id}`}>
                                <div className={style.avatar}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                </div>
                            </NavLink>
                            <div className={style.info}>
                                Name: {u.name} <br/>
                                Status: {u.status} <br/>
                                Location: 'u.location.city', 'u.location.country' <br/>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.unFollowRequestFunk(u.id)
                                    }
                                    }>Unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.followRequestFunk(u.id)
                                    }}>Follow</button>}
                            </div>

                        </div>
                    )
                }


            </div>
        )

}


export default Users