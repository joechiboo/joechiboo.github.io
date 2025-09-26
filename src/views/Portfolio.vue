<template>
  <div class="portfolio">
    <div class="container">
      <header class="page-header">
        <h1>{{ t('portfolioTitle') }}</h1>
        <p>{{ t('portfolioSubtitle') }}</p>
      </header>

      <div class="portfolio-grid">
        <div class="project-card" v-for="project in projects" :key="project.id" @click="handleCardClick(project)">
          <div class="project-image">
            <div class="project-icon">
              <span v-if="project.category === 'web'">🌐</span>
              <span v-else-if="project.category === 'enterprise'">🏢</span>
              <span v-else-if="project.category === 'creative'">🎨</span>
              <span v-else-if="project.category === 'freelance'">🤝</span>
              <span v-else>💻</span>
            </div>
            <div class="project-category">
              <span v-if="project.category === 'web'">{{ t('webDev') }}</span>
              <span v-else-if="project.category === 'enterprise'">{{ t('enterprise') }}</span>
              <span v-else-if="project.category === 'creative'">{{ t('creative') }}</span>
              <span v-else-if="project.category === 'freelance'">{{ t('freelance') }}</span>
              <span v-else>{{ t('tech') }}</span>
            </div>
          </div>
          <div class="project-content">
            <div class="project-header">
              <h3>{{ t(project.titleKey) }}</h3>
              <div class="project-meta">
                <span v-if="project.year" class="project-year">{{ project.year }}</span>
                <span v-if="project.yearKey" class="project-year">{{ t(project.yearKey) }}</span>
                <span v-if="project.createdAt && getRelativeTimeDisplay(project.createdAt)" class="project-time">{{ getRelativeTimeDisplay(project.createdAt) }}</span>
                <span v-if="project.companyKey" class="project-company">{{
                  t(project.companyKey)
                }}</span>
                <span v-if="project.clientKey" class="project-client">{{
                  t(project.clientKey)
                }}</span>
              </div>
            </div>
            <p>{{ t(project.descriptionKey) }}</p>
            <div class="tech-stack">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="project-links">
              <a
                v-if="project.demo"
                :href="project.demo"
                :class="project.id === 5 ? 'btn btn-special' : 'btn btn-primary'"
                target="_blank"
                @click.stop="openDemo(project)"
              >
                {{ project.id === 5 ? t('thisWebsite') : t('demo') }}
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                class="btn btn-outline"
                target="_blank"
                @click.stop
              >
                {{ t('github') }}
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
import { useLanguage } from '../composables/useLanguage.js'
import { useSEO } from '../composables/useSEO.js'
import { useTimeDisplay } from '../composables/useTimeDisplay.js'

const { t } = useLanguage()
const { getRelativeTimeDisplay } = useTimeDisplay()

// SEO 設定
useSEO({
  title: 'Joe Chi-Boo - 技術作品集 | Portfolio',
  description: 'Joe Chi-Boo 技術作品集頁面，展示各種 Web 開發專案包括 Vue.js、.NET、JavaScript 等技術實作案例。',
  keywords: 'Joe Chi-Boo, 作品集, Portfolio, Vue.js, .NET, JavaScript, Web Development, 前端開發',
  ogTitle: 'Joe Chi-Boo - 技術作品集',
  ogDescription: '探索 Joe Chi-Boo 的技術作品集，包含多個 Web 開發專案與創意實作案例。',
  twitterTitle: 'Joe Chi-Boo - 技術作品集',
  twitterDescription: '探索 Joe Chi-Boo 的技術作品集，包含多個 Web 開發專案與創意實作案例。'
})

const handleCardClick = (project) => {
  if (project.demo) {
    window.open(project.demo, '_blank')
  }
}

const openDemo = (project) => {
  window.open(project.demo, '_blank')
}

