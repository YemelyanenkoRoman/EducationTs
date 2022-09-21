import { DataContacts, SocialNetworks } from '../../types/types';

export const dataSocNetworks: SocialNetworks[] = [
  {
    id: 1,
    href: 'https://www.instagram.com/',
    url: process.env.PUBLIC_URL + '/imgs/footer/instagramm.png',
  },
  {
    id: 2,
    href: 'https://ru-ru.facebook.com/',
    url: process.env.PUBLIC_URL + '/imgs/footer/facebook.png',
  },
  {
    id: 3,
    href: 'https://www.tiktok.com/',
    url: process.env.PUBLIC_URL + '/imgs/footer/tiktok.png',
  },
  {
    id: 4,
    href: 'https://www.vk.com/',
    url: process.env.PUBLIC_URL + '/imgs/footer/vk.png',
  },
];

export const dataContacts: DataContacts[] = [
  {
    id: 1,
    href: 'tel:+375291111111',
    url: process.env.PUBLIC_URL + '/imgs/footer/phone.png',
    text: '+375 (29) 111 11 11',
  },
  {
    id: 2,
    href: 'nails.olga@mail.ru',
    url: process.env.PUBLIC_URL + '/imgs/footer/mail.png',
    text: 'nails.olga@mail.ru',
  },
  {
    id: 3,
    url: process.env.PUBLIC_URL + '/imgs/footer/address.png',
    text: 'г.Гомель, проспект Ленина, дом №1, цокольный этаж',
  },
];
