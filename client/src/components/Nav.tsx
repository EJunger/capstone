import Image from 'next/image'


const nav = () => {
    return (
        <nav className="container">
            <div className="row">
                <div className="nav__wapper">
                    <Image src='/logo.jpg' width="300" height="140" />
                    <ul className="navList">
                        <li><a className="navItem" href="#projects">Login</a></li>
                        <li><a className="navItem" href="#contact">Signup</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default nav;