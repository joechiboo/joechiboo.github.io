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
            <div class="image-placeholder">
              <span>{{ project.title }}</span>
            </div>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
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
              <a v-if="project.github" :href="project.github" class="btn btn-outline" target="_blank">
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
    title: 'Vue.js 個人網站',
    description: '使用 Vue 3 和 Vue Router 建立的響應式個人履歷網站，具備現代化設計和流暢的用戶體驗。',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'HTML5'],
    demo: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Todo 管理應用',
    description: '功能完整的待辦事項管理系統，支援任務分類、優先級設定和進度追蹤。',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    demo: '#',
    github: '#'
  },
  {
    id: 3,
    title: '電商網站前端',
    description: '現代化電商平台前端介面，包含商品展示、購物車和結帳功能。',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    demo: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'API 後端服務',
    description: 'RESTful API 服務，提供用戶認證、數據管理和第三方整合功能。',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    demo: null,
    github: '#'
  },
  {
    id: 5,
    title: '數據視覺化儀表板',
    description: '互動式數據分析儀表板，提供實時數據展示和多維度分析功能。',
    technologies: ['Vue.js', 'D3.js', 'Chart.js', 'Python'],
    demo: '#',
    github: '#'
  },
  {
    id: 6,
    title: '移動端應用',
    description: '跨平台移動應用，提供原生體驗和離線功能支援。',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'SQLite'],
    demo: null,
    github: '#'
  }
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
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  height: 200px;
  background: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  color: #666;
  font-size: 1.1rem;
  text-align: center;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
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