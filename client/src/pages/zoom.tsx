import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="App">
            <h1 className="zoomHeader">welcome to your sessions</h1>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            className=" zoomImg rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">John Doe</p>
                                            <p className="text-muted mb-0">john.doe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Software engineer</p>
                                    <p className="text-muted mb-0">IT department</p>
                                </td>
                                <td>
                                   <button className="btn" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop"> Join</button>
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
                                            src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                            className=" zoomImg rounded-circle"
                                            alt=""
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">Alex Ray</p>
                                            <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Consultant</p>
                                    <p className="text-muted mb-0">Finance</p>
                                </td>
                                <td>
                                   <button className="btn" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop"> Join</button>
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
                                            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                            className=" zoomImg rounded-circle"
                                            alt=""
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">Kate Hunington</p>
                                            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Designer</p>
                                    <p className="text-muted mb-0">UI/UX</p>
                                </td>
                                <td>
                                   <button className="btn" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop"> Join</button>
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
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            className=" zoomImg rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">John Doe</p>
                                            <p className="text-muted mb-0">john.doe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Software engineer</p>
                                    <p className="text-muted mb-0">IT department</p>
                                </td>
                                <td>
                                   <button className="btn" onClick={zoomMeeting}> Join</button>   
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                            className=" zoomImg rounded-circle"
                                            alt=""
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">Alex Ray</p>
                                            <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Consultant</p>
                                    <p className="text-muted mb-0">Finance</p>
                                </td>
                                <td>
                                   <button className="btn" onClick={zoomMeeting}> Join</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                            className=" zoomImg rounded-circle"
                                            alt=""
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">Kate Hunington</p>
                                            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Designer</p>
                                    <p className="text-muted mb-0">UI/UX</p>
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
                                <th>Start Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            className=" zoomImg rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">John Doe</p>
                                            <p className="text-muted mb-0">john.doe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Software engineer</p>
                                    <p className="text-muted mb-0">IT department</p>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Mar 30, 2022 2:52 PM</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                            className=" zoomImg rounded-circle"
                                            alt=""
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">Alex Ray</p>
                                            <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Consultant</p>
                                    <p className="text-muted mb-0">Finance</p>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Mar 30, 2022 2:52 PM</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                            className=" zoomImg rounded-circle"
                                            alt=""
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">Kate Hunington</p>
                                            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Designer</p>
                                    <p className="text-muted mb-0">UI/UX</p>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">Mar 30, 2022 2:52 PM</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default zoom;