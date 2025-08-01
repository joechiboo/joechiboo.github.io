<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="profile-image">
          <img src="/img/joechiboo.png" alt="Joe Chi-Boo 個人照片" class="profile-photo" />
        </div>
        <div class="intro">
          <h1>Joe, Chi-Boo</h1>
          <h2>軟體工程師 & 在職專班就讀中 & 執行者</h2>
          <div class="philosophy">
            <p class="daily-equation">工程腦 × 商業魂 × 生活流</p>
            <p class="life-quote">
              「人生像寫程式 — 複雜的事，讓自己簡單做；重要的事，寫進 daily commit。」
            </p>
          </div>
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
            <p>具備全端開發能力，專精於現代Web技術</p>
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

    <!-- Toast 通知 -->
    <div v-if="showToast" class="toast-notification">
      <div class="toast-content">
        <span class="toast-icon">📄</span>
        <div class="toast-message">
          <strong>履歷下載功能開發中</strong>
          <p>感謝您的關注，敬請期待！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showToast = ref(false)

const downloadResume = () => {
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
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
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
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

.profile-photo {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
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
  margin-bottom: 2rem;
}

.daily-equation {
  font-size: 1.2rem;
  font-weight: 600;
  color: #007bff;
  margin-bottom: 1rem;
  text-align: left;
  padding: 1rem;
  background: rgba(0, 123, 255, 0.1);
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.life-quote {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  font-style: italic;
  text-align: center;
  padding: 0.5rem;
  position: relative;
}

.life-quote::before {
  content: '💻';
  position: absolute;
  left: -1.5rem;
  top: 0;
  font-size: 1.2rem;
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

/* Toast 通知樣式 */
.toast-notification {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  animation: toastSlideIn 0.4s ease-out;
}

@keyframes toastSlideIn {
  from {
    opacity: 0;
    transform: translateX(100%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.toast-content {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border-left: 4px solid #007bff;
  display: flex;
  align-items: center;
  min-width: 320px;
  backdrop-filter: blur(10px);
}

.toast-icon {
  font-size: 2rem;
  margin-right: 1rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
}

.toast-message strong {
  color: #333;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.25rem;
}

.toast-message p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
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

  .toast-notification {
    top: 1rem;
    right: 1rem;
    left: 1rem;
  }

  .toast-content {
    min-width: auto;
    width: 100%;
  }
}
</style>
