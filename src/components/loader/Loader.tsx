import React, { FC, PropsWithChildren } from "react";
import "./Loader.scss";

interface WithLoadingProps {
  isLoading: boolean;
}

export const Loader: FC = () => {
  return <div className="loader"></div>;
};

export const ShadowWall: FC = () => {
  return (
    <div className="shadowWall">
      <Loader />
    </div>
  );
};

export const WithLoading: FC<PropsWithChildren<WithLoadingProps>> = (props) => {
  return (
    <div className="withLoading">
      {props.isLoading ? <ShadowWall /> : <></>} {props.children}
    </div>
  );
};
