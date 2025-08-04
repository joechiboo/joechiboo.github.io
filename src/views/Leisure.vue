<template>
  <div class="leisure">
    <div class="container">
      <header class="page-header">
        <h1>休閒生活</h1>
        <p>平衡工作與生活的藝術</p>
      </header>

      <div class="leisure-content">
        <section class="hobbies-grid">
          <div 
            class="hobby-card" 
            v-for="hobby in hobbies" 
            :key="hobby.id"
            :class="{ 
              'clickable-hobby': hobby.id === 1 || hobby.id === 4,
              'clickable': hobby.id === 1 || hobby.id === 4 
            }"
            @click="hobby.id === 1 || hobby.id === 4 ? scrollToGallery(hobby.id === 1 ? 'drawing' : 'music') : null"
          >
            <div class="hobby-icon">{{ hobby.icon }}</div>
            <h2>{{ hobby.title }}</h2>
            <p class="hobby-description">{{ hobby.description }}</p>
            
            <!-- 點擊提示（僅對繪畫和音樂顯示） -->
            <div v-if="hobby.id === 1 || hobby.id === 4" class="click-hint">
              <span class="hint-icon">👆</span>
              <span class="hint-text">點擊查看作品</span>
            </div>

            <div class="hobby-details">
              <h4>為什麼喜歡：</h4>
              <p>{{ hobby.reason }}</p>
            </div>
          </div>
        </section>

        <section class="gallery-section" ref="gallerySection">
          <h2>創作展示</h2>
          <p class="gallery-intro">以下是一些個人創作和興趣活動的記錄</p>

          <!-- 分類選擇按鈕 -->
          <div class="category-tabs">
            <button
              v-for="group in galleryGroups"
              :key="group.id"
              class="category-tab"
              :class="{ active: activeCategory === group.id }"
              @click="setActiveCategory(group.id)"
            >
              <span class="tab-icon">{{ group.icon }}</span>
              <span class="tab-title">{{ group.title }}</span>
              <span class="tab-count">({{ group.items.length }})</span>
            </button>
          </div>

          <!-- 當前選中的分類內容 -->
          <div class="active-gallery">
            <div v-if="currentGroupData && currentGroupData.items.length > 0" class="gallery-grid">
              <div
                class="gallery-item"
                v-for="(item, index) in currentGroupData.items"
                :key="item.id"
                @click="!item.youtube && !item.isComingSoon && openLightbox(item, currentGroupData, index)"
                :class="{ 'clickable': item.image && !item.youtube }"
              >
                <div class="gallery-image">
                  <!-- YouTube 嵌入式播放器 -->
                  <iframe
                    v-if="item.youtube"
                    :src="`https://www.youtube.com/embed/${item.youtube}`"
                    class="youtube-player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>

                  <!-- 一般圖片 -->
                  <img
                    v-else-if="item.image"
                    :src="item.image"
                    :alt="item.title"
                    class="gallery-photo"
                    loading="lazy"
                  />

                  <!-- 待續項目 -->
                  <div v-else-if="item.isComingSoon" class="coming-soon-placeholder">
                    <div class="coming-soon-icon">🎵</div>
                    <span>待續...</span>
                  </div>

                  <!-- 默認佔位符 -->
                  <div v-else class="image-placeholder">
                    <span>即將更新</span>
                  </div>

                  <!-- 覆蓋層（僅對圖片顯示） -->
                  <div v-if="item.image && !item.youtube" class="gallery-overlay">
                    <span class="view-icon">🔍</span>
                    <span class="view-text">點擊查看</span>
                  </div>
                </div>
                <div class="gallery-info">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                  <span class="gallery-date">{{ item.date }}</span>

                  <!-- YouTube 連結 -->
                  <div v-if="item.youtube" class="youtube-info">
                    <span class="youtube-icon">📺</span>
                    <span class="youtube-label">YouTube 播放</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="empty-category">
              <div class="empty-icon">📂</div>
              <h3>{{ currentGroupData?.title }}</h3>
              <p>{{ currentGroupData?.description }}</p>
              <p class="empty-text">🚧 此類別的作品即將更新，敬請期待！</p>
            </div>
          </div>

          <!-- 增強版燈箱模態框 -->
          <div v-if="lightboxItem" class="lightbox-overlay" @click="closeLightbox">
            <div class="lightbox-content" @click.stop>
              <button class="lightbox-close" @click="closeLightbox">&times;</button>

              <!-- 左右導航按鈕 -->
              <button
                v-if="currentGroup && currentIndex > 0"
                class="lightbox-nav lightbox-prev"
                @click="previousImage"
              >
                ‹
              </button>
              <button
                v-if="currentGroup && currentIndex < currentGroup.items.length - 1"
                class="lightbox-nav lightbox-next"
                @click="nextImage"
              >
                ›
              </button>

              <img
                v-if="lightboxItem.image"
                :src="lightboxItem.image"
                :alt="lightboxItem.title"
                class="lightbox-image"
              />

              <div class="lightbox-info">
                <div class="lightbox-counter" v-if="currentGroup">
                  {{ currentIndex + 1 }} / {{ currentGroup.items.length }}
                </div>
                <h3>{{ lightboxItem.title }}</h3>
                <p>{{ lightboxItem.description }}</p>
                <span class="lightbox-date">{{ lightboxItem.date }}</span>
                <div class="lightbox-hint">
                  <span>← → 切換圖片 | ESC 關閉</span>
                </div>
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
              <div class="goal-icon">🏃‍♂️</div>
              <h3>運動挑戰</h3>
              <div class="challenge-list">
                <p class="challenge-item">考潛水執照</p>
                <p class="challenge-item">❌ 日月潭泳渡</p>
                <p class="challenge-item">❌ 基隆外木山長泳</p>
                <p class="challenge-item">✅ 寶礦力路跑 4k</p>
              </div>
            </div>

            <div class="goal-card">
              <div class="goal-icon">🎵</div>
              <h3>音樂製作</h3>
              <p>與大兒子一同四手聯彈，上台表演</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 分類選擇功能
