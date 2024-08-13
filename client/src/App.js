import React from 'react';
import './Landing-page/Style.css';


function App() {
  return (
    <div className="App">
      <header>
        <nav className="navigation">
          <a href="/" className="logo" aria-label="Logo">
            <span>T</span><span>R</span><span>A</span><span>V</span><span>E</span><span>L</span><span> </span><span>E</span><span>A</span><span>S</span><span>E</span>
          </a>
          <ul className="nav-menu">
            <li className="nav-item" id="nav-item-home">
              <a href="/" aria-label="Home">Home</a>
            </li>
            <li className="nav-item" id="nav-item-about">
              <a href="/" aria-label="About">About</a>
            </li>
            <li className="nav-item" id="nav-item-services">
              <a href="/" aria-label="Services">Services</a>
            </li>
            <li className="nav-item" id="nav-item-ag">
              <a href="/" aria-label="Agendas">Agendas</a>
            </li>
            <li className="nav-item" id="nav-item-contact">
              <a href="/" aria-label="Contact">Contact</a>
            </li>
          </ul>
          <div className="menu" tabIndex="0" aria-label="Menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
      <main>
        <section className="home">
          <div className="home-text">
            <h4 className="text-h4" style={{ listStyle: 'none', textAlign: 'center' }}>
              Easing your travel
            </h4>
            <h1 className="text-h1" style={{ listStyle: 'none', textAlign: 'center' }}>
              The journey of a thousand miles begins with a single step
            </h1>
            <ul className="decision">
              <li style={{ listStyle: 'none', textAlign: 'center' }}>
                <button className="home-btn" tabIndex="0" aria-label="I know my destination">
                  <a href="/">I know my destination</a>
                </button>
              </li>
              <li style={{ listStyle: 'none', textAlign: 'center' }}>OR</li>
              <li style={{ listStyle: 'none', textAlign: 'center' }}>
                <button className="home-btn" tabIndex="0" aria-label="I have no idea about my destination">
                  <a href="/">I have no idea about my destination</a>
                </button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
