import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";

const Homepage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="homepage">
      <header className="homepage__header">
        <div className="homepage__logo">
          <img src="/path-to-your-logo.png" alt="Farmhub Logo" />
        </div>

        <nav className="homepage__nav">
          <ul>
            <li><Link to="/">TRANG CHỦ</Link></li>
            <li><Link to="/news">TIN TỨC</Link></li>
            <li><Link to="/weather">THỜI TIẾT</Link></li>
            <li><Link to="/notes">NHẬT KÝ</Link></li>
          </ul>
        </nav>

        <div className="homepage__login-search">
          <form onSubmit={handleSearchSubmit} className="homepage__search-form">
            <input
              type="text"
              className="homepage__search-input"
              placeholder="Tìm kiếm..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="homepage__search-btn">
              <i className="fas fa-search"></i> {/* Icon kính lúp */}
            </button>
          </form>

          <Link to="/login" className="homepage__login-btn">ĐĂNG NHẬP</Link>
        </div>
      </header>

      <footer className="homepage__footer">
        <p>© 2025 Farmhub.</p>
      </footer>
    </div>
  );
};

export default Homepage;
