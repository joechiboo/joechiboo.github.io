<template>
  <div class="about">
    <div class="container">
      <header class="page-header">
        <h1>關於我</h1>
        <p>軟體工程師的成長歷程與人生哲學</p>
      </header>

      <div class="about-content">
        <section class="intro-section">
          <div class="intro-grid">
            <div class="profile-section">
              <div class="profile-image">
                <div class="image-placeholder">
                  <span>個人照片</span>
                </div>
              </div>
              <div class="basic-info">
                <h2>Joe, Chi-Boo</h2>
                <p class="role">軟體工程師 & 學生</p>
                <div class="contact-info">
                  <p><strong>位置:</strong> 台灣</p>
                  <p><strong>專長:</strong> 全端開發</p>
                  <p><strong>語言:</strong> 中文、英文</p>
                </div>
              </div>
            </div>
            
            <div class="philosophy-section">
              <h3>我的理念</h3>
              <blockquote>
                工程師的核心任務是「解決問題」。第一步是「面對」，人們大多不喜好直視問題、避重就輕。
              </blockquote>
              <p>
                我相信軟體開發不僅僅是寫程式碼，更是理解問題本質、設計解決方案的過程。
                每個技術挑戰都是一次學習機會，每次團隊協作都是提升溝通能力的練習。
              </p>
            </div>
          </div>
        </section>

        <section class="skills-section">
          <h2>技能專長</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>前端開發</h3>
              <div class="skill-tags">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">Sass</span>
                <span class="skill-tag">Tailwind CSS</span>
              </div>
            </div>
            
            <div class="skill-category">
              <h3>後端開發</h3>
              <div class="skill-tags">
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Express</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">Django</span>
                <span class="skill-tag">PostgreSQL</span>
                <span class="skill-tag">MongoDB</span>
                <span class="skill-tag">Redis</span>
                <span class="skill-tag">JWT</span>
              </div>
            </div>
            
            <div class="skill-category">
              <h3>開發工具</h3>
              <div class="skill-tags">
                <span class="skill-tag">Git</span>
                <span class="skill-tag">Docker</span>
                <span class="skill-tag">AWS</span>
                <span class="skill-tag">Linux</span>
                <span class="skill-tag">VS Code</span>
                <span class="skill-tag">Postman</span>
                <span class="skill-tag">Figma</span>
                <span class="skill-tag">Webpack</span>
              </div>
            </div>
          </div>
        </section>

        <section class="values-section">
          <h2>工作價值觀</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🎯</div>
              <h3>解決問題</h3>
              <p>專注於理解問題本質，提供有效且可維護的解決方案</p>
            </div>
            
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h3>團隊合作</h3>
              <p>重視溝通與協作，相信團隊的力量能創造更大的價值</p>
            </div>
            
            <div class="value-card">
              <div class="value-icon">📚</div>
              <h3>持續學習</h3>
              <p>保持對新技術的好奇心，持續提升專業技能和知識深度</p>
            </div>
            
            <div class="value-card">
              <div class="value-icon">💡</div>
              <h3>創新思維</h3>
              <p>勇於嘗試新方法，在既有框架中尋找創新的可能性</p>
            </div>
          </div>
        </section>

        <section class="journey-section">
          <h2>成長歷程</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3>學習階段</h3>
                <p>開始接觸程式設計，對軟體開發產生濃厚興趣</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3>實務練習</h3>
                <p>透過各種專案練習，累積實際開發經驗</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3>專業發展</h3>
                <p>持續精進技術能力，關注業界最新趨勢</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about {
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

.about-content section {
  background: white;
  border-radius: 10px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
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

.image-placeholder {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  margin: 0 auto;
}

.basic-info h2 {
  color: #333;
  margin-bottom: 0.5rem;
}

.role {
  color: #007bff;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.contact-info p {
  color: #666;
  margin-bottom: 0.5rem;
}

.philosophy-section h3 {
  color: #333;
  margin-bottom: 1.5rem;
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
.journey-section h2 {
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
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

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.75rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #007bff;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: #007bff;
  border-radius: 50%;
}

.timeline-content h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: #666;
  line-height: 1.6;
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
}
</style>