import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header';
import Homepage from './components/Homepage/Homepage';  // Ensure this path is correct
import About from './components/About/About';
import News from './components/News/News';
import Weather from './components/Weather/Weather';
import Notes from './components/Notes/Notes';
import './App.css';

function App() {
  return (
    <Router>
      <Header /> {/* Make sure Header is in App.tsx */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
