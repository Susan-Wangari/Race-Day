//a random number given to every runner
let raceNumber = Math.floor(Math.random() * 1000);
//the time of registration for the race
let regTime = true;
//the age of the runner
let runnerAge = 8;

if(runnerAge === 18 && regTime == true) {
 raceNumber += 1000;
};
//checks if the runner is an adult and registered early and adds 1000 to their race number
if(runnerAge > 18 && regTime == true) {
    console.log(`Your race starts at 9.30 am and your raceNumber is: ${raceNumber}`);
} else if(runnerAge > 18 && regTime == false) {
    console.log(`Your race starts at 11.00 am and your raceNumber is: ${raceNumber}`);
} else if(runnerAge < 18) {
    console.log(`Your race starts at 12.30 pm and your raceNumber is: ${raceNumber}`);
} else {
    console.log('see the registration desk first');
}
