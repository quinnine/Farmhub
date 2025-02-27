import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo.jpg'; // Correct the import path

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="homepage__header">
      <div className="homepage__logo">
        {/* Use the imported logo variable here */}
        <img src={logo} alt="Farmhub Logo" />
      </div>

      <nav className="homepage__nav">
        <ul>
          <li><Link to="/">Trang Chủ</Link></li>
          <li><Link to="/news">Tin Tức</Link></li>
          <li><Link to="/weather">Thời Tiết</Link></li>
          <li><Link to="/notes">Nhật Ký</Link></li>
        </ul>
      </nav>

      <div className="homepage__login-search">
        <form onSubmit={handleSearchSubmit} className="homepage__search-form">
          <input
            type="text"
            className="homepage__search-input"
            placeholder="Tìm kiếm"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="homepage__search-btn">
            <i className="fas fa-search"></i> 
          </button>
        </form>
        <Link to="/login" className="homepage__login-btn">Đăng nhập</Link>
      </div>
    </header>
  );
};

export default Header;
