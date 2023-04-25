import React from "react";
import Logo from "../../designs/img/argentBankLogo.png";
import "../../index.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div>
      <nav class="main-nav">
        <Link to="/home" className="main-nav-logo">
          {" "}
          <img class="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
          <h1 class="sr-only">Argent Bank</h1>
        </Link>

        <div>
          <Link to="/sign-in" className="main-nav-item">
            <i class="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
};
<Link to="/connexion" className="link_header">
  Sign in
</Link>;
export default header;
