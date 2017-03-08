// Human readable time

const humanReadable = (totalSec) => {
  // Find hours by Math.floor, then get remainder with modulus
  // Take the remainder and find minutes the same way
  // Then the remainder are seconds

  const oneHour = 60 * 60;
  const oneMinute = 60;
  let remainingSeconds;

  const HRHours = Math.floor(totalSec / oneHour);
  remainingSeconds = totalSec % oneHour;

  const HRMinutes = Math.floor(remainingSeconds / oneMinute);
  remainingSeconds = remainingSeconds % oneMinute;

  const HRSeconds = remainingSeconds;

  return [HRHours, HRMinutes, HRSeconds].map(padNumber).join(':');
};

function padNumber (number) {
  return ('0' + number).slice(-2);
}

// Human readable time - with parseInt

const humanReadable = (totalSec) => {
  // Find hours by Math.floor, then get remainder with modulus
  // Take the remainder and find minutes the same way
  // Then the remainder are seconds

  const oneHour = 60 * 60;
  const oneMinute = 60;

  const HRHours = parseInt(totalSec / oneHour);
  const HRMinutes = parseInt(totalSec / oneMinute % 60);
  const HRSeconds = totalSec % 60;

  return [HRHours, HRMinutes, HRSeconds].map(padNumber).join(':');
};

function padNumber (number) {
  return ('0' + number).slice(-2);
}
