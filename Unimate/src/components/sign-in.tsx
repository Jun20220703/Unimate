import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sign-in.css';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // 로그인 성공 시 홈페이지로 이동
    navigate('/home');
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Social login with ${provider}`);
    // 여기에 소셜 로그인 로직 추가
  };

  return (
    <div className="signin-page">
      {/* 상단 네비게이션 바 */}
      <nav className="top-nav">
        <div className="nav-brand">
          <h1 className="university-title">Help University</h1>
        </div>
        <div className="nav-menu">
          <Link to="/home" className="nav-link">Home</Link>
          <a href="#" className="nav-link">Calendar</a>
          <a href="#" className="nav-link">Chat</a>
          <a href="#" className="nav-link">Search</a>
          <a href="#" className="nav-link">Analytics</a>
        </div>
        <div className="nav-user">
          <div className="settings-icon">⚙️</div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        {/* 로그인 카드 */}
        <div className="signin-card">
          <div className="signin-header">
            <h2 className="signin-title">LOGIN</h2>
          </div>

          <form onSubmit={handleSubmit} className="signin-form">
            {/* 이메일 필드 */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* 비밀번호 필드 */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">PASSWORD</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="........"
                required
              />
            </div>

          {/* 로그인 버튼 */}
          <button type="submit" className="signin-button">
            SIGN IN
          </button>

          {/* 비밀번호 찾기 */}
          <div className="signin-footer" style={{ marginTop: '0.75rem' }}>
            <p><Link to="/forgot-password" className="signup-link">Forgot password?</Link></p>
          </div>

            {/* 회원가입 링크 */}
            <div className="signin-footer">
              <p>Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link></p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
