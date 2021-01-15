// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

const printTime = function(pass) {
  pass.forEach(element => {
    const date = new Date(0);
    date.setSeconds(element.risetime);
    console.log(`Next pass at ${date} for ${element.duration} seconds!`);
  });
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printTime(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));