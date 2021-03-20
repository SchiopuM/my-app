import React from 'react'
import style from "./CommentItem.module.css";
import CommentItem from "./CommentItem";
import { Field, Form } from "react-final-form";
import TextArea from '../../../Validations/TextArea';

const AddComment = (props) => {


    return (
        <Form onSubmit={values => props.addComment(values.commentArea)}
            
            render={({ handleSubmit, submitting, pristine }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Field name={'commentArea'} >
                            {({input,meta}) => (
                                <textarea {...input} placeholder='comment'></textarea>
                            )}
                        </Field><br />
                        <button disabled={submitting || pristine}>Add comment</button>
                    </form>

                )
            }}>

        </Form>
    )
}

const Comment = (props) => {

    let commentElement = props.commentData.map(c => <CommentItem id={c.id} comment={c.comment}
        likesCount={c.likesCount} />)


    return (<>
        {commentElement}
        <div className={style.commentArea}>
            <AddComment addComment={props.addComment} />
        </div>
    </>
    )
}

export default Comment