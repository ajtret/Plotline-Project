export function scheduleTrains(trains, platformCount) {
  // trains.sort((a, b) => a.priority.localeCompare(b.priority));
  const priorityOrder = {P1:1, P2:2, P3:3}
  trains.sort((a, b) => {
    const [aHr, aMin] = a.arrivalTime.split(":").map(Number)
    const [bHr, bMin] = b.arrivalTime.split(":").map(Number)
    const aTime = aHr*60+ aMin
    const bTime = bHr*60+ bMin
    if (aTime===bTime) {
      return priorityOrder[a.priority] - priorityOrder[b.priority]

    }
    return aTime - bTime
  })
  console.log(trains, "akshat")

  const allocated = trains.slice(0, platformCount);
  const waiting = trains.slice(platformCount);


  return { allocated, waiting };
}
