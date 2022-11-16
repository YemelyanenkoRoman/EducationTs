import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import Dropdown from '../dropdown/Dropdown';
import './Menu.scss';
import { NavLink } from '../../types/types';

interface NavListProps {
  items: NavLink[];
}

const Menu: FC<NavListProps> = ({ items }) => {
  return (
    <div className="main-menu">
      <Logo />
      <ul className="menu__ul">
        {items.map((item) => (
          <li className={'menu__list menu__li'} key={item.value}>
            {item.links ? (
              <Dropdown links={item.links} name={item.value} />
            ) : item.href ? (
              <Link to={item.href} className="menu__href">
                {item.value}
              </Link>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
