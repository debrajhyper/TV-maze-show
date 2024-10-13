import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./component/NotFound"
import RecentSchedule from "./component/RecentSchedule";
import Show from "./component/Show";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Router>
        <Routes >
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/recentschedule/" element={<RecentSchedule />} />
          <Route path="/show/:id" element={<Show />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
