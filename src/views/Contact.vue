<template>
  <div class="contact">
    <div class="container">
      <header class="page-header">
        <h1>{{ t('contactPageTitle') }}</h1>
        <p>{{ t('contactPageSubtitle') }}</p>
      </header>

      <div class="contact-content">
        <section class="contact-info">
          <div class="contact-grid">
            <div class="contact-card">
              <div class="contact-icon">💬</div>
              <h3>{{ t('lineContact') }}</h3>
              <p>{{ t('lineContactDesc') }}</p>
              <p style="color: var(--color-primary); font-weight: 600; margin-bottom: 1rem">
                ID: joechiboo
              </p>
              <div class="contact-qr-container">
                <img 
                  src="/img/line.jpg" 
                  alt="Line QR Code" 
                  class="contact-qr-image clickable" 
                  @click="openQRLightbox('/img/line.jpg', 'Line QR Code')"
                />
                <p class="qr-hint">掃描加入好友</p>
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-icon">📱</div>
              <h3>{{ t('phoneContact') }}</h3>
              <p>{{ t('phoneNumber') }}</p>
              <a href="tel:+886986642519" class="btn btn-primary"> {{ t('phoneCallButton') }} </a>
            </div>

            <div class="contact-card">
              <div class="contact-icon">📘</div>
              <h3>{{ t('facebookContact') }}</h3>
              <p>{{ t('facebookContactDesc') }}</p>
              <a href="https://facebook.com/joe.chiboo" class="btn btn-primary" target="_blank">
                {{ t('facebookViewButton') }}
              </a>
            </div>
          </div>
          <div class="contact-grid">
            <div class="contact-card">
              <div class="contact-icon">📧</div>
              <h3>{{ t('primaryEmail') }}</h3>
              <p>{{ t('primaryEmailAddress') }}</p>
              <a href="mailto:joechiboo@gmail.com" class="btn btn-primary"> {{ t('sendEmailButton') }} </a>
            </div>

            <div class="contact-card">
              <div class="contact-icon">📨</div>
              <h3>{{ t('backupEmail') }}</h3>
              <p>{{ t('backupEmailAddress') }}</p>
              <a href="mailto:stst1239joe@hotmail.com" class="btn btn-primary"> {{ t('sendEmailButton') }} </a>
            </div>

            <div class="contact-card">
              <div class="contact-icon">💬</div>
              <h3>{{ t('wechatContact') }}</h3>
              <p>{{ t('wechatContactDesc') }}</p>
              <p style="color: var(--color-primary); font-weight: 600; margin-bottom: 1rem">
                ID: joechiboo
              </p>
              <div class="contact-qr-container">
                <img 
                  src="/img/wechat.png" 
                  alt="WeChat QR Code" 
                  class="contact-qr-image clickable" 
                  @click="openQRLightbox('/img/wechat.png', 'WeChat QR Code')"
                />
                <p class="qr-hint">掃描加入好友</p>
              </div>
            </div>
          </div>
        </section>

        <section class="contact-form-section">
          <h2>{{ t('sendMessage') }}</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">{{ t('formName') }} *</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  :class="{ error: errors.name }"
                />
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="email">{{ t('formEmail') }} *</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  :class="{ error: errors.email }"
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>
            </div>

            <div class="form-group">
              <label for="subject">{{ t('formSubject') }} *</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                :class="{ error: errors.subject }"
              />
              <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
            </div>

            <div class="form-group">
              <label for="message">{{ t('formMessage') }} *</label>
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
              <span v-if="isSubmitting">{{ t('sendingMessage') }}</span>
              <span v-else>{{ t('sendMessageButton') }}</span>
            </button>
          </form>
        </section>

        <section class="availability-section">
          <h2>{{ t('workStatus') }}</h2>
          <div class="availability-card">
            <div class="status-indicator available"></div>
            <div class="availability-info">
              <h3>{{ t('currentStatus') }}</h3>
              <p>{{ t('projectInterests') }}</p>
              <ul class="interests-list">
                <li>{{ t('interestFrontend') }}</li>
                <li>{{ t('interestFullstack') }}</li>
                <li>{{ t('interestDotNet') }}</li>
                <li>{{ t('interestInnovation') }}</li>
                <li>{{ t('interestConsulting') }}</li>
              </ul>
              <p class="response-time"><strong>{{ t('responseTime') }}</strong></p>
            </div>
          </div>
        </section>

        <section class="location-section">
          <h2>{{ t('locationInfo') }}</h2>
          <div class="location-info">
            <div class="location-details">
              <h3>📍 {{ t('locationTaiwan') }}</h3>
              <p>{{ t('locationDesc') }}</p>
              <div class="timezone-info">
                <p><strong>{{ t('timezone') }}</strong></p>
                <p><strong>{{ t('workingHours') }}</strong></p>
                <p><strong>{{ t('remoteWork') }}</strong></p>
              </div>
            </div>

            <div class="availability-calendar">
              <h4>{{ t('bestContactTime') }}</h4>
              <div class="time-slots">
                <div class="time-slot">
                  <span class="day">{{ t('weekdays') }}</span>
                  <span class="time">{{ t('weekdaysTime') }}</span>
                </div>
                <div class="time-slot">
                  <span class="day">{{ t('emergencyContact') }}</span>
                  <span class="time">{{ t('emergencyTime') }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- LINE Pay 支持區塊 -->
        <section class="linepay-section">
          <h2>{{ t('supportMyWork') }}</h2>
          <div class="linepay-content">
            <div class="linepay-info">
              <h3>💝 {{ t('linePayTitle') }}</h3>
              <p>{{ t('linePayDesc') }}</p>

              <div class="support-reasons">
                <h4>{{ t('whySupportTitle') }}</h4>
                <ul>
                  <li>
                    <span class="icon">📚</span>
                    <span>{{ t('linePayPoint1') }}</span>
                  </li>
                  <li>
                    <span class="icon">💻</span>
                    <span>{{ t('linePayPoint2') }}</span>
                  </li>
                  <li>
                    <span class="icon">🎯</span>
                    <span>{{ t('linePayPoint3') }}</span>
                  </li>
                </ul>
              </div>

              <div class="support-options">
                <h4>{{ t('supportOptionsTitle') }}</h4>
                <div class="support-option">
                  <span class="amount">☕ NT$100</span>
                  <span class="description">{{ t('supportOption1') }}</span>
                </div>
                <div class="support-option">
                  <span class="amount">🍽️ NT$1,000</span>
                  <span class="description">{{ t('supportOption2') }}</span>
                </div>
                <div class="support-option">
                  <span class="amount">🌟 NT$3,000</span>
                  <span class="description">{{ t('supportOption3') }}</span>
                </div>
              </div>

              <div class="support-message">
                <p>{{ t('linePaySupport') }}</p>
              </div>
            </div>

            <div class="linepay-qr-section">
              <div class="qr-wrapper">
                <img
                  src="/img/linePay.png"
                  alt="LINE Pay QR Code"
                  class="linepay-qr-image clickable"
                  @click="openQRLightbox('/img/linePay.png', 'LINE Pay QR Code')"
                />
                <p class="scan-hint">{{ t('linePayScanHint') }}</p>
              </div>
              <div class="linepay-id">
                <p>LINE ID</p>
                <strong>joechiboo</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- QR碼燈箱 -->
    <div v-if="qrLightboxData" class="lightbox-overlay" @click="closeQRLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeQRLightbox">&times;</button>
        <img 
          :src="qrLightboxData.src" 
          :alt="qrLightboxData.alt" 
          class="lightbox-qr-image"
        />
        <div class="lightbox-info">
          <h3>{{ qrLightboxData.alt }}</h3>
          <p class="qr-scan-hint">掃描二維碼加入好友</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../composables/useLanguage.js'
import { useSEO } from '../composables/useSEO.js'

const { t } = useLanguage()

// SEO 設定
useSEO({
  title: 'Joe Chi-Boo - 聯絡我 | Contact',
  description: 'Joe Chi-Boo 聯絡頁面，提供多種聯絡方式包括電子郵件、LINE、微信等，歡迎合作洽談與交流。',
  keywords: 'Joe Chi-Boo, 聯絡我, Contact, 電子郵件, LINE, 微信, 合作洽談',
  ogTitle: 'Joe Chi-Boo - 聯絡我',
  ogDescription: '與 Joe Chi-Boo 取得聯繫！提供多種便利的聯絡方式，歡迎合作機會與技術交流。',
  twitterTitle: 'Joe Chi-Boo - 聯絡我',
  twitterDescription: '與 Joe Chi-Boo 取得聯繫！提供多種便利的聯絡方式，歡迎合作機會與技術交流。'
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

// QR碼燈箱相關
const qrLightboxData = ref(null)

const openQRLightbox = (src, alt) => {
  qrLightboxData.value = { src, alt }
}

const closeQRLightbox = () => {
  qrLightboxData.value = null
}

// 鍵盤事件處理
const handleKeyDown = (event) => {
  if (event.key === 'Escape' && qrLightboxData.value) {
    closeQRLightbox()
  }
}

// 生命周期鉤子
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})

const validateForm = () => {
  // 清除之前的錯誤
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  let isValid = true

  if (!form.name.trim()) {
    errors.name = t('formNameRequired')
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = t('formEmailRequired')
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = t('formEmailInvalid')
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = t('formSubjectRequired')
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = t('formMessageRequired')
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = t('formMessageTooShort')
    isValid = false
  }

  return isValid
}

// EmailJS 配置 - 需要在 EmailJS 後台設定後替換
const EMAILJS_CONFIG = {
  serviceID: 'service_jvybjau', // EmailJS Gmail 服務 ID
  templateID: 'template_whyacks', // 郵件模板 ID
  publicKey: 'Mn7iuNxRHRYEqr9A2', // EmailJS 公鑰
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // 檢查 EmailJS 是否已配置
    const isConfigured =
      EMAILJS_CONFIG.serviceID !== 'YOUR_SERVICE_ID' &&
      EMAILJS_CONFIG.templateID !== 'YOUR_TEMPLATE_ID' &&
      EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY'

    if (!isConfigured) {
      // 如果未配置 EmailJS，顯示提示並模擬發送
      console.warn('EmailJS 尚未配置，請設定 EMAILJS_CONFIG 中的參數')
      await new Promise((resolve) => setTimeout(resolve, 1500))
      alert('訊息發送成功！我會盡快回覆您。\n\n(開發提示：請配置 EmailJS 以啟用真實郵件發送功能)')
    } else {
      // 使用 EmailJS 發送郵件
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: 'stst1239joe@hotmail.com', // Joe 的真實郵箱
      }

      await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      )

      alert('訊息發送成功！我會在24小時內回覆您。')
    }

    // 清空表單
    Object.keys(form).forEach((key) => {
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
  background: var(--bg-light);
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
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
}

.contact-content section {
  background: var(--bg-white);
  border-radius: 10px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: var(--shadow-md);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.contact-card {
  background: var(--bg-light);
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
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.contact-card p {
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.contact-form-section h2 {
  color: var(--color-text-primary);
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
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid var(--color-text-muted, #ccc);
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--bg-white);
  color: var(--color-text-primary);
}

/* 深色模式下的表單邊框 */
[data-theme="dark"] .form-group input,
[data-theme="dark"] .form-group textarea {
  border: 2px solid #555;
  background: var(--bg-darker, #2a2a2a);
  color: var(--color-text-primary);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-group input.error,
.form-group textarea.error {
  border-color: var(--color-error);
}

.error-message {
  color: var(--color-error);
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
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-primary-hover);
}

.btn-primary:disabled {
  background: var(--color-disabled);
  cursor: not-allowed;
}

.btn-large {
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.availability-section h2,
.location-section h2 {
  color: var(--color-text-primary);
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
  background: #10b981 !important;
  animation: breathe 2s ease-in-out infinite !important;
  -webkit-animation: breathe 2s ease-in-out infinite !important;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6) !important;
  border: 2px solid rgba(16, 185, 129, 0.3) !important;
  will-change: transform, opacity, background-color, box-shadow !important;
}

@keyframes breathe {
  0% {
    transform: scale(0.85);
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.4);
    opacity: 0.8;
    background: #10b981;
  }
  50% {
    transform: scale(1.25);
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.8);
    opacity: 1;
    background: #22c55e;
  }
  100% {
    transform: scale(0.85);
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.4);
    opacity: 0.8;
    background: #10b981;
  }
}

.availability-info h3 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.availability-info p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.interests-list {
  color: var(--color-text-secondary);
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.interests-list li {
  margin-bottom: 0.5rem;
}

.response-time {
  color: var(--color-text-muted);
  font-style: italic;
}

.location-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.location-details h3 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.location-details p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.timezone-info p {
  margin-bottom: 0.5rem;
}

.availability-calendar h4 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.time-slots {
  background: var(--bg-light);
  border-radius: 8px;
  padding: 1.5rem;
}

.time-slot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--border-color);
}

.time-slot:last-child {
  border-bottom: none;
}

.day {
  color: var(--color-text-primary);
  font-weight: 500;
}

.time {
  color: var(--color-text-secondary);
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

/* QR 碼圖片樣式 */
.contact-qr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.contact-qr-image {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.contact-qr-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.contact-qr-image.clickable:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.qr-hint {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin: 0;
  text-align: center;
}

/* 深色模式下的QR碼圖片 */
[data-theme="dark"] .contact-qr-image {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .contact-qr-image:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

/* QR碼燈箱樣式 */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.lightbox-content {
  position: relative;
  background: var(--bg-white);
  border-radius: 12px;
  padding: 2rem;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.lightbox-close:hover {
  background: var(--color-error);
  color: white;
  transform: rotate(90deg);
}

.lightbox-qr-image {
  max-width: 400px;
  max-height: 400px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.lightbox-info {
  text-align: center;
  margin-top: 1.5rem;
}

.lightbox-info h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.qr-scan-hint {
  color: var(--color-text-secondary);
  font-size: 1rem;
  margin: 0;
}

/* 深色模式下的燈箱 */
[data-theme="dark"] .lightbox-content {
  background: var(--bg-darker, #2a2a2a);
}

[data-theme="dark"] .lightbox-qr-image {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* 動畫 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* LINE Pay 支持區塊 */
.linepay-section {
  background: var(--bg-white);
  border-radius: 10px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: var(--shadow-md);
}

.linepay-section h2 {
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.linepay-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.linepay-info h3 {
  color: var(--color-text-primary);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.linepay-info > p {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.support-reasons {
  margin: 2rem 0;
}

.support-reasons h4 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.support-reasons ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.support-reasons li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
}

.support-reasons .icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.support-options {
  margin: 2rem 0;
}

.support-options h4 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.support-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  margin: 0.5rem 0;
  background: var(--bg-light);
  border-radius: 8px;
  border-left: 3px solid var(--color-primary);
  transition: all 0.3s ease;
}

.support-option:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateX(5px);
}

.support-option .amount {
  font-weight: 600;
  color: var(--color-primary);
  min-width: 120px;
  font-size: 1rem;
}

.support-option .description {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.4;
}

.support-message {
  padding: 1.2rem;
  background: var(--bg-light);
  border-radius: 8px;
  border-left: 4px solid var(--color-primary);
}

.support-message p {
  color: var(--color-text-secondary);
  font-style: italic;
  margin: 0;
  line-height: 1.6;
}

.linepay-qr-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.qr-wrapper {
  text-align: center;
}

.linepay-qr-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background: white;
  padding: 15px;
}

.linepay-qr-image:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
}

.scan-hint {
  margin-top: 1rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.linepay-id {
  text-align: center;
  padding: 1rem 2rem;
  background: var(--bg-light);
  border-radius: 8px;
}

.linepay-id p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.linepay-id strong {
  color: var(--color-primary);
  font-size: 1.2rem;
  font-weight: 600;
}

/* 深色模式調整 */
[data-theme="dark"] .linepay-qr-image {
  background: #f5f5f5;
}

[data-theme="dark"] .support-message {
  background: var(--bg-darker, #2a2a2a);
}

[data-theme="dark"] .linepay-id {
  background: var(--bg-darker, #2a2a2a);
}

[data-theme="dark"] .support-option {
  background: var(--bg-darker, #2a2a2a);
}

[data-theme="dark"] .support-option:hover {
  background: rgba(147, 51, 234, 0.1);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .lightbox-content {
    padding: 1.5rem;
    margin: 1rem;
  }

  .lightbox-qr-image {
    max-width: 300px;
    max-height: 300px;
  }

  .lightbox-close {
    top: 0.5rem;
    right: 0.5rem;
  }

  .linepay-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .linepay-qr-section {
    order: -1;
  }

  .linepay-section {
    padding: 2rem;
  }
}
</style>
