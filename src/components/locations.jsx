import React from 'react';
import dogra from './images/campus/dogra.jpg';

const locations = [
    {
        id: 0,
        cd: [28.544966, 77.192497],
        name: 'Dogra Hall',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'academic',
        desc:
            "IIT Delhi's main multipurpose auditorium hall with the iconic hyperbolic paraboloid roof and a seating capacityof  over 1200.",
    },
    {
        id: 1,
        cd: [28.545379, 77.192362],
        name: 'Cafe Coffee Day',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'academic',
        desc:
            'The famous Café cum restaurant, serving coffee, cakes and sandwiches at subsidized rates.',
    },
    {
        id: 2,
        cd: [28.545423, 77.191826],
        name: 'SCOOPS',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'academic',
        desc:
            'SCOOPS or Student Co-Operative Society is the one stop for all your stationery and in-campus needs, at affordable rates. SCOOPS is a store run by BSW.',
    },
    {
        id: 3,
        cd: [28.545488, 77.191608],
        name: 'Dept. Of Electrical Engineering',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'academic',
        desc:
            'The Department of Electrical Engineering, IIT Delhi is situated here.',
    },
    {
        id: 4,
        cd: [28.545119, 77.191288],
        name: 'Red Square',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'academic',
        desc:
            'A popular hangout spot, Red Square is so named because of the colour of its flooring. ',
    },
    {
        id: 5,
        cd: [28.544848, 77.191558],
        name: 'Amul Cafe',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'academic',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 6,
        cd: [28.544719, 77.19118],
        name: 'Shiru Cafe',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'academic',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 7,
        cd: [28.544717, 77.191666],
        name: 'HPMC Store',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'academic',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 8,
        cd: [28.544595, 77.191713],
        name: 'Nescafé',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'academic',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 9,
        cd: [28.544668, 77.191461],
        name: 'Central Library',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'academic',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 10,
        cd: [28.546202, 77.191276],
        name: 'Dept. Of Civil Engineering',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'academic',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 11,
        cd: [28.547591, 77.188799],
        name: 'Girnar House',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 12,
        cd: [28.547718, 77.1892],
        name: 'Udaigiri Hostel',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 13,
        cd: [28.548277, 77.187985],
        name: 'Satpura House',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 14,
        cd: [28.548729, 77.18622],
        name: 'Vindhyachal Hostel',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 15,
        cd: [28.54764, 77.185877],
        name: 'Shivalik Hostel',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 16,
        cd: [28.54667, 77.18626],
        name: 'Zanskar Hostel',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 17,
        cd: [28.549264, 77.185153],
        name: 'Kumaon Hostel',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 18,
        cd: [28.549678, 77.18394],
        name: 'Jwalamukhi Hostel',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 19,
        cd: [28.548771, 77.183583],
        name: 'Aravali Hostel',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 20,
        cd: [28.547332, 77.183122],
        name: 'Karakoram Hostel',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 21,
        cd: [28.546281, 77.182476],
        name: 'Nilgiri Hostel',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 22,
        cd: [28.545202, 77.197092],
        name: 'Himadri Hostel',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 23,
        cd: [28.544632, 77.196963],
        name: 'Kailash Hostel',
        img: <img src={dogra} alt="Dogra Hall" />,
        category: 'hostel',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

export default locations;
