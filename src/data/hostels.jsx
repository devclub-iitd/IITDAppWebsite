import React from 'react';
import * as Icon from 'react-feather';
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

const hostels = [
  {
    id: 0,
    name: 'Aravali Hostel',
    est: 1965,
    description:
            'Aravali is one of the oldest hostels, abode of the Ara Knights! It has a capacity of over 400 residents.',
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
    warden: 'Dr SUDARSHAN GHOSH, Associate Professor, Department of Mechanical Engineering',
    wardenLink: 'http://web.iitd.ac.in/~ghoshs/',
    notableAlumni: ['Gautam Kumra', 'Pradeep Gupta'],
    notableAlumniDesc: ['Managing Partner, McKinsey & Company', 'Founder, Cybermedia Group, IAN'],
    notableAlumniLinks: [
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiCj6bF_vLqAhWMyzgGHQ6DBNsQFjAAegQIAhAB&url=https%3A%2F%2Fwww.mckinsey.com%2Four-people%2Fgautam-kumra&usg=AOvVaw3qs2g54fpJE1F3-jPrFexw',
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiKte_0_vLqAhU-yzgGHae2AMEQFjAUegQIAhAB&url=http%3A%2F%2Fcmrindia.com%2Fpradeep-gupta%2F&usg=AOvVaw0eILewhp2yyGQSwSivsIY7',
    ],
    notableAlumniImages: [
      'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/gautam660_111518015421.jpg',
      'https://i.ytimg.com/vi/qRHxg6O3w0s/maxresdefault.jpg',
    ],
  },
  {
    id: 1,
    name: 'Girnar Hostel',
    est: 2011,
    description:
            'One of the latest hostels in the campus, the red bricked building has a capacity of over 600 residents.',
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
    warden: 'Dr. D. Sundar, Professor and Head, Department of Biochemical Engineering and Biotechnology',
    wardenLink: 'http://web.iitd.ac.in/~sundar/index.html',
    notableAlumni: [],
    notableAlumniDesc: [],
    notableAlumniLinks: [],
    notableAlumniImages: [],
  },
  {
    id: 2,
    name: 'Himadri Hostel',
    est: 2001,
    description:
            'The second girls\' hostel, Himadri has over 450 residents and boasts of its food outlet BBC- Best Brains Cafe',
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
    warden: 'Dr. Sreedevi Upadhyayula, Professor, Department of Chemical Engineering',
    wardenLink: 'http://web.iitd.ac.in/~sreedevi/biosketch.html',
    notableAlumni: [],
    notableAlumniDesc: [],
    notableAlumniLinks: [],
    notableAlumniImages: [],
  },
  {
    id: 3,
    name: 'Jwalamukhi Hostel',
    est: 1965,
    description:
            'One of the oldest hostels, Jwala house 450 \'dragons\', often heard chanting "Jai Jwala!"',
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
    warden: 'Ravi P. Singh, Associate Professor, Department of Chemistry',
    wardenLink: 'https://sites.google.com/site/ccsliitdelhi/home',
    notableAlumni: ['Sachin Bansal', 'Sujeet Kumar & Vaibhav Gupta'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-founders, UDAAN'],
    notableAlumniLinks: [
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi7uNGggfPqAhXdyzgGHWIMAZYQFjAAegQIAxAB&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSachin_Bansal&usg=AOvVaw1OB9BsaXTnOXPD1qzN9oHW',
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjfvofbgPPqAhW0zTgGHdBsC0oQFjALegQIChAB&url=https%3A%2F%2Fyourstory.com%2F2019%2F10%2Ftechsparks-2019-ecommerce-flipkart-udaan&usg=AOvVaw0Dcb9PbXkByyESop6rF9Bd',
    ],
    notableAlumniImages: [
      'https://images.financialexpress.com/2019/09/1-927.jpg',
      'https://images.livemint.com/img/2019/10/02/600x338/TK3C8ZP0_1570041789386_1570043970138.jpg',
    ],
  },
  {
    id: 4,
    name: 'Kailash Hostel',
    est: 1965,
    description:
            'Kailash is the first girl\'s hostel @ IITD, with the motto "Burn to Emerge". It is home to 450 students.',
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
    warden: 'Dr. Seema Sharma, Professor, Department of Management Studies',
    wardenLink: 'http://web.iitd.ac.in/~seemash/contact.html',
    notableAlumni: ['Ruchira Shukla', 'Anju Gupta', 'Kavita Iyer'],
    notableAlumniDesc: ['IFC, World Bank Group', 'Co-founder, IvyCamp', 'Managing Trustee, SIF FOundation'],
    notableAlumniLinks: [
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi4sN-9gvPqAhX7yDgGHQi8C3QQFjAAegQIAhAB&url=https%3A%2F%2Fin.linkedin.com%2Fin%2Fruchira-shukla-6921a8&usg=AOvVaw05fW9yBrBATqgcQ1qCPiyK',
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwipr4Wsg_PqAhWNzzgGHT8mBYMQtwIwAHoECAQQAQ&url=http%3A%2F%2Fivycamp.in%2Fanju_gupta&usg=AOvVaw3-jblT6xc3FBxQRkWbzdDg',
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiUu6OAhPPqAhUS4zgGHazNB40QFjAAegQIBBAB&url=https%3A%2F%2Fwww.vbprofiles.com%2Fpeople%2Fkavita-iyer-591ee7a21dedae110ef5b85a&usg=AOvVaw0Es0M1dlCTGFSyc650Pt2g',
    ],
    notableAlumniImages: [
      'https://www.franchiseindia.com/expo/2017/images/speakers/ruchira-shukla.jpg',
      'https://images.yourstory.com/cs/wordpress/2015/01/yourstory_AnjuGupta_InsideArticle.jpg?fm=png&auto=format',
      'https://images.indulgexpress.com/uploads/user/ckeditor_images/article/2019/12/30/Kavita_-_Copy.jpg'],
  },
  {
    id: 5,
    name: 'Karakoram Hostel',
    est: 1966,
    description:
            'With 450 residents, Karakoram or \'Kara\' goes by the motto सर्वश्रेष्ठम् सर्वसुंदरम् काराकोरम् काराकोरम्',
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
    warden: 'Dr Manojkumar Ramteke, Associate Professor, Department of Chemical Engineering ',
    wardenLink: 'http://web.iitd.ac.in/~mcramteke/Bio.html',
    notableAlumni: ['Kapil Bharti', 'Pranay Chulet'],
    notableAlumniDesc: ['Co-founder & CTO, Delhivery', 'Founder & CEO, Quikr'],
    notableAlumniLinks: [
      'https://in.linkedin.com/in/kbhara',
      'https://en.wikipedia.org/wiki/Pranay_Chulet',
    ],
    notableAlumniImages: [
      'https://images.financialexpress.com/2017/06/Delhivery.jpg',
      'https://img.etimg.com/thumb/width-640,height-480,imgsize-82212,resizemode-1,msid-60531121/magazines/panache/come-december-quikr-founder-pranay-chulet-is-ready-to-embrace-a-new-role/pranay-chulet-quikr_bccl.jpg',
    ],
  },
  {
    id: 6,
    name: 'Kumaon Hostel',
    est: 1969,
    description:
            'Kumaon has around 440 residents and is one of the oldest hostels in the campus.',
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
    warden: 'Rajendra S. Dhaka, Associate Professor , Department of Physics',
    wardenLink: 'http://web.iitd.ac.in/~rsdhaka/',
    notableAlumni: ['Alok Mittal', 'Pankaj Vermani', 'Chetan Bhagat'],
    notableAlumniDesc: ['Co-founder, Indifi', 'Founder, Clovia', 'Author'],
    notableAlumniLinks: [
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiohu_M__LqAhV9wjgGHTozAMYQFjAAegQIAxAB&url=https%3A%2F%2Fin.linkedin.com%2Fin%2Falok-mittal-590a&usg=AOvVaw3QAV8TH0_plJe1y54xBWwn',
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwje5KjLgfPqAhUTzTgGHVSFDK8QFjAAegQIBBAB&url=https%3A%2F%2Fin.linkedin.com%2Fin%2Fpankajvermani&usg=AOvVaw2XqhCVTAr5zYNUL70E1q5v',
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiTiL-Ng_PqAhXNyzgGHRvGDtMQFjAAegQIARAB&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FChetan_Bhagat&usg=AOvVaw2oBQgZeGTB584IiH14daMl',
    ],
    notableAlumniImages: [
      'https://images.livemint.com/img/2019/02/11/600x338/Alok-Mittal_1549917303788.jpg',
      'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories//Newstaffpics/drivermos_122817122455.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chetan_Bhagat.jpg',
    ],
  },
  {
    id: 7,
    name: 'Nilgiri Hostel',
    est: 1965,
    description:
            'Nilgiri is home to ~410 \'Nilgirites\'. Lovingly called Nil, memories made here are nything but nil. ',
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
    warden: 'Abhijit Majumdar, Professor, Department of Textile Technology',
    wardenLink: 'http://textile.iitd.ac.in/faculty/majumdar/majumdar.html',
    notableAlumni: ['Vinod Khosla', 'Raghuram Rajan', 'Yashish Dahiya', 'Hitesh Oberoi'],
    notableAlumniDesc: ['Founder, Sun Microsystems', 'Distinguished Economist & RBI Governor(2013-16)', 'Co-founder, Policy Bazaar', 'MD & CEO, InfoEdge'],
    notableAlumniLinks: [
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiVoLjigfPqAhW2xTgGHdhvA4oQFjAAegQIARAB&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FVinod_Khosla&usg=AOvVaw3MRW3i2sDtSpMyJKU6QMSt',
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwitoYKBh_PqAhVZyjgGHbHhDRsQFjAAegQIFBAB&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRaghuram_Rajan&usg=AOvVaw3ZZ1k0JyvncrPsEQ6rFABr',
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiQ5fyD_fLqAhU4zzgGHUhsDM8QFjABegQIAhAB&url=https%3A%2F%2Fwww.ey.com%2Fen_in%2Fentrepreneur-of-the-year%2Fwinners-2019%2Fyashish-dahiya&usg=AOvVaw0zI1Pp2tdQQPktJ-jAfU0t',
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjPztq0gPPqAhWFzjgGHSu5DZEQFjAAegQIARAB&url=https%3A%2F%2Fin.linkedin.com%2Fin%2Fhitesh-oberoi-490260&usg=AOvVaw03C-CZCDMMdm1DMrkxr2oU',
    ],
    notableAlumniImages: [
      'https://media.wired.com/photos/5a90d7104e7600696b557b16/125:94/w_2393,h_1800,c_limit/vinodkhosla-524063496.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Raghuram_Rajan%2C_IMF_69MS040421048l.jpg/440px-Raghuram_Rajan%2C_IMF_69MS040421048l.jpg',
      'http://static-news.moneycontrol.com/static-mcnews/2017/04/YashishDahiya-770x433.jpg',
      'https://assets.vccircle.com/uploads/2017/05/hitesh-oberoi.png',
    ],
  },
  {
    id: 8,
    name: 'Satpura Hostel',
    est: 2005,
    description:
            'Satpura houses around 450 \'Samurais\' and being a new hostel, has some cool architecture.',
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
    warden: 'Sudip Kumar Pattanayek, Professor, Department of Chemical Engineering',
    wardenLink: 'http://web.iitd.ac.in/~sudip/',
    notableAlumni: [],
    notableAlumniDesc: [],
    notableAlumniLinks: [],
    notableAlumniImages: [],
  },
  {
    id: 9,
    name: 'Shivalik Hostel',
    est: 1961,
    description:
            'The oldest hostel of IIT Delhi, Shivalik has a capacity of around 420 residents. Jai Shiva!',
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
    warden: 'Dipayan Das, Professor, Department of Textile Technology',
    wardenLink: 'http://textile.iitd.ac.in/faculty/dipayan/dipayandas.html',
    notableAlumni: ['Binny Bansal', 'Pankaj Chaddah'],
    notableAlumniDesc: ['Co-founder, Flipkart', 'Co-Founder & COO, Zomato'],
    notableAlumniLinks: [
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjX5PSo_fLqAhVqzTgGHT5yBSUQFjAAegQIARAB&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBinny_Bansal&usg=AOvVaw2n-JoaQOUWjdDJs0eKnUjQ',
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiG0Kez__LqAhVNxTgGHauBDj4QFjACegQIAhAB&url=https%3A%2F%2Fwww.crunchbase.com%2Fperson%2Fpankaj-chaddah&usg=AOvVaw0XOiqJg1PNEPCIqxNweJYj',
    ],
    notableAlumniImages: [
      'https://entrackr.com/wp-content/uploads/2018/12/flipkart-1200x600.jpg',
      'https://officechai.com/wp-content/uploads/2018/03/pankal-chaddah-leaves-zomato-1024x538.jpg',
    ],
  },
  {
    id: 10,
    name: 'Udaigiri Hostel',
    est: 2012,
    description:
            'The newest and arguably the biggest hostel at IIT Delhi with a capacity of over 600 residents.',
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
    warden: 'RS Sarangi, Department of Computer Science & Engineering',
    wardenLink: 'http://www.cse.iitd.ac.in/~srsarangi/contact.html',
    notableAlumni: [],
    notableAlumniDesc: [],
    notableAlumniLinks: [],
    notableAlumniImages: [],
  },
  {
    id: 11,
    name: 'Vindhyachal Hostel',
    est: 1963,
    description:
            'One of the oldest hostels in IIT Delhi, Vindhyachal is also the smallest with a capacity of under 400. Jai Vindy!',
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
    warden: 'Dr, Dipti Ranjan Sahoo, Associate Professor, Structural Engineering Section',
    wardenLink: 'http://web.iitd.ac.in/~drsahoo/',
    notableAlumni: [],
    notableAlumniDesc: [],
    notableAlumniLinks: [],
    notableAlumniImages: [],
  },
  {
    id: 12,
    name: 'Zanskar Hostel',
    est: 2005,
    description:
            'Zanskar has a unique infrastructure and is one of the newer hostels. It houses ~450 students.',
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
    warden: 'Saif K Mohammed, Associate Professor, Department of Electrical Engineering',
    wardenLink: 'http://web.iitd.ac.in/~saifkm/',
    notableAlumni: [],
    notableAlumniDesc: [],
    notableAlumniLinks: [],
    notableAlumniImages: [],
  },
];

export default hostels;
