import Study from "../components/Study";
import Nav from "../components/Nav";
import Image from "next/image";

const ProfileDescription = () => {
    return (
    <header>
      <div className="row">
      <div className="s-left">
          <Image className=" headerImg--larger" width={500} height={500} src="/ProfilePic.png" alt="" />
        </div>
        <div className="s-right">
          <h1 className="h1font">John Doe</h1>
          <p className="subheader">
            Tutor info...
          </p>
          <a className="btn btn-secondary" href="#" >Book a Session!</a>
        </div>
      </div>
    </header>
  );
    
}

export default ProfileDescription;