const activeCategory = ref('drawing') // 默認選中繪畫
const currentGroupData = ref(null)


// 燈箱功能
const lightboxItem = ref(null)
const currentGroup = ref(null)
const currentIndex = ref(0)

const openLightbox = (item, group, index) => {
  lightboxItem.value = item
  currentGroup.value = group
  currentIndex.value = index
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxItem.value = null
  currentGroup.value = null
  currentIndex.value = 0
  document.body.style.overflow = 'auto'
}

const previousImage = () => {
  if (currentGroup.value && currentIndex.value > 0) {
    currentIndex.value--
    lightboxItem.value = currentGroup.value.items[currentIndex.value]
  }
}

const nextImage = () => {
  if (currentGroup.value && currentIndex.value < currentGroup.value.items.length - 1) {
    currentIndex.value++
    lightboxItem.value = currentGroup.value.items[currentIndex.value]
  }
}

// 鍵盤導航
const handleKeydown = (event) => {
  if (!lightboxItem.value) return

  switch (event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      previousImage()
      break
    case 'ArrowRight':
      nextImage()
      break
  }
}

// 分類切換功能
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
  updateCurrentGroupData()
}

const updateCurrentGroupData = () => {
  currentGroupData.value = galleryGroups.value.find((group) => group.id === activeCategory.value)
}

// 滑動到作品展示區域並切換分類
const gallerySection = ref(null)

