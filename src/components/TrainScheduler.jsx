import { useState, useEffect } from "react";
import Platform from "./Platform";
import WaitingTrains from "./WaitingTrains";
import TrainLog from "./TrainLog";
import { scheduleTrains } from "../utils/scheduleTrains";
import { parseCSV } from "../utils/parseCSV";

function TrainScheduler() {
  const [platforms, setPlatforms] = useState([]);
  const [waitingTrains, setWaitingTrains] = useState([]);
  const [trainLog, setTrainLog] = useState([]);
  const [platformCount, setPlatformCount] = useState(2);
  const [currentTime, setCurrentTime] = useState("10:00")
  const [updateTrains, setUpdateTrains] = useState([])

  useEffect(() => {
    if (platformCount >= 2 && platformCount <= 20) {
      setPlatforms([]);
      setWaitingTrains([]);
      setTrainLog([]);
    }
  }, [platformCount]);

  useEffect(() => {
    if (!currentTime) return
    const timer = setInterval(() => {
      setCurrentTime(prev => {
      const [h,m] = prev.split(":").map(Number)
      const prevDate = new Date()
      prevDate.setHours(h,m,0,0)
       const nextDate = new Date(prevDate.getTime() + 60*1000)
      return nextDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [currentTime])

  const handleScheduleTrains = (trains) => {
    const { allocated, waiting } = scheduleTrains(trains, platformCount);
    setPlatforms(allocated);
    setWaitingTrains(waiting);
  };

  const departTrain = (train) => {
    document.getElementById(train.trainNumber)?.classList.add("departing");

    setTimeout(() => {
      setPlatforms(prev => prev.filter(t => t.trainNumber !== train.trainNumber));

      const [depHours, depMinutes] = train.departureTime.split(":").map(Number);
      const departureDate = new Date();
      departureDate.setHours(depHours, depMinutes, 0, 0);

      const [arrHours, arrMinutes] = train.arrivalTime.split(":").map(Number);
      const arrivalDate = new Date();
      arrivalDate.setHours(arrHours, arrMinutes, 0, 0);

      const actualArrivalDate = new Date(arrivalDate.getTime() + 5 * 60000);
      const actualDepartureDate = new Date(departureDate.getTime() + 5 * 60000);

      setTrainLog(prev => [
        ...prev,
        {
          ...train,
          actualArrivalTime: actualArrivalDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          actualDepartureTime: actualDepartureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);

      if (waitingTrains.length > 0) {
        const nextTrain = waitingTrains.shift();
        setPlatforms(prev => [...prev, nextTrain]);
        setTimeout(() => {
          document.getElementById(nextTrain.trainNumber)?.classList.add("arriving");
        }, 100);
      }
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (platforms.length > 0) {
        departTrain(platforms[0]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [platforms]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      parseCSV(file, handleScheduleTrains);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "'Arial', sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Train Scheduler</h1>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px" }}>Number of Platforms:</label>
        <input
          type="number"
          value={platformCount}
          onChange={(e) => setPlatformCount(Number(e.target.value))}
          min="2"
          max="20"
          placeholder="Enter number of platforms"
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "60px" }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <input 
          type="file" 
          accept=".csv" 
          onChange={handleFileUpload} 
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} 
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>Platforms:</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "20px" }}>
          {platforms.map((train, index) => (
            <Platform key={train.trainNumber} train={train} index={index} />
          ))}
        </div>
      </div>

      <WaitingTrains waitingTrains={waitingTrains} />

      {currentTime && (
        <div style={{marginBottom:"20px", fontSize: "25px"}}>
          {currentTime}
        </div>
      )}

      <TrainLog trainLog={trainLog} />
    </div>
  );
}

export default TrainScheduler;
