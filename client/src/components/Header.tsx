import Image from 'next/image'

const Header = () => {
  return (
    <section id="header-container">
      <div className="header-description"></div>
      <div className="header-inner-block">
        <div className="header-sub">
          <h1>Instant access to Tutoring</h1>
          <h2>The most convenient way for you to connect you to a Tutor! Anywhere, anytime.</h2>
        </div>
        <div className="banner-wrapper">
          <div className="banner-button-center">
          <a href="#features">
              <button className="banner-button btn1">Browse Tutors</button>
            </a>
          </div>
        </div>
      </div>
      <div className="header-img">
        <Image src="/banner.png" className="banner-responsive"/>
       </div>
    </section>
  );
};

export default Header;