// const { fetchCoordsByIP } = require('./iss');
// const { fetchMyIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, times) => {
  if (error) {
    console.log("It didn't work!", error);
  }
  printTime(times);
});

const printTime = function(pass) {
  pass.forEach(element => {
    const date = new Date(0);
    date.setSeconds(element.risetime);
    console.log(`Next pass at ${date} for ${element.duration} seconds!`);
  });
};

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);

//   }
  
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//   }
  
//   console.log('It worked! Returned coordinates:' , coordinates);
// });

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });