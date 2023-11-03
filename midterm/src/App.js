import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Feeds from './components/Feeds/Feeds';
// import Post from './components/Post/Post';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app-container">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/feeds" exact element={<Feeds />} />
        {/* <Route path="/post" exact element={<Post />} /> */}
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
