/* eslint-disable consistent-return */
import locations from './locations';

function campus(obj) {
  if (obj.categore !== 'hostel') {
    return obj;
  }
}
const loc = locations.map((obj) => campus(obj));
export default loc;
