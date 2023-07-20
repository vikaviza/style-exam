import React from 'react';
import illustration from './img/illustration.svg';
import logoImg from './img/logo.svg';
import './styles/style.css';

function App() {
  return (
    <div>
      <main>
        <div className='leftSide'>
          <img className='logoImg' src={logoImg} alt='logoImg' />
          <img className='Illustration' src={illustration} alt='illustration' />
          <div className='textContainer'>
            <p>Start for free & Get Attractive offers Today !</p>
          </div>

        </div>
        <div className='rightSide'>

        </div>
      </main>

    </div>
  );
}

export default App;
