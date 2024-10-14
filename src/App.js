import "./App.css";
import XucXacGame from "./XucXacGame/XucXacGame";
import bgImage from "./imageXucXac/bgGame.png";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <XucXacGame />
    </div>
  );
}

export default App;
