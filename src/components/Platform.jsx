import { calculateMinutesDifference } from "../utils/calculateMinutesDifference";

function Platform({ train, index }) {
  const timeDiff = calculateMinutesDifference(train.arrivalTime, train.departureTime);

  return (
    <div
      id={train.trainNumber}
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f4f4f4",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p><strong>Platform {index + 1}</strong></p>
      <p>Train {train.trainNumber}</p>
      <p>Priority: {train.priority}</p>
      <p style={{ marginTop: "8px" }}>
        Departing in{" "}
        <span
          style={{
            color: timeDiff < 5 ? "red" : "black",
            fontWeight: timeDiff < 5 ? "bold" : "normal",
          }}
        >
          {timeDiff} min
        </span>
        {timeDiff < 5 && (
          <span style={{ color: "red", marginLeft: "5px" }}>⚠️ Too Short!</span>
        )}
      </p>
    </div>
  );
}

export default Platform;
