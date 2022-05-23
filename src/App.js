import React from 'react';

import './App.css';

import portrait from './assets/photos/DSC_5042-Bearbeitet.jpg';
import paypal from './assets/icons/paypal.svg';
import instagram from './assets/icons/instagram.svg';
import patreon from './assets/icons/patreon.svg';
import kofi from './assets/icons/kofi.svg';
import youtube from './assets/icons/youtube.svg';

const social = [
  {
    label: 'Instagram',
    component: instagram,
    url: 'https://www.instagram.com/yolanda.diefenbach/',
  },
  {
    label: 'Patreon',
    component: patreon,
    url: 'https://www.patreon.com/yolandadiefenbach',
  },
  {
    label: 'Youtube',
    component: youtube,
    url: 'https://www.youtube.com/user/yolinumberone',
  },
  {
    label: 'Ko-fi',
    component: kofi,
    url: 'https://ko-fi.com/soyyolanda',
  },
  {
    label: 'Paypal',
    component: paypal,
    url: 'https://www.paypal.com/paypalme/soyyolanda',
  }
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <section className="hero">
          <div className="hero__img"></div>
          <h1
            className="hero__title glitch"
            data-glitch="Awake."
          >Awake.</h1>
        </section>
      </header>
      {/* <nav className="nav">
        <p className="nav__brand">
          Yolanda Diefenbach
        </p>
      </nav> */}
      <section role="main" className="main">
        <section className="content">
          <img
            className="content__portrait"
            src={portrait}
          />
          <div className="animation-wrapper">
            <blockquote
              cite="https://yolandadiefenbach.com/"
              className="content__quote animation-fade animation-fade--out-in"
            >
              awake awake little grace<br />
              awake awake bursted your silk case<br />
              no limit infinte wast waits<br />
              awake awake little grace
            </blockquote>
            <blockquote
              cite="https://yolandadiefenbach.com/"
              className="content__quote animation-fade animation-fade--in-out"
            >
              inhale inhale wide splay<br />
              follow you wonderful pale lemon grace<br />
              wayfare light years anyway<br />
              live alive love be loved pale lemon grace
            </blockquote>
          </div>
        </section>
        <section className="content">
          <ul className="sociallist">
            { social.map(item => (
            <li className="sociallist__item">
              <a href={item.url} className="sociallist__item__link">
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
            href="mailto:hello@soyyolanda.com"
          >hello@soyyolanda.com</a>
        </footer>
      </section>
    </div>
  );
}

export default App;
