<template>
  <div class="experience">
    <div class="container">
      <header class="page-header">
        <h1>{{ t('experiencePageTitle') }}</h1>
        <p>{{ t('experiencePageSubtitle') }}</p>
      </header>

      <div class="experience-content">
        <section id="work-experience" class="work-experience">
          <div class="experience-timeline">
            <div 
              class="experience-item" 
              v-for="job in workExperience" 
              :key="job.id"
              :id="job.id === 2 ? 'tutorABC' : null"
            >
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

        <section id="education" class="education">
          <h2>{{ t('educationTitle') }}</h2>
          <div class="education-grid">
            <div class="education-card" v-for="edu in education" :key="edu.id">
              <h3 class="degree-title">
                <span class="degree-desktop">{{ edu.degree }}</span>
                <span class="degree-mobile" v-html="edu.degreeWithBreak"></span>
              </h3>
              <p class="school">{{ edu.school }}</p>
              <p class="period">{{ edu.period }}</p>
              <p class="description">{{ edu.description }}</p>
            </div>
          </div>
        </section>

        <section id="certifications" class="certifications">
          <h2>{{ t('certificationsTitle') }}</h2>
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
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useSEO } from '../composables/useSEO.js'

const { t } = useLanguage()

// SEO 設定
useSEO({
  title: 'Joe Chi-Boo - 工作經歷 | Experience',
  description: 'Joe Chi-Boo 工作經歷與教育背景，包括15年.NET開發經驗、資訊室主任職涯發展與相關證照資格。',
  keywords: 'Joe Chi-Boo, 工作經歷, Experience, .NET開發, 資訊室主任, 教育背景, 證照',
  ogTitle: 'Joe Chi-Boo - 工作經歷',
  ogDescription: '了解 Joe Chi-Boo 的專業經歷，從軟體開發到管理職的職涯發展歷程與專業成就。',
  twitterTitle: 'Joe Chi-Boo - 工作經歷',
  twitterDescription: '了解 Joe Chi-Boo 的專業經歷，從軟體開發到管理職的職涯發展歷程與專業成就。'
})

const workExperience = computed(() => [
  {
    id: 1,
    position: t('workExp1Position'),
    company: t('workExp1Company'),
    period: t('workExp1Period'),
    description: t('workExp1Description'),
    responsibilities: [
      t('workExp1Resp1'),
      t('workExp1Resp2'),
      t('workExp1Resp3'),
      t('workExp1Resp4'),
      t('workExp1Resp5'),
    ],
    technologies: [t('techDotNetMVC'), t('techSQLServer'), t('techMedicalInfoSys'), t('techSecurityMgmt'), t('techWindowsServer')],
  },
  {
    id: 2,
    position: t('workExp2Position'),
    company: t('workExp2Company'),
    period: t('workExp2Period'),
    description: t('workExp2Description'),
    responsibilities: [
      t('workExp2Resp1'),
      t('workExp2Resp2'),
      t('workExp2Resp3'),
      t('workExp2Resp4'),
    ],
    technologies: [t('techDotNetMVC'), t('techJQuery'), t('techEntityFramework'), t('techMSSQL'), t('techRedis')],
  },
  {
    id: 3,
    position: t('workExp3Position'),
    company: t('workExp3Company'),
    period: t('workExp3Period'),
    description: t('workExp3Description'),
    responsibilities: [
      t('workExp3Resp1'),
      t('workExp3Resp2'),
      t('workExp3Resp3'),
      t('workExp3Resp4'),
      t('workExp3Resp5'),
    ],
    technologies: [t('techDotNetMVC'), t('techCSharp'), t('techMSSQL'), t('techJavaScript'), t('techIIS')],
  },
  {
    id: 4,
    position: t('workExp4Position'),
    company: t('workExp4Company'),
    period: t('workExp4Period'),
    description: t('workExp4Description'),
    responsibilities: [
      t('workExp4Resp1'),
      t('workExp4Resp2'),
      t('workExp4Resp3'),
      t('workExp4Resp4'),
      t('workExp4Resp5'),
      t('workExp4Resp6'),
    ],
    technologies: [t('techCSharp'), t('techDotNetMVC'), t('techMSSQL'), t('techJavaScript')],
  },
])

