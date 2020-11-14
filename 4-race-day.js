// Race number:
// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.

// Start time:
// Adult registrants run at 9:30 am or 11:00 am.
// // Early adults run at 9:30 am.
// // Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).

let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnersAge = 27;

if (runnersAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
  console.log(`Early adult registrant with number ${raceNumber} runs at 9:30 am`);
} else if (runnersAge > 18 && registeredEarly === false) {
  console.log(`Late adult registrant with number ${raceNumber} runs at 11:00 am`);
} else if (runnersAge < 18) {
  console.log(`Youth registrant ${raceNumber} run at 12:30pm`);
} else {
  console.log(`Please see the registration desk.`);
}