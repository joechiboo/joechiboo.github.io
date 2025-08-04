import { ref, watch } from 'vue'

const isDark = ref(false)

// 檢查是否為手機設備
const isMobile = () => {
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// 從 localStorage 獲取保存的主題設定
const initTheme = () => {
  // 手機版強制使用深色模式
  if (isMobile()) {
    isDark.value = true
    applyTheme()
    return
  }
  
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // 檢查系統偏好
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
}

// 應用主題到 DOM
const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}

// 切換主題
const toggleTheme = () => {
  // 手機版不允許切換主題
  if (isMobile()) {
    return
  }
  isDark.value = !isDark.value
}

// 監聽主題變化並保存到 localStorage
watch(isDark, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
  applyTheme()
})

export function useTheme() {
  return {
    isDark,
    toggleTheme,
    initTheme,
    isMobile
  }
}