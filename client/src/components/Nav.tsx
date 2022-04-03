import Image from 'next/image'

const nav = () => {
    return (
        <nav className="container">
        <div className="nav__wapper">
           <a href='/' ><Image className="navImg" width="80" height="100" src="/icons8-leaf-50.png"  alt=""/></a>
            <ul className="navList">
              <li><a className="navItem" href="#home">Subject List</a></li>
              <li><a className="navItem" href="/directory">For Student</a></li>
              <li><a className="navItem" href="#product">For Tutors</a></li>
              <li><a className="navItem" href="/zoom">Sessions</a></li>
            </ul>
        </div>
        <div>
            <a className="btn" href="/login" >Logout</a>
        </div>
      </nav>
    );
};

export default nav;