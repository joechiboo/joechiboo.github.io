<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <router-link to="/" class="nav-logo-link">Joe Chi-Boo</router-link>
      </div>

      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">{{ t('home') }}</router-link>
        <router-link to="/about" class="nav-link" @click="closeMenu">{{ t('about') }}</router-link>
        <router-link to="/experience" class="nav-link" @click="closeMenu">{{ t('experience') }}</router-link>
        <router-link to="/leisure" class="nav-link" @click="closeMenu">{{ t('leisure') }}</router-link>
        <router-link to="/portfolio" class="nav-link" @click="closeMenu">{{ t('portfolio') }}</router-link>
        <router-link to="/contact" class="nav-link" @click="closeMenu">{{ t('contact') }}</router-link>
      </div>

      <div class="nav-controls">
        <!-- 主題切換按鈕 -->
        <button @click="toggleTheme" class="control-btn theme-btn" :title="isDark ? t('lightMode') : t('darkMode')">
          <svg v-if="isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- 語言切換按鈕 -->
        <button @click="toggleLanguage" class="control-btn language-btn" :title="t('language')">
          <span class="language-text">{{ currentLanguage === 'zh' ? 'EN' : '中' }}</span>
        </button>
      </div>

      <div class="nav-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme.js'
import { useLanguage } from '../composables/useLanguage.js'

const isMenuOpen = ref(false)

const { isDark, toggleTheme } = useTheme()
const { currentLanguage, toggleLanguage, t } = useLanguage()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  background: var(--bg-white);
  box-shadow: var(--shadow-sm);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all var(--transition-base);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-text-primary);
  text-decoration: none;
  transition: color var(--transition-base);
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--color-text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-base);
  padding: 0.5rem 1rem;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: var(--border-radius);
  background: transparent;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: all var(--transition-base);
}

.control-btn:hover {
  background: var(--bg-light);
  color: var(--color-primary);
}

.language-text {
  font-size: 0.9rem;
  font-weight: 600;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background: var(--color-text-primary);
  margin: 3px 0;
  transition: var(--transition-base);
}

@media screen and (max-width: 768px) {
  /* 手機版nav-container背景修復 */
  .nav-container {
    background-color: #ffffff !important;
  }
  
  /* 手機版深色模式nav-container */
  [data-theme="dark"] .nav-container {
    background-color: #1a1a1a !important;
  }

  body .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: #ffffff !important;
    width: 100%;
    text-align: center;
    transition: var(--transition-base);
    box-shadow: var(--shadow-lg);
    padding: 2rem 0;
  }
  
  /* 手機版日間模式文字顏色 */
  body .nav-menu .nav-link {
    color: #2d3748 !important;
  }
  
  body .nav-menu .nav-link:hover,
  body .nav-menu .nav-link.router-link-active {
    color: #667eea !important;
  }
  
  /* 手機版深色模式 */
  body[data-theme="dark"] .nav-menu {
    background-color: #1a1a1a !important;
  }
  
  body[data-theme="dark"] .nav-menu .nav-link {
    color: #ffffff !important;
  }
  
  body[data-theme="dark"] .nav-menu .nav-link:hover,
  body[data-theme="dark"] .nav-menu .nav-link.router-link-active {
    color: #f97316 !important;
  }

  body .nav-menu.active {
    left: 0 !important;
  }

  .nav-controls {
    order: -1;
    margin-right: 1rem;
  }

  .nav-toggle {
    display: flex;
  }
}
</style>
