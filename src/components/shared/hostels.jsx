/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Icon from 'react-feather';
import jwala from '../images/hostels/jwala.png';

const hostels = [
  {
    id: 0,
    name: 'Aravali Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <a className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </a>
    ),
    mapUrl: '',
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 1,
    name: 'Girnar Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <a className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </a>
    ),
    mapUrl: '',
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 2,
    name: 'Himadri Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <a className="c-btn girls">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Girls
        </span>
      </a>
    ),
    mapUrl: '',
    learnUrl: '',
    image: <img src={jwala} alt="Jwalamukhi Hostel" className="card-img" />,
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
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
      <a className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </a>
    ),
    mapUrl: '',
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
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
      <a className="c-btn girls">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Girls
        </span>
      </a>
    ),
    mapUrl: '',
    learnUrl: '',
    image: <img src={jwala} alt="Jwalamukhi Hostel" className="card-img" />,
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 5,
    name: 'Karakoram Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <a className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </a>
    ),
    mapUrl: '',
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 6,
    name: 'Kumaon Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <a className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </a>
    ),
    mapUrl: '',
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
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
      <a className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </a>
    ),
    mapUrl: '',
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 8,
    name: 'Shivalik Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <a className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </a>
    ),
    mapUrl: '',
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 9,
    name: 'Satpura Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <a className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </a>
    ),
    mapUrl: '',
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 10,
    name: 'Udaigiri Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <a className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </a>
    ),
    mapUrl: '',
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 11,
    name: 'Vindhyachal Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <a className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </a>
    ),
    mapUrl: '',
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
  {
    id: 12,
    name: 'Zanskar Hostel',
    est: 1965,
    description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
    category: (
      <a className="c-btn fb">
        <span className="hostel-link">
          <Icon.User height="15" strokeWidth="3" />
          Boys
        </span>
      </a>
    ),
    mapUrl: '',
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
      'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
      'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
    ],
  },
];

export default hostels;
