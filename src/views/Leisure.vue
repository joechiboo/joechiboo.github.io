<template>
  <div class="leisure">
    <div class="container">
      <header class="page-header">
        <div class="profile-photo-section">
          <div class="profile-image">
            <img src="/img/joechiboo.png" alt="Joe Chi-Boo 個人照片" class="profile-photo" />
          </div>
          <div class="profile-intro">
            <h1>休閒生活</h1>
            <p>平衡工作與生活的藝術</p>
            <p class="photo-caption">享受創作時光，在藝術中找到靈感</p>
          </div>
        </div>
      </header>

      <div class="leisure-content">
        <section class="hobbies-grid">
          <div class="hobby-card" v-for="hobby in hobbies" :key="hobby.id">
            <div class="hobby-icon">{{ hobby.icon }}</div>
            <h2>{{ hobby.title }}</h2>
            <p class="hobby-description">{{ hobby.description }}</p>

            <div class="hobby-details">
              <h4>為什麼喜歡：</h4>
              <p>{{ hobby.reason }}</p>

              <h4>相關經驗：</h4>
              <ul>
                <li v-for="experience in hobby.experiences" :key="experience">
                  {{ experience }}
                </li>
              </ul>

              <div class="hobby-skills" v-if="hobby.skills">
                <h4>相關技能：</h4>
                <div class="skill-tags">
                  <span v-for="skill in hobby.skills" :key="skill" class="skill-tag">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="gallery-section">
          <h2>創作作品集</h2>
          <p class="gallery-intro">以下是一些個人創作和興趣活動的記錄</p>

          <div class="gallery-grid">
            <div
              class="gallery-item"
              v-for="item in galleryItems"
              :key="item.id"
              @click="openLightbox(item)"
            >
              <div class="gallery-image">
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.title"
                  class="gallery-photo"
                  loading="lazy"
                />
                <div v-else class="image-placeholder">
                  <span>{{ item.type }}</span>
                </div>
                <div class="gallery-overlay">
                  <span class="view-icon">🔍</span>
                  <span class="view-text">點擊查看</span>
                </div>
              </div>
              <div class="gallery-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <span class="gallery-date">{{ item.date }}</span>
              </div>
            </div>
          </div>

          <!-- 燈箱模態框 -->
          <div v-if="lightboxItem" class="lightbox-overlay" @click="closeLightbox">
            <div class="lightbox-content" @click.stop>
              <button class="lightbox-close" @click="closeLightbox">&times;</button>
              <img
                v-if="lightboxItem.image"
                :src="lightboxItem.image"
                :alt="lightboxItem.title"
                class="lightbox-image"
              />
              <div class="lightbox-info">
                <h3>{{ lightboxItem.title }}</h3>
                <p>{{ lightboxItem.description }}</p>
                <span class="lightbox-date">{{ lightboxItem.date }}</span>
              </div>
            </div>
          </div>
        </section>

        <section class="balance-section">
          <h2>工作與生活的平衡</h2>
          <div class="balance-content">
            <div class="balance-text">
              <p>
                我相信優秀的軟體工程師不只是技術專家，更是一個全面發展的人。
                透過多元化的興趣愛好，我能夠：
              </p>
              <ul class="balance-benefits">
                <li>培養創意思維，在程式設計中找到新的靈感</li>
                <li>透過藝術創作訓練細緻觀察力和美感</li>
                <li>運動讓我保持健康的身體和清晰的思維</li>
                <li>音樂提升我的專注力和對節奏的敏感度</li>
                <li>多元化的經驗讓我更能理解不同使用者的需求</li>
              </ul>
            </div>

            <div class="balance-quotes">
              <blockquote>
                "創意來自於不同領域的碰撞，技術與藝術的結合往往能產生最驚艷的作品。"
              </blockquote>
              <blockquote>"健康的身心是持續創造的基礎，工作效率與生活品質同等重要。"</blockquote>
            </div>
          </div>
        </section>

        <section class="future-goals">
          <h2>未來目標</h2>
          <div class="goals-grid">
            <div class="goal-card">
              <div class="goal-icon">🎨</div>
              <h3>藝術創作</h3>
              <p>計劃舉辦個人畫展，將技術與藝術結合創作數位藝術作品</p>
            </div>

            <div class="goal-card">
              <div class="goal-icon">🏃‍♂️</div>
              <h3>運動挑戰</h3>
              <p>參加馬拉松比賽，挑戰自己的耐力極限</p>
            </div>

            <div class="goal-card">
              <div class="goal-icon">🎵</div>
              <h3>音樂製作</h3>
              <p>學習音樂製作軟體，創作屬於自己的音樂作品</p>
            </div>

            <div class="goal-card">
              <div class="goal-icon">✍️</div>
              <h3>知識分享</h3>
              <p>透過部落格分享技術學習心得與生活感悟</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 燈箱功能
