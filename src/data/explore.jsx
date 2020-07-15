/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import React from 'react';
import * as Icon from 'react-feather';

const explore = [
  {
    id: 0,
    name: 'AcesACM',
    img: (
      <img
        src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/10419421_331186457035471_22920795032398514_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=zQ2Z9iFDMgsAX803II8&_nc_ht=scontent.fdel17-1.fna&oh=fd0f2ce8b9c82e030db62987bc1e9920&oe=5F2EC37F"
        alt="AcesACM"
        className="card-img"
      />
    ),
    desc:
            'ACES ACM is the Computer Science department society of IIT Delhi.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/acesacm/about/?ref=page_internal',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: 'http://www.cse.iitd.ac.in/aces-acm',
    category: 'technical',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Treasure Hunt', 'CSGO Tourney'],
    eventsShowcaseLinks: [],
  },
  {
    id: 1,
    name: 'Aeromodelling Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/16711809_1259308574105048_5525848308219350850_n.png?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=2J6-9IgoZUYAX8S3zCS&_nc_ht=scontent.fdel17-1.fna&oh=7298b2f81367345417f2b2f25e2c55c6&oe=5F2B965F"
      alt="Aeromodelling Club"
      className="card-img"
      style={{ display: 'inlineBlock', objectFit: 'cover' }}
    />,
    desc:
            'Aeromodelling Club, IIT-Delhi is a group of aeromodelling and aviation enthusiasts who have innate desire for flying.',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCiimFtsFBe5NNTP5fHrrmqw" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/aeroclubiitd',
    instaUrl: '',
    linkedinUrl: 'https://www.linkedin.com/company/aeromodelling-club-iit-delhi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BdNt4b9v3Tiex%2BEFhvzqBag%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=%2FOa4gEEgSYWRFly4naxjmg%3D%3D',
    webUrl: 'http://aeroclub.iitd.ac.in',
    category: 'technical',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Glider Making Competition'],
    eventsShowcaseLinks: [],
  },
  {
    id: 2,
    name: 'Algorithms & Coding Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/37928055_1895765703813023_6347345773767688192_n.png?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=6cnnCR2Hc3IAX_mE-Jy&_nc_ht=scontent.fdel17-1.fna&oh=de4acb040d8b779a8f77b42574362a19&oe=5F2D429C"
      alt="ANCC"
      className="card-img"
    />,
    desc:
            'The best place to stop by for coding lovers in IIT Delhi!',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/anciitd/',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: '',
    category: 'technical',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Game Of Codes'],
    eventsShowcaseLinks: [],
  },
  {
    id: 3,
    name: 'Ankahi',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/37741229_1929101900480367_6949978381735690240_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=plnUrbIuXg4AX9eq1W3&_nc_ht=scontent.fdel17-1.fna&oh=9aa7fe0b973bb45362e2d6183fb8f180&oe=5F2E654B"
      alt="Ankahi - The Dramatics Society"
      className="card-img"
    />,
    desc:
            'The dramatics society of IIT Delhi. By, For & Of the Dramatics Enthusiasts',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCB1qDoU0-juWVPZgu7b2rbA" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/dramaiitd',
    instaUrl: 'https://www.instagram.com/ankahi_iitd/',
    linkedinUrl: '',
    webUrl: '',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Interhostel Stage Play Competition'],
    eventsShowcaseLinks: [],
  },
  {
    id: 4,
    name: 'AXLR8R',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/70716336_1353544544807435_3853834851455074304_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=O8bB8286LgYAX_PFrtW&_nc_ht=scontent.fdel17-1.fna&oh=0b72099219abe717a522be6aaa041f59&oe=5F2C3D59"
      alt="Axlr8 - Automobile Club"
      className="card-img"
    />,
    desc:
            'Axlr8r is the Formula SAE team of IITD. The team comprises of around 25 students who fabricate an open wheel E formula race car.',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCqcr6zyZFwY8GpqBt2zOgug" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/Axlr8rFormulaRacing/',
    instaUrl: 'https://www.instagram.com/axlr8r.formula.racing/',
    linkedinUrl: 'https://www.linkedin.com/company/axlr8r-formula-racing/',
    webUrl: 'http://automobileclub.iitd.ac.in',
    category: 'technical',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 5,
    name: 'Board of Sports Activities',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/80844830_1707260226082261_8811727897166348288_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=BcwLWGglqSAAX9Pmcig&_nc_ht=scontent.fdel17-1.fna&oh=10679879b2dac8ef6eaf302c0a322c2d&oe=5F2C1119"
      alt="BSA IIT Delhi"
      className="card-img"
    />,
    desc:
            'The organization for all things sport @ IIT Delhi. ',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/iitd.bsa/about/?ref=page_internal',
    instaUrl: 'https://www.instagram.com/bsa.iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/board-for-sports-activities-iit-delhi/',
    webUrl: 'https://bsa.iitd.ac.in',
    category: 'others',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Sportech', 'GC'],
    eventsShowcaseLinks: [],
  },
  {
    id: 6,
    name: 'Board of Student Publications',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/36558650_1666885413427588_765641692186411008_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=e5ENp_p-CC0AX-eprOM&_nc_ht=scontent.fdel17-1.fna&oh=a34dabb85dd90b4921c5f353fdb43488&oe=5F2C2F4F"
      alt="BSP IIT Delhi"
      className="card-img"
    />,
    desc:
            'The journalistic and creative publishing faction of IITD, BSP exists to inform, eduacate and entertain.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/bspiitd/?ref=page_internal',
    instaUrl: 'https://www.instagram.com/bsp.iitdelhi/',
    linkedinUrl: 'https://www.linkedin.com/company/board-for-student-publications/',
    webUrl: 'https://bsp.iitd.ac.in',
    category: 'others',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 7,
    name: 'Debating Club ',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/29342951_1587967594592003_3863429516336562176_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=a1jHA8BJCD4AX8f3fjm&_nc_ht=scontent.fdel17-1.fna&oh=67bb38648534c6b9abb576c7114678f4&oe=5F2B8580"
      alt="DebSoc IIT Delhi"
      className="card-img"
    />,
    desc:
            'The debating club of IIT Delhi, for all the debate enthusiasts.',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCjn8s8EqIimKjVFBz8LcFIQ" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/debatingclubiitd',
    instaUrl: 'https://www.instagram.com/debsoc_iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/debating-club-iit-delhi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BdNt4b9v3Tiex%2BEFhvzqBag%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=poV%2FxgDcTuyfKPL0a%2F1IGw%3D%3D',
    webUrl: 'http://www.debsociitd.com',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Stalwarts'],
    eventsShowcaseLinks: [],
  },
  {
    id: 8,
    name: 'DevClub',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/95259558_2392888990986080_4990552028569665536_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=G-f7CXQRM3gAX9Nxs0A&_nc_ht=scontent.fdel17-1.fna&oh=993eb203cd3ff4490d5edfecd08340f3&oe=5F318A54"
      alt="DevClub IITD"
      className="card-img"
    />,
    desc:
            'Dev Club is a community of tech-minded people in IIT Delhi. Dev Club is a community of tech-minded people in IIT Delhi.',
    extraIcon: (
      <a href="https://github.com/devclub-iitd" className="c-btn git">
        <Icon.GitHub height="30" strokeWidth="2" />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/tech.iitd',
    instaUrl: 'https://www.instagram.com/devclub_iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/devclub-iit-delhi',
    webUrl: 'https://devclub.in/',
    category: 'technical',
    showcase: ['Citadel', 'Citadel'],
    showcaseDesc: [
      'A crowd sourced study portal for all your exam time needs! ',
      'A crowd sourced study portal for all your exam time needs! ',
    ],
    showcaseLinks: [
      'https://devclub.in/#/projects',
      'https://devclub.in/#/projects',
    ],
    eventsShowcase: ['Annual Hackathon', 'Winter Projects Series'],
    eventsShowcaseLinks: [
      'https://devclub.in/#/events',
      'https://devclub.in/#/events',
    ],
  },
  {
    id: 9,
    name: 'Economics Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/995726_641528232525621_1074551257_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=qc7XlDIh2ugAX9JhTfi&_nc_ht=scontent.fdel17-1.fna&oh=ba5fc9bf168178b83a1e8afa67634c9e&oe=5F2CB2E9"
      alt="Economics Club"
      className="card-img"
    />,
    desc:
            'Economics Club, IIT Delhi is dedicated towards inculcating economics and financial know-how among the student community.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/ecoclubiitd',
    instaUrl: 'https://www.instagram.com/economics_club_iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/economics-club-iit-delhi2017/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BdNt4b9v3Tiex%2BEFhvzqBag%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=iDnza9MPSgCWhhstRjvJjQ%3D%3D',
    webUrl: 'https://eco-club-iitd.blogspot.com',
    category: 'others',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 10,
    name: 'Electrical Engineering Society',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/84716649_2953856664677434_6696826206081253376_n.png?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=sCC7_0hJx9gAX8S8S-f&_nc_ht=scontent.fdel17-1.fna&oh=0d1332a3d66429cc38f329dec7a003b7&oe=5F2E3440"
      alt="EES"
      className="card-img"
    />,
    desc:
            'EES, IIT Delhi seeks to promote interaction amongst students and faculty by organizing interactive events.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/eesiitd',
    instaUrl: 'https://www.instagram.com/ees.iit/',
    linkedinUrl: '',
    webUrl: 'http://ees.iitd.ac.in',
    category: 'technical',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Mock Crypto Trading'],
    eventsShowcaseLinks: [],
  },
  {
    id: 11,
    name: 'Enactus IIT Delhi',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/15895120_1519495211417958_4628612069462296133_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=8W7pGsXNkaQAX-V0_a4&_nc_ht=scontent.fdel17-1.fna&oh=574140892c21443a554b935e03d08602&oe=5F2B340F"
      alt="Enactus IITD"
      className="card-img"
    />,
    desc:
            'Enactus IIT Delhi aims to use power of entrepreneurial action to transform lives and shape a better and more sustainable world through various student led ventures.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/FAC.iitd/events/?ref=page_internal',
    instaUrl: 'https://www.instagram.com/enactusiitdelhi/',
    linkedinUrl: 'https://www.linkedin.com/company/enactusiitdelhi/',
    webUrl: '',
    category: 'others',
    showcase: ['Among various projects the team has lead the following video briefs about two of them.'],
    showcaseDesc: [],
    showcaseLinks: ['https://www.youtube.com/watch?v=Dt1v3SMWml0'],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 12,
    name: 'Azure : Fine Arts Society',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/11817079_495463370613192_129534042995936585_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=-4A35BacfC8AX-E1NHz&_nc_ht=scontent.fdel17-1.fna&oh=515e918617b6de12197e93d7bfb36a29&oe=5F340F93"
      alt="FAC IIT Delhi"
      className="card-img"
    />,
    desc:
            'The community of art lovers, art enthusiasts and art learners of IIT Delhi.',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCCwWvJ1QVxZSn3OYVNJnK0Q" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/FAC.iitd/events/?ref=page_internal',
    instaUrl: 'https://www.instagram.com/azureiitd/',
    linkedinUrl: 'https://www.linkedin.com/company/azure-fine-arts-society-of-iit-delhi/',
    webUrl: '',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 13,
    name: 'Finance Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/71898871_102958561114246_1733234194034720768_n.png?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=WF0ZiSc6lecAX93y8cV&_nc_ht=scontent.fdel17-1.fna&oh=fcc8997581a2fd4ed69185f067916d2f&oe=5F2D214A"
      alt="Finance Club"
      className="card-img"
    />,
    desc:
            'Finance Club is a student body which aims at increasing the awareness of Finance as a career option through keynotes , workshops and competitions.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/financeatiitdelhi/events/?ref=page_internal',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: '',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 14,
    name: 'Indoor Sports Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/17862328_1373517026020836_2581233348103928404_n.png?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=QdSQQxyFArQAX_B6Vv8&_nc_ht=scontent.fdel17-1.fna&oh=67878e19b5ec136881e2d83386e0ba34&oe=5F2B9BFB"
      alt="Indoor Sports CLub"
      className="card-img"
    />,
    desc:
            'Club for all indoor sports activities @ IIT Delhi',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/isciitd/',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: '',
    category: 'others',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 15,
    name: 'Indradhanu',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t31.0-8/15875278_781645965307459_191042554331974862_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=g9EEjELuW3EAX_8GdGE&_nc_ht=scontent.fdel17-1.fna&oh=1353e59b29462b26551d298b14ef40bc&oe=5F2AF244"
      alt="Ankahi - The Dramatics Society"
      className="card-img"
    />,
    desc:
            'Indradhanu is IITD\'s LGBTQ collective. Our aim is creating a space for dialogue on gender & sexuality and rethinking and celebrating \'difference\'.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/indradhanu.iit/',
    instaUrl: 'https://www.instagram.com/indradhanu_iitd/',
    linkedinUrl: '',
    webUrl: '',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 16,
    name: 'LitCLub',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t31.0-8/10459096_144619119046558_4916243338981074859_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=CVOmH_nKF9sAX80kkW2&_nc_ht=scontent.fdel17-1.fna&oh=0d5faf80d9cd9e1d3f23bf426ff8d126&oe=5F2BD635"
      alt="Ankahi - The Dramatics Society"
      className="card-img"
    />,
    desc:
            'The Literary Club aims at fostering a love for books and literature in students, and promoting literary activities.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/litclub.iitd/?ref=page_internal',
    instaUrl: 'https://www.instagram.com/litclub.iitd/',
    linkedinUrl: '',
    webUrl: 'http://brca.iitd.ac.in/literary.php?',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Literati', 'Potpourri'],
    eventsShowcaseLinks: [],
  },
  {
    id: 17,
    name: 'Mathematics Society',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/67938797_1588050614659746_2096340461634453504_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=6oC6CmGkyRgAX8okmnx&_nc_ht=scontent.fdel17-1.fna&oh=66ff26fe11df0cff37be1540330addd1&oe=5F2D6674"
      alt="Mathematics Society"
      className="card-img"
    />,
    desc:
            'The Mathematics Society tries to foster the development of mathematics and its inquisitiveness among students through various events and workshops.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/maths.society.iitd',
    instaUrl: 'https://www.instagram.com/mathsociitd/',
    linkedinUrl: '',
    webUrl: 'http://www.mathsoc-iitd.com',
    category: 'technical',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Cypher-decypher', 'Alumni Meet'],
    eventsShowcaseLinks: [],
  },
  {
    id: 18,
    name: 'Photography & Films Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t31.0-8/26198030_969602369859643_5898440113031027136_o.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=o_4OZ56ZgfMAX-iDG_m&_nc_ht=scontent.fdel17-1.fna&oh=a2b893ed6bd7b99bbeb4b5549b9e90d8&oe=5F2B948B"
      alt="PFC"
      className="card-img"
    />,
    desc:
            'We are a group of passionate photographers, film makers and designers in IIT Delhi',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCrnEvVolUysSz9ACG7V-3eg" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/pfciitdelhi',
    instaUrl: 'https://www.instagram.com/pfciitd/',
    linkedinUrl: '',
    webUrl: 'http://brca.iitd.ac.in/?fbclid=IwAR1L6cWWNaMC90OeCF0ZYBC8AaJUEfoKSKL0NQF60sj8hXupuAlydOgbFEc',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 19,
    name: 'Quizzing Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/57439907_2157649327662564_5229402804942012416_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=jblIiMldJgQAX8Ot7P5&_nc_ht=scontent.fdel17-1.fna&oh=24e794848fecc2291d17eb72a09af008&oe=5F2B63F8"
      alt="QC"
      className="card-img"
    />,
    desc:
            'The official quiz club of IIT Delhi.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/iitd.qc/',
    instaUrl: 'https://instagram.com/iitdqc',
    linkedinUrl: '',
    webUrl: 'http://brca.iitd.ac.in/quizzing.php',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Mastermind', 'Occam\'s Razor'],
    eventsShowcaseLinks: [],
  },
  {
    id: 20,
    name: 'Robotics Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t31.0-8/21199712_2055104308055653_6902404135633213397_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=rryXKfrPgicAX9IRZCH&_nc_ht=scontent.fdel17-1.fna&oh=0d62c90b9fc79b3c0fe51e5368d1261f&oe=5F2E62A2"
      alt="Robotics Club"
      className="card-img"
    />,
    desc:
            'The official Robotics Club of IIT Delhi',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCphmuj6bEU4oda6DEBISUTw" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/iitdrobocon/',
    instaUrl: '',
    linkedinUrl: 'https://www.linkedin.com/company/robotics-club-iit-delhi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BU5HbkWyHRjSK7EouMGDiAQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=myvkoCFeR2CxosDTEaNIig%3D%3D',
    webUrl: 'http://roboticsclub.iitd.ac.in',
    category: 'technical',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 21,
    name: 'ShARE',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/37277261_483231358793070_122995992067833856_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=TOacay9qW0MAX8aJd1i&_nc_ht=scontent.fdel17-1.fna&oh=933367107f465b651b2d06ab46d247af&oe=5F2C7812"
      alt="ShARE"
      className="card-img"
    />,
    desc:
            'ShARE is an international student think-tank which connects talented students to corporate and social leaders to discuss world economic issues.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/shareiitdelhi',
    instaUrl: 'https://www.instagram.com/share_iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/share-iit-delhi/',
    webUrl: '',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Interhostel Stage Play Competition'],
    eventsShowcaseLinks: [],
  },
  {
    id: 22,
    name: 'Student Mentorship Program',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t31.0-8/19388365_1403208099760671_2071582094084196090_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=XUk-iHtwAnsAX-baoqy&_nc_ht=scontent.fdel17-1.fna&oh=72daccba17579d0a99afed740033caaa&oe=5F2C5079"
      alt="SMP"
      className="card-img"
    />,
    desc:
            'SMP ensures that every student at IIT Delhi gets mentored by understanding, willing and capable students.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/smp.iitd/events/?ref=page_internal',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: 'http://smp.iitd.ac.in/',
    category: 'others',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Vyakhyan Talks'],
    eventsShowcaseLinks: [],
  },
  {
    id: 23,
    name: 'Wellness Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t31.0-8/19221848_1524651134253276_9084662737945765962_o.png?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=tgWtykXTBTAAX9Ese_U&_nc_ht=scontent.fdel17-1.fna&oh=7f89f7c8c2a2247dfb15ba077b41bdfa&oe=5F2D2BFE"
      alt="Wellness Club"
      className="card-img"
    />,
    desc:
            'Wellness Club IIT Delhi helds sessions like yoga, meditation, devotional singing, guest talks etc. for the overall wellness and health of IITD community.',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UClS5G1BQ_8jI2G0GKdBuMpA" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/wellnessclubiitd/',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: '',
    category: 'others',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Interhostel Stage Play Competition'],
    eventsShowcaseLinks: [],
  },
  {
    id: 24,
    name: 'Dance Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/13919_683252508427380_1484054758771413955_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=vwgXZkRRemAAX8Cy_pQ&_nc_ht=scontent.fdel17-1.fna&oh=428e5a4039ed06d939857c62bd2601ed&oe=5F337CB5"
      alt="Dance Club"
      className="card-img"
    />,
    desc:
            'The Most Glamorous and intuitive club of IIT-Delhi, The Dance Club, is an exemplary club with range of Activities from Inter-hostel to Inter-College events.',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCJ5ANmbEOvbhRTqsaDDrv1g" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/DanceClub.IITDelhi',
    instaUrl: 'https://www.instagram.com/iitddanceclub/',
    linkedinUrl: '',
    webUrl: 'https://l.facebook.com/l.php?u=http%3A%2F%2Fbrca.iitd.ac.in%2Fdance.php%3Ffbclid%3DIwAR2REtQuzpr9X4l5WLyQW7KKVEnk8vjTCYwqX5bnVh5JgjFc4vDQYLYweu0&h=AT2J07k9uaFqozvxDsXsL2OdU9ZncLVOjKWqqA0A-Y-y24GIYV5PQricuMOajoHk_OEfLBBPr5B6aPO-QvwTJer3jt35cUJ1e87zSLva1GdwXg8nUcC1v4u0B2t_8Bs8tdTBSfsLEUU',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 25,
    name: 'edC',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/82459437_3636726446345204_8416599994085146624_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=GnO_7dcshoAAX80Pxgy&_nc_ht=scontent.fdel17-1.fna&oh=cf102cf059991108213cc4510d04d1d3&oe=5F3429D0"
      alt="eDC"
      className="card-img"
    />,
    desc:
            'Entrepreneurship Development Council: eDC IIT Delhi is a platform to inspire, mentor and assist budding students to pursue entrepreneurship',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCpXaT8wCTsB00P2o9JzIROQ" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/edciitdelhi',
    instaUrl: 'https://www.instagram.com/edc_iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/edc-iit-delhi/',
    webUrl: 'http://www.edc-iitd.org',
    category: 'others',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['BECon'],
    eventsShowcaseLinks: [],
  },
  {
    id: 26,
    name: 'Hindi Samiti',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t31.0-8/1275513_166749413514685_1484160222_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=DqYT4s3xv_0AX_udwCz&_nc_ht=scontent.fdel17-1.fna&oh=6b3c736a3f4a146a7f18549ba8b37a9d&oe=5F321814"
      alt="Hindi Samiti"
      className="card-img"
    />,
    desc:
            'Hindi Samiti is a club of BRCA, IIT Delhi that works on promoting use of Hindi as a language in the IITD campus amongst the student and faculty community.',
    extraIcon: '',
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/hindisamiti.iitdelhi',
    instaUrl: 'https://www.instagram.com/hindisamiti_iitd/',
    linkedinUrl: '',
    webUrl: 'https://l.facebook.com/l.php?u=http%3A%2F%2Fbrca.iitd.ac.in%2Fhindi.php%3Ffbclid%3DIwAR2ZlqqzgXetr2HXwfT2DeHmADFyv0bkKErSXJgm-nlD_ETJq9g33XqW4qg&h=AT2J07k9uaFqozvxDsXsL2OdU9ZncLVOjKWqqA0A-Y-y24GIYV5PQricuMOajoHk_OEfLBBPr5B6aPO-QvwTJer3jt35cUJ1e87zSLva1GdwXg8nUcC1v4u0B2t_8Bs8tdTBSfsLEUU',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 27,
    name: 'Music Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/14358800_1232000463538083_2804680986851444301_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=S7VAdR6kXE0AX9NJSKE&_nc_ht=scontent.fdel17-1.fna&oh=e3c967728f3be44b446dd1198270742a&oe=5F315DD8"
      alt="Music Club"
      className="card-img"
    />,
    desc:
            'Music Club seeks to bring together everyone with a passion for any genre of music.The club is the perfect refuge for all those who can’t seem to fill their appetite for music.',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCPlgZ0a4_42J8blholvYq7A" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/hindisamiti.iitdelhi',
    instaUrl: 'https://www.instagram.com/iitdmusicclub/',
    linkedinUrl: '',
    webUrl: 'https://l.facebook.com/l.php?u=http%3A%2F%2Fbrca.iitd.ac.in%2Fmusic.php%3Ffbclid%3DIwAR076idOwX97NZsv-6LZ49bNP8FOcpG9NQPk_xJP_XIqOUrtvwDW-U_K2AI&h=AT2J07k9uaFqozvxDsXsL2OdU9ZncLVOjKWqqA0A-Y-y24GIYV5PQricuMOajoHk_OEfLBBPr5B6aPO-QvwTJer3jt35cUJ1e87zSLva1GdwXg8nUcC1v4u0B2t_8Bs8tdTBSfsLEUU',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 28,
    name: 'SPIC MACAY',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/12717934_1072246196171279_189904166422729310_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=QdUaQgLchxcAX8wNDcq&_nc_ht=scontent.fdel17-1.fna&oh=ce58c07786eabb9381ebbca9720c9b58&oe=5F32B67E"
      alt="SPIC MACAY"
      className="card-img"
    />,
    desc:
            'Society for the Promotion of Indian Classical Music And Culture Amongst Youth',
    extraIcon: (
      <a href="https://www.youtube.com/user/spicmacay" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/SPIC.MACAY.IITD',
    instaUrl: 'https://www.instagram.com/spicmacay_iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/spicmacay/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3Bzw6LrYLdQb%2BVBDqfB3ARsg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=tuHZTy8NS7%2BpCsokonaQcA%3D%3D',
    webUrl: 'https://spicmacay.org/?fbclid=IwAR37TCk6QeM2Oj4VC28nhveC9r1jVzYNqMdz5DcNjRp73cYNURBqsM2XXAk',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 29,
    name: 'IITD OnAir',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t31.0-8/13765801_265534027158683_4878718013844867982_o.png?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=xf9YfDuJLsoAX-MYm2K&_nc_ht=scontent.fdel17-1.fna&oh=a99dbee12df5a2ba05a69bb7d830fee4&oe=5F318CFF"
      alt="IITD OnAir"
      className="card-img"
    />,
    desc:
            'IITD OnAir is the media and coverage body of IIT Delhi, solely run by students. It a platform for people to produce their own shows, work in collaboration and create independent videos.',
    extraIcon: (
      <a href="https://www.youtube.com/c/IITDOnAir/about" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/IITDOnAir',
    instaUrl: 'https://www.instagram.com/iitdonair/',
    linkedinUrl: 'https://www.linkedin.com/company/iitd-onair/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BeU7umjm6TeqtNq6evtg%2FfQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=%2F1nSSUEeTbCh%2F4uAOhMsSg%3D%3D',
    webUrl: 'http://radio.iitd.ac.in/?fbclid=IwAR3SRpBbzEI3VUxt6fk8bn7wTFDM47GbcdM2A8JTJnRbGZnK7pz-rj41K7A',
    category: 'others',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 30,
    name: 'V-Defyn',
    img: <img
      src="https://instagram.fdel17-1.fna.fbcdn.net/v/t51.2885-19/s320x320/52350469_386327395529845_8088323347160498176_n.jpg?_nc_ht=instagram.fdel17-1.fna.fbcdn.net&_nc_ohc=gbYy8W9qv4MAX940Joo&oh=d781e1208d8d6e54356d0caf484e3d28&oe=5F35A211"
      alt="V-Defyn"
      className="card-img"
    />,
    desc:
            'V-Defyn allows undergrads to channelize the skills, the rhythm and the technique of amateur dancers. V-Defyn Motions. V-Defyn Expressions. V-Defyn Spirit. V-Defyn Dance!',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCtpMWTjJBkz3-vKOE4o0sCg" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/IITDOnAir',
    instaUrl: 'https://www.instagram.com/iitdonair/',
    linkedinUrl: '',
    webUrl: 'http://radio.iitd.ac.in/?fbclid=IwAR3SRpBbzEI3VUxt6fk8bn7wTFDM47GbcdM2A8JTJnRbGZnK7pz-rj41K7A',
    category: 'others',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 31,
    name: 'Physics and Astronomy Club',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/14329926_10154180659917798_6360307381105740884_n.png?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=FyqXI5HgoJoAX9g0zol&_nc_ht=scontent.fdel17-1.fna&oh=0dbcab9c0e04144184d14efbc3790bb9&oe=5F319FE6"
      alt="P&C Club"
      className="card-img"
    />,
    desc:
            'Bazinga! ',
    extraIcon: (
      <a href="https://www.youtube.com/channel/UCtpMWTjJBkz3-vKOE4o0sCg" className="c-btn yt">
        <Icon.Youtube height="30" strokeWidth="2" style={{ paddingLeft: 0.5, paddingRight: 0.5 }} />
      </a>
    ),
    infoUrl: '',
    facebookUrl: 'https://www.facebook.com/PhysicsAndAstronomyIITD',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: '',
    category: 'technical',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },

];

function dynamicSort(property) {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return (a, b) => {
    const result = (a[property].toLowerCase() < b[property].toLowerCase()) ? -1 : (a[property].toLowerCase() > b[property].toLowerCase()) ? 1 : 0;
    return result * sortOrder;
  };
}

export default explore.sort(dynamicSort('name'));
