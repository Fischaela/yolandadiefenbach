import React from 'react';

import './App.css';

import portrait from './assets/photos/DSC_5042-Bearbeitet.jpg';
import bandcamp from './assets/icons/bandcamp.svg';
import instagram from './assets/icons/instagram.svg';
import patreon from './assets/icons/patreon.svg';
import spotify from './assets/icons/spotify.svg';
import youtube from './assets/icons/youtube.svg';

const social = [
  {
    label: 'Bandcamp',
    component: bandcamp,
  },
  {
    label: 'Instagram',
    component: instagram,
  },
  {
    label: 'Patreon',
    component: patreon,
  },
  {
    label: 'Spotify',
    component: spotify,
  },
  {
    label: 'Youtube',
    component: youtube,
  }
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <section className="hero">
          <h1 className="title">Yolanda Diefenbach</h1>
        </section>
      </header>
      <nav className="nav">
        <p className="nav__brand">
          Yolanda Diefenbach
        </p>
      </nav>
      <section role="main" className="main">
        <section className="content">
          <img
            className="content__portrait"
            src={portrait}
          />
          <q className="content__quote">May we never stop inpiring our children. May we never stop being a child.</q>
        </section>
        <section className="content">
          <ul className="sociallist">
            { social.map(item => (
            <li className="sociallist__item">
              <a href="#" className="sociallist__item__link">
                <img
                  className="sociallist__item__link__image"
                  src={item.component}
                />
                <p className="sociallist__item__link__label">{item.label}</p>
              </a>
            </li>
            ))}
          </ul>
        </section>
        <footer className="footer">
          <a
            className="footer__item"
            href="mailto:yolanda.diefenbach@gmail.com"
          >yolanda.diefenbach@gmail.com</a>
        </footer>
      </section>
    </div>
  );
}

export default App;
