import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Courses from "./pages/Courses";
import Trending from "./pages/Trending";
import Following from "./pages/Following";
import Dashboard from "./pages/Dashboard";
import Discord from "./pages/Discord";
import RestorationForm from "./pages/RestorationForm";
import CreatorAcces from "./pages/CreatorAccess";
import FeedbackPage from "./pages/FeedbackPage";
import Tour from "./pages/Tour";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/following" element={<Following />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/restoration-form" element={<RestorationForm />} />
            <Route path="/creator-access" element={<CreatorAcces />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/tour" element={<Tour />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
      {/* <Router>
        <SideBar>
          <Routes>
            <Route path="/" />
          </Routes>
        </SideBar>
      </Router> */}
    </div>
  );
}

export default App;
