import Image from 'next/image'

const nav = () => {
    return (
        <nav className="container">
        <div className="nav__wapper">
            <Image className="navImg" width="80" height="100" src="/icons8-leaf-50.png"  alt=""/>
            <ul className="navList">
              <li><a className="navItem" href="#home">Subject List</a></li>
              <li><a className="navItem" href="/directory">For Student</a></li>
              <li><a className="navItem" href="#product">For Tutors</a></li>
              <li><a className="navItem" href="/pricing">Pricing</a></li>
              <li><a className="navItem" href="/profile">Profile</a></li>
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