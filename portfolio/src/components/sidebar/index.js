import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className="navbar">
            {/* Removed unused <Link> component */}
            <nav>
                <NavLink exact activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="aqua"/>
                </NavLink>
                <NavLink exact activeClassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="aqua"/>
                </NavLink>
                <NavLink exact activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="aqua"/>
                </NavLink>
            </nav>
            {/* Added an unordered list with a list item containing a LinkedIn link */}
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mihisankasandudeeptha/'>
                        <FontAwesomeIcon icon={faLinkedin} color="aqua"/>
                    </a>
                </li>

                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Mihisanka'>
                        <FontAwesomeIcon icon={faGithub} color="aqua"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
