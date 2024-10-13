import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import NotFound from "./components/NotFound"
import RecentSchedule from "./components/RecentSchedule";
import Show from "./components/Show";
import Home from "./components/Home";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/recentschedule/" element={<RecentSchedule />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
