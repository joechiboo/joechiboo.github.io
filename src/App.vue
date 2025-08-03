<template>
  <div id="app">
    <Navigation />
    <router-view />
    
    <!-- Claude 貢獻標識 -->
    <div class="claude-badge">
      <div class="claude-content">
        <div class="claude-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="claude-text">
          <span class="claude-title">Enhanced by</span>
          <span class="claude-name">Claude</span>
        </div>
      </div>
      <div class="claude-tooltip">
        網站內容與設計由 Claude AI 協助優化
      </div>
    </div>
    
    <!-- 語音自我介紹組件 -->
    <VoiceIntroduction />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import VoiceIntroduction from './components/VoiceIntroduction.vue'
</script>

<style>
/* 全域樣式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', 'Noto Sans TC', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: var(--color-text-primary);
  background-color: var(--bg-white);
}

#app {
  min-height: 100vh;
}

/* 改善中文字體顯示 */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.2;
}

/* 連結樣式 */
a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-base);
}

a:hover {
  color: var(--color-primary-hover);
}

/* Enhanced Button System */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm) var(--space-lg);
  border: none;
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-base);
  white-space: nowrap;
}

.btn-primary {
  background: var(--color-primary-gradient);
  color: var(--bg-white);
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-outline:hover {
  background: var(--color-primary);
  color: var(--bg-white);
}

.btn-large {
  padding: var(--space-md) var(--space-xl);
  font-size: var(--font-size-lg);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* 容器樣式已移至 utilities.css */

/* 載入動畫 */
.fade-enter-active, .fade-leave-active {
  transition: opacity var(--transition-slow);
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* 捲軸樣式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-light);
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary-gradient);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-hover);
}

/* 響應式工具類已移至 responsive.css */

/* Claude 貢獻標識 */
.claude-badge {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1001;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50px;
  padding: 8px 16px;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0.9;
}

.claude-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(102, 126, 234, 0.4);
  opacity: 1;
}

.claude-badge:hover .claude-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-10px);
}

.claude-content {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
}

.claude-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.claude-icon svg {
  width: 100%;
  height: 100%;
  color: white;
}

.claude-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.claude-title {
  font-size: 9px;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.claude-name {
  font-size: 12px;
  font-weight: 600;
}

.claude-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-5px);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 11px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
}

.claude-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.9);
}

/* 移動端優化 */
@media (max-width: 768px) {
  .claude-badge {
    bottom: 15px;
    right: 15px;
    padding: 6px 12px;
  }
  
  .claude-icon {
    width: 14px;
    height: 14px;
  }
  
  .claude-title {
    font-size: 8px;
  }
  
  .claude-name {
    font-size: 11px;
  }
  
  .claude-tooltip {
    font-size: 10px;
    padding: 6px 10px;
  }
}
</style>