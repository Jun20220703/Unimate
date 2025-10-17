import React from 'react';
import './homePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* 상단 네비게이션 바 */}
      <nav className="top-nav">
        <div className="nav-brand">
          <h1 className="university-title">Help University</h1>
        </div>
        <div className="nav-menu">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Calendar</a>
          <a href="#" className="nav-link">Chat</a>
          <a href="#" className="nav-link">Search</a>
          <a href="#" className="nav-link">Analytics</a>
        </div>
        <div className="nav-user">
          <div className="user-info">
            <span className="user-name">Karina</span>
            <span className="user-id">B2400566</span>
          </div>
          <div className="profile-picture">
            <div className="avatar">👩</div>
          </div>
          <div className="settings-icon">⚙️</div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        {/* 콘텐츠 그리드 - 세로 배치 */}
        <div className="content-grid">
          {/* 1. 프로필 컨테이너 (맨 위) */}
          <section className="user-card">
            <div className="user-details">
              <div className="user-name">Karina</div>
              <div className="user-id">B2400566</div>
              <div className="user-major">Bachelor of Information Technology</div>
            </div>
            <div className="profile-picture">
              <div className="avatar">👩</div>
            </div>
          </section>

          {/* 2. Affiliate discounts + Favorite Forums (가로 배치) */}
          <div className="middle-sections">
            {/* Affiliate discounts 섹션 */}
            <section className="affiliate-section">
              <h2 className="section-title">Affiliate discounts</h2>
              <div className="discount-icons">
                <div className="discount-icon">
                  <div className="icon">🎸</div>
                  <span className="icon-label">Music</span>
                </div>
                <div className="discount-icon">
                  <div className="icon">🏠</div>
                  <span className="icon-label">Housing</span>
                </div>
                <div className="discount-icon">
                  <div className="icon">✏️</div>
                  <span className="icon-label">Education</span>
                </div>
                <div className="discount-icon">
                  <div className="icon">🎪</div>
                  <span className="icon-label">Entertainment</span>
                </div>
                <div className="discount-icon">
                  <div className="icon">🛴</div>
                  <span className="icon-label">Transport</span>
                </div>
                <div className="discount-icon">
                  <div className="icon">→</div>
                  <span className="icon-label">More</span>
                </div>
              </div>
            </section>

            {/* Favorite Forums 섹션 */}
            <section className="forums-section">
              <div className="section-header">
                <h2 className="section-title">Favorite Forums</h2>
                <a href="#" className="view-more">view more &gt;</a>
              </div>
              <div className="forum-list">
                <div className="forum-item">
                  <div className="forum-content">
                    <div className="forum-name">Business Forum</div>
                    <div className="forum-desc">aksjfdkjdsfk df dff</div>
                  </div>
                  <div className="badge">1</div>
                </div>
                <div className="forum-item">
                  <div className="forum-content">
                    <div className="forum-name">Free Forum</div>
                    <div className="forum-desc">askjdfkjsadfkjdfn?</div>
                  </div>
                  <div className="badge">2</div>
                </div>
              </div>
            </section>
          </div>

          {/* 3. Popular Posts 섹션 (맨 밑, 전체 너비) */}
          <section className="posts-section">
            <div className="section-header">
              <h2 className="section-title">Popular Posts</h2>
              <a href="#" className="view-more">view more &gt;</a>
            </div>
            <div className="post-list">
              <div className="post-item">
                <div className="post-content">
                  <div className="post-title">asdfdf</div>
                  <div className="post-desc">asdf uhfpodoo?</div>
                </div>
                <div className="badge">4</div>
              </div>
              <div className="post-item">
                <div className="post-content">
                  <div className="post-title">kdnfoi</div>
                  <div className="post-desc">kajsdfksajdnfkasdfk??</div>
                </div>
                <div className="badge">2</div>
              </div>
              <div className="post-item">
                <div className="post-content">
                  <div className="post-title">dmfoifi</div>
                  <div className="post-desc">askdfndjfnnjdjj</div>
                </div>
                <div className="badge">1</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
