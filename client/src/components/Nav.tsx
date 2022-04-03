import Image from 'next/image'

const nav = () => {
    return (
        <nav className="container">
        <div className="nav__wapper">
           <a href='/home' ><Image className="navImg" width="80" height="100" src="/icons8-leaf-50.png"  alt=""/></a>
            <ul className="navList">
              <li><a className="navItem" href="/directory">Tutor Directory</a></li>
              <li><a className="navItem" href="/zoom">Sessions</a></li>
              <li><a className="navItem" href="/calendar">Calendar</a></li>
              <li><a className="navItem" href="/pricing">Pricing</a></li>
            </ul>
        </div>
        <div>
            <a className="btn" href="/login" >Logout</a>
        </div>
      </nav>
    );
};

export default nav;