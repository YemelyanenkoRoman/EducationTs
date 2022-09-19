import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FurtherLink } from '../../types/types';
import './Dropdown.scss';

interface DropdovnProps {
  links: FurtherLink[];
  name: string;
}

const checkIsShowBurger = () => {
  return window.innerWidth < 800;
};

const Dropdown: FC<DropdovnProps> = ({ links, name }) => {
  const [serviceActive, setserviceActive] = useState<boolean>(false);
  const [isShowBurger, setIsShowBurger] = useState<boolean>(checkIsShowBurger());

  useEffect(() => {
    const resizeHandler = () => {
      setIsShowBurger(checkIsShowBurger());
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
      <div className={isShowBurger ? '' : 'dropdown__position'}>
        <ul className={serviceActive ? 'dropdown__on' : 'dropdown__off'}>
          {links.map((item) => (
            <li className={isShowBurger ? 'menu_list burger_li dropdown__li' : 'menu__href menu__li'} key={item.href}>
              <Link to={item.href} className={isShowBurger ? 'dropdown__href' : 'menu__href'}>
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
