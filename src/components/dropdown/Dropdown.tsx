import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FurtherLink } from '../../types/types';
import './Dropdown.scss';

interface DropdovnProps {
  links: FurtherLink[];
  name: string;
}

const Dropdown: FC<DropdovnProps> = ({ links, name }) => {
  const [serviceActive, setserviceActive] = useState(false);
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

  return (
    <div className="dropdown">
      <div className="dropdown__title" onClick={() => setserviceActive(!serviceActive)}>
        {name}
      </div>
      <div className={width < 800 ? '' : 'dropdown__position'}>
        <ul className={serviceActive ? 'dropdown__on' : 'dropdown__off'}>
          {links.map((item) => (
            <li className={width < 800 ? 'menu_list burger_li dropdown__li' : 'menu__href menu__li'} key={item.href}>
              <Link to={item.href} className={width < 800 ? 'dropdown__href' : 'menu__href'}>
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
