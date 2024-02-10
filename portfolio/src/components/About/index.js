import React from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faJsSquare, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, /*setLetterClass*/] = useState('text-animate'); 
  return (
    <>
    <div className='container about-us'>
        <div className='text-zone'>
            <h1>
        <AnimatedLetters
            letterClass={letterClass}
            startArray={['A', 'b', 'o', 'u', 't',' ','M', 'e', '.']}
             
             idx={15}
             />
             </h1>
             <p>
            I'm a very ambitious front-end developer looking for a role in
            an established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
        <div className="stage-cube-cont"> 
            <div className="cubespinner">
                <div className='face1'>
                  <FontAwesomeIcon icon={faHtml5} color=""/>
                </div>
                <div className='face2'>
                  <FontAwesomeIcon icon={faCss3} color=""/>
                </div>
                <div className='face3'>
                  <FontAwesomeIcon icon={faReact} color=""/>
                </div>
                <div className='face4'>
                  <FontAwesomeIcon icon={faJsSquare} color=""/>
                </div>
                <div className='face5'>
                  <FontAwesomeIcon icon={faLinkedin} color=""/>
                </div>
                <div className='face6'>
                  <FontAwesomeIcon icon={faGithub} color=""/>
                </div>
            </div>

          </div>
    </div>
    <Loader type="pacman"/>
    </>
  );
};

export default About;
