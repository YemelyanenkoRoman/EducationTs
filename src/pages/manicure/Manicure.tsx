import React, { FC, useEffect } from "react";
import { WithLoading } from "../../components/loader/Loader";
import ServicesCard from "../../components/servicesCard/ServicesCard";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchManicure } from "../../store/slices/manicureSlice";

import "./Manicure.scss";

const Manicure: FC = () => {
  const dispatch = useAppDispatch();
  const manicureData = useAppSelector((state) => state.manicure.card);
  const error = useAppSelector((state) => state.manicure.error);
  const loading = useAppSelector(
    (state) => state.manicure.status === "pending"
  );

  useEffect(() => {
    dispatch(fetchManicure());
  }, []);

  return (
    <div className="manicure__page">
      <h1 className="manicure__page-title">Маникюр</h1>
      <WithLoading isLoading={loading}>
        <div className="manicure">
          <div className="wrapper">
            {error ? <h2>{error}</h2> : <></>}
            {manicureData.map((item, index) => {
              return <ServicesCard key={index} cardData={item} />;
            })}
          </div>
        </div>
      </WithLoading>
    </div>
  );
};

export default Manicure;
