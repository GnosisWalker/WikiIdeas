import React, {useLayoutEffect} from 'react';
import './Home.css';
import pc1 from '../assets/pc-1.png';
import logo from '../assets/logo_white.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faCompass, faCopyright, faHandshake} from "@fortawesome/free-solid-svg-icons";
import Form from "../components/Home/Form.tsx";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Home: React.FC<any> = () => {
  /**
   * Computes and sets the transition-delay of all .hidden elements per section so they come up one at a time
   */
  const setTransitionDelays = () => {
    const homeEl: HTMLElement = document.querySelector('.home') as HTMLElement;

    const baseTransitionDelay = parseFloat(getComputedStyle(homeEl).getPropertyValue('--base-transition-delay'));

    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const hiddenEls = section.querySelectorAll('.hidden');

      hiddenEls.forEach((el, index) => {
        const delay = baseTransitionDelay + baseTransitionDelay * index;
        (el as HTMLElement).style.setProperty('transition-delay', `${delay}s`);
      })
    });
  };

  useLayoutEffect(() => {
    setTransitionDelays();

    const hiddenEls = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shown');
          observer.unobserve(entry.target);
        }
      })
    }, {
      root: document.querySelector("#root"),
      threshold: 0.5,
    });

    // wait for 20s so the DOM has time to render
    setTimeout(() => {
      hiddenEls.forEach(el => observer.observe(el));
    }, 20);

    return () => {
      hiddenEls.forEach(el => observer.unobserve(el));
    }
  }, []);

  return (
    <div className="home">
      <div className="container">

        <section className="section-with-columns">
          <div className="col">
            <h1 className="section-h1 enter-from-left hidden">
              free, collaborative & open-source encyclopedia
            </h1>
            <h2 className="section-h2 enter-from-left hidden">WikiIdeas</h2>
            <p className="enter-from-left hidden">
              Our mission is to provide a platform so everyone in the world can share their knowledge with each
              other.
            </p>
          </div>
          <div className="col enter-from-right hidden">
            <img src={pc1}/>
          </div>
        </section>

      </div>

      <section className="negative">
        <div className="container">
          <ul className="list">
            <li className="enter-from-left hidden">
              <FontAwesomeIcon icon={faBook} size="lg"/>
              Learn
            </li>
            <li className="enter-from-left hidden">
              <FontAwesomeIcon icon={faHandshake} size="lg"/>
              Create
            </li>
            <li className="enter-from-left hidden">
              <FontAwesomeIcon icon={faCompass} size="lg"/>
              Explore
            </li>
          </ul>
        </div>
      </section>

      <section className="container">
        <Form className="hidden"/>
      </section>

      <footer className="alternate">
        <div className="col copyright">
          <FontAwesomeIcon icon={faCopyright} size="lg"/>
          <span className="year">2023</span>
          WIKIDEAS
        </div>

        <div className="col logo">
          <img data-logo-foreground-color="red" src={logo}/>
        </div>

        <div className="col social">
          <FontAwesomeIcon icon={faFacebook} size="lg"/>
          <FontAwesomeIcon icon={faInstagram} size="lg"/>
          <FontAwesomeIcon icon={faTwitter} size="lg"/>
        </div>
      </footer>

    </div>
  );
};

export default Home;