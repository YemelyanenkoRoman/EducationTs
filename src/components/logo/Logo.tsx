import React from 'react';
import { Link } from 'react-router-dom';

import '..//..//Const.scss';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to={'/'} className="logo__href">
      <div className="logo">
        <span className="logo__title">nails.olga</span>
        <span className="logo__subtitle">маникюр педикюр эстетика</span>
      </div>
    </Link>
  );
};

export default Logo;
