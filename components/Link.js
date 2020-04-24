import {default as NextLink} from "next/link";


const Link = ({label, className="", onClick=undefined, ...others}) => (
    <NextLink {...others}>
        <a className={`link ${className}`} onClick={onClick}>{label}</a>
    </NextLink>
);

const DarkLink = ({label, className="", onClick=undefined, ...others}) => (
    <NextLink {...others}>
        <a className={`link--dark ${className}`} onClick={onClick}>{label}</a>
    </NextLink>
);

export default Link
export {Link, DarkLink}