const projects = ref([
  {
    id: 12,
    titleKey: 'project12Title',
    descriptionKey: 'project12Description',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PWA', '生產力工具'],
    demo: 'https://joechiboo.github.io/Pomodoro/',
    github: 'https://github.com/joechiboo/Pomodoro',
    category: 'freelance',
    year: '2025',
    createdAt: '2025-09-26T11:47:49Z',
  },
  {
    id: 11,
    titleKey: 'project11Title',
    descriptionKey: 'project11Description',
    technologies: ['Vue.js', 'PWA', 'Responsive Design', 'JavaScript', 'CSS3', '健康應用'],
    demo: 'https://joechiboo.github.io/CyclePulse/',
    github: 'https://github.com/joechiboo/CyclePulse',
    category: 'creative',
    year: '2025',
    createdAt: '2025-09-23T23:13:17Z',
  },
  {
    id: 10,
    titleKey: 'project10Title',
    descriptionKey: 'project10Description',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'PWA', '健康應用'],
    demo: 'https://joechiboo.github.io/water-tracker/',
    github: 'https://github.com/joechiboo/water-tracker',
    category: 'creative',
    year: '2025',
    createdAt: '2025-09-22T12:45:00Z',
  },
  {
    id: 9,
    titleKey: 'project9Title',
    descriptionKey: 'project9Description',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'GitHub Pages', '教育應用'],
    demo: 'https://joechiboo.github.io/CharMon/',
    github: 'https://github.com/joechiboo/CharMon',
    category: 'creative',
    year: '2025',
    createdAt: '2025-09-20T07:48:03Z',
  },
  {
    id: 8,
    titleKey: 'project8Title',
    descriptionKey: 'project8Description',
    technologies: ['Vue.js', 'TypeScript', 'CSS3', 'GitHub Pages'],
    demo: 'https://joechiboo.github.io/ZebraSite/',
    github: 'https://github.com/joechiboo/ZebraSite',
    category: 'enterprise',
    year: '2025',
    companyKey: 'project8Company',
    createdAt: '2025-08-30T13:52:35Z',
  },
  {
    id: 7,
    titleKey: 'project7Title',
    descriptionKey: 'project7Description',
    technologies: ['Vue.js', 'TypeScript', 'CSS3', 'GitHub Pages'],
    demo: 'https://joechiboo.github.io/uclcloud/',
    github: 'https://github.com/joechiboo/uclcloud',
    category: 'enterprise',
    year: '2025',
    companyKey: 'project7Company',
    createdAt: '2025-08-06T08:34:43Z',
  },
  {
    id: 6,
    titleKey: 'project6Title',
    descriptionKey: 'project6Description',
    technologies: ['HTML', 'JavaScript', 'CSS3'],
    demo: 'https://joechiboo.github.io/jiayi/',
    github: 'https://github.com/joechiboo/jiayi',
    category: 'creative',
    year: '2025',
    createdAt: '2025-08-05T01:06:32Z',
  },
  {
    id: 5,
    titleKey: 'project5Title',
    descriptionKey: 'project5Description',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'GitHub Pages', 'Responsive Design'],
    demo: window.location.origin,
    github: 'https://github.com/joechiboo/joechiboo.github.io',
    category: 'web',
    year: '2025',
    createdAt: '2025-08-01T23:41:43Z',
  },
  {
    id: 4,
    titleKey: 'project4Title',
    descriptionKey: 'project4Description',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'GitHub Pages'],
    demo: 'https://joechiboo.github.io/bordeaux-ii/',
    github: 'https://github.com/joechiboo/bordeaux-ii',
    category: 'web',
    year: '2024',
  },
  {
    id: 3,
    titleKey: 'project3Title',
    descriptionKey: 'project3Description',
    technologies: [
      'Web Development',
      'Database Management',
      'User Authentication',
      'Google Analytics',
    ],
    demo: 'https://www.examservice.com.tw/',
    github: null,
    category: 'enterprise',
    yearKey: 'project3Year',
    companyKey: 'project3Company',
  },
  {
    id: 2,
    titleKey: 'project2Title',
    descriptionKey: 'project2Description',
    technologies: ['Project Planning', 'Creative Design', 'Google Slides', 'Presentation'],
    demo: 'https://docs.google.com/presentation/d/1o8wMB3w1GFzAHgo4Aj92EPqpsxqORiLyoJ8CbuIWWW0/edit?slide=id.p4#slide=id.p4',
    github: null,
    category: 'creative',
  },
  {
    id: 1,
    titleKey: 'project1Title',
    descriptionKey: 'project1Description',
    technologies: [
      'Web Development',
      'Content Management',
      'Information Architecture',
      'User Interface',
    ],
    demo: 'https://www.taipeigolf.org.tw/',
    github: null,
    category: 'freelance',
    yearKey: 'project1Year',
    clientKey: 'project1Client',
  },
])
</script>

<style scoped>
.portfolio {
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

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* 平板尺寸：3列佈局 */
@media (max-width: 1024px) and (min-width: 769px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 中等螢幕：2列佈局 */
@media (min-width: 481px) and (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.project-card {
  background: var(--bg-white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base);
  display: flex;
  flex-direction: column;
  cursor: pointer;
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
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-header {
  margin-bottom: 1rem;
}

.project-content h3 {
  color: var(--color-text-primary);
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
  background: var(--bg-lighter);
  color: var(--color-text-secondary);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-company {
  background: #10b981;
  color: white;
}

.project-client {
  background: #f59e0b;
  color: white;
}

.project-time {
  background: #8b5cf6;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
}

.project-content p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
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

/* 深色模式下的tech-tag顏色 */
[data-theme='dark'] .tech-tag {
  background: #1e3a8a;
  color: #bfdbfe;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: auto;
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
  width: 100px;
  text-align: center;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

/* 深色模式下的按鈕顏色 */
[data-theme='dark'] .btn-primary {
  background: #1d4ed8;
  color: white;
}

[data-theme='dark'] .btn-primary:hover {
  background: #1e40af;
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

/* 深色模式下的outline按鈕 */
[data-theme='dark'] .btn-outline {
  color: #60a5fa;
  border: 2px solid #60a5fa;
}

[data-theme='dark'] .btn-outline:hover {
  background: #60a5fa;
  color: #1a202c;
}

.btn-special {
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  color: white;
  position: relative;
  overflow: hidden;
}

.btn-special:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);
}

.btn-special::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-special:hover::before {
  left: 100%;
}

@media (max-width: 480px) {
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
