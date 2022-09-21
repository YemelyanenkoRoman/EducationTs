import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import Logo from '../logo/Logo';
import navList from '../navbar/navList';
import { dataSocNetworks, dataContacts } from './dataFooter';

import './Footer.scss';

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__border"></div>
      <div className="footer__box">
        <div className="footer__menu">
          <ul className="footer__menu-ul">
            {navList.map((item) => (
              <li key={item.value} className="footer__menu-li">
                {item.links ? (
                  <Dropdown links={item.links} name={item.value} />
                ) : item.href ? (
                  <Link to={item.href} className="footer__menu-href">
                    {item.value}
                  </Link>
                ) : (
                  <></>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__box-address">
          <div className="footer__title">Контактные данные</div>

          <ul className="footer__contact-data">
            {dataContacts.map((item) => (
              <li key={item.id}>
                <a className="footer__href" href={item.href}>
                  <img className="footer__icons-address" src={item.url} />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__social-network">
          <div className="footer__title">Мы в социальных сетях</div>

          <ul className="social-network__images">
            {dataSocNetworks.map((item) => (
              <li key={item.id}>
                <a className="footer__href" target="_blank" href={item.href}>
                  <img className="icons" src={item.url} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="entrepreneur">
          <div className="footer__title">Информация</div>
          <div className="entrepreneur__data">
            Индивидуальный предприниматель
            <br />
            Андрей Андреевич Андреев <br />
            Св-во о регистрации: №1111 от 01.01.2022
            <br />
            ОГРНИП: 1111111111 <br />
            Расчётный счет: 4071111111111111
            <br />
            Банк: Беларусбанк г.Гомель <br />
            Корр/счёт: 30103010111111111 <br />
            БИК: 04403060111 <br />
          </div>
        </div>
      </div>
      <div className="footer__footer footer__title-main footer__title">&#169; Nails.Olga, 2022. Все права защищены</div>
    </div>
  );
};

export default Footer;
