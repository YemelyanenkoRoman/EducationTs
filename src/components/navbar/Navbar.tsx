import React, { FC, useState, useEffect } from 'react';
import Menu from '../menu/Menu';
import navList from './navList';
import './Navbar.scss';
import Burger from '../burger/Burger';

const Navbar: FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar">
      <nav>
        {width < 800 ? (
          <div className={menuActive ? 'burger-btn__active' : 'burger-btn'} onClick={handleClick}>
            <span className="burger_line_plus" />
            <span className="burger_line_minus" />
          </div>
        ) : (
          <Menu items={navList} />
        )}
      </nav>

      {width < 800 ? <Burger active={menuActive} setActive={setMenuActive} items={navList} /> : <></>}
    </div>
  );
};

export default Navbar;
