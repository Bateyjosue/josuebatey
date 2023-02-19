import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './home.css';
const Home = () => {
  return (
    <div className="home-container">
      <h3 className='headline-greeting'>
        <span>Hi,</span>
        <TypeAnimation
          sequence={[
            'Hello', 3000, 
            'Hallo', 2000, 
            'Jambo', 3000,
            'Mbote', 3000,
            'Bonjour', 3000
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em' }}
        />
      </h3>
      <div className="headline-section">
        <p>I'm A Software Developer with Interest in <strong>Python</strong>, <strong>JavaScript</strong> and <strong>Ruby</strong></p>
        <button>Hire Me</button>
      </div>
    </div>
  )
}

export default Home