const lightboxItem = ref(null)

const openLightbox = (item) => {
  lightboxItem.value = item
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxItem.value = null
  document.body.style.overflow = 'auto'
}

const hobbies = ref([
  {
    id: 1,
    icon: '🎨',
    title: '繪畫',
    description: '透過畫筆記錄生活，用色彩表達情感',
    reason:
      '繪畫讓我能夠靜下心來觀察世界的細節，同時也是一種很好的情緒表達方式。在繁忙的程式開發工作中，繪畫為我提供了完全不同的思維模式。',
    experiences: [
      '參加過多次本地藝術社團活動',
      '完成超過50幅素描和水彩作品',
      '曾參與社區藝術展覽',
      '定期參加戶外寫生活動',
    ],
    skills: ['素描', '水彩', '數位繪圖', '色彩理論', '構圖設計'],
  },
  {
    id: 2,
    icon: '✨',
    title: '創作',
    description: '發揮想像力，創造有意思的作品和想法',
    reason:
      '創作讓我能夠將技術知識與創意思維結合，經常會有「原來還可以這樣做」的驚喜發現。這種跨領域的思考方式對我的程式設計工作也很有幫助。',
    experiences: [
      '設計並製作過多個手工藝品',
      '創作過短篇小說和詩歌',
      '參與創客空間的 DIY 專案',
      '組織過創意工作坊',
    ],
    skills: ['手工藝', '創意寫作', 'DIY製作', '設計思維', '專案規劃'],
  },
  {
    id: 3,
    icon: '🏃‍♂️',
    title: '運動',
    description: '保持健康體魄，挑戰自我極限',
    reason:
      '運動不只是鍛鍊身體，更是訓練意志力和持續力。長跑讓我學會堅持，團體運動教會我合作，這些都是程式設計師需要的重要品質。',
    experiences: [
      '定期參加半程馬拉松比賽',
      '籃球校隊成員經驗',
      '登山社活動參與者',
      '游泳課程認證教練',
    ],
    skills: ['長跑', '籃球', '游泳', '登山', '體能訓練'],
  },
  {
    id: 4,
    icon: '🎵',
    title: '音樂',
    description: '用旋律豐富生活，用節奏調節心情',
    reason:
      '音樂是另一種程式語言，有自己的邏輯和結構。學習音樂讓我對節奏和模式有更敏銳的感覺，這在寫程式碼時也會體現出來。',
    experiences: [
      '學習鋼琴超過8年',
      '參加過校園音樂會演出',
      '組過業餘樂團擔任鍵盤手',
      '嘗試音樂創作和編曲',
    ],
    skills: ['鋼琴演奏', '音樂理論', '編曲', '音樂軟體操作'],
  },
])

