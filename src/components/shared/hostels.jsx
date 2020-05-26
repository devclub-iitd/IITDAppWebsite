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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
    {
        id: 1,
        name: 'Girnar Hostel',
        est: 1965,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
    {
        id: 2,
        name: 'Himadri Hostel',
        est: 1965,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
    {
        id: 3,
        name: 'Jwalamukhi Hostel',
        est: 1965,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
    {
        id: 4,
        name: 'Kailash Hostel',
        est: 1965,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
    {
        id: 5,
        name: 'Karakoram Hostel',
        est: 1965,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
    {
        id: 6,
        name: 'Kumaon Hostel',
        est: 1965,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
    {
        id: 7,
        name: 'Nilgiri Hostel',
        est: 1965,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
    {
        id: 8,
        name: 'Shivalik Hostel',
        est: 1965,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
    {
        id: 9,
        name: 'Satpura Hostel',
        est: 1965,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
    {
        id: 10,
        name: 'Udaigiri Hostel',
        est: 1965,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
    {
        id: 11,
        name: 'Vindhyachal Hostel',
        est: 1965,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.',
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
    },
];

export default hostels;
