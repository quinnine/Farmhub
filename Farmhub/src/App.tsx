
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import các thành phần của React Router
import Homepage from "./components/Homepage"; // Import Homepage
import About from "./components/About"; // Trang giới thiệu (hoặc bất kỳ trang nào bạn muốn)
import News from "./components/News"; // Trang tin tức
import Weather from "./components/Weather"; // Trang thời tiết
import Notes from "./components/Notes"; // Trang nhật ký
import LoginForm from "./components/Login"; // Trang Login

import './App.css';

function App() {
  return (
    <Router>  {/* Bao bọc toàn bộ nội dung của ứng dụng bằng Router */}
      <Routes> {/* Các routes của ứng dụng */}
        <Route path="/" element={<Homepage />} /> {/* Trang chủ */}
        <Route path="/about" element={<About />} /> {/* Trang giới thiệu */}
        <Route path="/news" element={<News />} /> {/* Trang tin tức */}
        <Route path="/weather" element={<Weather />} /> {/* Trang thời tiết */}
        <Route path="/notes" element={<Notes />} /> {/* Trang nhật ký */}
        <Route path="/login" element={<LoginForm />} /> {/* Trang Login */}
      </Routes>
    </Router>
  );
}

export default App;
