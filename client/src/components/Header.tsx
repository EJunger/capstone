import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="i-left">
          <h1 className="h1font">Find your best tutor with affordable prices</h1>
          <p className="subheader">
            TutorU is the most convenient way for you to connect tutors!
            Anywhere, anytime.
            Your learning opportunity is endless at TutorU, professional help is one click away!
          </p>
          <a className="btn btn-secondary" href="#" >See all tutors</a>
        </div>
        <div className="i-right">
          <Image className=" headerImg--larger" width={900} height={700} src="/world.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;