import React, { FC, useEffect } from 'react';
import { WithLoading } from '../../components/loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchMain } from '../../store/slices/mainSlice';
import Slider from '../../components/slider/Slider';

import './Main.scss';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const dataSlider = useAppSelector((state) => state.main.slider);
  const error = useAppSelector((state) => state.main.error);
  const loading = useAppSelector((state) => state.main.status === 'pending');

  useEffect(() => {
    dispatch(fetchMain());
  }, []);

  return (
    <div>
      <WithLoading isLoading={loading}>
        {error ? <h2>{error}</h2> : <></>}
        <Slider autoChange={true} dataSlider={dataSlider} />
      </WithLoading>
    </div>
  );
};

export default Main;
