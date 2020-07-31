const Observer = require('./services/observer');

var observer = new Observer();
// F:\Developer\tmp
const folder = '../../tmp/';

observer.on('file-added', log => {
  // print error message to console
  console.log(log.message);
});