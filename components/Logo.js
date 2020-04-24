const Logo = ({className=""}) => <a className={`logo ${className}`}></a>
const DarkLogo = ({className}) => <a className={`logo--dark ${className}`}></a>

export default Logo;
export {Logo, DarkLogo};