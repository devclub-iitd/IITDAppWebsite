import React from 'react';
import rdv from '../assets/events/rdv.svg';
import tryst from '../assets/events/tryst.svg';
import convergenz from '../assets/events/convergenz.svg';
import literati from '../assets/events/literati.svg';
import sportech from '../assets/events/sportech.png';
import BECon from '../assets/events/BECon.png';
import rdvBg from '../assets/events/rdv19.jpg';
import trystBg from '../assets/events/trystBg.jpeg';
import convergenzBg from '../assets/events/convergenzBG.jpg';
import literatiBg from '../assets/events/literatiBG.png';
import BEConBg from '../assets/events/BEConBG.jpg';
import sportechBg from '../assets/events/sportechBG.jpg';

const events = [
  {
    id: 0,
    name: 'Rendezvous',
    date: 'October',
    summary:
            'Rendezvous (RDV), is the annual Cultural Festival of the IIT Delhi. It is a four-day-long event held in October every year. RDV&apos;19 hosted 280+ events and had a footfall of over 163,000, 15,000+ participants and 200+ artists from more than 25 countries.',
    detail: '',
    attractions: 'Shankar-Ehsaan-Loy, Ritviz, Naezy , Amit Trivedi',
    webLink: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiz2Mr3jsXqAhXK8XMBHQu-DvoQFjAPegQIBhAB&url=http%3A%2F%2Frdv-iitd.com%2F&usg=AOvVaw0noGxkj0e2xxjUewEGgtKM',
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
  {
    id: 2,
    name: 'Convergenz',
    date: 'September',
    summary:
                'Convergenz is the youth fest of IIT Delhi, organised by the Board Of Student Welfare IIT Delhi.',
    attractions: 'Comedy Night ft. Nishant Tanwar, Band Night ft. Zikrr, Enigma: The Magic SHow, Prom Night, Mr & Ms Fresher, Movie Night',
    webLink: 'https://tryst-iitd.org',
    fbLink:
                'https://www.facebook.com/speranza.iitd',
    instaLink:
                'https://instagram.com/bsw_iitd?igshid=tk3g77eeb4fc',
    vectorLogo: <img src={convergenz} alt="Convergenz Logo" />,
    bgImg: convergenzBg,
  },
  {
    id: 3,
    name: 'Literati',
    date: 'September',
    summary:
                    ' Literati is the annual literary fest of IIT Delhi. Literati represents a platform wherein knowledge meets entertainment, wherein ideas are valued, experiences are shared, and endless memories are etched.',
    attractions: 'Comedy Night ft. Nishant Tanwar, Band Night ft. Zikrr, Enigma: The Magic SHow, Prom Night, Mr & Ms Fresher, Movie Night',
    webLink: 'https://tryst-iitd.org',
    fbLink:
                    'https://www.facebook.com/Literati.IITD/',
    instaLink:
                    'https://instagram.com/bsp.iitdelhi?igshid=1373knzn0sswz',
    vectorLogo: <img src={literati} alt="Literati Logo" />,
    bgImg: literatiBg,
  },
  {
    id: 4,
    name: 'BECon',
    date: 'September',
    summary:
                        'BECon is IIT Delhi\'s annual business and entrepreneurship conclave. The BECon aims to encourage interdisciplinary problem-solving analysis and implementation among participants on advancing human, society and country development within the scope of business and entrepreneurship.',
    attractions: 'Events ft. Mark Zuckerberg, Rajat Sharma, Kunal Shah, Sachin Bansal, Dara Khosrowshahi, Jack Dorsey, Chris Cox, Jayant Sinha',
    webLink: 'http://edc.iitd.ac.in/becon/index.html',
    fbLink:
                        'https://www.facebook.com/edciitdelhi',
    instaLink:
                        'https://instagram.com/edc_iitd?igshid=1r47o3s7lqj0k',
    vectorLogo: <img src={BECon} alt="BECon Logo" />,
    bgImg: BEConBg,
  },
  {
    id: 5,
    name: 'Sportech',
    date: 'March',
    summary:
                            'Sportech is IIT Delhi\'s official annual sports fiesta, organised by the Board of Sports Activities IIT Delhi. It is one of the largest sports festivals in the country with participation from colleges around the country offering an unparalleled competitive environment.',
    attractions: 'Every sport you can think of, informal quizzes, Treasure Hunts, kite flying and treks',
    webLink: 'https://www.sportechiitd.com/',
    fbLink:
                            'https://www.facebook.com/iitd.sportech/',
    instaLink:
                            'https://instagram.com/sportech.iitd?igshid=16rz1ey6al2p',
    vectorLogo: <img src={sportech} alt="Sportech Logo" />,
    bgImg: sportechBg,
  },
];

export default events;
