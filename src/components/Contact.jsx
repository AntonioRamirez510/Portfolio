import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {

  const handleClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfXfRzPOSM8Gnq1_TH8vkfvJxq8RoZ_bd50at9ys__FZcS8CQ/viewform', '_blank');
  }

  return (
    <section id="contact">
      <div className="contact">

        <h2>CONTACT</h2>

        <button className="email-button" onClick={handleClick}>Contact via Google Forms</button>
        <div className="icon-container">

          <div className="github">
            Reach me on Github
            <a href="https://github.com/AntonioRamirez510"
            target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
         </div>

          <div className="linkedin">
            Reach me on Linkedin
            <a href="https://www.linkedin.com/in/antonio-ramirez-dev/"
             target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
