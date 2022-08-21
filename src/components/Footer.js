import '../styles/Footer.css';

function Footer() {
    return (
      <div className="footer">
        <div className="footer" id="call">
            <i className="fa-solid fa-phone icon"></i>
            <div className="f-text">
                <h4>Call</h4>
                <p>C: 206.227.4606</p>
            </div>
        </div>
        <div className="footer" id="email"><i className="fa-solid fa-envelope icon"></i>
            <div className="f-text">
                <h4>Email</h4>
                <a href="Mailto:joshjankowski@gmail.com">
                    <p>joshjankowski@gmail.com</p>
                </a>
            </div>
        </div>
        <div className="footer" id="add"><i className="fa-solid fa-plus icon"></i>
            <div className="f-text">
                <h4>Follow Me</h4>
                <a href="https://www.facebook.com/HPnotiQJosh"><i className="fa-brands fa-facebook small-icon"></i></a>
                <a href="https://www.linkedin.com/in/joshuajankowski/"><i
                        className="fa-brands fa-linkedin small-icon"></i></a>
                <a href="https://github.com/joshjankowski"><i className="fa-brands fa-github small-icon"></i></a>
            </div>
        </div>
        <div className="footer" id="copyright"><i className="fa-solid fa-copyright icon"></i>
            <div className="f-text">
                <h4>Copyright</h4>
                <p>J Cubed LLC, All Rights Reserved.</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  