import React from "react";
import ImageHolder from "./ImageHolder";
import Content from "./Content";

const App = () => {
  return (
    <section className="container">
      <div className="wrapper">
        <ImageHolder />
        <Content />
      </div>
    </section>
  );
};

export default App;
