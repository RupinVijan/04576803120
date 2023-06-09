import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trains from "./Pages/Trains";
import TrainById from "./Pages/TrainById";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Trains />} />
          <Route path="/:id" element={<TrainById />} />
          <Route path="*" element={<Trains />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
