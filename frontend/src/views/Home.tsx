import React from 'react';
import './Home.css';
import pc1 from '../assets/pc-1.png';
import logo from '../assets/logo_white.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faCompass, faCopyright, faHandshake} from "@fortawesome/free-solid-svg-icons";
import Form from "../components/Home/Form.tsx";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Home: React.FC<any> = () => {

  return (
    <div className="home">
      <div className="container">
        <div className="section section-with-columns">
          <div className="col">
            <h1 className="section-h1">
              free, collaborative & open-source encyclopedia
            </h1>
            <h2 className="section-h2">WikiIdeas</h2>
            <p>
              Our mission is to provide a platform so everyone in the world can share their knowledge with each
              other.
            </p>
          </div>
          <div className="col">
            <img src={pc1}/>
          </div>
        </div>


      </div>

      <div className="negative">
        <div className="container">
          <ul className="list">
            <li>
              <FontAwesomeIcon icon={faBook} size="lg"/>
              Learn
            </li>
            <li>
              <FontAwesomeIcon icon={faHandshake} size="lg"/>
              Create
            </li>
            <li>
              <FontAwesomeIcon icon={faCompass} size="lg"/>

              Explore
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <Form/>
      </div>


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