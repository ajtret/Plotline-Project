function WaitingTrains({ waitingTrains }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ fontWeight: "bold", fontSize: "18px" }}>Waiting Trains:</h3>
      {waitingTrains.map(train => (
        <p key={train.trainNumber}>
          Train {train.trainNumber} (Priority: {train.priority})
        </p>
      ))}
    </div>
  );
}

export default WaitingTrains;
