export function calculateMinutesDifference(arrivalTime, departureTime) {
  const [arrHours, arrMinutes] = arrivalTime.split(":").map(Number);
  const [depHours, depMinutes] = departureTime.split(":").map(Number);

  const arrivalTotalMinutes = arrHours * 60 + arrMinutes;
  const departureTotalMinutes = depHours * 60 + depMinutes;

  return departureTotalMinutes - arrivalTotalMinutes;
}
