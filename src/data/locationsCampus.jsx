import locations from './locations';

const loc = locations.filter((locObj) => locObj.category !== 'hostel');

export default loc;
