import {isLogged} from "../../lib/services/login.service";

const withLoggedUser = Component => props => {

    if (isLogged()) {
        return <Component {...props}/>
    }

    return null;
}

export default withLoggedUser;