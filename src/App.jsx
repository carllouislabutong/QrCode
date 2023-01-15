import "./App.css";
import qrCode from "./pictures/qrCode.jpg";

function App() {
  return (
    <div className="app">
      <img src={qrCode} alt="QRCODE" />
      <div>
        <h1>
          Improve your front-end
          <span>skills by building projects</span>
        </h1>
        <p>
          Scan the QR Code to visit the Frontend
          <span>Mentor and take your coding skills to</span>the next level
        </p>
      </div>
    </div>
  );
}

export default App;
