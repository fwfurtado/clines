import {isLogged} from "../../lib/services/login.service";
import Error from 'next/error'

const withAuth = Component => {
    return class extends React.Component {
        static getInitialProps(ctx) {
           if (Component.getInitialProps) {
               return Component.getInitialProps(ctx)
           }

           return {}
        }

        render() {
            if (isLogged()) {
                return <Component {...this.props}/>
            }

            return <Error statusCode={401} title="Unauthorized access"/>
        }
    }
}

export default withAuth;