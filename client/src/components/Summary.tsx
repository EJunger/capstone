import Image from "next/image";

const Summary = () => {
    return (
        <div className="summary__container">
            <div className="summary__row">
                <h1>Online tutors</h1>
                <h2>Learn one-on-one with an expert in the TutorU Online Classroom.</h2>
                <div className="summary__desc">
                    <div className="summary__img">
                         <Image className="imgTest" width={500} height={400} src="/video_call.png" alt="" />
                    </div>
                    <div className="summary__sub">
                        <h3>Find your subject expert</h3>
                        <p>Get instant help for your questions.</p>
                        <ul className="summary__subjects">
                            <li><a href="#" >Math <i className="fa fa-long-arrow-right"></i></a></li>
                            <li><a href="#" >English <i className="fa fa-long-arrow-right"></i></a></li>
                            <li><a href="#" >Science <i className="fa fa-long-arrow-right"></i></a></li>
                            <li><a href="#">Business <i className="fa fa-long-arrow-right"></i></a></li>
                        </ul>
                        <a className="btn-thrid" href="directory" >Find an Online Tutor</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;