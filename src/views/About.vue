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
                <img src="/img/joechiboo.png" alt="Joe Chi-Boo 個人照片" class="profile-photo" />
              </div>
              <div class="basic-info">
                <h2>Joe, Chi-Boo</h2>
                <p class="role">資訊室主任</p>
                <div class="contact-info">
                  <p><strong>位置:</strong> 台灣、台北</p>
                  <p><strong>專長:</strong> 全端開發</p>
                  <p><strong>語言:</strong> 中文、英文</p>
                </div>
              </div>
            </div>

            <div class="philosophy-section">
              <h3>我的工程哲學</h3>

              <div class="philosophy-detail">
                <!-- 解決問題的三步驟 -->
                <div class="philosophy-card main-philosophy">
                  <div class="card-icon">🎯</div>
                  <h4>工程師的核心：解決問題</h4>
                  <div class="steps">
                    <div class="step">
                      <span class="step-number">01</span>
                      <div class="step-content">
                        <h5>面對</h5>
                        <p>
                          人們大多不喜好直視問題、避重就輕，因而造就決策失準。勇於面對問題是解決的第一步。
                        </p>
                      </div>
                    </div>
                    <div class="step">
                      <span class="step-number">02</span>
                      <div class="step-content">
                        <h5>發現/了解</h5>
                        <p>
                          減少「未知的未知」就可以讓能力越來越精煉。深入理解問題本質比急於解決更重要。
                        </p>
                      </div>
                    </div>
                    <div class="step">
                      <span class="step-number">03</span>
                      <div class="step-content">
                        <h5>PDCA</h5>
                        <p>制度化的概念可以確立目標、減少浪費。持續改進是工程師的核心素養。</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 學習態度 -->
                <div class="philosophy-card">
                  <div class="card-icon">🔥</div>
                  <h4>學習的藝術</h4>
                  <p class="card-description">
                    學生的本質是「<strong>熱忱、快速、持續學習</strong>」
                  </p>
                  <blockquote class="philosophy-quote">
                    "發現自己有著「三分鐘熱度」的特性，最近想到一個方法可以保持熱度——就是在三分鐘內完成任務！"
                  </blockquote>
                  <p class="scrum-note">
                    我很喜歡
                    <strong>Scrum 的精神</strong
                    >，設立階段性目標，努力衝刺。把大西瓜去皮切片，更利於獲得成就感。
                  </p>
                </div>

                <!-- 團隊協作 -->
                <div class="philosophy-card">
                  <div class="card-icon">🤝</div>
                  <h4>人是群居的生物</h4>
                  <p class="card-subtitle">每個小螺絲都至關重要</p>
                  <div class="collaboration-points">
                    <div class="collab-point">
                      <h5>內外協作</h5>
                      <p>
                        團隊合作不僅僅是內部，也必須和客戶合作。在缺乏溝通的狀況下，很難體會對方的感受。
                      </p>
                    </div>
                    <div class="collab-point">
                      <h5>雙向溝通</h5>
                      <p>溝通是雙向的，單面的你說我做容易產生許多問題。</p>
                    </div>
                    <div class="collab-point highlight">
                      <h5>信任建立</h5>
                      <p>初期的信任感建立相當重要，這是一切合作的基礎。</p>
                    </div>
                  </div>
                </div>

                <!-- 技術理念 -->
                <div class="philosophy-card">
                  <div class="card-icon">💡</div>
                  <h4>技術與人文</h4>
                  <p class="card-description">
                    我相信軟體開發不僅僅是寫程式碼，更是理解問題本質、設計解決方案的過程。
                  </p>
                  <ul class="beliefs">
                    <li>每個技術挑戰都是一次學習機會</li>
                    <li>每次團隊協作都是提升溝通能力的練習</li>
                    <li>技術服務於人，而非人服務於技術</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="skills-section">
          <h2>技能專長</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>前端開發</h3>
              <div class="skill-tags">
                <span class="skill-tag">jQuery</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">Bootstrap</span>
                <span class="skill-tag">Ajax</span>
                <span class="skill-tag">響應式設計</span>
              </div>
            </div>

            <div class="skill-category">
              <h3>後端開發</h3>
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
              <h3>移動端開發</h3>
              <div class="skill-tags">
                <span class="skill-tag">Cordova</span>
                <span class="skill-tag">Parse</span>
                <span class="skill-tag">Hybrid App</span>
                <span class="skill-tag">Mobile UI</span>
              </div>
            </div>

            <div class="skill-category">
              <h3>專案管理</h3>
              <div class="skill-tags">
                <span class="skill-tag">Scrum</span>
                <span class="skill-tag">BPM</span>
                <span class="skill-tag">敏捷開發</span>
                <span class="skill-tag">團隊協作</span>
              </div>
            </div>

            <div class="skill-category">
              <h3>系統管理</h3>
              <div class="skill-tags">
                <span class="skill-tag">Windows Server</span>
                <span class="skill-tag">IIS</span>
                <span class="skill-tag">資安管理</span>
                <span class="skill-tag">醫療資訊系統</span>
                <span class="skill-tag">系統架構</span>
              </div>
            </div>

            <div class="skill-category">
              <h3>數據處理 & 工具</h3>
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

            <div class="value-card">
              <div class="value-icon">⚙️</div>
              <h3>品質至上</h3>
              <p>坚持繭寫高品質程式碼，重視測試覆蓋和程式碼審查</p>
            </div>

            <div class="value-card">
              <div class="value-icon">🌱</div>
              <h3>成長心態</h3>
              <p>擁抱挑戰和變化，將困難視為成長的機會而非障礙</p>
            </div>
          </div>
        </section>

        <section class="highlights-section">
          <h2>技能亮點</h2>
          <div class="highlights-grid">
            <div class="highlight-item">
              <div class="highlight-icon">💻</div>
              <div class="highlight-content">
                <h3>.NET 生態系統專家</h3>
                <p class="highlight-years">15年經驗</p>
                <p class="highlight-desc">
                  從 .NET Framework 到 .NET Core，擁有完整的微軟技術栈開發經驗
                </p>
              </div>
            </div>

            <div class="highlight-item">
              <div class="highlight-icon">🌐</div>
              <div class="highlight-content">
                <h3>跨平台開發經驗</h3>
                <p class="highlight-years">Web · App · 系統整合</p>
                <p class="highlight-desc">具備全端開發能力，擅長不同平台間的技術整合與架構設計</p>
              </div>
            </div>

            <div class="highlight-item">
              <div class="highlight-icon">👥</div>
              <div class="highlight-content">
                <h3>團隊領導能力</h3>
                <p class="highlight-years">帶領 10 人團隊</p>
                <p class="highlight-desc">擁有實際管理經驗，擅長團隊協作、技術指導和專案管理</p>
              </div>
            </div>

            <div class="highlight-item">
              <div class="highlight-icon">🌏</div>
              <div class="highlight-content">
                <h3>跨國工作經驗</h3>
                <p class="highlight-years">台灣 · 上海 · 多地協作</p>
                <p class="highlight-desc">具備跨文化溝通能力，熟悉不同地區的工作文化與商業習慣</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.highlight-item {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.highlight-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
}

.highlight-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.highlight-content h3 {
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
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
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .highlight-item {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
  }

  .highlight-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .highlight-content h3 {
    font-size: 1.1rem;
  }
}
</style>
