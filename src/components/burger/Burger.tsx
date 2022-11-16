import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from '../../types/types';
import Dropdown from '../dropdown/Dropdown';
import Logo from '../logo/Logo';
import './Burger.scss';

interface BurgerProps {
  active: boolean;
  setActive: (active: boolean) => void;
  items: NavLink[];
}

const Burger: FC<BurgerProps> = ({ items, active, setActive }) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <Logo />
        <ul className="burger__ul">
          {items.map((item) => (
            <li className="menu__list burger__li" key={item.href}>
              {item.links ? (
                <Dropdown links={item.links} name={item.value} />
              ) : item.href ? (
                <Link to={item.href} className="burger__href">
                  {item.value}
                </Link>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Burger;
