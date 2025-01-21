// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const SOCKET_URL = "";
  const socketRef = useRef(null);

  const [connectionString, setConnectionString] = useState("");
  const [videoPath, setVideoPath] = useState("");
  const [classes, setClasses] = useState("");

  useEffect(() => {
    socketRef.current = io(SOCKET_URL);
    // socketRef.current.on("receive_prediction", on_prediction);
    socketRef.current.on("recieve_test", on_prediction);
  }, []);

  function send_config_to_server(connection_string, video_path) {
    // socketRef.current.emit("send_video", connection_string, video_path);
    socketRef.current.emit("send_test", connection_string);
  }

  function on_prediction(data) {
    // setClasses(data["classes"]);
    setClasses(data);
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
