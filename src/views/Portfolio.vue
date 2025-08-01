<template>
  <div class="portfolio">
    <div class="container">
      <header class="page-header">
        <h1>作品集</h1>
        <p>我的技術專案與創作展示</p>
      </header>

      <div class="portfolio-grid">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <div class="project-image">
            <div class="project-icon">
              <span v-if="project.category === 'web'">🌐</span>
              <span v-else-if="project.category === 'enterprise'">🏢</span>
              <span v-else-if="project.category === 'creative'">🎨</span>
              <span v-else-if="project.category === 'freelance'">🤝</span>
              <span v-else>💻</span>
            </div>
            <div class="project-category">
              <span v-if="project.category === 'web'">網站開發</span>
              <span v-else-if="project.category === 'enterprise'">企業專案</span>
              <span v-else-if="project.category === 'creative'">創意專案</span>
              <span v-else-if="project.category === 'freelance'">外包專案</span>
              <span v-else>技術專案</span>
            </div>
          </div>
          <div class="project-content">
            <div class="project-header">
              <h3>{{ project.title }}</h3>
              <div class="project-meta">
                <span v-if="project.year" class="project-year">{{ project.year }}</span>
                <span v-if="project.company" class="project-company">{{ project.company }}</span>
                <span v-if="project.client" class="project-client">{{ project.client }}</span>
              </div>
            </div>
            <p>{{ project.description }}</p>
            <div class="tech-stack">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="project-links">
              <a v-if="project.demo" :href="project.demo" class="btn btn-primary" target="_blank">
                線上展示
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                class="btn btn-outline"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: '波爾多社區網站',
    description:
      '使用 Vue.js 開發的現代化社區門戶網站，提供社區資訊展示、互動功能和用戶參與平台。專案採用響應式設計，確保在各種設備上的最佳體驗。',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Azure Static Web Apps'],
    demo: 'https://mango-rock-08c98c600.5.azurestaticapps.net/',
    github: null,
    category: 'web',
    year: '2024',
  },
  {
    id: 2,
    title: '測驗服務專區',
    description:
      '專業的英語檢定考試報名平台，支援TOEIC、TOEFL等多種測驗註冊。整合考試行事曆、線上報名、用戶管理和多語言介面，提供完整的考試服務生態系統。',
    technologies: [
      'Web Development',
      'Database Management',
      'User Authentication',
      'Google Analytics',
    ],
    demo: 'https://www.examservice.com.tw/',
    github: null,
    category: 'enterprise',
    year: '前公司專案',
    company: 'Chun Shin Limited',
  },
  {
    id: 3,
    title: '搶救杰倫大作戰',
    description:
      '創意專案企劃與簡報設計，展現專案規劃、創意發想和視覺呈現能力。透過Google Slides製作互動式簡報，結合創意內容和專業設計。',
    technologies: ['Project Planning', 'Creative Design', 'Google Slides', 'Presentation'],
    demo: 'https://docs.google.com/presentation/d/1o8wMB3w1GFzAHgo4Aj92EPqpsxqORiLyoJ8CbuIWWW0/edit?slide=id.p4#slide=id.p4',
    github: null,
    category: 'creative',
  },
  {
    id: 4,
    title: '台北高爾夫協會官網',
    description:
      '台北市高爾夫協會官方網站開發與維護。負責賽事資訊發布系統、新聞內容管理、競賽章程下載和報名選手資訊展示功能。提供清晰的資訊架構和用戶友善的瀏覽體驗。',
    technologies: [
      'Web Development',
      'Content Management',
      'Information Architecture',
      'User Interface',
    ],
    demo: 'https://www.taipeigolf.org.tw/',
    github: null,
    category: 'freelance',
    year: '外包專案',
    client: '台北市高爾夫協會',
  },
])
</script>

<style scoped>
.portfolio {
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

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

/* 大螢幕：3列佈局 */
@media (min-width: 1200px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 中等螢幕：2列佈局 */
@media (min-width: 768px) and (max-width: 1199px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.project-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.project-category {
  font-size: 1.1rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.project-content {
  padding: 1.5rem;
}

.project-header {
  margin-bottom: 1rem;
}

.project-content h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.project-year,
.project-company,
.project-client {
  background: #f8f9fa;
  color: #495057;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-company {
  background: #e8f5e8;
  color: #2d5a2d;
}

.project-client {
  background: #fff3cd;
  color: #856404;
}

.project-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tech-stack {
  margin-bottom: 1.5rem;
}

.tech-tag {
  display: inline-block;
  background: #e7f3ff;
  color: #0066cc;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

.btn-outline {
  background: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}

.btn-outline:hover {
  background: #007bff;
  color: white;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .project-links {
    flex-direction: column;
  }
}
</style>
