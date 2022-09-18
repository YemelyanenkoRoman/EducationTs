import { NavLink } from '../../types/types';

const navList: NavLink[] = [
  { value: 'Главная', href: '/' },
  { value: 'Запись', href: '/appointment' },
  { value: 'Обо мне', href: '/a' },
  {
    value: 'Услуги',
    links: [
      { value: 'Маникюр', href: '/manicure' },
      { value: 'Педикюр', href: '/145' },
      { value: 'Подология', href: '/156' },
    ],
  },
  { value: 'Портфолио', href: '/b' },
  { value: 'Цены', href: '/c' },
];

export default navList;