const education = computed(() => [
  {
    id: 1,
    degree: t('edu1Degree'),
    degreeWithBreak: t('edu1DegreeWithBreak'),
    school: t('edu1School'),
    period: t('edu1Period'),
    description: t('edu1Description'),
  },
  {
    id: 2,
    degree: t('edu2Degree'),
    school: t('edu2School'),
    period: t('edu2Period'),
    description: t('edu2Description'),
  },
  {
    id: 3,
    degree: t('edu3Degree'),
    school: t('edu3School'),
    period: t('edu3Period'),
    description: t('edu3Description'),
  },
])

const certifications = computed(() => [
  {
    id: 1,
    name: t('cert1Name'),
    fullName: t('cert1FullName'),
    issuer: t('cert1Issuer'),
    category: t('cert1Category'),
    description: t('cert1Description'),
    date: t('cert1Date'),
  },
  {
    id: 2,
    name: t('cert2Name'),
    fullName: t('cert2FullName'),
    issuer: t('cert2Issuer'),
    category: t('cert2Category'),
    description: t('cert2Description'),
    date: t('cert2Date'),
  },
  {
    id: 3,
    name: t('cert3Name'),
    fullName: t('cert3FullName'),
    issuer: t('cert3Issuer'),
    category: t('cert3Category'),
    description: t('cert3Description'),
    date: t('cert3Date'),
  },
])
</script>

<style scoped>
.experience {
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

.experience-content section {
  background: var(--bg-white);
  border-radius: 10px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: var(--shadow-md);
}

.experience-content h2 {
  color: var(--color-text-primary);
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
  background: var(--color-primary);
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
  background: var(--color-primary);
  border-radius: 50%;
  border: 3px solid var(--bg-white);
  box-shadow: 0 0 0 3px var(--color-primary);
}

.experience-card {
  background: var(--bg-light);
  border-radius: 8px;
  padding: 2rem;
  margin-left: 1rem;
}

.experience-header {
  margin-bottom: 1.5rem;
}

.experience-header h3 {
  color: var(--color-text-primary);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.company {
  color: var(--color-primary);
  font-weight: 600;
  display: block;
  margin-bottom: 0.3rem;
}

.period {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.experience-description p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.responsibilities {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.responsibilities li {
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.responsibilities li::before {
  content: '▸';
  color: var(--color-primary);
  position: absolute;
  left: 0;
}

.technologies {
  margin-top: 1.5rem;
}

.tech-tag {
  display: inline-block;
  background: var(--bg-primary-light);
  color: var(--color-primary-dark);
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
  background: var(--bg-light);
  padding: 2rem;
  border-radius: 8px;
}

.education-card h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

/* 響應式教育背景標題 */
.degree-mobile {
  display: none;
}

.degree-desktop {
  display: inline;
}

.school {
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.period {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.description {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.cert-card {
  background: var(--bg-light);
  padding: 2rem;
  border-radius: 12px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border: 1px solid var(--border-color);
  position: relative;
}

.cert-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
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
  color: var(--color-text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
  min-width: 200px;
}

.cert-category {
  background: var(--gradient-primary);
  color: var(--color-white);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
}

.issuer {
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: left;
}

.cert-description {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding: 1rem;
  background: var(--bg-accent-light);
  border-radius: 8px;
  border-left: 3px solid var(--color-accent);
  text-align: left;
}

.date {
  color: var(--color-text-secondary);
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
  background: var(--bg-light);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
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
  box-shadow: var(--shadow-md);
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.category-icon {
  font-size: 2.5rem;
  filter: drop-shadow(var(--shadow-sm));
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
  color: var(--color-text-secondary);
  line-height: 1.6;
  position: relative;
  padding-left: 1.5rem;
  border-bottom: 1px solid var(--border-light);
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

  /* 手機版面教育背景標題處理 */
  .degree-desktop {
    display: none;
  }
  
  .degree-mobile {
    display: inline;
    line-height: 1.4;
  }
}
</style>
