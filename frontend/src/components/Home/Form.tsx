import React, {useState} from 'react';
import {faBookOpenReader, faHandsHolding, faUsers} from "@fortawesome/free-solid-svg-icons";
import './Form.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Form: React.FC<any> = () => {
  const [selected, setSelected] = useState(0);
  const data = [
    {
      icon: faHandsHolding,
      title: 'Completely free',
      content: 'Our encyclopedia is different from other online resources because it\'s completely free and open to everyone. We don\'t charge any fees for accessing or contributing to our articles, and we don\'t run ads or accept donations. We\'re funded entirely by the contributions of our volunteers and supporters.'
    },
    {
      icon: faUsers,
      title: 'Collaborative',
      content: 'Our encyclopedia is also collaborative, which means that anyone can contribute to it. This ensures that our content is constantly being updated and improved by experts in their respective fields. And because we\'re open-source, all of our articles are available for anyone to use or modify, as long as they credit the original authors.'
    },
    {
      icon: faBookOpenReader,
      title: 'Share your knowledge',
      content: 'As a contributor, you\'ll have the opportunity to showcase your expertise and build your reputation in your field. You\'ll also gain valuable experience in writing, research, and collaboration, which can help you in your personal and professional life.'
    },
  ];

  return (
    <div className="home__form">
      <div className="nav">
        {
          data.map((item, index) =>
            <div className={`navItem ${index === selected ? 'selected' : ''}`} onClick={() => setSelected(index)}>
              <FontAwesomeIcon icon={item.icon}/>
              {item.title}
            </div>
          )
        }
      </div>

      <div className="content">
        {
          data[selected].content
        }
      </div>
    </div>
  );
};

export default Form;