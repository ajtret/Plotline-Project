import Papa from "papaparse";

export function parseCSV(file, callback) {
  Papa.parse(file, {
    header: true,
    complete: (results) => {
      const trains = results.data.map(row => ({
        trainNumber: row["Train Number"],
        arrivalTime: row["Arrival Time"],
        departureTime: row["Departure Time"],
        priority: row["Priority"],
      }));
      callback(trains);
    },
  });
}
