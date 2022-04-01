import axios from "axios";
import { useState } from "react";

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
            <h1>Zoom Meeting</h1>
            <div className="card">
                <h5> Name&nbsp;&nbsp; <input type="text" name="name" /></h5>
                <button className="btn btn-info" onClick={zoomMeeting}> Create Meeting </button>
            </div>
        </div>
    );
};

export default zoom;