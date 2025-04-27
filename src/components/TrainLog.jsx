function TrainLog({ trainLog }) {
  return (
    <div>
      <h3 style={{ fontWeight: "bold", fontSize: "18px" }}>Train Log:</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Train Number</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Priority</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Scheduled Arrival Time</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Actual Arrival Time</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Scheduled Departure Time</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Actual Departure Time</th>
          </tr>
        </thead>
        <tbody>
          {trainLog.map((log, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{log.trainNumber}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{log.priority}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{log.arrivalTime}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{log.actualArrivalTime}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{log.departureTime}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{log.actualDepartureTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainLog;
