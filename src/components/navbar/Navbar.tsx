import React, { FC, useState, useEffect } from 'react';
import Menu from '../menu/Menu';
import navList from './navList';
import Burger from '../burger/Burger';
import ManualSwitch from '../switch/Switch';
import './Navbar.scss';

const Navbar: FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [chacked, setChacked] = useState(false);

  // console.log(chacked);

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
      <nav className="navigation">
        {width < 800 ? (
          <div className={menuActive ? 'burger-btn__active' : 'burger-btn'} onClick={handleClick}>
            <span className="burger_line_plus" />
            <span className="burger_line_minus" />
          </div>
        ) : (
          <Menu items={navList} />
        )}

        <ManualSwitch checked={chacked} onChange={setChacked} />
      </nav>
      {width < 800 ? <Burger active={menuActive} setActive={setMenuActive} items={navList} /> : <></>}
    </div>
  );
};

export default Navbar;
