<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="profile-image">
          <img src="/img/joechiboo.png" alt="Joe Chi-Boo 個人照片" class="profile-photo" />
        </div>
        <div class="intro">
          <h1>{{ t('name') }}</h1>
          <h2>{{ t('jobTitle') }}</h2>
          <div class="philosophy">
            <p class="daily-equation">{{ t('dailyEquation') }}</p>
            <p class="life-quote">{{ t('lifeQuote') }}</p>
          </div>
          <div class="hero-actions">
            <button class="btn btn-primary" @click="downloadResume">{{ t('downloadResume') }}</button>
            <router-link to="/contact" class="btn btn-outline">{{ t('contactMe') }}</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="highlights">
      <div class="container">
        <div class="highlight-grid">
          <div class="highlight-card">
            <h3>{{ t('professionalSkills') }}</h3>
            <p>{{ t('professionalSkillsDesc') }}</p>
          </div>
          <div class="highlight-card">
            <h3>{{ t('teamwork') }}</h3>
            <p>{{ t('teamworkDesc') }}</p>
          </div>
          <div class="highlight-card">
            <h3>{{ t('continuousLearning') }}</h3>
            <p>{{ t('continuousLearningDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Toast 通知 -->
    <div v-if="showToast" class="toast-notification">
      <div class="toast-content">
        <span class="toast-icon">📄</span>
        <div class="toast-message">
          <strong>{{ t('resumeInDevelopment') }}</strong>
          <p>{{ t('thankYouForAttention') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()
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
  background: var(--color-primary-gradient);
  color: var(--bg-white);
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
  border: 4px solid var(--bg-white);
  box-shadow: var(--shadow-lg);
}

.image-placeholder {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: var(--bg-lighter);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 1.1rem;
}

.intro h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: var(--bg-white);
}

.intro h2 {
  font-size: 1.5rem;
  color: var(--bg-white);
  margin-bottom: 1rem;
  font-weight: normal;
  opacity: 0.9;
}

.philosophy {
  margin-bottom: 2rem;
}

.daily-equation {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--bg-white);
  margin-bottom: 1rem;
  text-align: left;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  border-left: 4px solid var(--bg-white);
}

.life-quote {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--bg-white);
  font-style: italic;
  text-align: center;
  padding: 0.5rem;
  position: relative;
  opacity: 0.9;
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
  background: var(--bg-white);
  color: var(--color-primary);
}

.btn-primary:hover {
  background: var(--bg-lighter);
}

.btn-outline {
  background: transparent;
  color: var(--bg-white);
  border: 2px solid var(--bg-white);
}

.btn-outline:hover {
  background: var(--bg-white);
  color: var(--color-primary);
}

.highlights {
  padding: 4rem 0;
  background: var(--bg-white);
}

/* 深色模式下改變highlights背景 */
[data-theme="dark"] .highlights {
  background: var(--bg-light);
}

/* 深色模式下首頁Hero區域使用不同漸層 */
[data-theme="dark"] .hero {
  background: linear-gradient(135deg, #1e293b, #334155);
}

/* 深色模式下Hero區域的文字更亮 */
[data-theme="dark"] .hero .intro h1,
[data-theme="dark"] .hero .intro h2,
[data-theme="dark"] .hero .daily-equation,
[data-theme="dark"] .hero .life-quote {
  color: #ffffff !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .hero .daily-equation {
  background: rgba(255, 255, 255, 0.1);
  border-left-color: #ffffff;
}

/* 深色模式下Hero區域的按鈕樣式 */
[data-theme="dark"] .hero .btn-primary {
  background: #3b82f6;
  color: white;
}

[data-theme="dark"] .hero .btn-primary:hover {
  background: #2563eb;
}

[data-theme="dark"] .hero .btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}

[data-theme="dark"] .hero .btn-outline:hover {
  background: white;
  color: #1e293b;
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
  box-shadow: var(--shadow-md);
  background: var(--bg-white);
}

.highlight-card h3 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.highlight-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
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
