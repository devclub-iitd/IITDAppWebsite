import React from 'react';
import * as Icon from 'react-feather';
import aravali from '../images/hostels/aravali.png';
import girnar from '../images/hostels/girnar.jpeg';
import himadri from '../images/hostels/himadri.png';
import jwala from '../images/hostels/jwala.png';
import kailash from '../images/hostels/kailash.png';
import kumaon from '../images/hostels/kumaon.jpg';
import nilgiri from '../images/hostels/nilgiri.jpeg';
import satpura from '../images/hostels/satpura.jpg';
import shivalik from '../images/hostels/shivalik.png';
import udaigiri from '../images/hostels/udaigiri.jpg';
import vindy from '../images/hostels/vindy.jpg';
import zanskar from '../images/hostels/zanskar.jpg';

const hostels = [
  {
    id: 0,
    name: 'Aravali Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/mWKenH5ZZrESUHVD8',
    learnUrl: '',
    image: <img src={aravali} alt="Aravali Hostel" className="card-img" />,
    for: 'boys',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 1,
    name: 'Girnar Hostel',
    est: 2011,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/w63tTyrBJgxzAkHc8',
    learnUrl: '',
    image: <img src={girnar} alt="Girnar Hostel" className="card-img" />,
    for: 'boys',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 2,
    name: 'Himadri Hostel',
    est: 2001,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn girls">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Girls
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/uzupEtgPEoAg1vPq6',
    learnUrl: '',
    image: <img src={himadri} alt="Himadri Hostel" className="card-img" />,
    for: 'girls',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 3,
    name: 'Jwalamukhi Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/eAmS1TsNP5m1LnDh6',
    learnUrl: '',
    image: <img src={jwala} alt="Jwalamukhi Hostel" className="card-img" />,
    for: 'boys',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 4,
    name: 'Kailash Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn girls">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Girls
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/eD7q11byMmBTYRfB7',
    learnUrl: '',
    image: <img src={kailash} alt="Kailash Hostel" className="card-img" />,
    for: 'girls',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 5,
    name: 'Karakoram Hostel',
    est: 1966,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/FJj9G3i97T7JDpKR6',
    learnUrl: '',
    image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSNBV4bhbjsb0Mwtmq1wZpYxBrbBfWghHMVktY0BiSsYrRjVPq&usqp=CAU" alt="Karakoram Hostel" className="card-img" />,
    for: 'boys',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 6,
    name: 'Kumaon Hostel',
    est: 1969,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/Kze1176A9LS8TrPG7',
    learnUrl: '',
    image: <img src={kumaon} alt="Kumaon Hostel" className="card-img" />,
    for: 'boys',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 7,
    name: 'Nilgiri Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/JgHDHNw9WYRDckFn6',
    learnUrl: '',
    image: <img src={nilgiri} alt="Nilgiri Hostel" className="card-img" />,
    for: 'boys',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 8,
    name: 'Satpura Hostel',
    est: 2005,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/c7UZDwrC8wKhPdXb8',
    learnUrl: '',
    image: <img src={satpura} alt="Satpura Hostel" className="card-img" />,
    for: 'boys',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 9,
    name: 'Shivalik Hostel',
    est: 1961,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/ujqQ6UiyD38w8KDy5',
    learnUrl: '',
    image: <img src={shivalik} alt="Shivalik Hostel" className="card-img" />,
    for: 'boys',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 10,
    name: 'Udaigiri Hostel',
    est: 2012,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/1KjtHKaA37fSdiq8A',
    learnUrl: '',
    image: <img src={udaigiri} alt="Udaigiri Hostel" className="card-img" />,
    for: 'boys',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 11,
    name: 'Vindhyachal Hostel',
    est: 1963,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/ek7e1odhwHGSoSkq5',
    learnUrl: '',
    image: <img src={vindy} alt="Vindhyachal Hostel" className="card-img" />,
    for: 'boys',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 12,
    name: 'Zanskar Hostel',
    est: 2005,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <div type="div" className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </div>
    ),
    mapUrl: 'https://goo.gl/maps/ZgxCSeRtxHGF1PdUA',
    learnUrl: '',
    image: <img src={zanskar} alt="Zanskar Hostel" className="card-img" />,
    for: 'boys',
    warden: 'Sample Warden',
    wardenLink: '',
    notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founder, Flipkart'],
    notableAlumniLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    notableAlumniImages: [
      'https://img.huffingtonpost.com/divsset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
];

export default hostels;
