let width = screen.width;

const ImageHolder = () => {
  if (width < 1200) {
    return (
      <div className="image-holder">
        <img src="images/illustration-woman-online-mobile.svg" />
        <img src="images/bg-pattern-mobile.svg" />
      </div>
    );
  } else {
    return (
      <div className="desktop-image-holder">
        <div>
          <img src="images/illustration-woman-online-desktop.svg" />
          <img src="images/bg-pattern-desktop.svg" />
        </div>
        <span className="box">
          <img src="images/illustration-box-desktop.svg" />
        </span>
      </div>
    );
  }
};

export default ImageHolder;
