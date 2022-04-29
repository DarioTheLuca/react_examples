import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    const pathName = ["/clock", "/nameForm", "/flavorForm", "/reservation", "/temperatura","/count","/essayForm"]

    const listOfLink = pathName.map((p) =>

        <li key={p.toString()}><Link to={p} className="nav-link active" aria-current="page" >{p.replace("/", "")}</Link></li>
    );


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid justify-content-center">
                    <Link to="/" className="navbar-brand" >HOME</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            {listOfLink}

                        </ul>
                    </div>
                </div>

            </nav>


            <Outlet />
        </>
    )
};

export default Layout;