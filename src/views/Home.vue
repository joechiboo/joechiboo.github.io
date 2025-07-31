<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="profile-image">
          <div class="image-placeholder">
            <span>個人照片</span>
          </div>
        </div>
        <div class="intro">
          <h1>Joe, Chi-Boo</h1>
          <h2>軟體工程師 & 學生</h2>
          <p class="philosophy">
            工程師的核心任務是「解決問題」。第一步是「面對」，人們大多不喜好直視問題、避重就輕
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary" @click="downloadResume">下載履歷</button>
            <router-link to="/contact" class="btn btn-outline">聯絡我</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="highlights">
      <div class="container">
        <div class="highlight-grid">
          <div class="highlight-card">
            <h3>專業技能</h3>
            <p>具備全端開發能力，專精於現代Web技術棧</p>
          </div>
          <div class="highlight-card">
            <h3>團隊合作</h3>
            <p>重視溝通與協作，擅長跨部門協調</p>
          </div>
          <div class="highlight-card">
            <h3>持續學習</h3>
            <p>保持對新技術的好奇心，不斷提升自我</p>
          </div>
        </div>
      </div>
    </section>

    <section class="quick-links">
      <div class="container">
        <h2>快速導覽</h2>
        <div class="links-grid">
          <router-link to="/portfolio" class="link-card">
            <h3>作品集</h3>
            <p>查看我的技術專案與創作</p>
          </router-link>
          <router-link to="/experience" class="link-card">
            <h3>工作經歷</h3>
            <p>了解我的專業背景與經驗</p>
          </router-link>
          <router-link to="/leisure" class="link-card">
            <h3>興趣嗜好</h3>
            <p>繪畫、創作、運動、音樂</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const downloadResume = () => {
  alert('履歷下載功能待實作')
}
</script>

<style scoped>
.home {
  padding-top: 80px;
}

.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
}

.profile-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.1rem;
}

.intro h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.intro h2 {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1rem;
  font-weight: normal;
}

.philosophy {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
  font-style: italic;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

.btn-outline {
  background: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}

.btn-outline:hover {
  background: #007bff;
  color: white;
}

.highlights {
  padding: 4rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.highlight-card {
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.highlight-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.quick-links {
  padding: 4rem 0;
  background: #f8f9fa;
}

.quick-links h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

/* 大螢幕：3列佈局 */
@media (min-width: 768px) {
  .links-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.link-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-decoration: none;
  color: #333;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.link-card:hover {
  transform: translateY(-5px);
  color: #333;
}

.link-card h3 {
  color: #007bff;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .intro h1 {
    font-size: 2rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
}
</style>