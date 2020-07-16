import React from 'react';
import * as Icon from 'react-feather';
import dogra from '../assets/campus/dogra.jpg';

const locations = [
  {
    id: 0,
    cd: [28.544966, 77.192497],
    name: 'Dogra Hall',
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            "IIT Delhi's main multipurpose auditorium hall with the iconic hyperbolic paraboloid roof.",
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'https://en.wikipedia.org/wiki/Indian_Institute_of_Technology_Delhi',
    mapUrl: 'https://www.google.com/maps/place/Dogra+Hall/@28.5901753,77.1735223,13z/data=!4m8!1m2!2m1!1sdogra+hall!3m4!1s0x390d1df65e4c0773:0x20ba4c995cbfbf85!8m2!3d28.5449009!4d77.1921234',
    phoneUrl: '011-2659-7135',
    webUrl: 'https://home.iitd.ac.in/',
  },
  {
    id: 1,
    cd: [28.545379, 77.192362],
    name: 'Cafe Coffee Day',
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'The famous Café cum restaurant, serving coffee, cakes and sandwiches at subsidized rates.',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: 'https://www.tripadvisor.in/ShowUserReviews-g304551-d13190474-r551981783-Cafe_Coffee_Day-New_Delhi_National_Capital_Territory_of_Delhi.html',
    mapUrl: 'https://www.google.com/maps/place/Caf%C3%A9+Coffee+Day/@28.5453802,77.192356,15z/data=!4m2!3m1!1s0x0:0xefd3c272b0349c81?sa=X&ved=2ahUKEwiPjMz4p9LqAhUTILcAHVS6BSQQ_BIwG3oECBkQCA',
    phoneUrl: '+9118001025093',
    webUrl: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiPjMz4p9LqAhUTILcAHVS6BSQQhAcwJ3oECCYQAg&url=http%3A%2F%2Fwww.cafecoffeeday.com%2Fcafe-menu%2F&usg=AOvVaw1KfIdk_LDEK6oyvjVTrTQv',
  },
  {
    id: 2,
    cd: [28.545423, 77.191826],
    name: 'SCOOPS',
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'util',
    desc:
            'SCOOPS or Student Co-Operative Society is the one stop for all your stationery needs, at affordable rates.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/SCOOPS/@28.5454204,77.1918162,15z/data=!4m2!3m1!1s0x0:0x6d4bcc8551f7c0dd?sa=X&ved=2ahUKEwjB8bq6qNLqAhWiW3wKHfmyB0oQ_BIwE3oECBIQCA',
    phoneUrl: '+911126597155',
    webUrl: '',
  },
  {
    id: 3,
    cd: [28.545488, 77.191608],
    name: 'Dept. Of Electrical Engineering',
    img: <img
      src="https://lh3.googleusercontent.com/proxy/mdn8RAtdC8fZiHwcbq6OoTwcqqFdUEec2xqpZWuou7rxLY7ZuzQ3XXq6iBDNxa0rAkhTpKgJ9-0Fe28geDDjq_1eeVeXkkdUmzQ"
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Department of Electrical Engineering, IIT Delhi is situated here.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://ee.iitd.ernet.in/programmes.html',
    mapUrl: 'https://www.google.com/maps/place/Department+of+Electrical+Engineering/@28.5454915,77.1894161,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df69b432ec5:0x4c7708541c8923b7!8m2!3d28.5454915!4d77.1916048?hl=en',
    phoneUrl: '+911126596102',
    webUrl: 'http://ee.iitd.ernet.in/',
  },
  {
    id: 4,
    cd: [28.545119, 77.191288],
    name: 'Red Square',
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'A popular hangout spot, Red Square is so named because of the colour of its flooring. ',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: '',
    phoneUrl: '',
    webUrl: 'https://www.google.com/maps/place/Red+square,+IIT+DELHI/@28.5454735,77.1215651,12z/data=!4m8!1m2!2m1!1sred+square!3m4!1s0x390d1d41725491fd:0x518fb79156e8806c!8m2!3d28.5451199!4d77.1912828?hl=en',
  },
  {
    id: 5,
    cd: [28.544848, 77.191558],
    name: 'Amul Cafe',
    img: <img
      src="https://content.jdmagicbox.com/comp/delhi/z3/011pxx11.xx11.170113083022.y6z3/catalogue/amul-cafe-registrar-iit-new-delhi-delhi-coffee-shops-kemiks5i3f.jpg"
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: 'https://www.justdial.com/Delhi/Amul-Cafe-Registrar-IIT-New-Delhi/011PXX11-XX11-170113083022-Y6Z3_BZDET',
    mapUrl: 'https://www.google.com/maps/place/Amul+Cafe/@28.5449093,77.1898985,17z/data=!4m8!1m2!2m1!1samul+iit+delhi!3m4!1s0x390d1df6f4d3717f:0xfbe464f1c1ada2b9!8m2!3d28.5448431!4d77.191546?hl=en',
    phoneUrl: '',
    webUrl: 'http://amul.com/m/cafe-amul',
  },
  {
    id: 6,
    cd: [28.544719, 77.19118],
    name: 'Shiru Cafe',
    img: <img
      src="https://scontent.fdel17-1.fna.fbcdn.net/v/t1.0-9/47444826_1920290698086829_3395463258587529216_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_ohc=dNEk0u243lkAX8_WKqJ&_nc_ht=scontent.fdel17-1.fna&oh=642e9d05631a0e42c94d3697de0c215a&oe=5F353A1E"
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Shiru+Caf%C3%A9/@28.5447198,77.18899,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df6f322a9a3:0x169cff78856757e3!8m2!3d28.5447198!4d77.1911787?hl=en',
    phoneUrl: '',
    webUrl: 'http://global.shirucafe.com/',
  },
  {
    id: 7,
    cd: [28.544717, 77.191666],
    name: 'HPMC Store',
    img: <img
      src="https://hpmc.in/portal_content/HPMC%20Final%20Logo.png"
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/HPMC+store/@28.5447125,77.1894686,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df65f7e86b5:0xa7db5cd397466521!8m2!3d28.5447125!4d77.1916573?hl=en',
    phoneUrl: '',
    webUrl: 'https://hpmc.gov.in/',
  },
  {
    id: 8,
    cd: [28.544595, 77.191713],
    name: 'Nescafé',
    img: <img
      src="https://blogs.ubc.ca/dominicinindia/files/2012/09/D-Nescafe.jpg"
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/HPMC+store/@28.5447125,77.1894686,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df65f7e86b5:0xa7db5cd397466521!8m2!3d28.5447125!4d77.1916573?hl=en',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 9,
    cd: [28.544668, 77.191461],
    name: 'Central Library',
    img: <img
      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flibrary.iitd.ac.in%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fslideshow_image%2Fpublic%2F2019-06%2F2.jpg%3Fitok%3DIUxb5OcO&f=1&nofb=1"
      height="200"
      alt="Central Library"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'IIT Delhi\'s main library with a rich collection of books and academic journals. ',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Central+Library/@28.5449056,77.1899347,17z/data=!4m12!1m6!3m5!1s0x390d1df65e4c0773:0x20ba4c995cbfbf85!2sDogra+Hall!8m2!3d28.5449009!4d77.1921234!3m4!1s0x390d1df6f4136245:0x77ecaff1b3699806!8m2!3d28.5446611!4d77.1914528',
    phoneUrl: 'tel:+91-11-26591451',
    webUrl: 'http://library.iitd.ac.in/',
  },
  {
    id: 10,
    cd: [28.546202, 77.191276],
    name: 'Dept. Of Civil Engineering',
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Department of Civil Engineering, IIT Delhi is situated here.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Department of Biochemical Engineering and Biotechnology, IIT Delhi is situated here.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc: 'The Institute hockey and athletics field.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
    img: <img
      src={dogra}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
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
