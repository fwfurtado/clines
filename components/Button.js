const RawButton = ({content, ...others}) => <button {...others}>{content}</button> ;

const Button = ({onClick, children, className="", ...others}) => {
    const buttonCSS = `btn upper bold ${className}`
    return <RawButton {...others} className={buttonCSS} content={children} onClick={onClick}/>
}

const DarkButton = ({onClick, children, className="", ...others}) => {
    const buttonCSS = `btn--dark upper bold ${className}`
    return <RawButton {...others} className={buttonCSS} content={children} onClick={onClick}/>;
}

export default Button;
export { Button, DarkButton };