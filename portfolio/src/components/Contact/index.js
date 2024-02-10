import React, { useRef } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from 'emailjs-com'; // Imported emailjs-com package

const Contact = () => {
    // Define the letterClass if needed, assuming it's a class name for styling
    const letterClass = 'animated-letter';

    const form = useRef(); // Moved useRef inside the component function

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('gmail', 'service_8789koc', form.current, 'your-token')
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            );
    };

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            startArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using the form below.
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required /> {/* Fixed typo in the name attribute */}
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input className='flat-button' type='submit' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
