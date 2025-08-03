<template>
  <div class="voice-intro-container">
    <!-- 主播放按鈕 -->
    <button 
      v-if="!isExpanded"
      class="voice-intro-btn"
      @click="toggleIntro"
      :disabled="!speechSupported"
      :title="speechSupported ? '點擊收聽一分鐘自我介紹' : '您的瀏覽器不支援語音功能'"
    >
      <div class="btn-content">
        <span class="voice-icon">🎙️</span>
        <span class="btn-text">自我介紹</span>
      </div>
    </button>

    <!-- 展開的播放控制面板 -->
    <div v-if="isExpanded" class="voice-control-panel">
      <div class="panel-header">
        <div class="intro-title">
          <span class="title-icon">🎙️</span>
          <span>語音自我介紹</span>
        </div>
        <button class="close-btn" @click="closePanel">×</button>
      </div>

      <div class="intro-content">
        <div class="speaker-info">
          <div class="avatar">👨‍💻</div>
          <div class="speaker-name">紀伯喬 Joe Chi-Boo</div>
        </div>

        <!-- 進度條 -->
        <div class="progress-container">
          <div class="progress-bar">
            <div 
              class="progress-fill" 
              :style="{ width: progressPercentage + '%' }"
            ></div>
          </div>
          <div class="time-info">
            <span>{{ formatTime(currentTime) }}</span>
            <span>{{ formatTime(totalDuration) }}</span>
          </div>
        </div>

        <!-- 播放控制 -->
        <div class="playback-controls">
          <button 
            class="control-btn"
            @click="togglePlayback"
            :disabled="!speechSupported"
          >
            <span v-if="isPlaying">⏸️</span>
            <span v-else>▶️</span>
          </button>
          
          <button class="control-btn" @click="stopPlayback">
            ⏹️
          </button>

          <div class="volume-control">
            <span class="volume-icon">🔊</span>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.1" 
              v-model="volume"
              class="volume-slider"
            >
          </div>
        </div>

        <!-- 當前播放文字 -->
        <div class="current-text" v-if="isPlaying">
          <div class="text-indicator">正在播放：</div>
          <div class="current-sentence">{{ currentSentence }}</div>
        </div>
      </div>

    </div>

    <!-- 播放狀態指示器 -->
    <div v-if="isPlaying && !isExpanded" class="playing-indicator">
      <div class="pulse-ring"></div>
      <span class="playing-icon">🎙️</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

// 自我介紹內容
const introText = `我是紀伯喬，一位擁有十五年.NET開發經驗的軟體工程師。目前任職於大安聯合醫事檢驗所，擔任資訊室主任，並於臺北教育大學資訊科學系在職專班進修中。我曾在上海工作多年，累積超過兩萬小時的專業開發實戰經驗，擅長網頁技術整合與應用。這個網站整理了我的專業背景與創作內容，如果有任何問題，歡迎隨時聯繫我！`

// 將文字分段，便於顯示當前播放內容
const sentences = introText.split(/[。！？]/).filter(s => s.trim())

// 響應式數據
const isExpanded = ref(false)
const isPlaying = ref(false)
const speechSupported = ref(false)
const volume = ref(0.8)
const currentTime = ref(0)
const totalDuration = ref(60) // 預估總時長（秒）
const progressPercentage = ref(0)
const currentSentence = ref('')
const currentSentenceIndex = ref(0)

// 語音合成相關
let speechSynthesis = null
let utterance = null
let progressTimer = null

// 檢查瀏覽器支援
onMounted(() => {
  speechSupported.value = 'speechSynthesis' in window
  if (speechSupported.value) {
    speechSynthesis = window.speechSynthesis
  }
})

// 監聽音量變化
watch(volume, (newVolume) => {
  if (utterance) {
    utterance.volume = newVolume
  }
})

// 切換介紹面板
const toggleIntro = () => {
  isExpanded.value = !isExpanded.value
  if (isExpanded.value) {
    startPlayback()
  }
}

// 關閉面板
const closePanel = () => {
  stopPlayback()
  isExpanded.value = false
}

