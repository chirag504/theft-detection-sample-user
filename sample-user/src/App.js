// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

// {"container": "azureml://subscriptions/e9e285c5-ec5f-4185-bf4b-a716adf017f9/resourcegroups/DreanIT/workspaces/AML/datastores/test_videos_for_tracking_datastore/paths/",
// "path": "yt1z.net - People Walk In Shopping Mall Stock Video.mov"}
function App() {
  const SOCKET_URL =
    "https://theft-detection-web-app-haenaehjepcfdmb3.canadacentral-01.azurewebsites.net/";
  const socketRef = useRef(null);

  const [connectionString, setConnectionString] = useState("");
  const [videoPath, setVideoPath] = useState("");
  const [classes, setClasses] = useState("");

  useEffect(() => {
    socketRef.current = io(SOCKET_URL);
    // socketRef.current.on("receive_prediction", on_prediction);
    socketRef.current.on("receive_prediction", on_prediction);
  }, []);

  function send_config_to_server(connection_string, video_path) {
    socketRef.current.emit("send_video", connection_string, video_path);
    // socketRef.current.emit("send_test", connection_string);
  }

  function on_prediction(data) {
    // setClasses(data["classes"]);
    // setClasses(data);
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>
            Connection String:
            <input
              type="text"
              value={connectionString}
              onChange={(e) => setConnectionString(e.target.value)}
            />
          </label>
          <br />
          <label>
            Video Path:
            <input
              type="text"
              value={videoPath}
              onChange={(e) => setVideoPath(e.target.value)}
            />
          </label>
          <br />
          <button
            onClick={() => {
              send_config_to_server(connectionString, videoPath);
            }}
          >
            Send Config
          </button>
          <p>{classes}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
