// import './App.css';
import josh from '../images/josh.png';
import joshColor from '../images/joshcolor.png';
import '../styles/Home.css';

function Home() {


  return (
    <div className="bucket-app">
      
      <div className="body" id="body">
            <section className="photo">
                <img className="profile-pic" src={josh} alt="Josh Jankowski's picture" />
                <div className="overlay">
                    <img src={joshColor} alt="Josh's Alternate Picture" className="src" />
                </div>
            </section>
            <section className="about-me">
                <div className="about-me-column">
                    <h2>Hello,</h2><br />
                    <h3>a bit about me:</h3>
                    <p className="main-text">Recently graduated from the University of San Diego California Full Stack
                        coding bootcamp. I have experience in HTML, CSS, Javascript, Node.js, React, Express.js, and
                        mySQL. My goal is to obtain a job as a software engineer.
                    </p>
                </div>
            </section>
        </div>

    </div>
  );
}

export default Home;
