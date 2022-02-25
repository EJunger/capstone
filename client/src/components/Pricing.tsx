import Image from "next/image";

const Pricing = () => {
    return (
        <header>
      <div className="row">
      <div className="s-left">
          <Image className=" headerImg--larger" width={1100} height={900} src="/tutorprofile.png" alt="" />
        </div>
        <div className="s-right">
          <h1 className="h1font">Mariama Ali</h1>
          <p className="subheader">
          PhD Math (On Dissertation) @ Bukidnon State University
          </p>
          <p >
         $35/ hour
          </p>
          <a className="btn btn-secondary" href="#" >Book Now!</a>
        </div>
      </div>
      <div className="row">
      <div className="s-left">
          <Image className=" headerImg--larger" width={1100} height={900} src="/tutorprofile.png" alt="" />
        </div>
        <div className="s-right">
          <h1 className="h1font">James Solomon</h1>
          <p className="subheader">
          Math, Physics, Chem, Stats, Eng @ Bahauddin Zakariya Universit
          </p>
          <p >
         $25/ hour
          </p>
          <a className="btn btn-secondary" href="#" >Book Now!</a>
        </div>
      </div>
      
      
    </header>
    );
};

export default Pricing;