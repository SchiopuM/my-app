import style from './textAreaS.module.css'

const TextArea = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched
    return (
        <div >
            <input {...input} {...props}  ></input>
            {hasError && <div className={style.error}>{meta.error }</div> }
        </div>
    )
}

export default TextArea
