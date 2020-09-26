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
        src="http://graph.facebook.com/acesacm/picture?type=large"
        alt="AcesACM"
        className="card-img"
      />
    ),
    desc:
            'ACES ACM is the Computer Science department society of IIT Delhi.',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/acesacm/about/?ref=page_internal',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: 'http://www.cse.iitd.ac.in/aces-acm',
    category: 'technical',
    showcase: ['Treasure Hunt', 'CSGO Tourney'],
    showcaseDesc: ['Lots of mind numbing clues were spread over the Bharti Building and exciting prizes for the fastest to get to the treasure.', 'The name says it all! Get a chance to win exciting cash prizes and score some free food, all while playing your favorite game. It doesn\'t get better than this.'],
    showcaseLinks: ['http://www.cse.iitd.ac.in/aces-acm/events', 'http://www.cse.iitd.ac.in/aces-acm/events'],
    eventsShowcase: ['Treasure Hunt', 'CSGO Tourney'],
    eventsShowcaseLinks: ['http://www.cse.iitd.ac.in/aces-acm/events', 'http://www.cse.iitd.ac.in/aces-acm/events'],
  },
  {
    id: 1,
    name: 'Aeromodelling Club',
    img: <img
      src="http://graph.facebook.com/aeroclubiitd/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/aeroclubiitd',
    instaUrl: '',
    linkedinUrl: 'https://www.linkedin.com/company/aeromodelling-club-iit-delhi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BdNt4b9v3Tiex%2BEFhvzqBag%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=%2FOa4gEEgSYWRFly4naxjmg%3D%3D',
    webUrl: 'http://aeroclub.iitd.ac.in',
    category: 'technical',
    showcase: ['DL1234 - Drones for high altitude & high wind operations', 'Independent Projects'],
    showcaseDesc: ['Designing a UAV which can produce high thrust (or) mass flow rate( at ambient conditions) to account for the thinner air at high altitudes and perform necessary operations at high altitudes. The primary purpose of the drones being delivering more payload than any conventional aircraft for the same mass using less energy. ', 'Passion knows no bounds, apart from all the academics, aeromodelling competitions, club management, members of the aeromodelling club also take up independent projects where we explore all of our new ideas and concepts. This is what keeps us glued to aeromodelling with new innovations every now and then. '],
    showcaseLinks: ['http://aeroclub.iitd.ac.in/instituteprojects.html', 'http://aeroclub.iitd.ac.in/independentprojects.html'],
    eventsShowcase: ['Boeing Zonals', 'Lecture Talks And Workshops'],
    eventsShowcaseLinks: ['http://aeroclub.iitd.ac.in/boeingzonals.html', 'http://aeroclub.iitd.ac.in/workshops.html'],
  },
  {
    id: 2,
    name: 'Algorithms & Coding Club',
    img: <img
      src="http://graph.facebook.com/anciitd/picture?type=large"
      alt="ANCC"
      className="card-img"
    />,
    desc:
            'The best place to stop by for coding lovers in IIT Delhi!',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/anciitd/',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: '',
    category: 'technical',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Game Of Codes'],
    eventsShowcaseLinks: ['https://www.facebook.com/anciitd/events/?ref=page_internal'],
  },
  {
    id: 3,
    name: 'Ankahi',
    img: <img
      src="http://graph.facebook.com/dramaiitd/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/dramaiitd',
    instaUrl: 'https://www.instagram.com/ankahi_iitd/',
    linkedinUrl: '',
    webUrl: '',
    category: 'brca',
    showcase: ['Stage Play', 'Drama Archives'],
    showcaseDesc: ['Make up check, costume check, set design check, acting check. The stage is set, the spotlights are on. Be prepared to be thrilled by the stunning performances from enthusiastic actors, fighting fiercely to bring glory to their hostels in the Inter Hostel Stage Play Competition, organised by the Dramatics Club IIT Delhi. If you know how to be charmed by the diverse, goosebumps giving theatrical skills of these actors, then this is where you belong.', 'Archive of Ankahi events.'],
    showcaseLinks: ['http://brca.iitd.ac.in/dramatics-events.php', 'https://drive.google.com/drive/folders/0B1vLhp0aiT7eflpyaXZOZnZIcHRLNUEzNnBRbkFxYkszOFdSejFEczJfUzU4aUpOYTQwQ1k'],
    eventsShowcase: ['Interhostel Stage Play Competition'],
    eventsShowcaseLinks: [],
  },
  {
    id: 4,
    name: 'AXLR8R',
    img: <img
      src="http://graph.facebook.com/Axlr8rFormulaRacing/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/Axlr8rFormulaRacing/',
    instaUrl: 'https://www.instagram.com/axlr8r.formula.racing/',
    linkedinUrl: 'https://www.linkedin.com/company/axlr8r-formula-racing/',
    webUrl: 'http://automobileclub.iitd.ac.in',
    category: 'technical',
    showcase: ['Our Cars', 'Formula Student Competition'],
    showcaseDesc: ['Electric: XLR8, Atharva, XLR16E. Combustion: XLR7, XLR8, XLR9, XLR12, XLR14', 'Formula Student is the most prestigious engineering competition for students with over 600 university teams, from all over the world, competing in it. The aim of the competition is the education and development of students through the design and manufacturing of a competitive racing vehicle, and the success of the team is judged by renowned engineers from the automotive industry as well as the motor sport industry. '],
    showcaseLinks: ['http://automobileclub.iitd.ac.in/page6.html', 'http://automobileclub.iitd.ac.in/page10.html'],
    eventsShowcase: ['Auto Expo', 'Open House'],
    eventsShowcaseLinks: ['http://automobileclub.iitd.ac.in/page17.html', 'http://automobileclub.iitd.ac.in/page17.html'],
  },
  {
    id: 5,
    name: 'Board of Sports Activities',
    img: <img
      src="http://graph.facebook.com/bsa.iitd/picture?type=large"
      alt="BSA IIT Delhi"
      className="card-img"
    />,
    desc:
            'The organization for all things sport @ IIT Delhi. ',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/iitd.bsa/about/?ref=page_internal',
    instaUrl: 'https://www.instagram.com/bsa.iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/board-for-sports-activities-iit-delhi/',
    webUrl: 'https://bsa.iitd.ac.in',
    category: 'others',
    showcase: ['BSA Night', 'Freshers\' Week'],
    showcaseDesc: ['The BSA night is a night of celebrating the achievements of our sportsmen and sportswomen who have toiled for hours to bring glory to our institute. It is a night of raising a toast to the finest performances of grit and determination at the most competitive of sporting events of IITs. On this night, players who have performed well are awarded trophies of excellence by the BSA and a grand dinner is hosted in honour of all athletes and BSA officials', 'The first event every fresher waits for is the Fresher\'s Week, where everyone gets a chance to show how well they play. An entire week for all sports, which gives one a great opportunity to try out maximum sports. Another big night is the BSA orientation, where everything and everyone in BSA is presented to you. You would not only get the chance to explore, but also interact with seniors, some of which who have broken records and represent in the nationals. We\'d strongly suggest you to get in touch with the people involved in BSA; namely the vice captains of each sport in each hostel, the sports secretary of each hostel, or the institute Captains and Vice Captains, or any other person in BSA. They can provide a greater insight into BSA and how to go about everything you need to know. '],
    showcaseLinks: ['http://www.bsa-iitd.in/home/bsanight/', 'http://www.bsa-iitd.in/home/freshers/'],
    eventsShowcase: ['Sportech', 'GC'],
    eventsShowcaseLinks: ['http://www.bsa-iitd.in/home/sportech/', 'http://www.bsa-iitd.in/home/interhostel/'],
  },
  {
    id: 6,
    name: 'Board of Student Publications',
    img: <img
      src="http://graph.facebook.com/bspiitd/picture?type=large"
      alt="BSP IIT Delhi"
      className="card-img"
    />,
    desc:
            'The journalistic and creative publishing faction of IITD, BSP exists to inform, eduacate and entertain.',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/bspiitd/?ref=page_internal',
    instaUrl: 'https://www.instagram.com/bsp.iitdelhi/',
    linkedinUrl: 'https://www.linkedin.com/company/board-for-student-publications/',
    webUrl: 'https://bsp.iitd.ac.in',
    category: 'others',
    showcase: ['Inquirer - The Newsletter', 'The Scholar\'s Blog, Humans Of IITD, My Experiments With IITD : Interview Series'],
    showcaseDesc: ['', ''],
    showcaseLinks: ['https://www.flipsnack.com/98A6FBA7C6F/inquirer-2-sem-ii-2019-20.html', 'https://www.facebook.com/bspiitd/?ref=page_internal'],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 7,
    name: 'Debating Club ',
    img: <img
      src="http://graph.facebook.com/debatingclubiitd/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/debatingclubiitd',
    instaUrl: 'https://www.instagram.com/debsoc_iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/debating-club-iit-delhi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BdNt4b9v3Tiex%2BEFhvzqBag%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=poV%2FxgDcTuyfKPL0a%2F1IGw%3D%3D',
    webUrl: 'http://www.debsociitd.com',
    category: 'brca',
    showcase: ['Stalwarts', 'Debutant'],
    showcaseDesc: ['After a few weeks of ‘extempore’ training, the freshers finally get a platform to put their wits to the test. Around 20 freshers are selected through the initial extempore rounds to battle it out in Asian Parliamentary 2v2 debates. Vigorously trained by the hostel representatives and seniors, the freshers try to outwit their competitors to emerge victorious and earn the prestigious title of ‘Stalwart’.', 'Debutant is the DebSoc way of celebrating Rendezvous. With over 30 teams, 100 adjes and prestigious Chief Adjudicators, Debutant is now one of the largest fresher tournaments in the Delhi circuit. Following standard 3v3 Asian Parliamentary Debate format, freshers get a chance to announce themselves in the debating circuit.'],
    showcaseLinks: ['http://brca.iitd.ac.in/debating-events.php', 'http://brca.iitd.ac.in/debating-events.php'],
    eventsShowcase: ['Open British Parliamentary Debate, Asian Parliamentary Debate', 'Debate Workshops'],
    eventsShowcaseLinks: ['http://brca.iitd.ac.in/debating-events.php', 'http://brca.iitd.ac.in/debating-events.php'],
  },
  {
    id: 8,
    name: 'DevClub',
    img: <img
      src="http://graph.facebook.com/tech.iitd/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/tech.iitd',
    instaUrl: 'https://www.instagram.com/devclub_iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/devclub-iit-delhi',
    webUrl: 'https://devclub.in/',
    category: 'technical',
    showcase: ['Citadel', 'ShareACab'],
    showcaseDesc: [
      'A crowd sourced study portal for all your exam time needs! ',
      'Safe, secure and easy intra-college cab sharing at your fingertrips! (Coming soon ... subject to COVID19 spread conditions :p)',
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
      src="http://graph.facebook.com/echoclubiitd/picture?type=large"
      alt="Economics Club"
      className="card-img"
    />,
    desc:
            'Economics Club, IIT Delhi is dedicated towards inculcating economics and financial know-how among the student community.',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/ecoclubiitd',
    instaUrl: 'https://www.instagram.com/economics_club_iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/economics-club-iit-delhi2017/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BdNt4b9v3Tiex%2BEFhvzqBag%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=iDnza9MPSgCWhhstRjvJjQ%3D%3D',
    webUrl: 'https://eco-club-iitd.blogspot.com',
    category: 'others',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Interactive Sessions', 'Mock Stocks'],
    eventsShowcaseLinks: ['https://www.facebook.com/ecoclubiitd/events/?ref=page_internal', 'https://www.facebook.com/ecoclubiitd/events/?ref=page_internal'],
  },
  {
    id: 10,
    name: 'Electrical Engineering Society',
    img: <img
      src="http://graph.facebook.com/eesiitd/picture?type=large"
      alt="EES"
      className="card-img"
    />,
    desc:
            'EES, IIT Delhi seeks to promote interaction amongst students and faculty by organizing interactive events.',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/eesiitd',
    instaUrl: 'https://www.instagram.com/ees.iit/',
    linkedinUrl: '',
    webUrl: 'http://ees.iitd.ac.in',
    category: 'technical',
    showcase: ['Interview Series'],
    showcaseDesc: ['Interview tips and tricks from our experienced seniors!'],
    showcaseLinks: ['http://ees.iitd.ac.in/interview.html'],
    eventsShowcase: ['Team LAN Gaming Event', 'Intern Ke Fundae'],
    eventsShowcaseLinks: ['http://ees.iitd.ac.in/events/event1.html?id=1aECaVwMHtZJy2mIAXLu', 'http://ees.iitd.ac.in/events/event1.html?id=mZzKmnn3xVWcUJjPio4I'],
  },
  {
    id: 11,
    name: 'Enactus IIT Delhi',
    img: <img
      src="http://graph.facebook.com/enactusiitdelhi/picture?type=large"
      alt="Enactus IITD"
      className="card-img"
    />,
    desc:
            'Enactus IIT Delhi aims to use power of entrepreneurial action to transform lives and shape a better and more sustainable world through various student led ventures.',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/enactusiitdelhi/',
    instaUrl: 'https://www.instagram.com/enactusiitdelhi/',
    linkedinUrl: 'https://www.linkedin.com/company/enactusiitdelhi/',
    webUrl: '',
    category: 'others',
    showcase: ['Among various projects the team has lead the following video briefs about two of them. Click here to watch the videos.'],
    showcaseDesc: [],
    showcaseLinks: ['https://www.youtube.com/watch?v=Dt1v3SMWml0'],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 12,
    name: 'Azure : Fine Arts Society',
    img: <img
      src="http://graph.facebook.com/FAC.iitd/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/FAC.iitd/events/?ref=page_internal',
    instaUrl: 'https://www.instagram.com/azureiitd/',
    linkedinUrl: 'https://www.linkedin.com/company/azure-fine-arts-society-of-iit-delhi/',
    webUrl: '',
    category: 'brca',
    showcase: ['Series of artworks and projects. Available on our Facebook timeline.'],
    showcaseDesc: [''],
    showcaseLinks: ['https://www.facebook.com/Azure.IITD/?ref=page_internal'],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 13,
    name: 'Finance Club',
    img: <img
      src="http://graph.facebook.com/financeatiitdelhi/picture?type=large"
      alt="Finance Club"
      className="card-img"
    />,
    desc:
            'Finance Club is a student body which aims at increasing the awareness of Finance as a career option through keynotes , workshops and competitions.',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/financeatiitdelhi/events/?ref=page_internal',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: '',
    category: 'brca',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Introduction to Derivatives and Option Pricing'],
    eventsShowcaseLinks: ['https://www.facebook.com/events/761422034328469/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'],
  },
  {
    id: 14,
    name: 'Indoor Sports Club',
    img: <img
      src="http://graph.facebook.com/isciitd/picture?type=large"
      alt="Indoor Sports CLub"
      className="card-img"
    />,
    desc:
            'Club for all indoor sports activities @ IIT Delhi',
    extraIcon: '',
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
      src="http://graph.facebook.com/indradhanu.iitd/picture?type=large"
      alt="Ankahi - The Dramatics Society"
      className="card-img"
    />,
    desc:
            'Indradhanu is IITD\'s LGBTQ collective. Our aim is creating a space for dialogue on gender & sexuality and rethinking and celebrating \'difference\'.',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/indradhanu.iit/',
    instaUrl: 'https://www.instagram.com/indradhanu_iitd/',
    linkedinUrl: '',
    webUrl: '',
    category: 'others',
    showcase: ['Involvement in Decriminalisation of Homosexuality in India'],
    showcaseDesc: ['In May 2018, the club with support of Naz Foundation filed a petition to review Section 377. The petition was filed by a team of 20 IITians, the youngest of whom was an undergraduate student at IIT Delhi. In response of the petition, the Supreme Court agreed to review after the central government declared that it would not oppose the petitions, and would leave the case "to the wisdom of the court".On 6 September 2018, the Court overruled an earlier decision from 2013, thereby decriminalising homosexuality in India.After the verdict, the club gained an established recognition.'],
    showcaseLinks: ['https://en.wikipedia.org/wiki/Indradhanu'],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 16,
    name: 'LitCLub',
    img: <img
      src="http://graph.facebook.com/litclub.iitd/picture?type=large"
      alt="Ankahi - The Dramatics Society"
      className="card-img"
    />,
    desc:
            'The Literary Club aims at fostering a love for books and literature in students, and promoting literary activities.',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/litclub.iitd/?ref=page_internal',
    instaUrl: 'https://www.instagram.com/litclub.iitd/',
    linkedinUrl: '',
    webUrl: 'http://brca.iitd.ac.in/literary.php?',
    category: 'brca',
    showcase: ['Potpourri', '3 Muses'],
    showcaseDesc: ['Quiz type fresher event, serves as Lit Club 101. Questions test player\'s knowledge of novels, both classic and contemporary. Games like Pictionary and Dumb Charades, played to unlock clues to questions, add to the fun. ', 'Interhostel event, teams of 3. Similar to Potpourri, but a step further. Answers to questions form connects which link to form a mega connect. Serves as Lit Club 999.'],
    showcaseLinks: ['http://brca.iitd.ac.in/literary-events.php', 'http://brca.iitd.ac.in/literary-events.php'],
    eventsShowcase: ['Sopaan', 'Reader\'s Circle'],
    eventsShowcaseLinks: ['http://brca.iitd.ac.in/literary-events.php', 'http://brca.iitd.ac.in/literary-events.php'],
  },
  {
    id: 17,
    name: 'Mathematics Society',
    img: <img
      src="http://graph.facebook.com/maths.society.iitd/picture?type=large"
      alt="Mathematics Society"
      className="card-img"
    />,
    desc:
            'The Mathematics Society tries to foster the development of mathematics and its inquisitiveness among students through various events and workshops.',
    extraIcon: '',
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
      src="http://graph.facebook.com/pfciitdelhi/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/pfciitdelhi',
    instaUrl: 'https://www.instagram.com/pfciitd/',
    linkedinUrl: '',
    webUrl: 'http://brca.iitd.ac.in/?fbclid=IwAR1L6cWWNaMC90OeCF0ZYBC8AaJUEfoKSKL0NQF60sj8hXupuAlydOgbFEc',
    category: 'brca',
    showcase: ['Film Making', 'Photography'],
    showcaseDesc: ['This is a chance for you to use your scriptwriting, directing and cinematography skills to make film just how you want. Get acting and directing in your very own film.', 'This is your chance to showcase your photography skills and compete with others from the institute. May the best photo win. '],
    showcaseLinks: ['http://brca.iitd.ac.in/pfc-events.php', 'http://brca.iitd.ac.in/pfc-events.php'],
    eventsShowcase: ['Film Making Workshop', 'Graphic Designing'],
    eventsShowcaseLinks: ['http://brca.iitd.ac.in/pfc-events.php', 'http://brca.iitd.ac.in/pfc-events.php'],
  },
  {
    id: 19,
    name: 'Quizzing Club',
    img: <img
      src="http://graph.facebook.com/iitd.qc/picture?type=large"
      alt="QC"
      className="card-img"
    />,
    desc:
            'The official quiz club of IIT Delhi.',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/iitd.qc/',
    instaUrl: 'https://instagram.com/iitdqc',
    linkedinUrl: '',
    webUrl: 'http://brca.iitd.ac.in/quizzing.php',
    category: 'brca',
    showcase: ['League Quizzes', 'Themed Quizzes - throughout the year'],
    showcaseDesc: ['The Quizzing Club conducts a Quizzing League every year, with an auction occurring at the start of the year to form 6 teams. These 6 teams battle it put throughout the year in 6 quizzes, each with varying topics and formats. These include the India Quiz, the Variety Quiz (on Music, Technology, Travel & History), the Jeopardy Quiz and more. ', 'A series of fun, light-hearted quizzes that we will conduct on topics like popular TV shows, movies, sports, India, etc.'],
    showcaseLinks: ['http://brca.iitd.ac.in/quizzing-events.php', 'http://brca.iitd.ac.in/quizzing-events.php'],
    eventsShowcase: ['Mastermind', 'Occam\'s Razor'],
    eventsShowcaseLinks: ['http://brca.iitd.ac.in/quizzing-events.php', 'http://brca.iitd.ac.in/quizzing-events.php'],
  },
  {
    id: 20,
    name: 'Robotics Club',
    img: <img
      src="http://graph.facebook.com/iitdrobocon/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/iitdrobocon/',
    instaUrl: '',
    linkedinUrl: 'https://www.linkedin.com/company/robotics-club-iit-delhi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BU5HbkWyHRjSK7EouMGDiAQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=myvkoCFeR2CxosDTEaNIig%3D%3D',
    webUrl: 'http://roboticsclub.iitd.ac.in',
    category: 'technical',
    showcase: ['Four legged Autonomous Bot', 'Hexapod'],
    showcaseDesc: ['The bot is a 4 legged autonomous bot, working on a 5R-5Bar mechanism. It autonomously traces it path. It performs various types of motions such as walking on inclined plane, on horizontal plane and can even climb steps. Basically it is designed to walk on rough terrain. It is operated using 8 actuators controlled using a raspberry-pi. This mechanism has got huge upside potentials with an opportunity for numerous applications in different areas. Now just for giving a bit of a idea of it’s true potential, think of a scenario of incorporating a gripping mechanism to the bot. The extent to which it can impact human lives would just be limited by your imagination itself. ', 'Hexapods are Six legged Robots, having an advantage of being Dynamically stable. For this Robot we have used 18 Servo Motors 3 for each leg controlled it together using a servo controller . Maximum height this robot\'s body can have is approx. 35-37 cm so it can cross an obstacle or climb stair of this height. '],
    showcaseLinks: ['http://roboticsclub.iitd.ac.in/', 'http://roboticsclub.iitd.ac.in/'],
    eventsShowcase: ['Robocon 2020'],
    eventsShowcaseLinks: ['http://roboticsclub.iitd.ac.in/'],
  },
  {
    id: 21,
    name: 'ShARE',
    img: <img
      src="http://graph.facebook.com/shareiitdelhi/picture?type=large"
      alt="ShARE"
      className="card-img"
    />,
    desc:
            'ShARE is an international student think-tank which connects talented students to corporate and social leaders to discuss world economic issues.',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/shareiitdelhi',
    instaUrl: 'https://www.instagram.com/share_iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/share-iit-delhi/',
    webUrl: '',
    category: 'brca',
    showcase: ['Case study competitions'],
    showcaseDesc: ['"A consultant to be worth his salt must give honest judgments not necessarily those which he thinks the clients would like to hear." . An opportunity for all the strategy fanatics out there to put on their thinking hats and come up with innovative and unconventional yet efficient solutions to the Case Study Competition organized by ShARE in association with Tryst, IIT Delhi.'],
    showcaseLinks: ['https://www.facebook.com/shareiitdelhi/?ref=page_internal'],
    eventsShowcase: ['Case-cation'],
    eventsShowcaseLinks: ['https://www.facebook.com/events/328533331520930/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'],
  },
  {
    id: 22,
    name: 'Student Mentorship Program',
    img: <img
      src="http://graph.facebook.com/smp.iitd/picture?type=large"
      alt="SMP"
      className="card-img"
    />,
    desc:
            'SMP ensures that every student at IIT Delhi gets mentored by understanding, willing and capable students.',
    extraIcon: '',
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
      src="http://graph.facebook.com/wellnessclubiitd/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/wellnessclubiitd/',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: '',
    category: 'others',
    showcase: [],
    showcaseDesc: [],
    showcaseLinks: [],
    eventsShowcase: ['Mindfulness and Meditation', 'IIT Meditates'],
    eventsShowcaseLinks: ['https://www.facebook.com/wellnessclubiitd/events/?ref=page_internal', 'https://www.facebook.com/wellnessclubiitd/events/?ref=page_internal'],
  },
  {
    id: 24,
    name: 'Dance Club',
    img: <img
      src="http://graph.facebook.com/DanceClub.IITDelhi/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/DanceClub.IITDelhi',
    instaUrl: 'https://www.instagram.com/iitddanceclub/',
    linkedinUrl: '',
    webUrl: 'https://l.facebook.com/l.php?u=http%3A%2F%2Fbrca.iitd.ac.in%2Fdance.php%3Ffbclid%3DIwAR2REtQuzpr9X4l5WLyQW7KKVEnk8vjTCYwqX5bnVh5JgjFc4vDQYLYweu0&h=AT2J07k9uaFqozvxDsXsL2OdU9ZncLVOjKWqqA0A-Y-y24GIYV5PQricuMOajoHk_OEfLBBPr5B6aPO-QvwTJer3jt35cUJ1e87zSLva1GdwXg8nUcC1v4u0B2t_8Bs8tdTBSfsLEUU',
    category: 'brca',
    showcase: ['Duo+ Dance Competition', 'Inter Hostel Group Dance'],
    showcaseDesc: ['Expect dazzling dance choreographs, stunning performances the likes of which you have never seen, and will leave you wanting for more. Held every year, this competition is one of the biggest events under BRCA. With the minors over, it is time to set aside the initial academic pressure and indulge in some mesmerizing performances.', 'Sizzling stage, glamorous girls, rocking performances and exciting energy!!!!'],
    showcaseLinks: ['https://www.facebook.com/events/476768592689457/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D', 'https://www.facebook.com/events/1561899033924207/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'],
    eventsShowcase: ['Hip Hop Fiesta', 'Hip Hop Fiesta'],
    eventsShowcaseLinks: ['https://www.facebook.com/events/615240598637742/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D', 'https://www.facebook.com/events/1744840825732377/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'],
  },
  {
    id: 25,
    name: 'edC',
    img: <img
      src="http://graph.facebook.com/edciitdelhi/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/edciitdelhi',
    instaUrl: 'https://www.instagram.com/edc_iitd/',
    linkedinUrl: 'https://www.linkedin.com/company/edc-iit-delhi/',
    webUrl: 'http://www.edc-iitd.org',
    category: 'others',
    showcase: ['E Summit', 'Campus CEO'],
    showcaseDesc: ['', ''],
    showcaseLinks: ['http://www.edc-iitd.org/', 'http://www.edc-iitd.org/'],
    eventsShowcase: ['BECon'],
    eventsShowcaseLinks: ['http://edc.iitd.ac.in/becon/'],
  },
  {
    id: 26,
    name: 'Hindi Samiti',
    img: <img
      src="http://graph.facebook.com/hindisamiti.iitdelhi/picture?type=large"
      alt="Hindi Samiti"
      className="card-img"
    />,
    desc:
            'Hindi Samiti is a club of BRCA, IIT Delhi that works on promoting use of Hindi as a language in the IITD campus amongst the student and faculty community.',
    extraIcon: '',
    facebookUrl: 'https://www.facebook.com/hindisamiti.iitdelhi',
    instaUrl: 'https://www.instagram.com/hindisamiti_iitd/',
    linkedinUrl: '',
    webUrl: 'https://l.facebook.com/l.php?u=http%3A%2F%2Fbrca.iitd.ac.in%2Fhindi.php%3Ffbclid%3DIwAR2ZlqqzgXetr2HXwfT2DeHmADFyv0bkKErSXJgm-nlD_ETJq9g33XqW4qg&h=AT2J07k9uaFqozvxDsXsL2OdU9ZncLVOjKWqqA0A-Y-y24GIYV5PQricuMOajoHk_OEfLBBPr5B6aPO-QvwTJer3jt35cUJ1e87zSLva1GdwXg8nUcC1v4u0B2t_8Bs8tdTBSfsLEUU',
    category: 'brca',
    showcase: ['Aaj Ka Naarad-(Hindu Mythology Quiz)', 'चक्रव्यूह'],
    showcaseDesc: ['While looking at the night sky, have you ever tried to pinpoint Kashyap muni in the Ursa Major? Or has your imagination ever ambled through the battlefield of Kurukshetra, wondering at the curses and boons floating in the atmosphere or gaping at their clothes, as extravagant as BR Chopra\'s Mahabharata itself? If so, then prove your prowess in mythology and buttress your knowledge through the Mythology quiz आज का नारद, organized by Hindi Samiti, IIT Delhi', 'क्या आप भी हिंदी फिल्मों में रूचि रखते हैं? क्या आप भारत के बारे में सामान्य ज्ञान रखते हैं? क्या आप भी \'Dumb-Charades\', \'Pic-Charades\' आदि का लुत्फ़ उठाना चाहते हैं?'],
    showcaseLinks: ['https://www.facebook.com/events/498470953960947/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D', 'https://www.facebook.com/events/592932437483455/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'],
    eventsShowcase: ['खजाने की खोज'],
    eventsShowcaseLinks: [''],
  },
  {
    id: 27,
    name: 'Music Club (Cadence)',
    img: <img
      src="http://graph.facebook.com/music.iitd/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/music.iitd',
    instaUrl: 'https://www.instagram.com/iitdmusicclub/',
    linkedinUrl: '',
    webUrl: 'https://l.facebook.com/l.php?u=http%3A%2F%2Fbrca.iitd.ac.in%2Fmusic.php%3Ffbclid%3DIwAR076idOwX97NZsv-6LZ49bNP8FOcpG9NQPk_xJP_XIqOUrtvwDW-U_K2AI&h=AT2J07k9uaFqozvxDsXsL2OdU9ZncLVOjKWqqA0A-Y-y24GIYV5PQricuMOajoHk_OEfLBBPr5B6aPO-QvwTJer3jt35cUJ1e87zSLva1GdwXg8nUcC1v4u0B2t_8Bs8tdTBSfsLEUU',
    category: 'brca',
    showcase: ['Open Mic', 'Dhwani'],
    showcaseDesc: ['Take the stage by storm as you prove your mettle in front of the music community and your fellow batchmates. Form a band and perform your favorite pieces, show off your solo guitar skills or make it a solo karaoke, the mic is in your hands and the stage is yours. ', 'Witness the fusion of Bollywood, folk-fusion and semi classical forms of music into one melodic performance. Watch the hostels compete against each other in this battle of the bands. '],
    showcaseLinks: ['http://brca.iitd.ac.in/music-events.php', 'http://brca.iitd.ac.in/music-events.php'],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 28,
    name: 'SPIC MACAY',
    img: <img
      src="http://graph.facebook.com/SPIC.MACAY.IITD/picture?type=large"
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
      src="http://graph.facebook.com/IITDOnAir/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/IITDOnAir',
    instaUrl: 'https://www.instagram.com/iitdonair/',
    linkedinUrl: 'https://www.linkedin.com/company/iitd-onair/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BeU7umjm6TeqtNq6evtg%2FfQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=%2F1nSSUEeTbCh%2F4uAOhMsSg%3D%3D',
    webUrl: 'http://radio.iitd.ac.in/?fbclid=IwAR3SRpBbzEI3VUxt6fk8bn7wTFDM47GbcdM2A8JTJnRbGZnK7pz-rj41K7A',
    category: 'others',
    showcase: ['Freshers\' Intro Videos', 'Secy Showdown'],
    showcaseDesc: ['IITD OnAir interacts with freshmen talking about their experience so far with the college fraternity, their hassles with the confession page, rendezvous and exchanging some chummy tongue twisters . Watch the video to live the freshers\' experience with a humorous tinge.', 'All the BRCA secretaries united for an active session wherein they were questioned, complemented and even roasted. The institute joined IITD OnAir in our interaction with the secys where we asked crowdsourced questions as well as questions based on their manifesto. Watch the video as we do rounds with all the secretaries and live this fun session. '],
    showcaseLinks: ['https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutu.be%2F_ScI5MnHlVo%3Ffbclid%3DIwAR13b4u6zrId6uSe6UY1z4rvzAIJvUy9aWsXhMHgv6_LcXwtpXtoF0xX0js&h=AT16xzRyhfOwTFSRiSPJu7SxBJO2bjr6o4E1LjAQu3BECgEY9uIiOdbiQ_eqF1DbRkAq_qnrH6xD9_weKlomGF3KXD3z9dBxV1YJ7cJOnS78u3m8RABGzdxZx68VD6uX7h9b4BfYmA&__tn__=H-R&c[0]=AT3SjczdgA0gEzypdwGJ_xVj6h0aD-ZSuwE2J72L4uMK_7-l7jz8G0P_0z9sH2mp8mVlAfljAnZ4tdxi7ae4Gt_Zqwo5i4-6OHQibkU5uHo9A8RKAXW72y7RZhUmbrYDJ8XT9Tr5QhweZbDLvBNhB1ytLgrCzbiFIjwofkrRkCIciYRXtUnK09RzFSE', 'https://www.youtube.com/watch?v=enTELrQZ4jU'],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 30,
    name: 'V-Defyn',
    img: <img
      src="http://graph.facebook.com/vdefyndanceacademy/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/vdefyndanceacademy',
    instaUrl: 'https://www.instagram.com/vdefyn.iitd/?hl=en',
    linkedinUrl: '',
    webUrl: 'http://radio.iitd.ac.in/?fbclid=IwAR3SRpBbzEI3VUxt6fk8bn7wTFDM47GbcdM2A8JTJnRbGZnK7pz-rj41K7A',
    category: 'others',
    showcase: ['V-Defyn Hip-Hop Workshop'],
    showcaseDesc: [''],
    showcaseLinks: [''],
    eventsShowcase: [],
    eventsShowcaseLinks: [],
  },
  {
    id: 31,
    name: 'Physics and Astronomy Club',
    img: <img
      src="http://graph.facebook.com/PhysicsAndAstronomyIITD/picture?type=large"
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
    facebookUrl: 'https://www.facebook.com/PhysicsAndAstronomyIITD',
    instaUrl: '',
    linkedinUrl: '',
    webUrl: '',
    category: 'technical',
    showcase: ['Stargazing session!', 'Annual Physics and Astro Quiz as a part of Trsyt'],
    showcaseDesc: ['', ''],
    showcaseLinks: ['', ''],
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
