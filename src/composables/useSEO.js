import { watchEffect } from 'vue'

export function useSEO(meta = {}) {
  const defaultMeta = {
    title: 'Joe Chi-Boo - 資訊室主任',
    description: 'Joe Chi-Boo 個人履歷網站 - 軟體工程師 & 資訊室主任。擁有15年.NET開發經驗，專精於全端開發與團隊管理。',
    keywords: 'Joe Chi-Boo, 軟體工程師, .NET, 全端開發, 資訊室主任, 履歷',
    ogTitle: 'Joe Chi-Boo - 軟體工程師 & 資訊室主任',
    ogDescription: '擁有15年.NET開發經驗，專精於全端開發與團隊管理。目前擔任資訊室主任，持續進修資訊科學碩士學位。',
    ogImage: 'https://joechiboo.github.io/img/joechiboo.png',
    twitterTitle: 'Joe Chi-Boo - 軟體工程師 & 資訊室主任',
    twitterDescription: '擁有15年.NET開發經驗，專精於全端開發與團隊管理。目前擔任資訊室主任，持續進修資訊科學碩士學位。'
  }

  const finalMeta = { ...defaultMeta, ...meta }

  watchEffect(() => {
    // 更新頁面標題
    if (finalMeta.title) {
      document.title = finalMeta.title
    }

    // 更新或創建 meta 標籤
    updateMetaTag('description', finalMeta.description)
    updateMetaTag('keywords', finalMeta.keywords)
    
    // Open Graph meta tags
    updateMetaProperty('og:title', finalMeta.ogTitle)
    updateMetaProperty('og:description', finalMeta.ogDescription)
    updateMetaProperty('og:image', finalMeta.ogImage)
    updateMetaProperty('og:url', `https://joechiboo.github.io${window.location.pathname}`)
    
    // Twitter meta tags
    updateMetaProperty('twitter:title', finalMeta.twitterTitle)
    updateMetaProperty('twitter:description', finalMeta.twitterDescription)
    updateMetaProperty('twitter:image', finalMeta.ogImage)
  })

  function updateMetaTag(name, content) {
    if (!content) return
    
    let element = document.querySelector(`meta[name="${name}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute('name', name)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  function updateMetaProperty(property, content) {
    if (!content) return
    
    let element = document.querySelector(`meta[property="${property}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute('property', property)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }
}