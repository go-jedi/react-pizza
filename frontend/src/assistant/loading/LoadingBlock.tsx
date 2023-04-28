import React from "react";

import "./LoadingBlock.scss";

const LoadingBlock = () => {
  return (
    <section>
      <div className="loader">
        <div className="upper ball"></div>
        <div className="right ball"></div>
        <div className="lower ball"></div>
        <div className="left ball"></div>
      </div>
    </section>
  );
};

export default LoadingBlock;