const scrollToGallery = (categoryId) => {
  // 設置分類
  setActiveCategory(categoryId)
  
  // 等待 DOM 更新後滑動
  setTimeout(() => {
    if (gallerySection.value) {
      gallerySection.value.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, 100)
}

// 綁定鍵盤事件
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  updateCurrentGroupData() // 初始化當前分組數據
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

const hobbies = ref([
  {
    id: 1,
    icon: '🎨',
    title: '繪畫',
    description: '透過畫筆記錄生活，用色彩表達情感',
    reason:
      '繪畫讓我能夠靜下心來觀察世界的美好，每一筆都是對生活的記錄和情感的釋放。在繪畫的過程中，時間似乎靜止，只有我和畫布之間的對話。',
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
    description: '發揮想像力，創造有意思的想法',
    reason:
      '創作是一種純粹的快樂，在發想與實作之間找到平衡。每當完成一件作品時，那種「原來我也可以」的成就感是無法取代的。',
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
      '運動讓我感受到身心的平衡與活力。每次流汗都是對自己的挑戰，每次超越都是對極限的探索。在運動中找到的不只是健康，更是內心的平靜與自信。',
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
      '音樂是心靈的語言，能夠觸及文字無法表達的情感深處。彈奏時的專注與投入，讓我在旋律中找到寧靜，在和聲中感受生命的美好。音樂不僅豐富了我的生活，更是情感的出口。',
    experiences: [
      '學習鋼琴超過8年',
      '參加過校園音樂會演出',
      '組過業餘樂團擔任鍵盤手',
      '嘗試音樂創作和編曲',
    ],
    skills: ['鋼琴演奏', '音樂理論', '編曲', '音樂軟體操作'],
  },
])

const galleryGroups = ref([
  {
    id: 'drawing',
    title: '繪畫作品',
    icon: '🎨',
    description: '記錄繪畫練習與創作的成長歷程',
    items: [
      {
        id: 1,
        title: '青蛙素描',
        description: '寫實風格的青蛙素描，展現對細節的觀察力',
        image: '/img/drawsomething/frog.jpg',
      },
      {
        id: 2,
        title: 'Practice Drawing #6',
        description: '繪畫練習作品，持續探索不同的繪畫技法',
        image: '/img/drawsomething/partice-6.png',
      },
      {
        id: 3,
        title: 'Practice Drawing #5',
        description: '展現對線條和陰影處理的進步',
        image: '/img/drawsomething/partice-5.png',
      },
      {
        id: 4,
        title: '母親肖像',
        description: '溫馨的母親肖像畫，表達對家人的愛',
        image: '/img/drawsomething/mother.jpg',
      },
      {
        id: 5,
        title: 'Practice Drawing #10',
        description: '技法更加成熟的練習作品，展現繪畫水平的提升',
        image: '/img/drawsomething/partice-10.png',
      },
      {
        id: 6,
        title: 'Practice Drawing #3',
        description: '早期練習作品，展現對藝術的熱愛與投入',
        image: '/img/drawsomething/partice-3.png',
      },
      {
        id: 7,
        title: '母雞帶小雞',
        description: '可愛的動物主題創作，充滿生活情趣',
        image: '/img/drawsomething/chicken-family.jpg',
      },
      {
        id: 8,
        title: '小豬素描',
        description: '活潑可愛的豬豬繪畫，展現對動物形態的掌握',
        image: '/img/drawsomething/pig.jpg',
      },
    ],
  },
  {
    id: 'music',
    title: '音樂作品',
    icon: '🎵',
    description: '音樂演奏與表演的珍貴記錄',
    items: [
      {
        id: 1,
        title: '公司尾牙表演',
        description: '在公司年終聚會上的鋼琴演奏，與同事分享音樂的美好',
        image: '/img/music/annual-party.jpg',
      },
      {
        id: 2,
        title: '飯店有架鋼琴',
        description: '詢問了之後可以彈，即興演奏的美好時光',
        image: '/img/music/hongkong.jpg',
      },
      {
        id: 3,
        title: '小提琴練習',
        description: '探索不同樂器的表達方式，挑戰新的音樂領域',
        image: '/img/music/violin.jpg',
      },
      {
        id: 4,
        title: '4手聯彈-曲目1-好棒',
        description: '與大兒子的鋼琴四手聯彈，美好的親子音樂時光',
        youtube: 'KkspuugpnmM',
        date: '2025',
      },
      {
        id: 5,
        title: '4手聯彈-曲目2-噢！蘇珊娜',
        description: '繼續與大兒子的音樂練習，培養默契與技巧',
        youtube: 'AhQZlFa4R24',
        date: '2025',
      },
      {
        id: 6,
        title: '4手聯彈-曲目3-321嘿嘿',
        description: '宮崎駿動畫配樂，充滿想像力的音樂演奏',
        youtube: 'jG6SPH0E6rI',
        date: '2025',
      },
      {
        id: 7,
        title: '搖滾的蘿蔔',
        description: '搖滾的蘿蔔🚧 彈得不好，敬請期待更好的版本',
        date: '待續...',
        isComingSoon: true,
      },
    ],
  },
])
</script>

<style scoped>
.leisure {
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

.leisure-content section {
  background: var(--bg-white);
  border-radius: 10px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: var(--shadow-md);
}

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0;
  background: none;
  box-shadow: none;
}

.hobby-card {
  background: var(--bg-white);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease;
}

.hobby-card:hover {
  transform: translateY(-5px);
}

/* 可點擊的興趣卡片樣式 */
.hobby-card.clickable-hobby {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.hobby-card.clickable-hobby::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  transition: left 0.6s ease;
}

.hobby-card.clickable-hobby:hover::before {
  left: 100%;
}

.hobby-card.clickable-hobby:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--color-primary-light);
}

.hobby-card.clickable-hobby:active {
  transform: translateY(-3px);
  transition: transform 0.1s ease;
}

/* 點擊提示樣式 */
.click-hint {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--gradient-primary);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 2;
}

.hobby-card.clickable-hobby:hover .click-hint {
  opacity: 1;
  transform: translateY(0);
}

.hint-icon {
  font-size: 1rem;
  animation: point 1.5s ease-in-out infinite;
}

