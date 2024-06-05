export function stripSeconds(date: Date): Date {
  const newDate = new Date(date);
  newDate.setSeconds(0, 0); // Set seconds and milliseconds to zero
  return newDate;
}

export function roundToNearestSeconds(
  date: Date,
  secondsToRound: number
): Date {
  const newDate = new Date(date);
  const seconds = newDate.getSeconds();
  const milliseconds = newDate.getMilliseconds();

  // Calculate total seconds including milliseconds
  const totalSeconds = seconds + milliseconds / 1000;

  // Determine whether to round up or down
  const roundedSeconds =
    Math.round(totalSeconds / secondsToRound) * secondsToRound;

  // Set the new seconds and milliseconds
  newDate.setSeconds(roundedSeconds, 0);

  // Handle overflow (if seconds go to 60, increment minute)
  if (roundedSeconds === 60) {
    newDate.setMinutes(newDate.getMinutes() + 1);
    newDate.setSeconds(0, 0);
  }

  return newDate;
}

export function convertUTCToLocalDate(date: Date): Date {
  const clientOffset = new Date().getTimezoneOffset();
  const localDate = new Date(date.getTime() - clientOffset * 60000);
  return localDate;
}
