import React, { useState, useEffect } from 'react';
import { Monitor, Search, Bell, ChevronDown } from 'lucide-react';
import '../styles/netflix.css';

const Netflix = ({ onLogout }: { onLogout: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className={`netflix-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="netflix-logo">
          <Monitor />
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#series">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#new">New & Popular</a>
          <a href="#mylist">My List</a>
        </nav>
        <div className="nav-actions">
          <Search className="icon" />
          <Bell className="icon" />
          <div className="profile-dropdown">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=240"
              alt="Profile"
              className="profile-icon"
            />
            <ChevronDown className="icon" />
            <div className="dropdown-menu">
              <a href="#profile" className="dropdown-item">Profile</a>
              <a href="#account" className="dropdown-item">Account</a>
              <a href="#help" className="dropdown-item">Help Center</a>
              <a href="#" className="dropdown-item" onClick={onLogout}>Sign Out</a>
            </div>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Watch Joker</h1>
          <p className="hero-description">
            In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.
            He then embarks on a downward spiral of revolution and bloody crime.
          </p>
        </div>
      </section>

      <section className="content-row">
        <h2 className="row-header">Trending Now</h2>
        <div className="content-slider">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="content-card">
              <img
                src={`https://images.unsplash.com/photo-157${i}375927938-d5a98e8ffe85?w=240`}
                alt={`Movie ${i}`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="content-row">
        <h2 className="row-header">Continue Watching</h2>
        <div className="content-slider">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="content-card">
              <img
                src={`https://images.unsplash.com/photo-157${i}267432553-4b4628081c31?w=240`}
                alt={`Movie ${i}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Netflix;