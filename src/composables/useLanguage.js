import { ref, watch } from 'vue'

const currentLanguage = ref('zh')

// 語言文本映射
const translations = {
  zh: {
    // 導航
    home: '首頁',
    about: '關於我',
    experience: '經歷',
    leisure: '休閒',
    portfolio: '作品集',
    contact: '聯絡',
    
    // 通用
    demo: '線上展示',
    github: 'GitHub',
    thisWebsite: '本網站',
    
    // 主題
    lightMode: '淺色模式',
    darkMode: '深色模式',
    language: '語言',
    chinese: '中文',
    english: 'English',
    
    // 作品集頁面
    portfolioTitle: '技術作品集',
    portfolioSubtitle: '我的技術專案與開發經驗展示',
    webDev: '網站開發',
    enterprise: '企業專案',
    creative: '創意專案',
    freelance: '外包專案',
    tech: '技術專案'
  },
  en: {
    // 導航
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    leisure: 'Leisure',
    portfolio: 'Portfolio',
    contact: 'Contact',
    
    // 通用
    demo: 'Demo',
    github: 'GitHub',
    thisWebsite: 'This Site',
    
    // 主題
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    language: 'Language',
    chinese: '中文',
    english: 'English',
    
    // 作品集頁面
    portfolioTitle: 'Technical Portfolio',
    portfolioSubtitle: 'Showcase of my technical projects and development experience',
    webDev: 'Web Development',
    enterprise: 'Enterprise Projects',
    creative: 'Creative Projects',
    freelance: 'Freelance Projects',
    tech: 'Technical Projects'
  }
}

// 從 localStorage 獲取保存的語言設定
const initLanguage = () => {
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage.value = savedLanguage
  } else {
    // 檢查瀏覽器語言偏好
    const browserLang = navigator.language.toLowerCase()
    currentLanguage.value = browserLang.startsWith('zh') ? 'zh' : 'en'
  }
}

// 切換語言
const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'zh' ? 'en' : 'zh'
}

// 獲取翻譯文本
const t = (key) => {
  return translations[currentLanguage.value]?.[key] || key
}

// 監聽語言變化並保存到 localStorage
watch(currentLanguage, (newValue) => {
  localStorage.setItem('language', newValue)
})

export function useLanguage() {
  return {
    currentLanguage,
    toggleLanguage,
    initLanguage,
    t,
    translations
  }
}