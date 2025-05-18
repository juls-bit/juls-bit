import React, { useState } from 'react';
import './App.css'; // You can place your CSS here or use inline styles
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';

function App() {
  const [formData, setFormData] = useState({
    instructorName: '',
    course: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const addInstructor = (e) => {
    e.preventDefault();
    alert(`Added Instructor: ${formData.instructorName}`);

  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <header className="header">Instructors</header>
      <div className="flex flex-1">
        <aside className="sidebar">
          <div className="profile-section">
            <div className="avatar">
              <i className="fas fa-user-circle text-6xl text-blue-600"></i>
            </div>
            <div className="welcome-text">
              Welcome,<br />ADMIN
            </div>
          </div>
          <nav className="navigation">
            <a href="#" className="nav-link">DASHBOARD</a>
            <a href="#" className="nav-link">COURSES</a>
            <a href="#" className="nav-link">INSTRUCTORS</a>
            <a href="#" className="nav-link">STUDENT RECORDS</a>
            <a href="#" className="nav-link">FEES</a>
            <a href="#" className="nav-link">ANNOUNCEMENTS</a>
          </nav>
        </aside>
        <main className="main-content">
          <section className="form-section">
            <h2 className="section-title">ADD NEW INSTRUCTOR</h2>
            <form onSubmit={addInstructor} className="instructor-form">
              <div className="form-group">
                <label htmlFor="instructorName" className="form-label">Instructor name</label>
                <input
                  id="instructorName"
                  type="text"
                  className="form-input"
                  required
                  value={formData.instructorName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="course" className="form-label">Course</label>
                <input
                  id="course"
                  type="text"
                  className="form-input"
                  required
                  value={formData.course}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-submit">
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;