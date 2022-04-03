import Image from "next/image";

const ProfileDescription = () => {
    return (
      <header>
      <div className="row">
      <div className="s-left">
          <Image className=" headerImg--larger" width={1100} height={900} src="/tutorprofile.png" alt="" />
        </div>
        <div className="s-right">
          <h1 className="h1font">Mariama Ali</h1>
          <p className="subheader">
            Study for your upcoming test or exam with professional Tutors from TutorU,
            who ensure students have extra study material, examples and homework, to ensure
            students are prepared for any upcoming assignment!
          </p>
          <a className="btn btn-secondary" href="#" >Book Now!</a>
        </div>
      </div>
    </header>
  );
    
}

export default ProfileDescription;