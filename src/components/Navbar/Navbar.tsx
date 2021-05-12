import { FC, useContext } from "react"
import { Link } from "react-router-dom"
import { AppCtx } from "../../state/state"
import "./Navbar.css"
const Navbar: FC = () => {
    const data = useContext(AppCtx)
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    Book Quotes
                </Link>
            </div>
            <ul className="navbar__links">
                <li className="navbar__links--link">
                    <Link to="/allQuotes">
                        All quotes
                    </Link>
                </li>
                {data?.isAuthenticated === false ?
                    <>
                        <li className="navbar__links--link">
                            <Link to="/signup">
                                Sign up
                            </Link>
                        </li>
                        <li className="navbar__links--link">
                            <Link to="/signin">
                                Sign in
                            </Link>
                        </li>
                    </>
                    :
                    <li className="navbar__links--link">
                        <a>
                            Hello {data?.user.firstName}
                        </a>
                    </li>
                }
                <li className="navbar__links--link">My quotes</li>
            </ul>
        </nav>
    )
}
export default Navbar