.hint-text {
  font-size: 0.8rem;
  white-space: nowrap;
}

@keyframes point {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.hobby-icon {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
}

.hobby-card h2 {
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: 1rem;
}

.hobby-description {
  color: var(--color-text-secondary);
  text-align: center;
  margin-bottom: 2rem;
  font-style: italic;
}

.hobby-details h4 {
  color: var(--color-text-primary);
  margin: 1.5rem 0 0.8rem 0;
  font-size: 1rem;
}

.hobby-details p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.hobby-details ul {
  color: var(--color-text-secondary);
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
  background: var(--bg-primary-light);
  color: var(--color-primary-dark);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.gallery-section h2,
.balance-section h2,
.future-goals h2 {
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

/* 分類選擇按鈕 */
.category-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: var(--bg-white);
  border: 2px solid var(--border-color);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.category-tab:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.category-tab.active {
  background: var(--gradient-primary);
  border-color: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.tab-icon {
  font-size: 1.2rem;
}

.tab-title {
  font-weight: 600;
}

.tab-count {
  font-size: 0.85rem;
  opacity: 0.8;
}

/* 當前分類展示區域 */
.active-gallery {
  min-height: 400px;
}

.empty-category {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--bg-white);
  border-radius: 15px;
  box-shadow: var(--shadow-md);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-category h3 {
  color: var(--color-text-primary);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.empty-category p {
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

.empty-text {
  color: var(--color-text-muted) !important;
  font-style: italic;
}

.gallery-intro {
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.gallery-item {
  background: var(--bg-light);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  position: relative;
}

.gallery-item.clickable {
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-3px);
}

.gallery-item.clickable:hover .gallery-overlay {
  opacity: 1;
}

.gallery-image {
  height: 150px;
  background: var(--bg-secondary);
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
  color: var(--color-text-secondary);
  font-size: 1rem;
}

/* YouTube 播放器樣式 */
.youtube-player {
  width: 100%;
  height: 100%;
  border: none;
}

/* 待續項目樣式 */
.coming-soon-placeholder {
  color: var(--color-text-muted);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: var(--bg-gradient-light);
  border: 2px dashed var(--border-light);
}

.coming-soon-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

.gallery-info {
  padding: 1.5rem;
}

.gallery-info h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.gallery-info p {
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.gallery-date {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

/* YouTube 資訊樣式 */
.youtube-info {
  margin-top: 1rem;
  padding: 0.8rem;
  background: var(--gradient-youtube);
  color: var(--color-white);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-size: 0.9rem;
}

.youtube-icon {
  font-size: 1.1rem;
  animation: video-play 2s ease-in-out infinite;
}

.youtube-label {
  font-weight: 500;
}

@keyframes video-play {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.balance-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.balance-text p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.balance-benefits {
  list-style: none;
  padding: 0;
}

.balance-benefits li {
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;
}

.balance-benefits li::before {
  content: '✓';
  color: var(--color-success);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.balance-quotes blockquote {
  border-left: 4px solid var(--color-primary);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.goal-card {
  background: var(--bg-light);
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
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.goal-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.challenge-list {
  text-align: left;
}

.challenge-item {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  background: var(--bg-white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
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
  color: var(--color-text-primary);
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.lightbox-info p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.lightbox-date {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

/* 燈箱導航按鈕 */
.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.lightbox-nav:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-prev {
  left: 2rem;
}

.lightbox-next {
  right: 2rem;
}

/* 燈箱計數器和提示 */
.lightbox-counter {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.lightbox-hint {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.lightbox-hint span {
  color: var(--color-text-muted);
  font-size: 0.85rem;
  font-style: italic;
}

/* 平板尺寸 */
@media (max-width: 1024px) and (min-width: 769px) {
  .hobbies-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .leisure-content section {
    padding: 2rem;
  }

  .hobbies-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
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

  .lightbox-nav {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .lightbox-prev {
    left: 1rem;
  }

  .lightbox-next {
    right: 1rem;
  }

  .group-header {
    padding: 1.5rem;
  }

  .group-icon {
    font-size: 2.5rem;
  }

  .group-title {
    font-size: 1.5rem;
  }

  .category-tabs {
    gap: 0.5rem;
  }

  .category-tab {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }

  .tab-icon {
    font-size: 1rem;
  }

  .empty-category {
    padding: 3rem 1.5rem;
  }

  .empty-icon {
    font-size: 3rem;
  }

  .youtube-info {
    padding: 0.6rem;
    font-size: 0.85rem;
  }
}
</style>
