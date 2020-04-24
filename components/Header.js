import Logo from "./Logo";
import Link from "./Link";
import {logout} from "../lib/services/login.service";
import withLoggedUser from "./hoc/WithLoggedUser";

const doLogout = (e) => {
    e.preventDefault();
    logout();
}

const Header = ({selected=""}) => (
    <header className="header">
        <div className="header--logo">
            <Logo/>

        </div>
        <nav className="vertical-center">
            <Link key="flights" href="/flights" className={`medium ${selected === "flights"? "selected": ''}`} label="Flights"/>
            <Link key="aircraft" href="/aircraft" className={`medium ${selected === "aircraft"? "selected": ''}`} label="Aircraft"/>
            <Link key="airports" href="/airports" className={`medium ${selected === "airports"? "selected": ''}`} label="Airports"/>
        </nav>
        <div className="vertical-center">
            <Link href="#" className="medium" label="Logout" onClick={doLogout}/>
        </div>
    </header>
);

export default withLoggedUser(Header);