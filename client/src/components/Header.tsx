

const Header = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="header__title">Looking to innovate the Tutoring industry</h1>
            <h2 className="header__sub">
             Our mission is to provide convenient access to supplementary learning for a wide variety of prices and subjects
            </h2>
            <a href="#features">
              <button className="btn btn-outline-primary m-2 fontP">Browse Tutors</button>
            </a>
            {/* <figure className="header__img--wrapper">
              <img src="" alt="" />
            </figure> */}
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
