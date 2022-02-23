import Image from "next/image";

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="highlights__container">
                <div className="highlights__row">
                    <h2 className="section__title">
                        Why choose TutorU
                    </h2>
                    <div className="highlight__wrapper">
                        <div className="highlight">
                            <div className="highlight__img">
                            <Image  className="imgTest"width="400" height="300" src="/online-course.png" alt=""/>
                            </div>
                            <h3 className="highlight__subtitle">Your satisfaction is guaranteed</h3>
                            <p className="highlight__para">
                                With the TutorU Satisfaction Guarantee, you can try online tutoring risk-free.
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                                <Image className="imgTest" width="400" height="300" src="/education.png" alt=""/>
                            </div>
                            <h3 className="highlight__subtitle">Connect instantly from anywhere</h3>
                            <p className="highlight__para">
                                Use your laptop or computer to meet with your tutor when you need to.
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                            <Image className="imgTest" width="400" height="300" src="/book-stack.png" alt=""/>
                            </div>
                            <h3 className="highlight__subtitle">Get help in your grade level</h3>
                            <p className="highlight__para">
                            Connect with tutors who are able to help with your specific question
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                            <Image className="imgTest" width="400" height="300" src="/add-user.png" alt=""/>
                            </div>
                            <h3 className="highlight__subtitle">Only pay for the time you use</h3>
                            <p className="highlight__para">
                            TutorU has a number of ways for students and parents to pay and avail of tutoring services.
                            </p>
                        </div>

                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Highlights;