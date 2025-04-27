export function scheduleTrains(trains, platformCount) {
  trains.sort((a, b) => a.priority.localeCompare(b.priority));

  const allocated = trains.slice(0, platformCount);
  const waiting = trains.slice(platformCount);

  return { allocated, waiting };
}
