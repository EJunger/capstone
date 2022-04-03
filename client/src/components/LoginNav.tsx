import Image from 'next/image'

const LoginNav = () => {
    return (
        <nav className="container">
        <div className="nav__wapper">
           <a href='/' ><Image className="navImg" width="80" height="100" src="/icons8-leaf-50.png"  alt=""/></a>
            
        </div>
        <div>
            <a className="btn" href="/login" >Login</a>
            <a className="btn btn-primary" href="/register">Register</a>
        </div>
      </nav>
    );
};

export default LoginNav;