<template>
  <div class="contact">
    <div class="container">
      <header class="page-header">
        <h1>聯絡我</h1>
        <p>歡迎與我交流技術、工作機會或任何有趣的想法</p>
      </header>

      <div class="contact-content">
        <section class="contact-info">
          <div class="contact-grid">
            <div class="contact-card">
              <div class="contact-icon">📧</div>
              <h3>電子郵件</h3>
              <p>stst1239joe@hotmail.com</p>
              <a href="mailto:stst1239joe@hotmail.com" class="btn btn-primary">
                發送郵件
              </a>
            </div>

            <div class="contact-card">
              <div class="contact-icon">📘</div>
              <h3>Facebook</h3>
              <p>社交媒體聯繫</p>
              <a href="https://facebook.com/joe.chiboo" class="btn btn-primary" target="_blank">
                查看檔案
              </a>
            </div>

            <div class="contact-card">
              <div class="contact-icon">💬</div>
              <h3>WeChat</h3>
              <p>即時通訊聯繫</p>
              <p style="color: #007bff; font-weight: 600; margin-bottom: 1rem;">ID: joechiboo</p>
              <span class="btn btn-primary" style="cursor: default; opacity: 0.7;">
                微信聯繫
              </span>
            </div>

            <div class="contact-card">
              <div class="contact-icon">📱</div>
              <h3>電話</h3>
              <p>+886 986 642 519</p>
              <a href="tel:+886986642519" class="btn btn-primary">
                撥打電話
              </a>
            </div>
          </div>
        </section>

        <section class="contact-form-section">
          <h2>發送訊息</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">姓名 *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  :class="{ error: errors.name }"
                >
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </div>
              
              <div class="form-group">
                <label for="email">電子郵件 *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  :class="{ error: errors.email }"
                >
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>
            </div>

            <div class="form-group">
              <label for="subject">主旨 *</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                required
                :class="{ error: errors.subject }"
              >
              <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
            </div>

            <div class="form-group">
              <label for="message">訊息內容 *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="6" 
                required
                :class="{ error: errors.message }"
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>

            <button type="submit" class="btn btn-primary btn-large" :disabled="isSubmitting">
              <span v-if="isSubmitting">發送中...</span>
              <span v-else>發送訊息</span>
            </button>
          </form>
        </section>

        <section class="availability-section">
          <h2>工作狀態</h2>
          <div class="availability-card">
            <div class="status-indicator available"></div>
            <div class="availability-info">
              <h3>目前狀態：開放機會</h3>
              <p>我正在尋找新的挑戰和機會，特別對以下類型的專案感興趣：</p>
              <ul class="interests-list">
                <li>前端開發專案（Vue.js, React）</li>
                <li>全端 Web 應用程式開發</li>
                <li>創新科技專案</li>
                <li>開源專案貢獻</li>
                <li>技術諮詢與指導</li>
              </ul>
              <p class="response-time">
                <strong>回覆時間：</strong>通常在24小時內回覆郵件
              </p>
            </div>
          </div>
        </section>

        <section class="location-section">
          <h2>位置資訊</h2>
          <div class="location-info">
            <div class="location-details">
              <h3>📍 台灣</h3>
              <p>基於台灣，可配合不同時區的工作安排</p>
              <div class="timezone-info">
                <p><strong>時區：</strong>UTC+8 (台北時間)</p>
                <p><strong>工作時間：</strong>彈性安排，可配合團隊需求</p>
                <p><strong>遠端工作：</strong>支援遠端協作</p>
              </div>
            </div>
            
            <div class="availability-calendar">
              <h4>最佳聯絡時間</h4>
              <div class="time-slots">
                <div class="time-slot">
                  <span class="day">週一至週五</span>
                  <span class="time">09:00 - 18:00</span>
                </div>
                <div class="time-slot">
                  <span class="day">緊急聯繫</span>
                  <span class="time">隨時歡迎</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const validateForm = () => {
  // 清除之前的錯誤
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })

  let isValid = true

  if (!form.name.trim()) {
    errors.name = '請輸入姓名'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = '請輸入電子郵件'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = '請輸入有效的電子郵件格式'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = '請輸入主旨'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = '請輸入訊息內容'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = '訊息內容至少需要10個字元'
    isValid = false
  }

  return isValid
}

// EmailJS 配置 - 需要在 EmailJS 後台設定後替換
const EMAILJS_CONFIG = {
  serviceID: 'YOUR_SERVICE_ID', // 需要設定：Gmail 或 Outlook 服務 ID
  templateID: 'YOUR_TEMPLATE_ID', // 需要設定：郵件模板 ID  
  publicKey: 'YOUR_PUBLIC_KEY' // 需要設定：EmailJS 公鑰
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // 檢查 EmailJS 是否已配置
    const isConfigured = EMAILJS_CONFIG.serviceID !== 'YOUR_SERVICE_ID' &&
                         EMAILJS_CONFIG.templateID !== 'YOUR_TEMPLATE_ID' &&
                         EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY'
    
    if (!isConfigured) {
      // 如果未配置 EmailJS，顯示提示並模擬發送
      console.warn('EmailJS 尚未配置，請設定 EMAILJS_CONFIG 中的參數')
      await new Promise(resolve => setTimeout(resolve, 1500))
      alert('訊息發送成功！我會盡快回覆您。\n\n(開發提示：請配置 EmailJS 以啟用真實郵件發送功能)')
    } else {
      // 使用 EmailJS 發送郵件
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: 'stst1239joe@hotmail.com' // Joe 的真實郵箱
      }

      await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )
      
      alert('訊息發送成功！我會在24小時內回覆您。')
    }
    
    // 清空表單
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
  } catch (error) {
    console.error('郵件發送失敗:', error)
    alert('發送失敗，請稍後再試或直接發送郵件至 stst1239joe@hotmail.com')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact {
  padding-top: 80px;
  min-height: 100vh;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-header h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  color: #666;
}

.contact-content section {
  background: white;
  border-radius: 10px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.contact-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-card h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.contact-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.contact-form-section h2 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
}

.form-group input.error,
.form-group textarea.error {
  border-color: #dc3545;
}

.error-message {
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.3rem;
  display: block;
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

.btn-primary:hover:not(:disabled) {
  background: #0056b3;
}

.btn-primary:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.btn-large {
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.availability-section h2,
.location-section h2 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.availability-card {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.status-indicator {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top: 0.3rem;
  flex-shrink: 0;
}

.status-indicator.available {
  background: #28a745;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.availability-info h3 {
  color: #333;
  margin-bottom: 1rem;
}

.availability-info p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.interests-list {
  color: #555;
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.interests-list li {
  margin-bottom: 0.5rem;
}

.response-time {
  color: #666;
  font-style: italic;
}

.location-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.location-details h3 {
  color: #333;
  margin-bottom: 1rem;
}

.location-details p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.timezone-info p {
  margin-bottom: 0.5rem;
}

.availability-calendar h4 {
  color: #333;
  margin-bottom: 1rem;
}

.time-slots {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
}

.time-slot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #e9ecef;
}

.time-slot:last-child {
  border-bottom: none;
}

.day {
  color: #333;
  font-weight: 500;
}

.time {
  color: #666;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .contact-content section {
    padding: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .availability-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .location-info {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>