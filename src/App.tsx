import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/main/Main';
import Manicure from './pages/manicure/Manicure';
import Pedicure from './pages/pedicure/Pedicure';
import Appointment from './pages/appointment/Appointment';
import Footer from './components/footer/Footer';
import './App.scss';
import Podology from './pages/podology/Podology';
import { api } from './api/api';
// const options: IOption[] = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

const App = () => {
  // деструкторизация массива
  // useState возвращает массив
  // Нулевым элементом массива является value , первым - ф-ция для  изменения состояния
  // const [value, setValue] = useState<Readonly<IOption[]>>([]);

  // const TT = useState<Readonly<IOption[]>>([]);

  useEffect(() => {
    // api.manicure.add({
    //   title: 'Гигеинический маникюр',
    //   visibleText:
    //     'Цель гигиенического маникюра – придание ногтям красивой формы, удаление заусенцев, кутикулы и ороговевших участков боковых кожных валиков. Его рекомендуется делать женщинам, мужчинам и детям еженедельно. В этом случае кутикула не успевает сильно разрастись и присохнуть к ногтевой пластине, и процедура не требует больших затрат времени. Гигиенический маникюр делится на два основных вида: обрезной и необрезной. Обрезной (классический) маникюр подходит для ногтей любого вида и любой степени запущенности рук. Техника его проведения довольно проста – сухие ногти подстригают до нужной длины и подпиливают, придавая им красивую форму, после чего погружают руки в ванночку с теплой мыльной водой. Далее маникюрными ножничками или щипчиками удаляется ороговевшая кожа вокруг ногтя. В завершение процедуры на руки наносится питательный или увлажняющий крем. Основной недостаток обрезного маникюра – риск порезов и инфицирования . . .',
    //   hiddenText:
    //     'Поэтому его не стоит делать в сомнительных салонах красоты, где нередко не соблюдаются требования к стерилизации инструментов Маникюр необрезной (европейский) – очень мягкий, щадящий и безопасный, поскольку кутикулу не срезают, а отодвигают. Но он не подходит для запущенных рук: чтобы они стали выглядеть ухоженными, может потребоваться 5 – 7 процедур. В этом случае при отсутствии проблем со свертываемостью крови и других противопоказаний (очень тонкая и нежная кожа, расположенные близко к ее поверхности кровеносные сосуды, неярко выраженная кутикула) уход за ногтями начинают с классического маникюра. Европейский маникюр идеален для регулярного ухода за руками и для тех, кто панически боится острых инструментов и заражения. Промежуточное положение между обрезным и необрезным занимает аппаратный маникюр, во время которого кутикула сначала отодвигается, а затем «стачивается» быстро вращающейся фрезой с абразивным покрытием. Для придания ногтям нужной формы и полировки их поверхности применяются другие насадки.',
    //   imgDataPath: [
    //     {
    //       id: 1,
    //       url: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
    //     },
    //     {
    //       id: 2,
    //       url: "process.env.PUBLIC_URL + '/imgs/manicure-first-slider-img-2.jpg",
    //     },
    //     {
    //       id: 3,
    //       url: "process.env.PUBLIC_URL + '/imgs/manicure-first-slider-img-3.jpg",
    //     },
    //     {
    //       id: 4,
    //       url: "process.env.PUBLIC_URL + '/imgs/manicure-first-slider-img-4.jpg",
    //     },
    //     {
    //       id: 5,
    //       url: "process.env.PUBLIC_URL + '/imgs/manicure-first-slider-img-5.jpg",
    //     },
    //   ],
    // });
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/manicure" element={<Manicure />} />
            <Route path="/pedicure" element={<Pedicure />} />
            <Route path="/podology" element={<Podology />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
