import './index.scss';
//import LogoS from '../../assets/images/logo-s.png';
//import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink,Link } from 'react-router-dom'; 

const Sidebar = () => {
    return (
        <div className="navbar">
           <Link exact activeClassName="active" to="/">
                {/* <img className='logo' src={LogoS} alt="logo"/> */}
                {/* <img className="sub-logo" src={LogoSubtitle} alt="slowdown"/> */}
            </Link>

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
            
        </div>
    );
}

export default Sidebar;
