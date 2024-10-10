import { Home, Testimonials1 } from "./pages/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials1 />} />
      </Routes>
    </Router>
  );
}

export default App;
