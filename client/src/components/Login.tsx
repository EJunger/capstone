import Image from 'next/image'

const Login = () => {
    return (
        <div>
            <div className="summary__container">
                <div className="summary__row">
                    <h1>Login</h1>
                    <h2>One Step Closer To Your Prefect Learning Environment</h2>
                    <div className="summary__desc">
                        <div className="summary__img">
                            <Image className="imgTest" width={500} height={400} src="/login.png" alt="" />
                        </div>
                        <div className="summary__sub">
                            <br></br>
                            <br></br>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                                    <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                                    <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <br></br>
                            <label>&nbsp; Don't have an account with us? <a href='register'>Register Now!</a></label><br></br>
                            <br></br>
                            <a className="btn-thrid" href="/home" >Log In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;