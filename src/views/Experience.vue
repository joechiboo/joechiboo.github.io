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
    position: '資訊室主任',
    company: '大安聯合醫檢所',
    period: '2019年7月 - 現在',
    description: '負責醫檢所整體資訊系統規劃、管理與維護，確保醫療資訊系統穩定運行。',
    responsibilities: [
      '規劃和管理醫檢所資訊系統架構',
      '監督系統維護和資安管理',
      '協調跨部門資訊需求與專案執行',
      '評估和導入新技術解決方案',
      '管理資訊團隊並制定技術標準'
    ],
    technologies: ['.NET', 'SQL Server', '醫療資訊系統', '資安管理', 'Windows Server']
  },
  {
    id: 2,
    position: '研發工程師',
    company: 'TutorABC (台灣)',
    period: '2018年5月 - 2019年7月',
    description: '負責線上教育平台的研發工作，專注於提升學習體驗和系統效能。',
    responsibilities: [
      '開發和維護線上教學平台功能',
      '優化即時視訊教學系統效能',
      '實作學習管理系統新功能',
      '與產品團隊協作改善使用者體驗',
      '進行系統測試和品質保證'
    ],
    technologies: ['.NET MVC', 'jQuery', 'Entity Framework', 'SQL Server', 'Redis']
  },
  {
    id: 3,
    position: '研發工程師',
    company: 'TutorABC (上海)',
    period: '2016年6月 - 2018年5月',
    description: '參與國際線上教育平台開發，負責核心功能研發和系統優化。',
    responsibilities: [
      '開發跨平台線上教學應用',
      '實作即時通訊和視訊功能',
      '優化資料庫查詢效能',
      '參與微服務架構設計',
      '協助團隊技術決策和代碼審查'
    ],
    technologies: ['.NET', 'jQuery', 'NoSQL', 'Redis', 'WebRTC']
  },
  {
    id: 4,
    position: 'IT工程師',
    company: '五甫科技 (上海)',
    period: '2015年8月 - 2016年6月',
    description: '負責企業資訊系統開發與維護，支援業務流程自動化需求。',
    responsibilities: [
      '開發企業內部管理系統',
      '維護和優化現有業務系統',
      '協助IT基礎設施建置',
      '提供技術支援和系統培訓',
      '參與業務流程分析和改善'
    ],
    technologies: ['.NET', 'C#', 'SQL Server', 'JavaScript', 'IIS']
  },
  {
    id: 5,
    position: '程式設計師',
    company: 'TOEIC',
    period: '2012年3月 - 2015年8月',
    description: '參與教育測驗相關系統開發，累積軟體開發基礎經驗。',
    responsibilities: [
      '開發測驗管理系統功能',
      '實作資料處理和報表功能',
      '進行系統測試和除錯',
      '協助系統文件撰寫',
      '學習軟體開發最佳實務'
    ],
    technologies: ['C#', '.NET Framework', 'SQL Server', 'ASP.NET', 'JavaScript']
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