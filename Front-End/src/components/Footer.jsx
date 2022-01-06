import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

const Footer = () => {

  return (
    <footer>
      <div className="container">
        <div>
          <p>Made with ❤️ Maram - Nancy - Shanna</p>
        </div>
        <div>
          © 2021 GIFT2ME, Inc.
          | <Link to="/privacy_policy"> Privacy Policy </Link>
          | <Link to="/terms"> Terms of Use </Link>
          | <Link to="/about"> About </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;