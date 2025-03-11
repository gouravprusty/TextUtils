export default function Button({clickFunction, content, classNames}) {
    return (
        <button className={classNames} onClick={clickFunction}>{content}</button>
    )
}
