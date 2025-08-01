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
          <h2>專業訓練與認證</h2>
          <div class="cert-grid">
            <div class="cert-card" v-for="cert in certifications" :key="cert.id">
              <div class="cert-main-header">
                <div class="cert-icon">📜</div>
                <h3 class="cert-title">{{ cert.name }}</h3>
                <div class="cert-category">{{ cert.category }}</div>
              </div>
              <p class="issuer">{{ cert.issuer }}</p>
              <p class="cert-description">{{ cert.description }}</p>
              <p class="date">{{ cert.date }}</p>
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
    company: '大安聯合醫事檢驗所',
    period: '2019年7月 - 現在',
    description: '負責醫檢所整體資訊系統規劃、管理與維護，確保醫療資訊系統穩定運行。',
    responsibilities: [
      '規劃和管理醫檢所資訊系統架構',
      '監督系統維護和資安管理',
      '協調跨部門資訊需求與專案執行',
      '評估和導入新技術解決方案',
      '管理資訊團隊並制定技術標準',
    ],
    technologies: ['.NET MVC', 'SQL Server', '醫療資訊系統', '資安管理', 'Windows Server'],
  },
  {
    id: 2,
    position: '研發工程師',
    company: 'TutorABC (上海/台灣)',
    period: '2016年6月 - 2019年7月',
    description: '負責電銷/客服CTI平台的研發工作，專注於提升系統效能。',
    responsibilities: [
      '開發和維護CTI電話平台功能',
      '優化即時監控戰情中心系統效能',
      '與產品團隊協作改善使用者體驗',
      '進行系統測試和品質保證',
    ],
    technologies: ['.NET MVC', 'jQuery', 'Entity Framework', 'MS SQL', 'Redis'],
  },
  {
    id: 3,
    position: 'IT工程師',
    company: '五甫科技 (上海)',
    period: '2015年8月 - 2016年6月',
    description: '負責企業資訊系統開發與維護，支援業務流程自動化需求。',
    responsibilities: [
      '開發企業內部管理系統',
      '維護和優化現有業務系統',
      '協助IT基礎設施建置',
      '提供技術支援和系統培訓',
      '參與業務流程分析和改善',
    ],
    technologies: ['.NET MVC', 'C#', 'MS SQL', 'JavaScript', 'IIS'],
  },
  {
    id: 4,
    position: '程式設計師',
    company: 'TOEIC - 忠欣/掌方科技',
    period: '2012年3月 - 2015年8月',
    description: '參與電商平台與相關行政流程開發，累積軟體開發基礎經驗。',
    responsibilities: [
      '開發維護測驗報名網站含商店街功能',
      '開發國際志工系統和報名平台',
      '實作資料處理和報表功能',
      '進行系統測試和除錯',
      '協助系統部署和維護',
      '開發獎學金申請系統',
    ],
    technologies: ['C#', '.NET MVC', 'MS SQL', 'JavaScript'],
  },
])

const education = ref([
  {
    id: 1,
    degree: '資訊科學碩士',
    school: '國立臺北教育大學',
    period: '2024 - 就讀中',
    description:
      '主修軟體工程、人工智慧等核心課程，論文方向：以醫學檢驗參考值異常為依據之潛在疾病風險預測模型研究。',
  },
  {
    id: 2,
    degree: '資訊工程學士',
    school: '國立臺北科技大學',
    period: '2018年 - 2022年',
    description: '主修軟體工程、資料結構、演算法等核心課程。',
  },
  {
    id: 3,
    degree: '高中學歷',
    school: '臺北市立木柵高工',
    period: '2015年 - 2018年',
    description: '理組背景，數學和物理基礎紮實，開始對程式設計產生興趣。',
  },
])

const certifications = ref([
  {
    id: 1,
    name: 'ISO/IEC 27001 Lead Auditor',
    fullName: 'Information Security Management Systems Lead Auditor Training Course',
    issuer: 'BSI 英國標準協會',
    category: '資訊安全',
    description: '資訊安全管理系統主導稽核員訓練課程，具備 ISO 27001 標準的深入了解與稽核能力',
  },
  {
    id: 2,
    name: 'ISO 14971:2019',
    fullName: '醫療器材風險管理訓練課程',
    issuer: '專業訓練機構',
    category: '醫療器材',
    description: '醫療器材風險管理國際標準訓練，專精於醫療器材全生命週期風險識別與管理',
  },
  {
    id: 3,
    name: 'ISO 13485:2016',
    fullName:
      'Medical Devices Quality Management System Internal Auditor Training Course (ISO 13485:2016)',
    issuer: 'BSI 英國標準協會',
    category: '品質管理',
    description: '醫療器材品質管理系統內部稽核員訓練，熱悉 ISO 13485 標準要求與稽核技巧',
  },
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  border-radius: 12px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border: 1px solid #dee2e6;
  position: relative;
}

.cert-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.cert-main-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.cert-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.cert-title {
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
  min-width: 200px;
}

.cert-category {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
}

.issuer {
  color: #007bff;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: left;
}

.cert-description {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 8px;
  border-left: 3px solid #667eea;
  text-align: left;
}

.date {
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.achievement-category {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #dee2e6;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.achievement-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--category-color);
}

.achievement-category:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.category-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.category-title {
  color: var(--category-color);
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
}

.achievement-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievement-item {
  padding: 0.8rem 0;
  color: #555;
  line-height: 1.6;
  position: relative;
  padding-left: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.achievement-item:last-child {
  border-bottom: none;
}

.achievement-item::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: var(--category-color);
  font-size: 0.8rem;
  top: 0.9rem;
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
