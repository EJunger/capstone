import Image from 'next/image'

const nav = () => {
    return (
        <nav className="container">
        <div className="nav__wapper">
            <Image className="navImg" width="80" height="100" src="/icons8-leaf-50.png" alt=""/>
            <ul className="navList">
              <li><a className="navItem" href="#home">Subject List</a></li>
              <li><a className="navItem" href="#about">For Student</a></li>
              <li><a className="navItem" href="#product">For Tutors</a></li>
              <li><a className="navItem" href="#service">Pricing</a></li>
            </ul>
        </div>
        <div>
            <a className="btn" href="#" >Login</a>
            <a className="btn btn-primary" href="#">Register</a>
        </div>
      </nav>
    );
};

export default nav;