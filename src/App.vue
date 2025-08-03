<template>
  <div id="app">
    <Navigation />
    <router-view />
    
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

</style>