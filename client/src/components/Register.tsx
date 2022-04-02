import Image from 'next/image'

const Register = () => {
    return (
        <div>
            <div className="summary__container">
                <div className="summary__row">
                    <h1>Register</h1>
                    <h2>Begin Your TutorU Journey Today!</h2>
                    <div className="summary__desc">
                        <div className="summary__img">
                            <Image className="imgTest" width={500} height={400} src="/register.png" alt="" />
                        </div>
                        <div className="summary__sub">
                            <div className="form-floating mb-3">
                                <input type="username" className="form-control" id="floatingInput" placeholder=""></input>
                                <label htmlFor="floatingInput">username</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <br></br>
                            <input type="checkbox" id="tandc" name="tandc" value="tandc"></input>
                                <label htmlFor="tandc">&nbsp; I agree to the <a href=''>Terms and Conditions</a></label><br></br>
                                <br></br>
                                <a className="btn-thrid" href="#register" >Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;