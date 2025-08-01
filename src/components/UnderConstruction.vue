<template>
  <div class="under-construction">
    <div class="construction-container">
      <div class="construction-animation">
        <div class="gear-container">
          <div class="gear gear-1">⚙️</div>
          <div class="gear gear-2">⚙️</div>
        </div>
        <div class="construction-icon">🚧</div>
      </div>
      
      <div class="construction-content">
        <h2 class="construction-title">{{ title }}</h2>
        <p class="construction-message">{{ message }}</p>
        
        <div class="construction-progress">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
          </div>
          <p class="progress-text">內容優化進度：{{ progressPercentage }}%</p>
        </div>
        
        <div class="construction-info">
          <p class="eta">📅 預計完成時間：{{ estimatedCompletion }}</p>
          <p class="current-work">🔧 目前進行：{{ currentWork }}</p>
        </div>
        
        <div class="construction-actions">
          <router-link to="/about" class="btn btn-primary">
            查看已完成頁面
          </router-link>
          <router-link to="/contact" class="btn btn-outline">
            聯絡我
          </router-link>
        </div>
        
        <div class="claude-attribution">
          <p>⚡ 與 Claude AI 協作開發中</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '頁面優化中'
  },
  message: {
    type: String,
    default: '正在精心打造更棒的內容體驗，敬請期待！'
  },
  progressPercentage: {
    type: Number,
    default: 65
  },
  estimatedCompletion: {
    type: String,
    default: '2-3 天內'
  },
  currentWork: {
    type: String,
    default: '內容整理與視覺優化'
  }
})
</script>

<style scoped>
.under-construction {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
}

.construction-container {
  max-width: 600px;
  text-align: center;
  background: white;
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.construction-animation {
  position: relative;
  margin-bottom: 2rem;
}

.gear-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.gear {
  font-size: 2rem;
  animation: rotate 3s linear infinite;
}

.gear-2 {
  animation: rotate 3s linear infinite reverse;
  animation-delay: -1.5s;
}

.construction-icon {
  font-size: 4rem;
  animation: bounce 2s ease-in-out infinite;
}

.construction-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.construction-message {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.construction-progress {
  margin-bottom: 2rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 10px;
  transition: width 0.3s ease;
  animation: pulse 2s ease-in-out infinite;
}

.progress-text {
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
}

.construction-info {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.construction-info p {
  margin: 0.5rem 0;
  color: #555;
  font-size: 0.95rem;
}

.eta {
  font-weight: 600;
  color: #007bff;
}

.construction-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

.claude-attribution {
  border-top: 1px solid #e9ecef;
  padding-top: 1rem;
}

.claude-attribution p {
  font-size: 0.85rem;
  color: #999;
  margin: 0;
  font-style: italic;
}

/* 動畫效果 */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .construction-container {
    padding: 2rem 1.5rem;
  }
  
  .construction-title {
    font-size: 1.5rem;
  }
  
  .construction-actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>