<template>
  <div class="experience">
    <div class="container">
      <header class="page-header">
        <h1>工作經歷</h1>
        <p>專業背景與技術成長歷程</p>
      </header>

      <div class="experience-content">
        <section class="work-experience">
          <h2>工作經驗</h2>
          <div class="experience-timeline">
            <div class="experience-item" v-for="job in workExperience" :key="job.id">
              <div class="timeline-dot"></div>
              <div class="experience-card">
                <div class="experience-header">
                  <h3>{{ job.position }}</h3>
                  <span class="company">{{ job.company }}</span>
                  <span class="period">{{ job.period }}</span>
                </div>
                <div class="experience-description">
                  <p>{{ job.description }}</p>
                  <ul class="responsibilities">
                    <li v-for="responsibility in job.responsibilities" :key="responsibility">
                      {{ responsibility }}
                    </li>
                  </ul>
                  <div class="technologies">
                    <span v-for="tech in job.technologies" :key="tech" class="tech-tag">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="education">
          <h2>教育背景</h2>
          <div class="education-grid">
            <div class="education-card" v-for="edu in education" :key="edu.id">
              <h3>{{ edu.degree }}</h3>
              <p class="school">{{ edu.school }}</p>
              <p class="period">{{ edu.period }}</p>
              <p class="description">{{ edu.description }}</p>
            </div>
          </div>
        </section>

        <section class="certifications">
          <h2>證照與認證</h2>
          <div class="cert-grid">
            <div class="cert-card" v-for="cert in certifications" :key="cert.id">
              <div class="cert-icon">📜</div>
              <h3>{{ cert.name }}</h3>
              <p class="issuer">{{ cert.issuer }}</p>
              <p class="date">{{ cert.date }}</p>
            </div>
          </div>
        </section>

        <section class="achievements">
          <h2>重要成就</h2>
          <div class="achievements-grid">
            <div class="achievement-card" v-for="achievement in achievements" :key="achievement.id">
              <div class="achievement-icon">🏆</div>
              <h3>{{ achievement.title }}</h3>
              <p>{{ achievement.description }}</p>
              <span class="achievement-date">{{ achievement.date }}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const workExperience = ref([
  {
    id: 1,
    position: '全端軟體工程師',
    company: '科技公司 A',
    period: '2023年 - 現在',
    description: '負責 Web 應用程式的前後端開發，與跨部門團隊合作完成多個重要專案。',
    responsibilities: [
      '開發和維護 Vue.js 前端應用程式',
      '設計和實作 RESTful API',
      '優化應用程式效能和使用者體驗',
      '參與系統架構設計和技術選型',
      '指導初級工程師並進行程式碼審查'
    ],
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    id: 2,
    position: '前端工程師',
    company: '新創公司 B',
    period: '2022年 - 2023年',
    description: '專注於前端開發，負責建立響應式網頁應用程式和使用者介面設計。',
    responsibilities: [
      '使用 React 開發 SPA 應用程式',
      '實作響應式設計和跨瀏覽器相容性',
      '與 UI/UX 設計師協作優化使用者體驗',
      '建立和維護組件庫',
      '進行前端效能優化'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Webpack']
  },
  {
    id: 3,
    position: '軟體開發實習生',
    company: '軟體公司 C',
    period: '2021年 - 2022年',
    description: '參與軟體開發專案，學習軟體工程實務和團隊協作。',
    responsibilities: [
      '協助開發小型功能模組',
      '進行軟體測試和 Bug 修復',
      '學習敏捷開發流程',
      '參與程式碼審查和技術討論'
    ],
    technologies: ['JavaScript', 'Python', 'MySQL', 'Git', 'Linux']
  }
])

const education = ref([
  {
    id: 1,
    degree: '資訊工程學士',
    school: '國立某某大學',
    period: '2018年 - 2022年',
    description: '主修軟體工程、資料結構、演算法等核心課程，專題研究 Web 開發技術。'
  },
  {
    id: 2,
    degree: '高中學歷',
    school: '某某高級中學',
    period: '2015年 - 2018年',
    description: '理組背景，數學和物理基礎紮實，開始對程式設計產生興趣。'
  }
])

const certifications = ref([
  {
    id: 1,
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: '2023年6月'
  },
  {
    id: 2,
    name: 'Vue.js Certification',
    issuer: 'Vue School',
    date: '2023年3月'
  },
  {
    id: 3,
    name: 'JavaScript Developer Certificate',
    issuer: 'freeCodeCamp',
    date: '2022年8月'
  }
])

const achievements = ref([
  {
    id: 1,
    title: '最佳新人獎',
    description: '在第一年工作中表現優異，獲得公司最佳新人獎殊榮',
    date: '2023年12月'
  },
  {
    id: 2,
    title: '專案效能優化',
    description: '成功將主要產品的載入時間減少40%，大幅提升使用者體驗',
    date: '2023年8月'
  },
  {
    id: 3,
    title: '開源貢獻者',
    description: '為多個開源專案貢獻程式碼，獲得社群認可',
    date: '2023年持續'
  }
])
</script>

<style scoped>
.experience {
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

.experience-content section {
  background: white;
  border-radius: 10px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.experience-content h2 {
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
}

.experience-timeline {
  position: relative;
  padding-left: 2rem;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 0.75rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #007bff;
}

.experience-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 1rem;
  width: 1rem;
  height: 1rem;
  background: #007bff;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #007bff;
}

.experience-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  margin-left: 1rem;
}

.experience-header {
  margin-bottom: 1.5rem;
}

.experience-header h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.company {
  color: #007bff;
  font-weight: 600;
  display: block;
  margin-bottom: 0.3rem;
}

.period {
  color: #666;
  font-size: 0.9rem;
}

.experience-description p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.responsibilities {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.responsibilities li {
  color: #555;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.responsibilities li::before {
  content: '▸';
  color: #007bff;
  position: absolute;
  left: 0;
}

.technologies {
  margin-top: 1.5rem;
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

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.education-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
}

.education-card h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.school {
  color: #007bff;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.period {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.description {
  color: #555;
  line-height: 1.6;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.cert-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

.cert-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cert-card h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.issuer {
  color: #007bff;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.date {
  color: #666;
  font-size: 0.9rem;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.achievement-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

.achievement-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.achievement-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.achievement-card p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.achievement-date {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .experience-content section {
    padding: 2rem;
  }
  
  .experience-timeline {
    padding-left: 1rem;
  }
  
  .experience-card {
    margin-left: 0.5rem;
  }
  
  .education-grid,
  .cert-grid,
  .achievements-grid {
    grid-template-columns: 1fr;
  }
}
</style>