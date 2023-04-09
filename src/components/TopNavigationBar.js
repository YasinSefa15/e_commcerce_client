import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function TopNavigationBar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar bg-secondary-emphasis"
                 style={{
                     paddingTop: "20px",
                     paddingLeft: "20px",
                     paddingRight: "20px",
                 }}
            >
                <div className="container-fluid ">

                    <NavLink
                        to="/"
                        className="navbar-brand"
                    >
                        <img
                            src="https://scontent-ist1-1.xx.fbcdn.net/v/t39.30808-6/323242830_561786665960581_5885815330925855678_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ub8hqVwHrnoAX9WD_rb&_nc_ht=scontent-ist1-1.xx&oh=00_AfAqKrpvn-Uj3LggLWWvs23eycLlK-nVlJcg7OZ06Rp-tQ&oe=642F50C9"
                            alt="asda"
                            style={{width: 30, height: 24}}
                        />
                    </NavLink>

                    <NavLink className="navbar-brand" to="/"> Ana Sayfa </NavLink>

                    <li className="nav-item dropdown">
                        <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Hover me </a>
                        <ul className="dropdown-menu">

                            <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                            <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                            <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                        </ul>
                    </li>

                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Aradığınız Ürünü Yazınız"
                            aria-label="Search"
                            style={{width: 400}}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && navigate("/products?title=" + search)}
                        />
                        <NavLink to={"/products?title=" + search} className="btn btn-outline-primary"
                        >Sepetim</NavLink>
                    </form>


                    <NavLink className="navbar-brand" to="/profile"> Profil</NavLink>
                    <NavLink className="navbar-brand" to="/cart"> Sepetim</NavLink>
                    <NavLink className="navbar-brand" to="/profile"> Giriş Yap</NavLink>
                </div>
            </nav>
        </>
    )
}