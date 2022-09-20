import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import Logo from '../logo/Logo';

import navList from '../navbar/navList';

import mail from './icons/mail.png';
import phone from './icons/phone.png';
import address from './icons/address.png';
import instagramm from './icons/instagramm.png';
import facebook from './icons/facebook.png';
import tiktok from './icons/tiktok.png';
import vk from './icons/vk.png';

import './Footer.scss';

const Footer: FC = () => {
  const social: SocialProps[] = [
    { id: 1, href: 'https://www.instagram.com/', src: instagramm },
    {
      id: 2,
      href: 'https://ru-ru.facebook.com/',
      src: facebook,
    },
    {
      id: 3,
      href: 'https://www.tiktok.com/',
      src: tiktok,
    },
    {
      id: 4,
      href: 'https://www.vk.com/',
      src: vk,
    },
  ];

  interface SocialProps {
    id: number | string;
    href: string;
    src: string;
  }

  return (
    <div className="footer">
      <div className="footer__title-main ">
        <Logo />
      </div>
      <div className="footer__box">
        <div className="footer__menu">
          <ul className="footer__ul">
            {navList.map((item) => (
              <li key={item.value} className="footer__li">
                {item.links ? (
                  <Dropdown links={item.links} name={item.value} />
                ) : item.href ? (
                  <Link to={item.href} className="footer__href">
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

          <div className="cell">
            <a className="footer__href" href="tel:+375291111111">
              <img className="icons_address" src={phone} /> +375 (29) 111 11 11
            </a>
          </div>
          <div className="mail">
            <a className="footer__href" href="nails.olga@mail.ru">
              <img className="icons_address" src={mail} /> nails.olga@mail.ru
            </a>
          </div>
          <div className="address">
            <img className="icons_address" src={address} />
            <div>г.Гомель, проспект Ленина, дом №1, цокольный этаж</div>
          </div>
        </div>
        <div className="footer__social-network">
          <div className="footer__title">Мы в социальных сетях</div>

          <ul className="social-network__images">
            {social.map((item) => (
              <li key={item.id}>
                <a className="footer__href" target="_blank" href={item.href}>
                  <img className="icons" src={item.src} />
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
