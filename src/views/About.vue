<template>
  <div class="about">
    <div class="container">
      <header class="page-header">
        <h1>{{ t('aboutPageTitle') }}</h1>
        <p>{{ t('aboutPageSubtitle') }}</p>
      </header>

      <div class="about-content">
        <section class="intro-section">
          <div class="intro-grid">
            <div class="profile-section">
              <div class="profile-image">
                <img src="/img/joechiboo.png" :alt="t('profileAlt')" class="profile-photo" />
              </div>
              <div class="basic-info">
                <h2>{{ t('profileName') }}</h2>
                <p class="role">{{ t('profileRole') }}</p>
                <div class="contact-info">
                  <p><strong>{{ t('profileLocation') }}</strong> {{ t('profileLocationValue') }}</p>
                  <p><strong>{{ t('profileSpecialty') }}</strong> {{ t('profileSpecialtyValue') }}</p>
                  <p><strong>{{ t('profileLanguage') }}</strong> {{ t('profileLanguageValue') }}</p>
                </div>
              </div>
            </div>

            <div class="philosophy-section">
              <h3>{{ t('myPhilosophy') }}</h3>

              <div class="philosophy-detail">
                <!-- 解決問題的三步驟 -->
                <div class="philosophy-card main-philosophy">
                  <div class="card-icon">🎯</div>
                  <h4>{{ t('engineeringCore') }}</h4>
                  <div class="steps">
                    <div class="step">
                      <span class="step-number">01</span>
                      <div class="step-content">
                        <h5>{{ t('stepFace') }}</h5>
                        <p>
                          {{ t('stepFaceDesc') }}
                        </p>
                      </div>
                    </div>
                    <div class="step">
                      <span class="step-number">02</span>
                      <div class="step-content">
                        <h5>{{ t('stepDiscover') }}</h5>
                        <p>
                          {{ t('stepDiscoverDesc') }}
                        </p>
                      </div>
                    </div>
                    <div class="step">
                      <span class="step-number">03</span>
                      <div class="step-content">
                        <h5>{{ t('stepPDCA') }}</h5>
                        <p>{{ t('stepPDCADesc') }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 學習態度 -->
                <div class="philosophy-card">
                  <div class="card-icon">🔥</div>
                  <h4>{{ t('learningArt') }}</h4>
                  <p class="card-description" v-html="t('learningEssence')">
                  </p>
                  <blockquote class="philosophy-quote">
                    "{{ t('learningQuote') }}"
                  </blockquote>
                  <p class="scrum-note" v-html="t('scrumNote')">
                  </p>
                </div>

                <!-- 團隊協作 -->
                <div class="philosophy-card">
                  <div class="card-icon">🤝</div>
                  <h4>{{ t('socialBeing') }}</h4>
                  <p class="card-subtitle">{{ t('smallScrewImportant') }}</p>
                  <div class="collaboration-points">
                    <div class="collab-point">
                      <h5>{{ t('internalExternalCollab') }}</h5>
                      <p>
                        {{ t('internalExternalCollabDesc') }}
                      </p>
                    </div>
                    <div class="collab-point">
                      <h5>{{ t('bidirectionalComm') }}</h5>
                      <p>{{ t('bidirectionalCommDesc') }}</p>
                    </div>
                    <div class="collab-point highlight">
                      <h5>{{ t('trustBuilding') }}</h5>
                      <p>{{ t('trustBuildingDesc') }}</p>
                    </div>
                  </div>
                </div>

                <!-- 技術理念 -->
                <div class="philosophy-card">
                  <div class="card-icon">💡</div>
                  <h4>{{ t('techAndHumanities') }}</h4>
                  <p class="card-description">
                    {{ t('techHumanitiesDesc') }}
                  </p>
                  <ul class="beliefs">
                    <li>{{ t('beliefTechChallenge') }}</li>
                    <li>{{ t('beliefTeamCollab') }}</li>
                    <li>{{ t('beliefTechServesPeople') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="skills-section">
          <h2>{{ t('skillsTitle') }}</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>{{ t('frontendDev') }}</h3>
              <div class="skill-tags">
                <span class="skill-tag">jQuery</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">Bootstrap</span>
                <span class="skill-tag">Ajax</span>
                <span class="skill-tag">{{ t('responsiveDesign') }}</span>
              </div>
            </div>

            <div class="skill-category">
              <h3>{{ t('backendDev') }}</h3>
              <div class="skill-tags">
                <span class="skill-tag">.NET MVC</span>
                <span class="skill-tag">C#</span>
                <span class="skill-tag">ASP.NET</span>
                <span class="skill-tag">Entity Framework</span>
                <span class="skill-tag">SQL Server</span>
                <span class="skill-tag">NoSQL</span>
                <span class="skill-tag">Redis</span>
                <span class="skill-tag">WebAPI</span>
              </div>
            </div>

            <div class="skill-category">
              <h3>{{ t('mobileDev') }}</h3>
              <div class="skill-tags">
                <span class="skill-tag">Cordova</span>
                <span class="skill-tag">Parse</span>
                <span class="skill-tag">Hybrid App</span>
                <span class="skill-tag">Mobile UI</span>
              </div>
            </div>

            <div class="skill-category">
              <h3>{{ t('projectManagement') }}</h3>
              <div class="skill-tags">
                <span class="skill-tag">Scrum</span>
                <span class="skill-tag">BPM</span>
                <span class="skill-tag">{{ t('agileDev') }}</span>
                <span class="skill-tag">{{ t('teamCollaboration') }}</span>
              </div>
            </div>

            <div class="skill-category">
              <h3>{{ t('systemAdmin') }}</h3>
              <div class="skill-tags">
                <span class="skill-tag">Windows Server</span>
                <span class="skill-tag">IIS</span>
                <span class="skill-tag">{{ t('securityManagement') }}</span>
                <span class="skill-tag">{{ t('medicalInfoSystem') }}</span>
                <span class="skill-tag">{{ t('systemArchitecture') }}</span>
              </div>
            </div>

            <div class="skill-category">
              <h3>{{ t('dataToolsTitle') }}</h3>
              <div class="skill-tags">
                <span class="skill-tag">Git</span>
                <span class="skill-tag">Azure DevOps</span>
                <span class="skill-tag">Docker</span>
                <span class="skill-tag">Postman</span>
                <span class="skill-tag">Visual Studio</span>
                <span class="skill-tag">VS Code</span>
                <span class="skill-tag">SSMS</span>
                <span class="skill-tag">Slack</span>
              </div>
            </div>
          </div>
        </section>

        <section class="values-section">
          <h2>{{ t('workValuesTitle') }}</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🎯</div>
              <h3>{{ t('problemSolving') }}</h3>
              <p>{{ t('problemSolvingDesc') }}</p>
            </div>

            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h3>{{ t('teamworkValue') }}</h3>
              <p>{{ t('teamworkValueDesc') }}</p>
            </div>

            <div class="value-card">
              <div class="value-icon">📚</div>
              <h3>{{ t('continuousLearningValue') }}</h3>
              <p>{{ t('continuousLearningValueDesc') }}</p>
            </div>

            <div class="value-card">
              <div class="value-icon">💡</div>
              <h3>{{ t('innovativeThinking') }}</h3>
              <p>{{ t('innovativeThinkingDesc') }}</p>
            </div>

            <div class="value-card">
              <div class="value-icon">⚙️</div>
              <h3>{{ t('qualityFirst') }}</h3>
              <p>{{ t('qualityFirstDesc') }}</p>
            </div>

            <div class="value-card">
              <div class="value-icon">🌱</div>
              <h3>{{ t('growthMindset') }}</h3>
              <p>{{ t('growthMindsetDesc') }}</p>
            </div>
          </div>
        </section>

        <section class="highlights-section">
          <h2>{{ t('skillHighlightsTitle') }}</h2>
          <div class="highlights-grid">
            <div class="highlight-item">
              <div class="highlight-icon">💻</div>
              <div class="highlight-content">
                <h3 v-html="t('dotnetExpert')"></h3>
                <p class="highlight-years">{{ t('dotnetExpertYears') }}</p>
                <p class="highlight-desc">
                  {{ t('dotnetExpertDesc') }}
                </p>
              </div>
            </div>

            <div class="highlight-item">
              <div class="highlight-icon">🌐</div>
              <div class="highlight-content">
                <h3 v-html="t('crossPlatformDev')"></h3>
                <p class="highlight-years">{{ t('crossPlatformDevYears') }}</p>
                <p class="highlight-desc">{{ t('crossPlatformDevDesc') }}</p>
              </div>
            </div>

            <div class="highlight-item">
              <div class="highlight-icon">👥</div>
              <div class="highlight-content">
                <h3>{{ t('teamLeadership') }}</h3>
                <p class="highlight-years">{{ t('teamLeadershipYears') }}</p>
                <p class="highlight-desc">{{ t('teamLeadershipDesc') }}</p>
              </div>
            </div>

            <div class="highlight-item">
              <div class="highlight-icon">🌏</div>
              <div class="highlight-content">
                <h3>{{ t('internationalExp') }}</h3>
                <p class="highlight-years">{{ t('internationalExpYears') }}</p>
                <p class="highlight-desc">{{ t('internationalExpDesc') }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()
</script>

<style scoped>
.about {
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

.about-content section {
  background: var(--bg-white);
  border-radius: 10px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: var(--shadow-md);
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: start;
}

.profile-section {
  text-align: center;
}

.profile-image {
  margin-bottom: 2rem;
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-primary);
  box-shadow: var(--shadow-lg);
  margin: 0 auto;
}

.image-placeholder {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: var(--bg-lighter);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  margin: 0 auto;
}

.basic-info h2 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.role {
  color: #007bff;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.contact-info {
  text-align: left;
}

.contact-info p {
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
}

.philosophy-section h3 {
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
}

.philosophy-detail {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.philosophy-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.main-philosophy {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 1px solid #dee2e6;
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.philosophy-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-number {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.step-content h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.card-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.philosophy-quote {
  background: #e7f3ff;
  border-left: 4px solid #007bff;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  font-style: italic;
  color: #333;
  border-radius: 0 8px 8px 0;
}

.scrum-note {
  margin-top: 1rem;
  color: #555;
  line-height: 1.6;
  font-size: 0.95rem;
}

.card-subtitle {
  font-size: 1rem;
  color: #6c757d;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.collaboration-points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.collab-point {
  padding: 1rem;
  border-radius: 8px;
  background: #f8f9fa;
  border-left: 3px solid #dee2e6;
}

.collab-point.highlight {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-left-color: #2196f3;
}

.collab-point h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.collab-point p {
  color: #555;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

.beliefs {
  list-style: none;
  padding: 0;
  margin: 0;
}

.beliefs li {
  padding: 0.5rem 0;
  color: #555;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.6;
}

.beliefs li::before {
  content: '▶';
  color: #007bff;
  position: absolute;
  left: 0;
  font-size: 0.8rem;
}

blockquote {
  border-left: 4px solid #007bff;
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: #555;
  font-size: 1.1rem;
}

.skills-section h2,
.values-section h2,
.highlights-section h2 {
  color: var(--color-text-primary);
  margin-bottom: 2rem;
  text-align: center;
}

/* 深色模式下這些標題更亮 */
[data-theme="dark"] .skills-section h2,
[data-theme="dark"] .values-section h2,
[data-theme="dark"] .highlights-section h2 {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

/* 深色模式下資訊室主任使用橘紅色 */
[data-theme="dark"] .role {
  color: #ff6b35;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

/* 大螢幕優化：限制最大3列 */
@media (min-width: 1200px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 中等螢幕：2列佈局 */
@media (min-width: 768px) and (max-width: 1199px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.skill-category {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
}

.skill-category h3 {
  color: #333;
  margin-bottom: 1rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #e7f3ff;
  color: #0066cc;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  text-align: center;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.value-card p {
  color: #666;
  line-height: 1.6;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* 日間模式（預設） - 使用更高的特異性 */
.about .highlights-section .highlight-item {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%) !important;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  min-width: 0; /* 防止內容撐開容器 */
  max-width: 100%; /* 限制最大寬度 */
  overflow: hidden; /* 隱藏溢出內容 */
}

.about .highlights-section .highlight-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12) !important;
}

/* 深色模式下的highlight-item - 使用更高的特異性 */
[data-theme="dark"] .about .highlights-section .highlight-item {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%) !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;
}

[data-theme="dark"] .about .highlights-section .highlight-item:hover {
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4) !important;
}


.highlight-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.highlight-content {
  flex: 1;
  min-width: 0; /* 確保可以縮小 */
  overflow: hidden; /* 防止內容溢出 */
}

.highlight-content h3 {
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  word-wrap: break-word; /* 長文字自動換行 */
  hyphens: auto; /* 自動斷字 */
  overflow-wrap: break-word; /* 強制換行 */
  line-height: 1.3; /* 調整行高 */
}

/* 深色模式下的文字顏色 - 使用更高的特異性 */
[data-theme="dark"] .about .highlights-section .highlight-content h3 {
  color: #e2e8f0 !important;
}

[data-theme="dark"] .about .highlights-section .highlight-desc {
  color: #a0aec0 !important;
}

[data-theme="dark"] .about .highlights-section .highlight-years {
  background: rgba(255, 107, 53, 0.2) !important;
  color: #ff6b35 !important;
}

.highlight-years {
  color: #007bff;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  background: rgba(0, 123, 255, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  display: inline-block;
}

.highlight-desc {
  color: #555;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .intro-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .about-content section {
    padding: 2rem;
  }

  .philosophy-detail {
    gap: 1rem;
  }

  .philosophy-card {
    padding: 1rem;
  }

  .step {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .step-number {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }

  .card-icon {
    font-size: 1.5rem;
  }

  .philosophy-card h4 {
    font-size: 1.2rem;
  }

  .collaboration-points {
    gap: 0.5rem;
  }

  .collab-point {
    padding: 0.8rem;
  }

  .collab-point h5 {
    font-size: 0.95rem;
  }

  .beliefs li {
    font-size: 0.9rem;
    padding: 0.3rem 0;
  }

  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

/* 手機版 */
@media (max-width: 480px) {
  .highlights-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  body .about .highlights-section .highlight-item {
    padding: 1.5rem 1rem !important;
    flex-direction: column !important;
    text-align: center !important;
    align-items: center !important;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%) !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08) !important;
  }
  
  /* 手機版深色模式 */
  body[data-theme="dark"] .about .highlights-section .highlight-item {
    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%) !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3) !important;
  }

  .highlight-icon {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
    margin-top: 0;
  }

  .highlight-content {
    width: 100%;
  }

  .highlight-content h3 {
    font-size: 1.1rem;
    line-height: 1.3;
    margin-bottom: 0.8rem;
  }

  .highlight-years {
    font-size: 0.85rem;
    padding: 0.25rem 0.6rem;
    margin-bottom: 0.6rem;
    display: inline-block;
  }

  .highlight-desc {
    font-size: 0.9rem;
    line-height: 1.5;
  }
}
</style>
