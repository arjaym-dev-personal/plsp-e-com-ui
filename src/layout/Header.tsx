import "./Header.scss";

import PlspLogo from "assets/image/plsp-logo.png";

const Header = () => {
    return (
        <header>
            <img src={PlspLogo} alt="plsp logo" />
            <h1>Pamantasan ng lungsod ng san pablo</h1>
        </header>
    );
};

export default Header;