// 開始播放
const startPlayback = () => {
  if (!speechSupported.value) return

  // 創建語音合成實例
  utterance = new SpeechSynthesisUtterance(introText)
  
  // 設置語音參數
  utterance.rate = 0.9 // 稍微慢一點
  utterance.pitch = 1.0
  utterance.volume = volume.value
  utterance.lang = 'zh-TW' // 繁體中文

  // 設置事件監聽
  utterance.onstart = () => {
    isPlaying.value = true
    currentTime.value = 0
    currentSentenceIndex.value = 0
    startProgressTimer()
  }

  utterance.onend = () => {
    isPlaying.value = false
    currentTime.value = 0
    progressPercentage.value = 0
    currentSentence.value = ''
    clearProgressTimer()
  }

  utterance.onerror = () => {
    isPlaying.value = false
    clearProgressTimer()
  }

  // 開始播放
  speechSynthesis.speak(utterance)
}

// 切換播放/暫停
const togglePlayback = () => {
  if (!speechSupported.value) return

  if (isPlaying.value) {
    speechSynthesis.pause()
    isPlaying.value = false
    clearProgressTimer()
  } else if (speechSynthesis.paused) {
    speechSynthesis.resume()
    isPlaying.value = true
    startProgressTimer()
  } else {
    startPlayback()
  }
}

// 停止播放
const stopPlayback = () => {
  if (speechSynthesis) {
    speechSynthesis.cancel()
  }
  isPlaying.value = false
  currentTime.value = 0
  progressPercentage.value = 0
  currentSentence.value = ''
  currentSentenceIndex.value = 0
  clearProgressTimer()
}

// 進度計時器
const startProgressTimer = () => {
  clearProgressTimer()
  progressTimer = setInterval(() => {
    if (isPlaying.value) {
      currentTime.value += 0.1
      progressPercentage.value = (currentTime.value / totalDuration.value) * 100
      
      // 更新當前播放的句子
      const sentenceIndex = Math.floor((currentTime.value / totalDuration.value) * sentences.length)
      if (sentenceIndex < sentences.length && sentenceIndex !== currentSentenceIndex.value) {
        currentSentenceIndex.value = sentenceIndex
        currentSentence.value = sentences[sentenceIndex].trim()
      }
    }
  }, 100)
}

const clearProgressTimer = () => {
  if (progressTimer) {
    clearInterval(progressTimer)
    progressTimer = null
  }
}

// 格式化時間
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

// 清理
onUnmounted(() => {
  stopPlayback()
})
</script>

<style scoped>
/* 容器 */
.voice-intro-container {
  position: fixed;
  bottom: 2rem;
  right: 12rem;
  z-index: 1000;
}

/* 主播放按鈕 */
.voice-intro-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  font-family: inherit;
  min-width: 160px;
}

.voice-intro-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
}

.voice-intro-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.voice-icon {
  font-size: 1.2rem;
}

.btn-subtitle {
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
  font-style: italic;
}

/* 控制面板 */
.voice-control-panel {
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  min-width: 320px;
  max-width: 400px;
  border: 1px solid #e9ecef;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.intro-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #333;
}

.title-icon {
  font-size: 1.1rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: #f8f9fa;
  color: #333;
}

/* 講者資訊 */
.speaker-info {
  text-align: center;
  margin-bottom: 1.5rem;
}

.avatar {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.speaker-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

/* 進度條 */
.progress-container {
  margin-bottom: 1.5rem;
}

.progress-bar {
  background: #e9ecef;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  background: linear-gradient(135deg, #667eea, #764ba2);
  height: 100%;
  border-radius: 3px;
  transition: width 0.1s ease;
}

.time-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #666;
}

/* 播放控制 */
.playback-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.control-btn {
  background: #f8f9fa;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background: #e9ecef;
  transform: scale(1.05);
}

.control-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 音量控制 */
.volume-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.volume-icon {
  font-size: 1rem;
}

.volume-slider {
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: #e9ecef;
  outline: none;
  cursor: pointer;
}

.volume-slider::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #667eea;
  cursor: pointer;
}

/* 當前播放文字 */
.current-text {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.text-indicator {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.current-sentence {
  color: #333;
  line-height: 1.5;
  font-size: 0.95rem;
}


/* 播放指示器 */
.playing-indicator {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #667eea;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.playing-icon {
  font-size: 1rem;
  z-index: 1;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .voice-intro-container {
    bottom: 5rem;
    right: 1rem;
  }

  .voice-control-panel {
    min-width: 280px;
    max-width: calc(100vw - 2rem);
  }

  .voice-intro-btn {
    min-width: 140px;
    padding: 0.8rem 1.2rem;
  }

  .btn-content {
    font-size: 0.9rem;
  }

}
</style>