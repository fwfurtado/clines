import Header from "./Header";

const Layout = ({dark=false, selected="", children}) => (
    <div id="content" className={dark? 'dark': ''}>
        <Header selected={selected}/>
        <main className="main">
            {children}
        </main>
    </div>
);

export default Layout;