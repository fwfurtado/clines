import Layout from "../components/Layout";
import {DarkInput as Input} from "../components/Input";
import {DarkButton as Button} from "../components/Button";
import {DarkLink as Link} from "../components/Link";
import {DarkLogo as Logo} from "../components/Logo";

const Login = () => (

    <Layout dark>
        <div className="login">
            <div className="logo-content">
                <Logo className="center logo--medium"/>
            </div>

            <Input id="username" label="Username" placeholder="Input your company username" dark/>

            <Input id="password" type="password" label="Password" placeholder="••••••••" dark/>

            <Link href="/forgot-password" label="Forgot your password?" dark/>
            <Button className="btn--block large center" dark onClick={() => alert('hello')}>Login</Button>
        </div>
    </Layout>

);

export default Login;