import React, {  useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'


 const Home=() => {

const [letterClass, /*setLetterClass*/] = useState('text-animate'); 
const nameArray = ['a', 'n', 'd', 'u', 'd', 'e', 'e', 'p', 't', 'h', 'a'];
const jobArray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];




  return (
    <>
    <div className="container home-page">
        <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer"/>
            <AnimatedLetters letterClass={letterClass} startArray={nameArray} idx={15} />
            <br/>
            <AnimatedLetters letterClass={letterClass} startArray={jobArray} idx={15} />
        </h1>
            <h2>A passionate frontend web developer with <br/><br/> React / javaScript <br/><br/> 
             Background in SofweraEnginering.</h2>
            <Link to="/contact" className="flat-button">Contact Me</Link>

          
        </div>

    </div>
     <Loader type="pacman"/>
     </>
  )
}

export default Home;
