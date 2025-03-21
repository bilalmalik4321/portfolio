import React from 'react';
import './Hobbies.css';

interface Hobby {
  name: string;
  icon: string;
  description: string;
}

const hobbies: Hobby[] = [
  {
    name: 'Islam',
    icon: '🕌',
    description: 'Spiritual growth and religious studies'
  },
  {
    name: 'Food',
    icon: '🍽️',
    description: 'Exploring diverse cuisines and culinary experiences'
  },
  {
    name: 'Mathematics',
    icon: '📐',
    description: 'Mathematical modeling and problem solving'
  },
  {
    name: 'History',
    icon: '📚',
    description: 'Exploring historical events and civilizations'
  },
  {
    name: 'Video Games',
    icon: '🎮',
    description: 'Gaming and entertainment'
  },
  {
    name: 'Art & Drawing',
    icon: '🎨',
    description: 'Sketching realistic and cartoon portraits'
  },
  {
    name: 'Baseball',
    icon: '⚾',
    description: 'MLB and baseball analytics'
  },
  {
    name: 'Coding',
    icon: '💻',
    description: 'Software development and programming'
  },
  {
    name: 'Basketball',
    icon: '🏀',
    description: 'NBA and college basketball enthusiast'
  },
  {
    name: 'American Football',
    icon: '🏈',
    description: 'Following NFL and college football'
  },
  {
    name: 'War Journalism',
    icon: '📰',
    description: 'Monitoring and analyzing global conflicts'
  },
  {
    name: 'Geography',
    icon: '🌍',
    description: 'Global geography and national flags expertise'
  }
];

const Hobbies: React.FC = () => {
  return (
    <section className="hobbies-section">
      <h2>Hobbies & Interests</h2>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <h3>{hobby.name}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
      <div className="made-with-love">
        Made by cursor
      </div>
    </section>
  );
};

export default Hobbies; 