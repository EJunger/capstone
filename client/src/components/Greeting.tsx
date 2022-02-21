import Image from 'next/image'

const Greeting = () => {
    return (
      <section id="greet-container">
        <div className="greet-content"></div>
            <div className="greet-title">
                <h1 className="greet-title-item">Learning with TutorU</h1>
                <h3 className="greet-title-subitem">Your learning opportunity is endless at TutorU
                     with professional Tutors who teach: </h3>
                <div className="greet-subjects">
                    <div className="greet-subjects-wrapper">
                        <div className="greet-subjects-item">Math</div>
                        <div className="greet-subjects-item">Science</div>
                        <div className="greet-subjects-item">Language</div>
                        <div className="greet-subjects-item">Engineering</div>
                        <div className="greet-subjects-item">History</div>
                        <div className="greet-subjects-item">Physics</div>
                        <div className="greet-subjects-item">Programming</div>
                        <div className="greet-subjects-item">Business</div>
                        <div className="greet-subjects-item">And more!</div>
                    </div>
                </div>
            </div>
        <div className="greet-inner-block">
          <div className="greet-sub">
            <h1></h1>
            <h2></h2>
          </div>
        </div>
      </section>
    );
  };
  
  export default Greeting;