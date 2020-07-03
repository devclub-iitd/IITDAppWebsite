/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Icon from 'react-feather';
import dogra from '../images/campus/dogra.jpg';

const locations = [
  {
    id: 0,
    cd: [28.544966, 77.192497],
    name: 'Dogra Hall',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'academic',
    desc:
            "IIT Delhi's main multipurpose auditorium hall with the iconic hyperbolic paraboloid roof.",
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 1,
    cd: [28.545379, 77.192362],
    name: 'Cafe Coffee Day',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'eat',
    desc:
            'The famous Café cum restaurant, serving coffee, cakes and sandwiches at subsidized rates.',
    categoryIcon: (
      <a className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 2,
    cd: [28.545423, 77.191826],
    name: 'SCOOPS',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'util',
    desc:
            'SCOOPS or Student Co-Operative Society is the one stop for all your stationery needs, at affordable rates.',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 3,
    cd: [28.545488, 77.191608],
    name: 'Dept. Of Electrical Engineering',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'academic',
    desc:
            'The Department of Electrical Engineering, IIT Delhi is situated here.',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 4,
    cd: [28.545119, 77.191288],
    name: 'Red Square',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'academic',
    desc:
            'A popular hangout spot, Red Square is so named because of the colour of its flooring. ',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 5,
    cd: [28.544848, 77.191558],
    name: 'Amul Cafe',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 6,
    cd: [28.544719, 77.19118],
    name: 'Shiru Cafe',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 7,
    cd: [28.544717, 77.191666],
    name: 'HPMC Store',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 8,
    cd: [28.544595, 77.191713],
    name: 'Nescafé',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 9,
    cd: [28.544668, 77.191461],
    name: 'Central Library',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'academic',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 10,
    cd: [28.546202, 77.191276],
    name: 'Dept. Of Civil Engineering',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'academic',
    desc:
            'The Department of Civil Engineering, IIT Delhi is situated here.',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 11,
    cd: [28.547591, 77.188799],
    name: 'Girnar House',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 12,
    cd: [28.547718, 77.1892],
    name: 'Udaigiri Hostel',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 13,
    cd: [28.548277, 77.187985],
    name: 'Satpura House',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 14,
    cd: [28.548729, 77.18622],
    name: 'Vindhyachal Hostel',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 15,
    cd: [28.54764, 77.185877],
    name: 'Shivalik Hostel',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 16,
    cd: [28.54667, 77.18626],
    name: 'Zanskar Hostel',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 17,
    cd: [28.549264, 77.185153],
    name: 'Kumaon Hostel',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 18,
    cd: [28.549678, 77.18394],
    name: 'Jwalamukhi Hostel',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 19,
    cd: [28.548771, 77.183583],
    name: 'Aravali Hostel',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 20,
    cd: [28.547332, 77.183122],
    name: 'Karakoram Hostel',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 21,
    cd: [28.546281, 77.182476],
    name: 'Nilgiri Hostel',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 22,
    cd: [28.545202, 77.197092],
    name: 'Himadri Hostel',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 23,
    cd: [28.544632, 77.196963],
    name: 'Kailash Hostel',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 24,
    cd: [28.5428665, 77.1931332],
    name: 'Lecture Hall Complex',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'academic',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 25,
    cd: [28.54343789812074, 77.19127982854845],
    name: 'Staff Canteen',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 26,
    cd: [28.54571905400154, 77.19358921051027],
    name: 'Dept. of Biotechnology',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'academic',
    desc:
            'The Department of Biochemical Engineering and Biotechnology, IIT Delhi is situated here.',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 27,
    cd: [28.548201298663667, 77.18435704708101],
    name: 'Rajdhani Chatkare Foods',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 28,
    cd: [28.54370308948772, 77.19027936458589],
    name: 'Hockey/Athletics Field',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'sport',
    desc: 'The Institute hockey and athletics field.',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 29,
    cd: [28.544343680524918, 77.1889114379883],
    name: 'Cricket Ground',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 30,
    cd: [28.544941875990535, 77.18845009803773],
    name: 'Basketball Courts',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 31,
    cd: [28.544833541630556, 77.18754887580873],
    name: 'Football Ground',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 32,
    cd: [28.545126, 77.193483],
    name: 'BioTech Lawns',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 33,
    cd: [28.545940430931072, 77.18602001667024],
    name: 'Swimming Pool',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 34,
    cd: [28.548183537902325, 77.18495249748231],
    name: 'Volleyball Courts',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 35,
    cd: [28.54758896789944, 77.18481838703157],
    name: 'Lawn Tennis Courts',
    img: <img src={dogra} alt="Dogra Hall" />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: '',
  },
];

export default locations;
