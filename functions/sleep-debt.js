function getSleepHours(day) {
  day = day.toLowerCase()
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 7;
    case "wednesday":
      return 8;
    case "thursday":
      return 7;
    case "friday" :
      return 9;
    case "saturday":
      return 10;
    case "sunday":
      return 11
    default:
      return "error"
  }
};

//console.log(getSleepHours("saturday"))

function getActualSleepHours(){
  let sum = getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday")
  return sum
};

//console.log(getActualSleepHours())

function getIdealSleepHours(){
  let idealHours = 9
  return idealHours * 7
}

//console.log(getIdealSleepHours())

function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  if (actualSleepHours === idealSleepHours){
    console.log("you got the perfect amount of sleep!")
  } else if (actualSleepHours>idealSleepHours){
    console.log("you are lazy")
  } else {
    console.log("GET SOME REST")
  }};

calculateSleepDebt()
