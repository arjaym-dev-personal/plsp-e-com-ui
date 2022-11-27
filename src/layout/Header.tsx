import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import "./Header.scss";

import PlspLogo from "assets/image/plsp-logo.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo-wrapper">
                <Link to="/">
                    <img src={PlspLogo} alt="plsp logo" />
                </Link>
            </div>
            <h1 className="header-primary-title">
                <span>Pamantasan ng lungsod ng san pablo</span>
                <span>Education. Empowerment. Excellence</span>
            </h1>
            <div className="header-cart">
                <BsFillCartPlusFill className="header-cart-icon" />
            </div>
        </header>
    );
};

export default Header;
