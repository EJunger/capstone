import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const zoom = () => {
    const [username, setUsername] = useState("");

    const zoomMeeting = () => {
        const data = {
            email: "mariamaalii98@gmail.com",
        };
        axios
            .post(`http://localhost:4000/meeting`, data)
            .then((response) => {
                let URL =
                    response.data.join_url.replaceAll(
                        "http://localhost:9999/?",
                        "https://us04web.zoom.us/j/",
                    );
                window.location.replace(`${URL}`);
            })
            .catch((err) => console.error(err));
    };
    return (
        <>
            <Nav />
            <h1 className="zoomHeader">welcome to your sessions</h1>
            <div className="zoomNav">
                <ul className="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link active"
                            id="ex1-tab-1"
                            data-mdb-toggle="tab"
                            href="#ex1-tabs-1"
                            role="tab"
                            aria-controls="ex1-tabs-1"
                            aria-selected="true"
                        >Upcoming Meetings</a
                        >
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="ex1-tab-2"
                            data-mdb-toggle="tab"
                            href="#ex1-tabs-2"
                            role="tab"
                            aria-controls="ex1-tabs-2"
                            aria-selected="false"
                        >Join Meetings</a
                        >
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="ex1-tab-3"
                            data-mdb-toggle="tab"
                            href="#ex1-tabs-3"
                            role="tab"
                            aria-controls="ex1-tabs-3"
                            aria-selected="false"
                        >Cloud Recordings</a
                        >
                    </li>
                </ul>
                <div className="tab-content" id="ex1-content">
                    <div
                        className="tab-pane fade show active"
                        id="ex1-tabs-1"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-1"
                    >
                        <table className="table align-middle mb-0 bg-white">
                            <thead className="bg-light">
                                <tr>
                                    <th>Tutor</th>
                                    <th>Topic</th>
                                    <th>Start Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.generated.photos/UZ0_c9YMg-yU7FP-NCeDFoz8mET6ybY336toH1u9bxE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTU3OTIzLmpwZw.jpg"
                                                alt=""
                                                className=" zoomImg rounded-circle"
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Chen Luu</p>
                                                <p className="text-muted mb-0">chenluu@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1"> Math, Engineering</p>
                                        <p className="text-muted mb-0">Science</p>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Mar 13, 2022 2:52 PM</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src=" https://images.generated.photos/Vnt71-C7QSF6mEaQCu636HMzkxZQp9rUtgQ8dVRKGCs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjAxMzY0LmpwZw.jpg                   "
                                                className=" zoomImg rounded-circle"
                                                alt=""
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Roy Singh</p>
                                                <p className="text-muted mb-0">roysingh@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Advanced Mathematics</p>
                                        <p className="text-muted mb-0">History</p>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Mar 25, 2022 12:00 PM</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="  https://images.generated.photos/lkn7ax5_eDpiTrF-rQaDysMtcUifIGzORjJHsff1er0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDU4OTk4LmpwZw.jpg"
                                                className=" zoomImg rounded-circle"
                                                alt=""
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1"> Sofia Ria</p>
                                                <p className="text-muted mb-0">sofiaria@outlook.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Math, Programming</p>
                                        <p className="text-muted mb-0">Engineering</p>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Mar 30, 2022 2:52 PM</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.generated.photos/BcskaTzLUGJ0domMn2hQzC8MsRHlsDzJukg8AgqiqTs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjczODk2LmpwZw.jpg"
                                                className=" zoomImg rounded-circle"
                                                alt=""
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Richard Harris</p>
                                                <p className="text-muted mb-0">richardharris@hogwarts.uk</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Metaphysics, History</p>
                                        <p className="text-muted mb-0">Philosophy</p>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">April 7, 2022 4:00 PM</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                                alt=""
                                                className=" zoomImg rounded-circle"
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Mike Lowery</p>
                                                <p className="text-muted mb-0">bbmikelowery@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Biology, Phsyics</p>
                                        <p className="text-muted mb-0">Science</p>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Apr 13, 2022 2:52 PM</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                        <table className="table align-middle mb-0 bg-white">
                            <thead className="bg-light">
                                <tr>
                                    <th>Tutor</th>
                                    <th>Topic</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.generated.photos/UZ0_c9YMg-yU7FP-NCeDFoz8mET6ybY336toH1u9bxE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTU3OTIzLmpwZw.jpg"
                                                alt=""
                                                className=" zoomImg rounded-circle"
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Chen Luu</p>
                                                <p className="text-muted mb-0">chenluu@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1"> Math, Engineering</p>
                                        <p className="text-muted mb-0">Science</p>
                                    </td>
                                    <td>
                                        <button className="btn" onClick={zoomMeeting}> Join</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src=" https://images.generated.photos/Vnt71-C7QSF6mEaQCu636HMzkxZQp9rUtgQ8dVRKGCs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjAxMzY0LmpwZw.jpg                   "
                                                className=" zoomImg rounded-circle"
                                                alt=""
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Roy Singh</p>
                                                <p className="text-muted mb-0">roysingh@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Advanced Mathematics</p>
                                        <p className="text-muted mb-0">History</p>
                                    </td>
                                    <td>
                                        <button className="btn" onClick={zoomMeeting}> Join</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="  https://images.generated.photos/lkn7ax5_eDpiTrF-rQaDysMtcUifIGzORjJHsff1er0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDU4OTk4LmpwZw.jpg"
                                                className=" zoomImg rounded-circle"
                                                alt=""
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1"> Sofia Ria</p>
                                                <p className="text-muted mb-0">sofiaria@outlook.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Art, History</p>
                                        <p className="text-muted mb-0">French, Health</p>
                                    </td>
                                    <td>
                                        <button className="btn" onClick={zoomMeeting}> Join</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.generated.photos/BcskaTzLUGJ0domMn2hQzC8MsRHlsDzJukg8AgqiqTs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjczODk2LmpwZw.jpg"
                                                className=" zoomImg rounded-circle"
                                                alt=""
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Richard Harris</p>
                                                <p className="text-muted mb-0">richardharris@hogwarts.uk</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Metaphysics, History</p>
                                        <p className="text-muted mb-0">Philosophy</p>
                                    </td>
                                    <td>
                                        <button className="btn" onClick={zoomMeeting}> Join</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                        <table className="table align-middle mb-0 bg-white">
                            <thead className="bg-light">
                                <tr>
                                    <th>Tutor</th>
                                    <th>Topic</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.generated.photos/UZ0_c9YMg-yU7FP-NCeDFoz8mET6ybY336toH1u9bxE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTU3OTIzLmpwZw.jpg"
                                                alt=""
                                                className=" zoomImg rounded-circle"
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Chen Luu</p>
                                                <p className="text-muted mb-0">chenluu@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1"> Math, Engineering</p>
                                        <p className="text-muted mb-0">Science</p>
                                    </td>
                                    <td>
                                        <button className="btn" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop">Record</button>
                                        <div
                                            className="modal fade"
                                            id="staticBackdrop"
                                            data-mdb-backdrop="static"
                                            data-mdb-keyboard="false"
                                            aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true" >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel"> Sorry Zoom Link Isnt Available Yet</h5>
                                                        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src=" https://images.generated.photos/Vnt71-C7QSF6mEaQCu636HMzkxZQp9rUtgQ8dVRKGCs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjAxMzY0LmpwZw.jpg                   "
                                                className=" zoomImg rounded-circle"
                                                alt=""
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Roy Singh</p>
                                                <p className="text-muted mb-0">roysingh@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Advanced Mathematics</p>
                                        <p className="text-muted mb-0">History</p>
                                    </td>
                                    <td>
                                        <button className="btn" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop">Record</button>
                                        <div
                                            className="modal fade"
                                            id="staticBackdrop"
                                            data-mdb-backdrop="static"
                                            data-mdb-keyboard="false"
                                            aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true" >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel"> Sorry Zoom Link Isnt Available Yet</h5>
                                                        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.generated.photos/lkn7ax5_eDpiTrF-rQaDysMtcUifIGzORjJHsff1er0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDU4OTk4LmpwZw.jpg"
                                                className=" zoomImg rounded-circle"
                                                alt=""
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1"> Sofia Ria</p>
                                                <p className="text-muted mb-0">sofiaria@outlook.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Math, Programming</p>
                                        <p className="text-muted mb-0">Engineering</p>
                                    </td>
                                    <td>
                                        <button className="btn" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop">Record</button>
                                        <div
                                            className="modal fade"
                                            id="staticBackdrop"
                                            data-mdb-backdrop="static"
                                            data-mdb-keyboard="false"
                                            aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true" >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel"> Sorry Zoom Link Isnt Available Yet</h5>
                                                        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://images.generated.photos/BcskaTzLUGJ0domMn2hQzC8MsRHlsDzJukg8AgqiqTs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjczODk2LmpwZw.jpg"
                                                className=" zoomImg rounded-circle"
                                                alt=""
                                            />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Richard Harris</p>
                                                <p className="text-muted mb-0">richardharris@hogwarts.uk</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1">Metaphysics, History</p>
                                        <p className="text-muted mb-0">Philosophy</p>
                                    </td>
                                    <td>
                                        <button className="btn" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop">Record</button>
                                        <div
                                            className="modal fade"
                                            id="staticBackdrop"
                                            data-mdb-backdrop="static"
                                            data-mdb-keyboard="false"
                                            aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true" >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel"> Sorry Zoom Link Isnt Available Yet</h5>
                                                        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default zoom;