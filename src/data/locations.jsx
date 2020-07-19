import React from 'react';
import * as Icon from 'react-feather';
import dogra from '../assets/campus/dogra.jpg';
import aravali from '../assets/hostels/aravali.png';
import girnar from '../assets/hostels/girnar.jpeg';
import himadri from '../assets/hostels/himadri.png';
import jwala from '../assets/hostels/jwala.png';
import kailash from '../assets/hostels/kailash.png';
import kumaon from '../assets/hostels/kumaon.jpg';
import nilgiri from '../assets/hostels/nilgiri.jpeg';
import satpura from '../assets/hostels/satpura.jpg';
import shivalik from '../assets/hostels/shivalik.png';
import udaigiri from '../assets/hostels/udaigiri.jpg';
import vindy from '../assets/hostels/vindy.jpg';
import zanskar from '../assets/hostels/zanskar.jpg';
import bbe from '../assets/campus/bbe.png';
import ee from '../assets/campus/ee.png';
import scoops from '../assets/campus/scoops.png';
import rs from '../assets/campus/rs.png';
import ch from '../assets/campus/ch.png';
import huss from '../assets/campus/huss.png';
import shadab from '../assets/campus/shadab.png';
import koolees from '../assets/campus/koolees.png';
import cp from '../assets/campus/cp.png';
import sbi from '../assets/campus/sbi.png';
import csc from '../assets/campus/csc.png';
import po from '../assets/campus/po.png';

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
      src="https://media-cdn.tripadvisor.com/media/photo-s/11/b2/71/6b/a-nice-overall-ambience.jpg"
      height="200"
      alt="CCD IITD"
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
      src={scoops}
      height="200"
      alt="SCOOPS"
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
      src={ee}
      height="200"
      alt="Dept Of EE"
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
      src={rs}
      height="200"
      alt="Red Square"
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
      src="http://civil.iitd.ac.in/gallery-images/Department/Department%20of%20Civil%20Engineering%20-%201.jpg"
      height="200"
      alt="Dept. Of Civil Engineering"
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
    infoUrl: 'http://civil.iitd.ac.in/index.php?lmenuid=academicprograms',
    mapUrl: 'https://www.google.com/maps/place/Civil+Engineering+Department/@28.5462037,77.1890884,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df682212463:0xbd6b2f68242221b7!8m2!3d28.5462037!4d77.1912771?hl=en',
    phoneUrl: '+911126591241',
    webUrl: 'http://civil.iitd.ac.in/',
  },
  {
    id: 11,
    cd: [28.547591, 77.188799],
    name: 'Girnar House',
    img: <img
      src={girnar}
      height="200"
      alt="Girnar Hostel"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/content/halls-residence',
    mapUrl: 'https://goo.gl/maps/w63tTyrBJgxzAkHc8',
    phoneUrl: '+911126596890',
    webUrl: 'http://www.iitd.ac.in/content/halls-residence',
  },
  {
    id: 12,
    cd: [28.547718, 77.1892],
    name: 'Udaigiri Hostel',
    img: <img
      src={udaigiri}
      height="200"
      alt="Udaigir Hostel"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/content/halls-residence',
    mapUrl: 'https://goo.gl/maps/1KjtHKaA37fSdiq8A',
    phoneUrl: '+911126596899',
    webUrl: 'http://www.iitd.ac.in/content/halls-residence',
  },
  {
    id: 13,
    cd: [28.548277, 77.187985],
    name: 'Satpura House',
    img: <img
      src={satpura}
      height="200"
      alt="Satpura House"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/content/halls-residence',
    mapUrl: 'https://goo.gl/maps/c7UZDwrC8wKhPdXb8',
    phoneUrl: '+911126969111',
    webUrl: 'http://www.iitd.ac.in/content/halls-residence',
  },
  {
    id: 14,
    cd: [28.548729, 77.18622],
    name: 'Vindhyachal Hostel',
    img: <img
      src={vindy}
      height="200"
      alt="Vindhyachal House"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/content/halls-residence',
    mapUrl: 'https://goo.gl/maps/ek7e1odhwHGSoSkq5',
    phoneUrl: '+919540099719',
    webUrl: 'http://www.iitd.ac.in/content/halls-residence',
  },
  {
    id: 15,
    cd: [28.54764, 77.185877],
    name: 'Shivalik Hostel',
    img: <img
      src={shivalik}
      height="200"
      alt="Shivalik Hostel"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/content/halls-residence',
    mapUrl: 'https://goo.gl/maps/ujqQ6UiyD38w8KDy5',
    phoneUrl: '+911126596921',
    webUrl: 'http://www.iitd.ac.in/content/halls-residence',
  },
  {
    id: 16,
    cd: [28.54667, 77.18626],
    name: 'Zanskar Hostel',
    img: <img
      src={zanskar}
      height="200"
      alt="Zanskar Hostel"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/content/halls-residence',
    mapUrl: 'https://goo.gl/maps/ZgxCSeRtxHGF1PdUA',
    phoneUrl: '+911126597068',
    webUrl: 'http://www.iitd.ac.in/content/halls-residence',
  },
  {
    id: 17,
    cd: [28.549264, 77.185153],
    name: 'Kumaon Hostel',
    img: <img
      src={kumaon}
      height="200"
      alt="Kumaon Hostel"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/',
    mapUrl: 'https://goo.gl/maps/Kze1176A9LS8TrPG7',
    phoneUrl: '+911126596992',
    webUrl: 'http://www.iitd.ac.in/',
  },
  {
    id: 18,
    cd: [28.549678, 77.18394],
    name: 'Jwalamukhi Hostel',
    img: <img
      src={jwala}
      height="200"
      alt="Jwalamukhi Hostel"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://jwalamukhi.iitd.ac.in/',
    mapUrl: 'https://goo.gl/maps/eAmS1TsNP5m1LnDh6',
    phoneUrl: '',
    webUrl: 'http://jwalamukhi.iitd.ac.in/',
  },
  {
    id: 19,
    cd: [28.548771, 77.183583],
    name: 'Aravali Hostel',
    img: <img
      src={aravali}
      height="200"
      alt="Dogra Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/content/halls-residence',
    mapUrl: 'https://goo.gl/maps/mWKenH5ZZrESUHVD8',
    phoneUrl: '+911126596911',
    webUrl: 'http://www.iitd.ac.in/content/halls-residence',
  },
  {
    id: 20,
    cd: [28.547332, 77.183122],
    name: 'Karakoram Hostel',
    img: <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSNBV4bhbjsb0Mwtmq1wZpYxBrbBfWghHMVktY0BiSsYrRjVPq&usqp=CAU"
      height="200"
      alt="Karakoram Hostel"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/',
    mapUrl: 'https://goo.gl/maps/FJj9G3i97T7JDpKR6',
    phoneUrl: '',
    webUrl: 'http://www.iitd.ac.in/',
  },
  {
    id: 21,
    cd: [28.546281, 77.182476],
    name: 'Nilgiri Hostel',
    img: <img
      src={nilgiri}
      height="200"
      alt="Nilgiri Hostel"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/',
    mapUrl: 'https://goo.gl/maps/JgHDHNw9WYRDckFn6',
    phoneUrl: '',
    webUrl: 'http://www.iitd.ac.in/',
  },
  {
    id: 22,
    cd: [28.545202, 77.197092],
    name: 'Himadri Hostel',
    img: <img
      src={himadri}
      height="200"
      alt="Himadri Hostel"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/content/contact-us',
    mapUrl: 'https://goo.gl/maps/uzupEtgPEoAg1vPq6',
    phoneUrl: '',
    webUrl: 'http://www.iitd.ac.in/content/contact-us',
  },
  {
    id: 23,
    cd: [28.544632, 77.196963],
    name: 'Kailash Hostel',
    img: <img
      src={kailash}
      height="200"
      alt="Kailash Hostel"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'hostel',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Briefcase />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/content/contact-us',
    mapUrl: 'https://goo.gl/maps/eD7q11byMmBTYRfB7',
    phoneUrl: '+911126596826',
    webUrl: 'http://www.iitd.ac.in/content/contact-us',
  },
  {
    id: 24,
    cd: [28.5428665, 77.1931332],
    name: 'Lecture Hall Complex',
    img: <img
      src="data:image/jpeg;base64,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"
      height="200"
      alt="LHC IIT Delhi"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'Arguably the most modern part of IIT Delhi, all the classes take place here.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/',
    mapUrl: 'https://www.google.com/maps/place/New+Lecture+Theater+Complex/@28.5428665,77.1909445,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df7c7e53247:0x622632306b9cf812!8m2!3d28.5428665!4d77.1931332?hl=en',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 25,
    cd: [28.54343789812074, 77.19127982854845],
    name: 'Staff Canteen',
    img: <img
      src="https://qph.fs.quoracdn.net/main-qimg-9716df72fc0640634a9e7cd2cdaa1c96"
      height="200"
      alt="Staff Canteen"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'IIT Delhi\'s Staff Canteen. Unlike its name, it is open to all and provides clean, hygenic and affordable meals.',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Staff+Canteen/@28.5435735,77.1912549,15z/data=!4m2!3m1!1s0x0:0x6cda61906d75bd1b?sa=X&hl=en&ved=2ahUKEwjKgZOX9dTqAhXQyjgGHc9YDRkQ_BIwG3oECBMQCA',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 26,
    cd: [28.54571905400154, 77.19358921051027],
    name: 'Dept. of Biotechnology',
    img: <img
      src={bbe}
      height="200"
      alt="Dept. of BBE"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Dept. of Biochemical Engineering and Biotechnology, IIT Delhi is situated here.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://beb.iitd.ac.in/academics.html',
    mapUrl: 'https://www.google.com/maps/place/Department+of+Biochemical+Engineering+and+Biotechnology/@28.5459016,77.1918095,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df604d9d223:0xa0152dedab2a1135!8m2!3d28.5459016!4d77.1939982?hl=en',
    phoneUrl: '+911126591001',
    webUrl: 'http://beb.iitd.ac.in/',
  },
  {
    id: 27,
    cd: [28.548201298663667, 77.18435704708101],
    name: 'Rajdhani Chatkare Foods',
    img: <img
      src="https://content3.jdmagicbox.com/comp/delhi/j6/011pxx11.xx11.180505105548.e1j6/catalogue/rajdhani-chatkhare-food-hauz-khas-delhi-home-delivery-restaurants-xokptgx3q6.jpg"
      height="200"
      alt="Rajdhani Chatkare"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Affordable snacks and meals across cuisines available here.',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: 'https://www.zomato.com/ncr/rajdhani-chatkhare-food-hauz-khas-new-delhi',
    mapUrl: 'https://www.google.com/maps/place/Rajdhani+Chatkare+Foods/@28.5482115,77.1842648,15z/data=!4m2!3m1!1s0x0:0x9afe153cd05ebaa2?sa=X&hl=en&ved=2ahUKEwjGmuG099TqAhXI7XMBHZSOAdsQ_BIwCnoECBcQCA',
    phoneUrl: '+919999916948',
    webUrl: '',
  },
  {
    id: 28,
    cd: [28.54370308948772, 77.19027936458589],
    name: 'Hockey/Athletics Field',
    img: <img
      src="https://lh3.googleusercontent.com/proxy/7Dv1I7JDUYjkMsGZwm5sMW3pcWYX8AkQPg4Ow36Rusu8SFk9QOx0jCsUiYrkwkpGi41D2P3JnGz8leBuX-A"
      height="200"
      alt="Athletics Field"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc: 'The Institute hockey and athletics field.',
    categoryIcon: (
      <a href="https://" className="c-btn git">
        <span>
          <Icon.Target />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Athletic+Sports+Complex/@28.5440509,77.1879436,18.68z/data=!4m8!1m2!2m1!1sathletics+iit+delhi!3m4!1s0x0:0x3da7970552952fdf!8m2!3d28.5435984!4d77.1896407?hl=en',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 29,
    cd: [28.544343680524918, 77.1889114379883],
    name: 'Cricket Ground',
    img: <img
      src="https://i.ytimg.com/vi/bod83g8iPPc/maxresdefault.jpg"
      height="200"
      alt="Cricket ground"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'The institute cricket ground.',
    categoryIcon: (
      <a href="https://" className="c-btn git">
        <span>
          <Icon.Target />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/IITD+Cricket+Ground/@28.5440509,77.1879436,18.68z/data=!4m8!1m2!2m1!1sathletics+iit+delhi!3m4!1s0x0:0x2d1159fa75a3c17b!8m2!3d28.5442746!4d77.1889208?hl=en',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 30,
    cd: [28.544941875990535, 77.18845009803773],
    name: 'Basketball Courts',
    img: <img
      src="data:image/jpeg;base64,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"
      height="200"
      alt="IITD Basketball"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'The Institute basketball courts (4 x synthetic)',
    categoryIcon: (
      <a href="https://" className="c-btn git">
        <span>
          <Icon.Target />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/IIT+delhi+Basketball+Ground/@28.5440509,77.1879436,18.68z/data=!4m8!1m2!2m1!1sathletics+iit+delhi!3m4!1s0x0:0xcde0f54b6433ab70!8m2!3d28.5441763!4d77.1879837?hl=en',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 31,
    cd: [28.544833541630556, 77.18754887580873],
    name: 'Football Ground',
    img: <img
      src="https://lh3.googleusercontent.com/proxy/q9lPqmVMcWFJJD4qMyQ1dFdfRZulrD8Tn_mk8HibHkXtmk-cBjul7_kDYQeqmKokjYeP1W-5kFvt2D36SGs"
      height="200"
      alt="IITD Football"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'The institute football ground. Also home to the BHaichung Bhutia Football Schools.',
    categoryIcon: (
      <a href="https://" className="c-btn git">
        <span>
          <Icon.Target />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Bhaichung+Bhutia+Football+Schools/@28.5440509,77.1879436,18.68z/data=!4m8!1m2!2m1!1sathletics+iit+delhi!3m4!1s0x390d1df143ff6a31:0x978fc174afc22b46!8m2!3d28.5449102!4d77.1876917?hl=en',
    phoneUrl: '+919582008744',
    webUrl: 'http://www.bbfootballschools.com/',
  },
  {
    id: 32,
    cd: [28.545126, 77.193483],
    name: 'BioTech Lawns',
    img: <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Multi_Storey_Building%2C_IITD.JPG"
      height="200"
      alt="Biotech Lawn"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categoryIcon: (
      <a href="https://" className="c-btn git">
        <span>
          <Icon.Target />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Biotech+Lawns/@28.5449,77.192805,19.24z/data=!4m8!1m2!2m1!1sathletics+iit+delhi!3m4!1s0x390d1df6164b7e83:0xf3f35535e518cc44!8m2!3d28.5452118!4d77.1936167?hl=en',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 33,
    cd: [28.545940430931072, 77.18602001667024],
    name: 'Swimming Pool',
    img: <img
      src="https://content3.jdmagicbox.com/comp/delhi/s4/011pxx11.xx11.170904142536.a6s4/catalogue/iit-delhi-swimming-pool-hauz-khas-delhi-swimming-pools-2rwh7s4lz1.jpg"
      height="200"
      alt="Swimming Pool"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'IIT Delhi\'s Olympic size, best in class swimming pool',
    categoryIcon: (
      <a href="https://" className="c-btn git">
        <span>
          <Icon.Target />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/',
    mapUrl: 'https://www.google.com/maps/place/IIT+Delhi+Swimming+Pool/@28.5531205,77.1728763,16z/data=!4m8!1m2!2m1!1sswimming+pool+iit+delhi!3m4!1s0x390d1df3d5852431:0x87a0ef61281f295!8m2!3d28.5459552!4d77.1861403?hl=en',
    phoneUrl: '+919986541329',
    webUrl: '',
  },
  {
    id: 34,
    cd: [28.548183537902325, 77.18495249748231],
    name: 'Volleyball Courts',
    img: <img
      src="https://lh3.googleusercontent.com/proxy/8nruri5RDpYLrj3mrDdGO0DnwX28XAZBV0_W8Jb1qi9lPOWHfsndAxOtVMKOhJE7kAyJx0dXpztgRy_GkHM"
      height="200"
      alt="Volleyball courts"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'Institute Volleyball courts.',
    categoryIcon: (
      <a href="https://" className="c-btn git">
        <span>
          <Icon.Target />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/IIT+Delhi+Volleyball+Court,+IIT+Campus,+Indian+Institute+of+Technology+Delhi,+Hauz+Khas,+New+Delhi,+Delhi+110016/@28.5482174,77.1847116,21z/data=!4m8!1m2!2m1!1sswimming+pool+iit+delhi!3m4!1s0x390d1df25eb42103:0x292c4601011a2cd0!8m2!3d28.5482459!4d77.1847761?hl=en',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 35,
    cd: [28.54758896789944, 77.18481838703157],
    name: 'Lawn Tennis Courts',
    img: <img
      src="https://lh3.googleusercontent.com/proxy/8o9ZHMPOqTU6eyOrgjnXqPz-9Xe0MtSzTh6Qf2dkOKHjceZLcq7zIx3R3UTcdyn1YDzWDx7LoisIuT-0E2oOwmpJVb41VYUuL9QDPeD0ft7RTQLr5W3c-7JIXPklrDIHDPVofpbLUGBh3A"
      height="200"
      alt="Lawn Tennis Court IITD"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'sport',
    desc:
            'The institute Lawn Tennis courts. Home to the Peninsula Tennis Academy.',
    categoryIcon: (
      <a href="https://" className="c-btn git">
        <span>
          <Icon.Target />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/',
    mapUrl: 'https://www.google.com/maps/place/Tennis+Courts/@28.5481955,77.1843557,19.13z/data=!4m8!1m2!2m1!1sswimming+pool+iit+delhi!3m4!1s0x390d1df24601731f:0x2209fd43671535c0!8m2!3d28.5475886!4d77.1846172?hl=en',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 36,
    cd: [28.544899, 77.19221],
    name: 'Department of Mathematics',
    img: <img
      src="https://ggn.dronacharya.info/CSEDept/photogallery/2014/may_2014/images/1.jpg"
      height="200"
      alt="Dept Of Mathematics"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The department of Mathematics IIT Delhi is situated here.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://maths.iitd.ac.in/drupal/Undergraduate',
    mapUrl: 'https://www.google.com/maps/place/Department+of+Mathematics,+IIT+Delhi/@28.5448675,77.1919694,21z/data=!4m5!3m4!1s0x390d1df65ef41ab3:0x776445d9865b62a!8m2!3d28.5447965!4d77.1920067',
    phoneUrl: '+911126591471',
    webUrl: 'http://maths.iitd.ac.in/',
  },
  {
    id: 37,
    cd: [28.546115, 77.193850],
    name: 'Department of Chemical Engineering',
    img: <img
      src={ch}
      height="200"
      alt="Dept Of Chemical Engineering"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The department of Chemical Engineering IIT Delhi is situated here.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://chemistry.iitd.ac.in/courses.html',
    mapUrl: 'https://www.google.com/maps/place/Department+Of+Chemical+Engineering/@28.5458552,77.1933628,19.44z/data=!4m5!3m4!1s0x390d1d96497e8f9d:0xd581fb2eb97cadc7!8m2!3d28.5460689!4d77.1934915',
    phoneUrl: '',
    webUrl: 'http://chemistry.iitd.ac.in/',
  },
  {
    id: 37,
    cd: [28.545029, 77.190730],
    name: 'Department of Computer Science & Engineering (Bharti School)',
    img: <img
      src="https://photos.wikimapia.org/p/00/00/30/72/84_big.jpg"
      height="200"
      alt="Dept Of Computer Science & Engineering"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Bharti School',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'https://www.cse.iitd.ernet.in/index.php/2011-12-29-22-45-50/courses',
    mapUrl: 'https://www.google.com/maps/place/Department+of+Computer+Science+and+Engineering/@28.5450865,77.1885222,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df6aeec8f6b:0xd6886dc6b70b6eb!8m2!3d28.5450865!4d77.1907109',
    phoneUrl: '+911126591291',
    webUrl: 'https://www.cse.iitd.ernet.in/',
  },
  {
    id: 38,
    cd: [28.543435, 77.192915],
    name: 'Department of Design',
    img: <img
      src="https://pbs.twimg.com/media/DZX5isGUQAUCa68.jpg"
      height="200"
      alt="Dept Of Design"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Department Of Design IIT Delhi is situated here.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://iddcweb.iitd.ac.in/',
    mapUrl: 'https://www.google.com/maps/place/Department+of+Design,+IIT+Delhi/@28.5434218,77.1899207,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df7aceb01cf:0x37394bfb5d80173f!8m2!3d28.5434218!4d77.1921094',
    phoneUrl: '',
    webUrl: 'http://iddcweb.iitd.ac.in/',
  },
  {
    id: 39,
    cd: [28.5452869, 77.1923669],
    name: 'Department of Humanities and Social Sciences',
    img: <img
      src={huss}
      height="200"
      alt="Dept Of Humanities"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Department Of HuSS IIT Delhi is situated here.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://hss.iitd.ac.in/courses',
    mapUrl: 'https://www.google.com/maps/place/Department+of+Humanities+and+Social+Sciences/@28.5452869,77.1923669,21z/data=!4m14!1m8!2m7!1sdepartment+of+humanities!3m5!1sdepartment+of+humanities!2s28.543425,+77.192915!4m2!1d77.1929154!2d28.5434253!3m4!1s0x390d1df665927a0b:0xe0c148de657541a!8m2!3d28.5454395!4d77.1923219',
    phoneUrl: '+911126591371',
    webUrl: 'http://hss.iitd.ac.in/',
  },
  {
    id: 40,
    cd: [28.542632, 77.183011],
    name: 'Department of Management Studies (DMS)',
    img: <img
      src="https://getmyuni.azureedge.net/college-image/big/department-of-management-studies-dms-iit-delhi-new-delhi.jpg"
      height="200"
      alt="DMS IIT Delhi"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Department Of Management Studies (DMS) IIT Delhi.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://dms.iitd.ac.in/',
    mapUrl: 'https://www.google.com/maps/place/Department+of+Management+Studies,+IIT+Delhi/@28.5426238,77.1808715,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df1d55fb887:0xe469935d376ee021!8m2!3d28.5426238!4d77.1830602',
    phoneUrl: '+911126591171',
    webUrl: 'http://dms.iitd.ac.in/',
  },
  {
    id: 41,
    cd: [28.544346, 77.193415],
    name: 'Department of Material Science and Engineering',
    img: <img
      src="https://lh5.googleusercontent.com/s-8Lll4XfcSpH3WoInIZOsri-exXBlXUY1ldc1-_HyCvhkENmYoR0Lj52hixPILEiymJYbO33Y6WxdSJg1a77w8ah-7y_wYOPpFYnSBiJD1jffDGsB4=w1280"
      height="200"
      alt="DMS IIT Delhi"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Department Of Material Science and Engineering IITD.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://mse.iitd.ac.in/',
    mapUrl: 'https://www.google.com/maps/place/Department+of+Materials+Science+and+Engineering/@28.5443692,77.1913546,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df6309fbc65:0xf97dd8724c49e240!8m2!3d28.5443692!4d77.1935433',
    phoneUrl: '',
    webUrl: 'http://mse.iitd.ac.in/',
  },
  {
    id: 42,
    cd: [28.5458986, 77.1930107],
    name: 'Department of Mechanical Engineering',
    img: <img
      src="https://images.shiksha.com/mediadata/images/1504611236phpFGRISD.jpeg"
      height="200"
      alt="Mechanical Engineering IIT Delhi"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Department Of Mechanical Engineering IITD.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://mech.iitd.ac.in/content/academic-programmes',
    mapUrl: 'https://www.google.com/maps/place/Department+of+Mechanical+Engineering/@28.5459267,77.1908014,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce209ea4fb5e5:0x284dcb6bb0d51484!8m2!3d28.5459267!4d77.1929901',
    phoneUrl: '+911126591051',
    webUrl: 'http://mech.iitd.ac.in/',
  },
  {
    id: 43,
    cd: [28.5452623, 77.1924184],
    name: 'Department of Physics',
    img: <img
      src={dogra}
      height="200"
      alt="Dept of Physics IIT Delhi"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Department Of Physics IITD.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://www.iitd.ac.in/',
    mapUrl: 'https://www.google.com/maps/place/Department+Of+Physics,+IIT+Delhi/@28.5452623,77.1924184,20.06z/data=!4m5!3m4!1s0x390d1dc87305e40d:0xcca0ec09258fe592!8m2!3d28.5454041!4d77.1922877',
    phoneUrl: '',
    webUrl: 'http://www.iitd.ac.in/',
  },
  {
    id: 44,
    cd: [28.543972, 77.193585],
    name: 'Department of Textile & Fibre Engineering',
    img: <img
      src="http://www.smita-iitd.com/_/rsrc/1584102045552/group-members/16-17%20dept.PNG"
      height="200"
      alt="Dept of Textile & Fibre Engineering IIT Delhi"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Department Of Textile & Fibre Enginnering IITD.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://textile.iitd.ac.in/programs.htm',
    mapUrl: 'https://www.google.com/maps/place/Department+of+Textile+and+Fibre+Engineering/@28.5442287,77.1911444,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df63a7bde9d:0xb7e99df7edb5d29a!8m2!3d28.5442287!4d77.1933331',
    phoneUrl: '+911126591401',
    webUrl: 'http://textile.iitd.ac.in/',
  },
  {
    id: 44,
    cd: [28.545558, 77.194176],
    name: 'Kusuma School of Biological Sciences',
    img: <img
      src="http://bioschool.iitd.ac.in/img/Kusuma-2.png"
      height="200"
      alt="KSBS"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'The Kusuma Schhol of Biological Sciences.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://bioschool.iitd.ac.in/',
    mapUrl: 'https://www.google.com/maps/place/Kusuma+School+Of+Biological+Sciences/@28.5455658,77.1919809,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df61c0830cb:0xe9b22b5b631fe9d6!8m2!3d28.5455658!4d77.1941696',
    phoneUrl: '+911126597500',
    webUrl: 'http://bioschool.iitd.ac.in/',
  },
  {
    id: 45,
    cd: [28.5454911, 77.1902656],
    name: 'Amar Nath and Shashi Khosla School of Information Technology',
    img: <img
      src="http://www.sit.iitd.ac.in/images/1-scaled.jpg"
      height="200"
      alt="Amar Nath and Shashi Khosla School of Information Technology"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'School of IT.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: 'http://www.sit.iitd.ernet.in/',
    mapUrl: 'https://www.google.com/maps/place/Amar+Nath+and+Shashi+Khosla+School+of+Information+Technology/@28.5454911,77.1902656,20.64z/data=!4m5!3m4!1s0x390d1df6bd59d11d:0x667b88d0e2a5a8a9!8m2!3d28.5454451!4d77.1901989',
    phoneUrl: '+911126596056',
    webUrl: 'http://www.sit.iitd.ernet.in/',
  },
  {
    id: 46,
    cd: [28.5463962, 77.1867577],
    name: 'Chaayos',
    img: <img
      src="https://pbs.twimg.com/media/DUJgLPlXcAAp4Rk?format=jpg&name=large"
      height="200"
      alt="Chaayos"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Chaayos\' IIT Delhi outlet. Subsidized rates, amazing ambience and some great chai.',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: 'https://www.tripadvisor.in/ShowUserReviews-g304551-d10382590-r561220093-Chaayos_Hauz_Khas_Village-New_Delhi_National_Capital_Territory_of_Delhi.html',
    mapUrl: 'https://www.google.com/maps/search/chaayos+iit+delhi/@28.5463959,77.1867586,20.99z',
    phoneUrl: '+919821193375',
    webUrl: 'http://www.chaayos.com/',
  },
  {
    id: 47,
    cd: [28.546414, 77.186691],
    name: 'Roopsagar Bakery',
    img: <img
      src="https://img4.nbstatic.in/tr:w-500/5b0277acd60180000c8384fc.jpg"
      height="200"
      alt="Roopsagar Bakery"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'This bakery serves pure-vegetarian treats such as cakes, pastries, cookies, snacks, cheesecakes and muffins.',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: 'https://www.justdial.com/Delhi/Roop-Sagar-Bakery-Jia-Sarai-IIT/011PXX11-XX11-140624095712-G2R4_BZDET',
    mapUrl: 'https://www.google.com/maps/place/Roopsagar+Bakery/@28.5462598,77.1867701,20.99z/data=!4m8!1m2!2m1!1schaayos+iit+delhi!3m4!1s0x390d1df3d079797d:0xad66433f77174401!8m2!3d28.5464176!4d77.1866872',
    phoneUrl: '+917838118004',
    webUrl: '',
  },
  {
    id: 48,
    cd: [28.546455, 77.186709],
    name: 'Quiet Kitchen',
    img: <img
      src="https://img4.nbstatic.in/tr:w-500/5cbdb3e7d60180000d7ad0f2.png"
      height="200"
      alt="Quiet Kitchen"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Quiet Kitchen IIT Delhi',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: 'https://www.nearbuy.com/delhi-ncr/quiet-kitchen-iit-campus',
    mapUrl: 'https://www.google.com/maps/place/Roopsagar+Bakery/@28.5462598,77.1867701,20.99z/data=!4m8!1m2!2m1!1schaayos+iit+delhi!3m4!1s0x390d1df3d079797d:0xad66433f77174401!8m2!3d28.5464176!4d77.1866872',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 49,
    cd: [28.546196, 77.186630],
    name: 'Masala Mix',
    img: <img
      src="https://content.jdmagicbox.com/comp/delhi/z6/011pxx11.xx11.181113202746.h7z6/catalogue/masala-mix-hauz-khas-delhi-l801s9i1wn.jpg"
      height="200"
      alt="Masala Mix"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Masala Mix IIT Delhi',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: 'https://magicpin.in/New-Delhi/Jia-Sarai/Restaurant/Masala-Mix/store/24c966/',
    mapUrl: 'https://www.google.com/maps/place/Masala+Mix/@28.546261,77.1867698,21z/data=!4m8!1m2!2m1!1schaayos+iit+delhi!3m4!1s0x390d1df3d9fde9d3:0xc363b8f7c4ed3f8a!8m2!3d28.5462002!4d77.1866235',
    phoneUrl: '+919810061748',
    webUrl: '',
  },
  {
    id: 50,
    cd: [28.5471611, 77.186354],
    name: 'Shadab Cafe',
    img: <img
      src={shadab}
      height="200"
      alt="Shadab Cafe"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Shadab Cafe, near Zanskar Hostel IIT Delhi',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Shadab+Cafe/@28.5470604,77.1864516,21z/data=!4m8!1m2!2m1!1schaayos+iit+delhi!3m4!1s0x390d1d42fb9211cd:0x37259187a509c7af!8m2!3d28.5471686!4d77.1863379',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 51,
    cd: [28.5483362, 77.1841118],
    name: 'Koolees',
    img: <img
      src={koolees}
      height="200"
      alt="Koolees"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Koolees Shakes and Ice Creams',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Koolees/@28.5483362,77.1841118,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipODhrEABfAzgrLd8HtyX6iYGnmanW9_qx5eYjMt!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipODhrEABfAzgrLd8HtyX6iYGnmanW9_qx5eYjMt%3Dw203-h114-k-no!7i1920!8i1080!4m8!1m2!2m1!1schaayos+iit+delhi!3m4!1s0x390d1df2610d33ab:0xcee0f14dea219558!8m2!3d28.5482842!4d77.1842343',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 52,
    cd: [28.5450913, 77.1852827],
    name: 'Open Air Theatre',
    img: <img
      src="https://pbs.twimg.com/media/DppLhogWkAMdR6I.jpg"
      height="200"
      alt="OAT"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'ent',
    desc:
            'Open Air Theatre IIT Delhi',
    categoryIcon: (
      <a href="https://" className="c-btn insta">
        <span>
          <Icon.Music />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Open+Air+Theatre,+IIT+Delhi/@28.5450913,77.1852827,11z/data=!4m8!1m2!2m1!1samphitheater+near+Indian+Institute+of+Technology+Delhi,+Hauz+Khas,+New+Delhi,+Delhi!3m4!1s0x390d1df1853f6eed:0xb5bdb65b286c76e0!8m2!3d28.5450913!4d77.1852827',
    phoneUrl: '+911126597135',
    webUrl: '',
  },
  {
    id: 53,
    cd: [28.5450925, 77.1835998],
    name: 'Faculty Guest House',
    img: <img
      src="https://live.staticflickr.com/90/236146739_bfacd506d3_b.jpg"
      height="200"
      alt="Faculty Guest House"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'other',
    desc:
            'Faculty Guest House IIT Delhi',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Home />
        </span>
      </a>
    ),
    infoUrl: 'http://iitd.ac.in/',
    mapUrl: 'https://www.google.com/maps/place/Faculty+Guest+House/@28.5450925,77.1835998,19.12z/data=!4m11!1m2!2m1!1siit+delhi!3m7!1s0x390d1df1f9cd908f:0x2f34da024d2322f9!5m2!4m1!1i2!8m2!3d28.5453491!4d77.1836275',
    phoneUrl: '+911126591699',
    webUrl: 'http://iitd.ac.in/',
  },
  {
    id: 54,
    cd: [28.5449127, 77.184791],
    name: 'Student Activity Center (SAC)',
    img: <img
      src="https://s3-ap-southeast-1.amazonaws.com/sportsjig-production-assets/system/assets/files/2675/large/IMG_20151224_142649.jpg?1450948596"
      height="200"
      alt="Faculty Guest House"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'other',
    desc:
            'Well maintained multi-sports facility. Accessible to the Students, Staff and Alumni only.',
    categoryIcon: (
      <a href="https://" className="c-btn insta">
        <span>
          <Icon.Music />
        </span>
      </a>
    ),
    infoUrl: 'https://m.sportsjig.com/advancedSearch/playspaces/973/IIT-Delhi---Student-Activities-Center',
    mapUrl: 'https://www.google.com/maps/place/SAC+Library,+IIT+Delhi/@28.5449842,77.1850801,20.04z/data=!4m12!1m6!2m5!1ssac+iit+delhi!5m3!5m2!4m1!1i2!3m4!1s0x390d1d13172d8629:0x6422e160f6070b87!8m2!3d28.545069!4d77.1853048',
    phoneUrl: '',
    webUrl: 'http://sac.iitd.ac.in/',
  },
  {
    id: 55,
    cd: [28.5458768, 77.1880759],
    name: 'Hospital',
    img: <img
      src="http://hospital.iitd.ac.in/sites/default/files/hospital/iitd_hospital.jpg"
      height="200"
      alt="Hospital"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'other',
    desc:
            'The medical needs of the Campus population met by the Institute Hospital.',
    categoryIcon: (
      <a href="https://" className="c-btn insta">
        <span>
          <Icon.Heart />
        </span>
      </a>
    ),
    infoUrl: 'http://hospital.iitd.ac.in/',
    mapUrl: 'https://www.google.com/maps/place/IITD+Hospital/@28.5458768,77.1880759,21z/data=!4m12!1m6!2m5!1ssac+iit+delhi!5m3!5m2!4m1!1i2!3m4!1s0x390d1df3fd840dfb:0xaa742411591954de!8m2!3d28.5458768!4d77.1882127',
    phoneUrl: '+911126596628',
    webUrl: 'http://hospital.iitd.ac.in/',
  },
  {
    id: 56,
    cd: [28.5458568, 77.1856583],
    name: 'Apollo Pharmacy',
    img: <img
      src="https://content.jdmagicbox.com/comp/delhi/v3/011pxx11.xx11.110223095948.n7v3/catalogue/apollo-pharmacy-r-k-puram-delhi-chemists-4j3skns.jpg?clr="
      height="200"
      alt="Apollo pharmacy"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'other',
    desc:
            'The campus pharmacy.',
    categoryIcon: (
      <a href="https://" className="c-btn insta">
        <span>
          <Icon.Heart />
        </span>
      </a>
    ),
    infoUrl: 'http://stores.apollopharmacy.in/apollo-pharmacy-greater-kailash-ii-s-block-pharmacy-hauz-khas-new-delhi-30329/Home?utm_source=locator&utm_medium=googleplaces',
    mapUrl: 'https://www.google.com/maps/place/Apollo+Pharmacy/@28.5458568,77.1856583,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1df15770dce3:0xbb86890ffb8130d9!8m2!3d28.5458568!4d77.187847',
    phoneUrl: '+911141402222',
    webUrl: 'http://stores.apollopharmacy.in/apollo-pharmacy-greater-kailash-ii-s-block-pharmacy-hauz-khas-new-delhi-30329/Home?utm_source=locator&utm_medium=googleplaces',
  },
  {
    id: 57,
    cd: [28.5438559, 77.1933482],
    name: 'Chai Point',
    img: <img
      src={cp}
      height="200"
      alt="Chai point"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'eat',
    desc:
            'Best place for a cup of tea inside IIT and it\'s quite pocket friendly as well .',
    categoryIcon: (
      <a href="https://" className="c-btn eat">
        <span>
          <Icon.Coffee />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Chai+point/@28.5438559,77.1933482,21z/data=!4m12!1m6!3m5!1s0x390d1df15770dce3:0xbb86890ffb8130d9!2sApollo+Pharmacy!8m2!3d28.5458568!4d77.187847!3m4!1s0x390d1d0986f3a585:0x141996188ca40268!8m2!3d28.5438882!4d77.1934082',
    phoneUrl: '+918880141000',
    webUrl: '',
  },
  {
    id: 58,
    cd: [28.5437328, 77.1930072],
    name: 'State Bank Of India',
    img: <img
      src={sbi}
      height="200"
      alt="SBI"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'other',
    desc:
            'State Bank of India (SBI) Iit Hauz Khas core banking branch IFSC Code is SBIN0001077.',
    categoryIcon: (
      <a href="https://" className="c-btn insta">
        <span>
          <Icon.DollarSign />
        </span>
      </a>
    ),
    infoUrl: 'https://banksifsccode.com/state-bank-of-india-ifsc-code/delhi/new-delhi/iit-hauz-khas-branch/',
    mapUrl: 'https://www.google.com/maps/place/State+Bank+of+India+IIT+Delhi/@28.5437328,77.1930072,20.36z/data=!4m12!1m6!3m5!1s0x390d1df15770dce3:0xbb86890ffb8130d9!2sApollo+Pharmacy!8m2!3d28.5458568!4d77.187847!3m4!1s0x390d1df64a7a253b:0xe027cf3d2506106e!8m2!3d28.5438988!4d77.1932251',
    phoneUrl: '+911126581842',
    webUrl: '',
  },
  {
    id: 59,
    cd: [28.5453426, 77.1909557],
    name: 'Computer Services Centre',
    img: <img
      src={csc}
      height="200"
      alt="CSC"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'other',
    desc:
            'The CSC manages all of the centrally available network, IT resources in IIT .',
    categoryIcon: (
      <a href="https://" className="c-btn insta">
        <span>
          <Icon.Cpu />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Computer+Services+Centre/@28.5453426,77.1909557,18.58z/data=!4m5!3m4!1s0x390d1df66748619d:0x90021d25eee641fc!8m2!3d28.54498!4d77.1920647',
    phoneUrl: '+919210109494',
    webUrl: 'http://www.cc.iitd.ac.in/',
  },
  {
    id: 60,
    cd: [28.5450672, 77.1920865],
    name: 'Seminar Hall',
    img: <img
      src={dogra}
      height="200"
      alt="Sem Hall"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'entermainment',
    desc:
            'IIT Delhi Seminar Hall.',
    categoryIcon: (
      <a href="https://" className="c-btn insta">
        <span>
          <Icon.Music />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Seminar+Hall/@28.5450672,77.1920865,19z/data=!3m1!4b1!4m5!3m4!1s0x390d1df669c26951:0x94b46b5f3cfd7d17!8m2!3d28.5450672!4d77.1926337',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 61,
    cd: [28.5427956, 77.1984536],
    name: 'Post Office',
    img: <img
      src={po}
      height="200"
      alt="Post Office"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'other',
    desc:
            'IIT Delhi Post Office.',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.Mail />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Post+Office/@28.5427956,77.1984536,19z/data=!4m12!1m6!3m5!1s0x390d1df669c26951:0x94b46b5f3cfd7d17!2sSeminar+Hall!8m2!3d28.5450672!4d77.1926337!3m4!1s0x390ce208b8849405:0xa3f06d642dc9bccc!8m2!3d28.542719!4d77.1991789',
    phoneUrl: '+91180012011',
    webUrl: 'http://www.indiapost.gov.in/',
  },
  {
    id: 62,
    cd: [28.5427987, 77.1979836],
    name: 'Kendriya Vidyalaya IIT Delhi',
    img: <img
      src="https://d2jg2pri5bpndu.cloudfront.net/schools/covers/870_KV-IIT---Kendriya-Vidyalaya-.png"
      height="200"
      alt="KV"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'Kendriya Vidyala IIT Delhi',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Kendriya+Vidyalaya/@28.5427987,77.1979836,19z/data=!4m12!1m6!3m5!1s0x390d1df669c26951:0x94b46b5f3cfd7d17!2sSeminar+Hall!8m2!3d28.5450672!4d77.1926337!3m4!1s0x390ce2088d66be57:0xa28ca87f2ea489b1!8m2!3d28.5426165!4d77.1983441',
    phoneUrl: '+911126741327',
    webUrl: 'http://www.kvjnu.org/english/',
  },
  {
    id: 63,
    cd: [28.5423368, 77.1992711],
    name: 'Kids Planet School',
    img: <img
      src={dogra}
      height="200"
      alt="Kids Planet School"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'academic',
    desc:
            'Kids Planet IIT Delhi : Play School, Nursery School, Kindergarten or Daycare',
    categoryIcon: (
      <a href="https://" className="c-btn fd">
        <span>
          <Icon.BookOpen />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Kids+Planet+School/@28.5423368,77.1992711,19z/data=!4m12!1m6!3m5!1s0x390d1df669c26951:0x94b46b5f3cfd7d17!2sSeminar+Hall!8m2!3d28.5450672!4d77.1926337!3m4!1s0x390d1f1f6d05414f:0xaaec14c5d0e2a1e1!8m2!3d28.542478!4d77.1997127',
    phoneUrl: '',
    webUrl: '',
  },
  {
    id: 64,
    cd: [28.5433479, 77.1989034],
    name: 'Mother Dairy Booth & Safal Store',
    img: <img
      src="https://content3.jdmagicbox.com/comp/delhi/q3/011pxx11.xx11.121229120836.z8q3/catalogue/safal-mother-dairy-defence-colony-delhi-fruit-vendors-isfkybyfxn.jpg"
      height="200"
      alt="Mother Dairy Booth & Safal Store"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'shop',
    desc:
            'Mother Dairy Booth & Safal Store',
    categoryIcon: (
      <a href="https://" className="c-btn learn-e">
        <span>
          <Icon.ShoppingCart />
        </span>
      </a>
    ),
    infoUrl: '',
    mapUrl: 'https://www.google.com/maps/place/Mother+Dairy+Booth+%26+Safal+Store/@28.5433479,77.1989034,18.32z/data=!4m12!1m6!3m5!1s0x390d1df669c26951:0x94b46b5f3cfd7d17!2sSeminar+Hall!8m2!3d28.5450672!4d77.1926337!3m4!1s0x390ce208ca8f6a05:0x6825a535f0aca1ee!8m2!3d28.5429564!4d77.2001512',
    phoneUrl: '+9118001801018',
    webUrl: 'http://www.motherdairy.com/',
  },
  {
    id: 65,
    cd: [28.5436112, 77.1983934],
    name: 'Main Guest House',
    img: <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/02/IIT_Delhi_guest_house.jpg"
      height="200"
      alt="Main Guest House"
      className="campus-img"
      borderRadius="10px"
    />,
    category: 'other',
    desc:
            'Main Guest House IIT Delhi',
    categoryIcon: (
      <a href="https://" className="c-btn fb">
        <span>
          <Icon.Home />
        </span>
      </a>
    ),
    infoUrl: 'http://iitd.ac.in/',
    mapUrl: 'https://www.google.com/maps/place/Main+Guest+House/@28.5420366,77.1955425,17.25z/data=!4m5!3m4!1s0x390ce209b284742d:0x511dcc6cc45420f8!8m2!3d28.5437039!4d77.1985875',
    phoneUrl: '+911126597287',
    webUrl: 'http://iitd.ac.in/',
  },
];

export default locations;
