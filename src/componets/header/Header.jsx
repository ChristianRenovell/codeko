import './header.css'

function Header() {
    return (
        <div className="navBar">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img width="80px" src="https://christianrenovell.com/assets/logoChuck.png" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" aria-current="page" href="https://christianrenovell.com">Christian Renovell</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" target="_blank" href="https://codeko.com/">Codeko</a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                                                       
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;