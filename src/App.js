// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Boostrap
import "bootstrap/dist/css/bootstrap.min.css";

// Page
import Landing from "./pages/landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