const galleryItems = ref([
  {
    id: 1,
    type: '繪畫作品',
    title: 'Practice Drawing #5',
    description: '繪畫練習作品，展現對線條和陰影的探索',
    date: '2023年11月',
    image: 'http://joechiboo.azurewebsites.net/img/drawsomething/partice-5.png'
  },
  {
    id: 2,
    type: '繪畫作品',
    title: 'Practice Drawing #4',
    description: '持續練習中的繪畫作品，記錄成長歷程',
    date: '2023年10月',
    image: 'http://joechiboo.azurewebsites.net/img/drawsomething/partice-4.png'
  },
  {
    id: 3,
    type: '繪畫作品',
    title: 'Practice Drawing #3',
    description: '早期練習作品，展現對藝術的熱愛與投入',
    date: '2023年9月',
    image: 'http://joechiboo.azurewebsites.net/img/drawsomething/partice-3.png'
  },
  {
    id: 4,
    type: '繪畫作品',
    title: 'Practice Drawing #1',
    description: '繪畫旅程的起點，記錄初次嘗試的珍貴時光',
    date: '2023年8月',
    image: 'http://joechiboo.azurewebsites.net/img/drawsomething/partice-1.png'
  },
  {
    id: 5,
    type: '繪畫作品',
    title: 'Practice Drawing #2',
    description: '持續探索不同技法與風格的創作實驗',
    date: '2023年8月',
    image: 'http://joechiboo.azurewebsites.net/img/drawsomething/partice-2.png'
  },
])
</script>

<style scoped>
.leisure {
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
  margin-bottom: 4rem;
}

.profile-photo-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 800px;
  margin: 0 auto;
}

.profile-image {
  flex-shrink: 0;
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.profile-photo:hover {
  transform: scale(1.05);
}

.profile-intro {
  flex: 1;
  text-align: left;
}

.profile-intro h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
}

.profile-intro p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
}

.photo-caption {
  font-style: italic;
  color: #888 !important;
  font-size: 1rem !important;
}

.leisure-content section {
  background: white;
  border-radius: 10px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0;
  background: none;
  box-shadow: none;
}

.hobby-card {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.hobby-card:hover {
  transform: translateY(-5px);
}

.hobby-icon {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
}

.hobby-card h2 {
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
}

.hobby-description {
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  font-style: italic;
}

.hobby-details h4 {
  color: #333;
  margin: 1.5rem 0 0.8rem 0;
  font-size: 1rem;
}

.hobby-details p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.hobby-details ul {
  color: #555;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.hobby-details li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.skill-tag {
  background: #e7f3ff;
  color: #0066cc;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.gallery-section h2,
.balance-section h2,
.future-goals h2 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.gallery-intro {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.gallery-item {
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.gallery-item {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.gallery-item:hover {
  transform: translateY(-3px);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-image {
  height: 150px;
  background: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.gallery-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-photo {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  text-align: center;
}

.view-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.view-text {
  font-size: 0.9rem;
  font-weight: 600;
}

.image-placeholder {
  color: #666;
  font-size: 1rem;
}

.gallery-info {
  padding: 1.5rem;
}

.gallery-info h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.gallery-info p {
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.gallery-date {
  color: #999;
  font-size: 0.9rem;
}

.balance-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.balance-text p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.balance-benefits {
  list-style: none;
  padding: 0;
}

.balance-benefits li {
  color: #555;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;
}

.balance-benefits li::before {
  content: '✓';
  color: #28a745;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.balance-quotes blockquote {
  border-left: 4px solid #007bff;
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: #555;
  line-height: 1.6;
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.goal-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
}

.goal-card:hover {
  transform: translateY(-3px);
}

.goal-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.goal-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.goal-card p {
  color: #666;
  line-height: 1.6;
}

/* 燈箱樣式 */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.lightbox-close:hover {
  background: rgba(0, 0, 0, 0.9);
}

.lightbox-image {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  display: block;
}

.lightbox-info {
  padding: 2rem;
  text-align: center;
}

.lightbox-info h3 {
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.lightbox-info p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.lightbox-date {
  color: #999;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .profile-photo-section {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .profile-intro {
    text-align: center;
  }

  .profile-intro h1 {
    font-size: 2rem;
  }

  .profile-photo {
    width: 150px;
    height: 150px;
  }

  .leisure-content section {
    padding: 2rem;
  }

  .hobbies-grid {
    grid-template-columns: 1fr;
  }

  .balance-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .goals-grid {
    grid-template-columns: 1fr;
  }

  .lightbox-content {
    max-width: 95vw;
    max-height: 95vh;
  }

  .lightbox-info {
    padding: 1.5rem;
  }

  .lightbox-image {
    max-height: 60vh;
  }
}
</style>
