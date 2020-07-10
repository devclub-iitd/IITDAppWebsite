import React from 'react';
import rdv from '../images/events/rdv.svg';
import tryst from '../images/events/tryst.svg';
import rdvBg from '../images/events/rdv19.jpg';
import trystBg from '../images/events/trystBg.png';

const events = [
  {
    id: 0,
    name: 'Rendezvous',
    date: 'October',
    summary:
            'Rendezvous (RDV), is the annual Cultural Festival of the IIT Delhi. It is a four-day-long event held in October every year. RDV&apos;19 hosted 280+ events and had a footfall of over 163,000, 15,000+ participants and 200+ artists from more than 25 countries.',
    detail: '',
    attractions: 'Shankar-Ehsaan-Loy, Ritviz, Naezy , Amit Trivedi',
    webLink: 'sdsds',
    fbLink:
            'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwin2LXfq5vqAhXJV30KHbhVCG8QFjAAegQIDhAB&url=https%3A%2F%2Fwww.facebook.com%2Frendezvous.iitd%2F&usg=AOvVaw2MD7BakkxDWcPl9uJ7DL63',
    instaLink:
            'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwin2LXfq5vqAhXJV30KHbhVCG8QFjACegQIARAB&url=https%3A%2F%2Fwww.instagram.com%2Frendezvous.iitd%2F%3Fhl%3Den&usg=AOvVaw2xk_tl5yvdZ8AgD9KXGrHM',
    vectorLogo: <img src={rdv} alt="RDV Logo" />,
    bgImg: rdvBg,
  },
  {
    id: 1,
    name: 'Tryst',
    date: 'March',
    summary:
            'Tryst is the annual technical festival of the Indian Institute of Technology Delhi, held in February and March. The festival is the largest technical festival in North India, with an attendance of more than 60,000 people',
    detail: 'The 2020 edition of Tryst, scheduled for 6th-8th March has been postponed indefinitely due to the ongoing Covid19 crisis in India',
    attractions: 'International Robotics Challenge,  HACK-IT, National Junior Robotics Challenge, Android Hackathon, Quadcopter Challenge, IOT Challenge, Asgard',
    webLink: 'https://tryst-iitd.org',
    fbLink:
            'https://www.facebook.com/IITD.Tryst',
    instaLink:
            'https://www.instagram.com/trystiitd/',
    vectorLogo: <img src={tryst} alt="Tryst Logo" style={{ position: 'static' }} />,
    bgImg: trystBg,
  },
];

export default events;
