import Image from "next/image";

const Directory = () => {
    return (
        <section id="profile">
            <div className="profile__container">
                <div className="profile__row">
                    <div className="profile__wrapper">
                        <div className="profile">
                            <div className="profile__img">
                            <Image  className="profileImg"width="400" height="300" src="/tutorprofile.png" alt=""/>
                            </div>
                            <h3 className="profile__name">Emma Junger</h3>
                            <p className="profile__para">
                            Physics & Mathematics, Chemistry @ Kharkiv National University
                            </p>
                            <br></br>
                            <h6 className="profile__details">I can tutor:<a href="#" className="p-link"> Russian</a>  ,<a href="#" className="p-link"> Ukrainian</a>  ,<a href="#" className="p-link"> Physics</a>  , <a href="#" className="p-link"> Mathematical Physics</a> , <a href="#" className="p-link"> Numerical Simulations</a>,<a href="#" className="p-link">  Mathematical Physics</a></h6>
                            <a className="btn btn-secondary" href="booking" >Book now!</a>

                        </div>
                        <div className="profile">
                            <div className="profile__img">
                                <Image className="profileImg" width="400" height="300" src="/tutorprofile.png" alt=""/>
                            </div>
                            <h3 className="profile__name">Mariama Ali</h3>
                            <p className="profile__para">
                            PhD Math (On Dissertation) @ Bukidnon State University
                            </p>
                            <br></br>
                            <h6 className="profile__details">I can tutor:<a href="#" className="p-link"> Russian</a>  ,<a href="#" className="p-link"> Ukrainian</a>  ,<a href="#" className="p-link"> Physics</a>  , <a href="#" className="p-link"> Mathematical Physics</a> , <a href="#" className="p-link"> Numerical Simulations</a>,<a href="#" className="p-link">  Mathematical Physics</a></h6>
                            <a className="btn btn-secondary" href="booking" >Book now!</a>

                        </div>
                        <div className="profile">
                            <div className="profile__img">
                            <Image className="profileImg" width="400" height="300"src="/tutorprofile.png" alt=""/>
                            </div>
                            <h3 className="profile__name">Sania Juddha</h3>
                            <p className="profile__para">
                            M.Tech @ Indian Institute Of Technology
                            </p>
                            <br></br><br></br>
                            <h6 className="profile__details">I can tutor:<a href="#" className="p-link"> Russian</a>  ,<a href="#" className="p-link"> Ukrainian</a>  ,<a href="#" className="p-link"> Physics</a>  , <a href="#" className="p-link"> Mathematical Physics</a> , <a href="#" className="p-link"> Numerical Simulations</a>,<a href="#" className="p-link">  Mathematical Physics</a></h6>
                            <a className="btn btn-secondary" href="booking" >Book now!</a>

                        </div>
                        <div className="profile">
                            <div className="profile__img">
                            <Image className="profileImg" width="400" height="300"src="/tutorprofile.png" alt=""/>
                            </div>
                            <h3 className="profile__name">James Solomon</h3>
                            <p className="profile__para">
                            Math, Physics, Chem, Stats, Eng @ Bahauddin Zakariya Universit
                            </p>
                            <br></br>
                            <h6 className="profile__details">I can tutor:<a href="#" className="p-link"> Russian</a>  ,<a href="#" className="p-link"> Ukrainian</a>  ,<a href="#" className="p-link"> Physics</a>  , <a href="#" className="p-link"> Mathematical Physics</a> , <a href="#" className="p-link"> Numerical Simulations</a>,<a href="#" className="p-link">  Mathematical Physics</a></h6>
                            <a className="btn btn-secondary" href="booking" >Book now!</a>

                        </div>
                        <div className="profile">
                            <div className="profile__img">
                            <Image className="profileImg" width="400" height="300"src="/tutorprofile.png" alt=""/>
                            </div>
                            <h3 className="profile__name">Trevon Dcosta</h3>
                            <p className="profile__para">
                            Meterorology @ Penn State
                            </p>
                            <br></br><br></br><br></br>
                            <h6 className="profile__details">I can tutor:<a href="#" className="p-link"> Russian</a>  ,<a href="#" className="p-link"> Ukrainian</a>  ,<a href="#" className="p-link"> Physics</a>  , <a href="#" className="p-link"> Mathematical Physics</a> , <a href="#" className="p-link"> Numerical Simulations</a>,<a href="#" className="p-link">  Mathematical Physics</a></h6>
                            <a className="btn btn-secondary" href="booking" >Book now!</a>

                        </div>

                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Directory;