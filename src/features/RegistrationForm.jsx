import React from 'react';
import illustration from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import Form from '../Components/Form/Form';
import '../styles/style.css';

function RegistrationForm() {
  return (
    <>
      <main className='registrationForm'>
        <div className='leftSide'>
          <img className='logoImg' src={logoImg} alt='logoImg' />
          <img className='Illustration' src={illustration} alt='illustration' />
          <div className='textContainer'>
            <h2>Start for free & Get Attractive offers Today !</h2>
          </div>
        </div>
          <Form />
      </main>

    </>
  );
}

export default RegistrationForm;
