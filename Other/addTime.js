// Purpose: calculating how much time will take to finish all videos from a YouTube playlist

const addTime = (arr) => {
  let hoursSum = 0;
  let minutesSum = 0;
  let secondsSum = 0;

  arr.forEach(period => {

    let variable = period.split(":");
    if (variable.length === 3) {
      hoursSum += Number(variable[0]);
      minutesSum += Number(variable[1]);
      secondsSum += Number(variable[2]);
    } else {
      minutesSum += Number(variable[0]);
      secondsSum += Number(variable[1]);
    }
  });

  if (secondsSum >= 60) {
    minutesSum += Math.floor(secondsSum / 60);
    secondsSum = secondsSum % 60;
  }

  if (minutesSum >= 60) {
    hoursSum += Math.floor(minutesSum / 60);
    minutesSum = minutesSum % 60;
  }

  return `You have ${hoursSum} hour(s) ${minutesSum} minute(s) and ${secondsSum} second(s) left to watch.`;
}

// -------------------------------------------------------------------------------------------------------

// I used this in the browser console on YT to dinamically get a list of each clip duration from the playlist
// class for elements containing the time is "style-scope ytd-thumbnail-overlay-time-status-renderer"

let array = [];

// array.push(document.querySelectorAll(".style-scope ytd-thumbnail-overlay-time-status-renderer"));
// let timeArray = [];

// array[0].forEach(time => {
//   timeArray.push(time.innerText);
// })

// console.log(timeArray);

// -------------------------------------------------------------------------------------------------------

// here is the output

let youTubeList = ['16:27', '18:18', '4:47', '8:43', '16:21', '13:32', '35:00', '11:10', '\n    11:13\n  ', '\n    11:42\n  ', '\n    9:16\n  ', '\n    10:53\n  ', '\n    8:32\n  ', '\n    13:30\n  ', '\n    13:36\n  ', '\n    9:35\n  ', '\n    7:13\n  ', '\n    8:04\n  ', '\n    13:36\n  ', '\n    12:33\n  ', '\n    11:35\n  ', '\n    9:23\n  ', '\n    12:50\n  ', '\n    12:16\n  ', '\n    11:20\n  ', '\n    9:44\n  ', '\n    9:45\n  ', '\n    10:33\n  ', '\n    17:51\n  ', '\n    9:58\n  ', '\n    11:08\n  ', '\n    9:45\n  ', '\n    10:01\n  ', '\n    6:54\n  ', '\n    13:46\n  ', '\n    19:32\n  ', '\n    18:48\n  ', '\n    20:25\n  ', '\n    13:38\n  ', '\n    23:24\n  ', '\n    11:33\n  ', '\n    11:51\n  ', '\n    8:55\n  ', '\n    11:35\n  ', '\n    1:12:06\n  ', '\n    11:06\n  ', '\n    15:25\n  ', '\n    9:18\n  ', '\n    16:14\n  ', '\n    14:09\n  ', '\n    12:58\n  ', '\n    12:56\n  ', '\n    12:46\n  ', '\n    15:25\n  ', '\n    15:05\n  ', '\n    19:20\n  ', '\n    11:14\n  ', '\n    20:48\n  ', '\n    12:19\n  ', '\n    18:24\n  ', '\n    14:40\n  ', '\n    16:00\n  ', '\n    21:24\n  ', '\n    11:48\n  ', '\n    21:51\n  ', '\n    12:43\n  ', '\n    13:35\n  ', '\n    17:14\n  ', '\n    16:30\n  ', '\n    15:09\n  ', '\n    13:52\n  ', '\n    10:56\n  ', '\n    38:47\n  ', '\n    10:35\n  ', '\n    18:29\n  ', '\n    7:04\n  ', '\n    11:46\n  ', '\n    13:38\n  ', '\n    12:01\n  ', '\n    1:57:19\n  ', '\n    11:02\n  ', '\n    9:53\n  ', '\n    17:02\n  ', '\n    15:52\n  ', '\n    19:07\n  ', '\n    22:13\n  ', '\n    22:37\n  ', '\n    11:14\n  ', '\n    30:48\n  ', '\n    9:31\n  ', '\n    15:52\n  ', '\n    21:33\n  ', '\n    12:13\n  ', '\n    10:13\n  ', '\n    9:13\n  ', '\n    11:33\n  ', '\n    9:00\n  ', '\n    5:20\n  ', '\n    5:25\n  ', '\n    3:48\n  '];

function getTime(time) {
  let timeArray = time.split(":");
  const extractedNumbers = timeArray.map(element => {

    const numbers = Array.from(element)
      .filter(char => /\d/.test(char))
      .join('');

    return numbers;
  });

  return extractedNumbers;
}

const getFinalOutput = (timeList) => {
  let formatedTime = [];
  let finalOutput = [];

  timeList.forEach(time => {
    formatedTime.push(getTime(time));
  });

  formatedTime.forEach(time => {
    finalOutput.push(time.join(":"));
  });

  return addTime(finalOutput);
};

console.log(getFinalOutput(youTubeList));

