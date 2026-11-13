<template>
  <div class="leisure">
    <div class="container">
      <header class="page-header">
        <h1>{{ t('leisurePageTitle') }}</h1>
        <p>{{ t('leisurePageSubtitle') }}</p>
      </header>
    </div>

    <nav class="section-nav" :aria-label="t('leisurePageTitle')">
      <button
        v-for="section in sections"
        :key="section.id"
        type="button"
        class="section-chip"
        :class="`chip-${section.id}`"
        @click="scrollToSection(section.id)"
      >
        <span aria-hidden="true">{{ section.icon }}</span>
        {{ t(section.labelKey) }}
      </button>
    </nav>

    <!-- 繪畫：美術館 -->
    <section id="leisure-drawing" class="band band-museum">
      <div class="container">
        <header class="band-header museum-header">
          <span class="eyebrow">Gallery · 01</span>
          <h2>{{ t('drawing') }}</h2>
          <p class="tagline">{{ t('drawingDesc') }}</p>
          <p class="statement">{{ t('drawingReason') }}</p>
        </header>

        <div class="museum-wall">
          <figure
            v-for="(item, index) in drawings"
            :key="item.id"
            class="artwork"
            tabindex="0"
            role="button"
            :aria-label="item.title"
            @click="openLightbox(drawings, index)"
            @keydown.enter.prevent="openLightbox(drawings, index)"
          >
            <div class="frame">
              <div class="mat">
                <img :src="item.image" :alt="item.title" loading="lazy" />
              </div>
            </div>
            <figcaption class="placard">
              <strong>{{ item.title }}</strong>
              <span>{{ item.description }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- 創作：筆記本 -->
    <section id="leisure-creation" class="band band-notebook">
      <div class="container">
        <div class="notebook">
          <div class="notebook-rings" aria-hidden="true">
            <span v-for="n in 7" :key="n"></span>
          </div>
          <div class="notebook-page">
            <span class="eyebrow">Sketchbook · 02</span>
            <h2>{{ t('creation') }}</h2>
            <p class="tagline">{{ t('creationDesc') }}</p>
            <div class="sticky-note">
              <h4>{{ t('whyLike') }}</h4>
              <p>{{ t('creationReason') }}</p>
            </div>
            <div class="doodles" aria-hidden="true">✏️ 💡 ✂️</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 運動：訓練日誌儀表板 -->
    <section id="leisure-sports" class="band band-sports">
      <div class="container">
        <header class="band-header sports-header">
          <span class="eyebrow">Training Log · 03</span>
          <h2>{{ t('sports') }}</h2>
          <p class="tagline">{{ t('sportsDesc') }}</p>
        </header>

        <div class="sports-grid">
          <div class="sports-card">
            <h4>{{ t('whyLike') }}</h4>
            <p>{{ t('sportsReason') }}</p>
          </div>
          <div class="sports-card">
            <h4>{{ t('sportsAchievements') }}</h4>
            <ul class="badges">
              <li v-for="badge in achievements" :key="badge.id" class="badge">
                <span class="badge-icon" aria-hidden="true">{{ badge.icon }}</span>
                <span class="badge-name">{{ stripDoneMark(t(badge.key)) }}</span>
                <span class="badge-check" aria-hidden="true">✓</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="highlights">
          <h3>🏀 {{ t('sportsHighlights') }}</h3>
          <div v-if="sportsHighlights.length" class="highlights-grid">
            <div v-for="clip in sportsHighlights" :key="clip.youtube" class="highlight-card">
              <div class="video-frame">
                <iframe
                  :src="`https://www.youtube.com/embed/${clip.youtube}`"
                  :title="clip.title"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="highlight-info">
                <strong>{{ clip.title }}</strong>
                <span>{{ clip.date }}</span>
              </div>
            </div>
          </div>
          <div v-else class="highlight-empty">
            <div class="highlight-screen" aria-hidden="true">▶</div>
            <div>
              <strong>{{ t('highlightsComingSoonTitle') }}</strong>
              <p>{{ t('highlightsComingSoonDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 音樂：黑膠唱片 -->
    <section id="leisure-music" class="band band-music">
      <div class="container">
        <header class="band-header music-header">
          <span class="eyebrow">Side A · 04</span>
          <h2>{{ t('music') }}</h2>
          <p class="tagline">{{ t('musicDesc') }}</p>
        </header>

        <div class="music-layout">
          <div class="player">
            <div class="player-top">
              <div class="vinyl" :class="{ spinning: isSpinning }" aria-hidden="true">
                <div class="vinyl-label">🎹</div>
              </div>
              <div class="now-playing">
                <span class="now-playing-label">{{ t('nowPlaying') }}</span>
                <h3>{{ currentTrack.title }}</h3>
                <p>{{ currentTrack.description }}</p>
                <span class="track-year">{{ currentTrack.date }}</span>
              </div>
            </div>

            <div v-if="currentTrack.youtube" class="video-frame">
              <iframe
                :key="currentTrack.id"
                :src="youtubeSrc"
                :title="currentTrack.title"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div v-else class="audio-player">
              <button
                type="button"
                class="audio-toggle"
                :aria-label="currentTrack.title"
                @click="toggleAudio"
              >
                {{ audioPlaying ? '⏸' : '▶' }}
              </button>
              <span>{{ t('recordingLabel') }}</span>
              <audio
                ref="audioEl"
                :src="currentTrack.audio"
                @play="audioPlaying = true"
                @pause="audioPlaying = false"
                @ended="audioPlaying = false"
              ></audio>
            </div>
          </div>

          <div class="tracklist">
            <h4>{{ t('trackList') }}</h4>
            <ol>
              <li v-for="(track, index) in musicTracks" :key="track.id">
                <button
                  type="button"
                  class="track"
                  :class="{ active: index === currentTrackIndex }"
                  @click="selectTrack(index)"
                >
                  <span class="track-no">{{ String(index + 1).padStart(2, '0') }}</span>
                  <span class="track-title">{{ track.title }}</span>
                  <span class="track-type">{{ track.audio ? t('recordingLabel') : t('videoLabel') }}</span>
                  <span class="track-year">{{ track.date }}</span>
                </button>
              </li>
            </ol>
            <div class="music-why">
              <h4>{{ t('whyLike') }}</h4>
              <p>{{ t('musicReason') }}</p>
            </div>
          </div>
        </div>

        <div class="stage-photos">
          <h4>{{ t('musicPhotos') }}</h4>
          <div class="photo-strip">
            <button
              v-for="(photo, index) in musicPhotos"
              :key="photo.id"
              type="button"
              class="photo"
              @click="openLightbox(musicPhotos, index)"
            >
              <img :src="photo.image" :alt="photo.title" loading="lazy" />
              <span>{{ photo.title }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <section class="balance-section">
        <h2>{{ t('workLifeBalance') }}</h2>
        <div class="balance-content">
          <div class="balance-text">
            <p>{{ t('workLifeBalanceIntro') }}</p>
            <ul class="balance-benefits">
              <li>{{ t('balanceBenefit1') }}</li>
              <li>{{ t('balanceBenefit2') }}</li>
              <li>{{ t('balanceBenefit3') }}</li>
              <li>{{ t('balanceBenefit4') }}</li>
              <li>{{ t('balanceBenefit5') }}</li>
            </ul>
          </div>
          <div class="balance-quotes">
            <blockquote>"{{ t('balanceQuote1') }}"</blockquote>
            <blockquote>"{{ t('balanceQuote2') }}"</blockquote>
          </div>
        </div>
      </section>
    </div>

    <div v-if="lightboxItem" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button type="button" class="lightbox-close" @click="closeLightbox">&times;</button>
        <button
          v-if="lightboxIndex > 0"
          type="button"
          class="lightbox-nav lightbox-prev"
          @click="previousImage"
        >
          ‹
        </button>
        <button
          v-if="lightboxIndex < lightboxItems.length - 1"
          type="button"
          class="lightbox-nav lightbox-next"
          @click="nextImage"
        >
          ›
        </button>
        <img :src="lightboxItem.image" :alt="lightboxItem.title" class="lightbox-image" />
        <div class="lightbox-info">
          <div class="lightbox-counter">{{ lightboxIndex + 1 }} / {{ lightboxItems.length }}</div>
          <h3>{{ lightboxItem.title }}</h3>
          <p>{{ lightboxItem.description }}</p>
          <div class="lightbox-hint">{{ t('switchImages') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useSEO } from '../composables/useSEO.js'

const { t } = useLanguage()

useSEO({
  title: 'Joe Chi-Boo - 休閒興趣 | Leisure',
  description: 'Joe Chi-Boo 休閒興趣展示，包括繪畫作品、音樂創作、運動活動等多元興趣愛好與創意作品分享。',
  keywords: 'Joe Chi-Boo, 休閒興趣, Leisure, 繪畫, 音樂, 創作, 運動, 興趣愛好',
  ogTitle: 'Joe Chi-Boo - 休閒興趣',
  ogDescription: '探索 Joe Chi-Boo 的多元興趣世界，從繪畫創作到音樂演奏，展現豐富的業餘生活。',
  twitterTitle: 'Joe Chi-Boo - 休閒興趣',
  twitterDescription: '探索 Joe Chi-Boo 的多元興趣世界，從繪畫創作到音樂演奏，展現豐富的業餘生活。'
})

const sections = [
  { id: 'drawing', icon: '🎨', labelKey: 'drawing' },
  { id: 'creation', icon: '✨', labelKey: 'creation' },
  { id: 'sports', icon: '🏃‍♂️', labelKey: 'sports' },
  { id: 'music', icon: '🎵', labelKey: 'music' },
]

const scrollToSection = (id) => {
  document.getElementById(`leisure-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const drawings = [
  { id: 1, image: '/img/drawsomething/frog.jpg', get title() { return t('frogSketch') }, get description() { return t('frogSketchDesc') } },
  { id: 2, image: '/img/drawsomething/partice-6.png', get title() { return t('practiceDrawing6') }, get description() { return t('practiceDrawing6Desc') } },
  { id: 3, image: '/img/drawsomething/partice-5.png', get title() { return t('practiceDrawing5') }, get description() { return t('practiceDrawing5Desc') } },
  { id: 4, image: '/img/drawsomething/mother.jpg', get title() { return t('motherPortrait') }, get description() { return t('motherPortraitDesc') } },
  { id: 5, image: '/img/drawsomething/partice-10.png', get title() { return t('practiceDrawing10') }, get description() { return t('practiceDrawing10Desc') } },
  { id: 6, image: '/img/drawsomething/partice-3.png', get title() { return t('practiceDrawing3') }, get description() { return t('practiceDrawing3Desc') } },
  { id: 7, image: '/img/drawsomething/chicken-family.jpg', get title() { return t('chickenFamily') }, get description() { return t('chickenFamilyDesc') } },
  { id: 8, image: '/img/drawsomething/pig.jpg', get title() { return t('pigSketch') }, get description() { return t('pigSketchDesc') } },
]

// 運動挑戰沿用原本「未來目標」裡已完成的項目，文字裡的 ✅ 改由徽章呈現
const achievements = [
  { id: 'swim', icon: '🌊', key: 'keeluneSwim' },
  { id: 'run', icon: '🏅', key: 'marathonRun' },
]
const stripDoneMark = (text) => text.replace(/^✅\s*/, '')

// 籃球精華：剪好上傳 YouTube 後，在這裡加一筆 { youtube: '影片ID', title: '標題', date: '2026-11' }
const sportsHighlights = []

const musicTracks = [
  { id: 4, youtube: 'KkspuugpnmM', date: '2025', get title() { return t('duetPiece1') }, get description() { return t('duetPiece1Desc') } },
  { id: 5, youtube: 'AhQZlFa4R24', date: '2025', get title() { return t('duetPiece2') }, get description() { return t('duetPiece2Desc') } },
  { id: 6, youtube: 'jG6SPH0E6rI', date: '2025', get title() { return t('duetPiece3') }, get description() { return t('duetPiece3Desc') } },
  { id: 7, youtube: 'cDceNUIYojM', date: '2025', get title() { return t('rockRadish') }, get description() { return t('rockRadishDesc') } },
  { id: 8, audio: '/img/music/voice_260877.aac', date: '2026', get title() { return t('chopinNocturne') }, get description() { return t('chopinNocturneDesc') } },
  { id: 9, youtube: 'bbVbvxobK-s', date: '2026', get title() { return t('hisaishiSummer') }, get description() { return t('hisaishiSummerDesc') } },
]

const musicPhotos = [
  { id: 1, image: '/img/music/annual-party.jpg', get title() { return t('companyPerformance') }, get description() { return t('companyPerformanceDesc') } },
  { id: 2, image: '/img/music/hongkong.jpg', get title() { return t('hotelPiano') }, get description() { return t('hotelPianoDesc') } },
  { id: 3, image: '/img/music/violin.jpg', get title() { return t('violinPractice') }, get description() { return t('violinPracticeDesc') } },
]

// 音樂播放器：點曲目才自動播放，進頁面時不會突然出聲
const currentTrackIndex = ref(0)
const hasPickedTrack = ref(false)
const audioEl = ref(null)
const audioPlaying = ref(false)

const currentTrack = computed(() => musicTracks[currentTrackIndex.value])
const youtubeSrc = computed(
  () => `https://www.youtube.com/embed/${currentTrack.value.youtube}${hasPickedTrack.value ? '?autoplay=1' : ''}`
)
const isSpinning = computed(() =>
  currentTrack.value.audio ? audioPlaying.value : hasPickedTrack.value
)

const selectTrack = async (index) => {
  audioEl.value?.pause()
  audioPlaying.value = false
  currentTrackIndex.value = index
  hasPickedTrack.value = true
  if (currentTrack.value.audio) {
    await nextTick()
    playAudio()
  }
}

// 播放中途切曲會讓 play() 的 Promise 被 pause() 中斷，這是預期行為，不必報錯
const playAudio = () => audioEl.value?.play().catch(() => {})

const toggleAudio = () => {
  const audio = audioEl.value
  if (!audio) return
  if (audio.paused) playAudio()
  else audio.pause()
}

// 燈箱：繪畫作品與演出照片共用
const lightboxItems = ref([])
const lightboxIndex = ref(0)
const lightboxItem = computed(() => lightboxItems.value[lightboxIndex.value] || null)

const openLightbox = (items, index) => {
  lightboxItems.value = items
  lightboxIndex.value = index
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxItems.value = []
  lightboxIndex.value = 0
  document.body.style.overflow = 'auto'
}

const previousImage = () => {
  if (lightboxIndex.value > 0) lightboxIndex.value--
}

const nextImage = () => {
  if (lightboxIndex.value < lightboxItems.value.length - 1) lightboxIndex.value++
}

const handleKeydown = (event) => {
  if (!lightboxItem.value) return
  if (event.key === 'Escape') closeLightbox()
  else if (event.key === 'ArrowLeft') previousImage()
  else if (event.key === 'ArrowRight') nextImage()
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
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
  margin-bottom: 1rem;
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

/* 快速跳轉 */
.section-nav {
  position: sticky;
  top: 74px;
  z-index: 50;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 0.9rem 1rem;
  background: color-mix(in srgb, var(--bg-light) 85%, transparent);
  backdrop-filter: blur(8px);
}

.section-chip {
  border: 2px solid var(--bg-lighter);
  background: var(--bg-white);
  color: var(--color-text-primary);
  border-radius: 999px;
  padding: 0.45rem 1.1rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.section-chip:hover {
  transform: translateY(-2px);
}

.chip-drawing:hover { border-color: #b08d57; }
.chip-creation:hover { border-color: #f2c94c; }
.chip-sports:hover { border-color: #c6f432; }
.chip-music:hover { border-color: #d4a24c; }

/* 共用 */
.band {
  scroll-margin-top: 140px;
  padding: 4.5rem 0;
}

.band-header {
  margin-bottom: 3rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.band h2 {
  font-size: 2.6rem;
  margin: 0 0 0.75rem;
}

.tagline {
  font-size: 1.2rem;
  margin: 0;
}

.video-frame {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  background: #000;
}

.video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* ───── 繪畫：美術館 ───── */
.band-museum {
  background: linear-gradient(180deg, #f3efe7 0%, #ebe5da 100%);
  color: #2b2620;
  font-family: Georgia, 'Noto Serif TC', 'Songti TC', serif;
}

.museum-header {
  text-align: center;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.museum-header .eyebrow {
  color: #8a6d3b;
}

.museum-header .tagline {
  font-style: italic;
  color: #5c5348;
}

.statement {
  margin: 1.5rem auto 0;
  color: #4a433a;
  line-height: 1.9;
  font-size: 1rem;
}

.museum-wall {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 2.5rem;
}

.artwork {
  margin: 0;
  cursor: zoom-in;
  outline: none;
}

.frame {
  padding: 10px;
  background: linear-gradient(145deg, #3a2e25, #1f1812);
  box-shadow:
    0 18px 30px -12px rgba(40, 28, 15, 0.55),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.mat {
  background: #fbf9f4;
  padding: 18px;
  aspect-ratio: 4 / 5;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.18);
}

.mat img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.artwork:hover .frame,
.artwork:focus-visible .frame {
  transform: translateY(-6px);
  box-shadow:
    0 26px 40px -14px rgba(40, 28, 15, 0.6),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}

.artwork:focus-visible .frame {
  outline: 3px solid #8a6d3b;
  outline-offset: 4px;
}

.placard {
  margin-top: 1rem;
  padding: 0.6rem 0.8rem;
  background: #fffdf8;
  border-left: 3px solid #8a6d3b;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  font-family: 'Inter', 'Noto Sans TC', sans-serif;
}

.placard strong {
  display: block;
  font-size: 0.9rem;
  color: #2b2620;
  margin-bottom: 0.2rem;
}

.placard span {
  display: block;
  font-size: 0.78rem;
  line-height: 1.5;
  color: #6b6156;
}

/* ───── 創作：筆記本 ───── */
.band-notebook {
  background-color: #eef4fb;
  background-image:
    linear-gradient(rgba(70, 120, 200, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(70, 120, 200, 0.12) 1px, transparent 1px);
  background-size: 26px 26px;
}

.notebook {
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  transform: rotate(-0.8deg);
}

.notebook-rings {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 34px;
  background: #e2d9c8;
  border-radius: 12px 0 0 12px;
  padding: 1rem 0;
}

.notebook-rings span {
  display: block;
  width: 22px;
  height: 22px;
  margin: 0 auto;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fafafa, #9aa0a6);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.notebook-page {
  flex: 1;
  position: relative;
  background:
    linear-gradient(90deg, transparent 54px, rgba(220, 80, 80, 0.35) 54px, rgba(220, 80, 80, 0.35) 56px, transparent 56px),
    repeating-linear-gradient(#fffef8, #fffef8 31px, #d8e3f0 31px, #d8e3f0 32px);
  border-radius: 0 12px 12px 0;
  padding: 2.5rem 2.5rem 2.5rem 5rem;
  box-shadow: 0 20px 40px -18px rgba(30, 60, 110, 0.4);
  color: #2b3445;
}

.notebook-page .eyebrow {
  color: #4a78c2;
}

.notebook-page h2 {
  color: #1f2a3c;
}

.notebook-page .tagline {
  color: #3b4a63;
  line-height: 32px;
}

.sticky-note {
  margin-top: 2rem;
  max-width: 460px;
  background: #fff3a8;
  padding: 1.4rem 1.6rem;
  transform: rotate(1.6deg);
  box-shadow: 0 12px 18px -10px rgba(120, 100, 0, 0.45);
  position: relative;
  color: #3d3510;
}

.sticky-note::before {
  content: '';
  position: absolute;
  top: -12px;
  left: 50%;
  width: 90px;
  height: 24px;
  transform: translateX(-50%) rotate(-3deg);
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.sticky-note h4 {
  margin: 0 0 0.5rem;
}

.sticky-note p {
  margin: 0;
  line-height: 1.8;
}

.doodles {
  position: absolute;
  right: 2rem;
  bottom: 1.5rem;
  font-size: 1.6rem;
  letter-spacing: 0.6rem;
  opacity: 0.6;
  transform: rotate(-6deg);
}

/* ───── 運動：訓練日誌儀表板 ───── */
.band-sports {
  background:
    radial-gradient(circle at 85% 10%, rgba(198, 244, 50, 0.12), transparent 40%),
    linear-gradient(160deg, #0f172a 0%, #111827 60%, #0b1220 100%);
  color: #e5e7eb;
}

.sports-header .eyebrow {
  color: #c6f432;
  font-weight: 700;
}

.sports-header h2 {
  color: #ffffff;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.sports-header .tagline {
  color: #9ca3af;
}

.sports-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.sports-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.6rem 1.8rem;
}

.sports-card h4 {
  margin: 0 0 1rem;
  color: #c6f432;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.sports-card p {
  margin: 0;
  line-height: 1.8;
  color: #d1d5db;
}

.badges {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.8rem;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  background: linear-gradient(90deg, rgba(198, 244, 50, 0.14), rgba(198, 244, 50, 0.02));
  border: 1px solid rgba(198, 244, 50, 0.25);
}

.badge-icon {
  font-size: 1.5rem;
}

.badge-name {
  flex: 1;
  font-weight: 600;
  color: #f9fafb;
}

.badge-check {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #c6f432;
  color: #0f172a;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlights h3 {
  color: #ffffff;
  font-size: 1.4rem;
  margin: 0 0 1.2rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.highlight-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
}

.highlight-card .video-frame {
  border-radius: 0;
}

.highlight-info {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1.1rem;
}

.highlight-info strong {
  color: #f9fafb;
}

.highlight-info span {
  color: #9ca3af;
  font-variant-numeric: tabular-nums;
}

.highlight-empty {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.6rem;
  border-radius: 14px;
  border: 1px dashed rgba(198, 244, 50, 0.35);
  background: rgba(255, 255, 255, 0.03);
}

.highlight-screen {
  flex-shrink: 0;
  width: 120px;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  background: linear-gradient(135deg, #1f2937, #374151);
  color: #c6f432;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlight-empty strong {
  color: #f9fafb;
  font-size: 1.05rem;
}

.highlight-empty p {
  margin: 0.4rem 0 0;
  color: #9ca3af;
  line-height: 1.7;
}

/* ───── 音樂：黑膠唱片 ───── */
.band-music {
  background:
    radial-gradient(circle at 15% 20%, rgba(212, 162, 76, 0.16), transparent 45%),
    linear-gradient(180deg, #1c1714 0%, #120e0c 100%);
  color: #ede4d6;
}

.music-header .eyebrow {
  color: #d4a24c;
}

.music-header h2 {
  color: #fbf3e6;
  font-family: Georgia, 'Noto Serif TC', serif;
}

.music-header .tagline {
  color: #b9ab96;
  font-style: italic;
}

.music-layout {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 2rem;
  align-items: start;
}

.player {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(212, 162, 76, 0.2);
  border-radius: 18px;
  padding: 1.6rem;
}

.player-top {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.4rem;
}

.vinyl {
  flex-shrink: 0;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  background:
    radial-gradient(circle, #d4a24c 0 22%, transparent 22.5%),
    repeating-radial-gradient(circle, #151515 0 2px, #222 2px 4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.6), inset 0 0 0 2px #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vinyl-label {
  font-size: 1.6rem;
}

.vinyl.spinning {
  animation: spin 3.2s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.now-playing-label {
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #d4a24c;
}

.now-playing h3 {
  margin: 0.4rem 0;
  color: #fbf3e6;
  font-size: 1.25rem;
}

.now-playing p {
  margin: 0 0 0.4rem;
  color: #b9ab96;
  line-height: 1.6;
  font-size: 0.92rem;
}

.track-year {
  font-variant-numeric: tabular-nums;
  color: #8c7f6c;
  font-size: 0.85rem;
}

.audio-player {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.35);
  color: #b9ab96;
}

.audio-toggle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: #d4a24c;
  color: #1c1714;
  font-size: 1.3rem;
  cursor: pointer;
}

.tracklist h4,
.stage-photos h4,
.music-why h4 {
  margin: 0 0 0.9rem;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #d4a24c;
}

.tracklist ol {
  list-style: none;
  margin: 0 0 1.8rem;
  padding: 0;
}

.track {
  width: 100%;
  display: grid;
  grid-template-columns: 2.2rem 1fr auto auto;
  align-items: center;
  gap: 0.8rem;
  padding: 0.75rem 0.8rem;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: transparent;
  color: #ede4d6;
  text-align: left;
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background var(--transition-fast);
}

.track:hover {
  background: rgba(255, 255, 255, 0.05);
}

.track.active {
  background: rgba(212, 162, 76, 0.16);
  color: #fbf3e6;
}

.track-no {
  font-variant-numeric: tabular-nums;
  color: #8c7f6c;
}

.track.active .track-no {
  color: #d4a24c;
}

.track-type {
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  border: 1px solid rgba(212, 162, 76, 0.35);
  color: #d4a24c;
  white-space: nowrap;
}

.music-why p {
  margin: 0;
  color: #b9ab96;
  line-height: 1.8;
}

.stage-photos {
  margin-top: 2.5rem;
}

.photo-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.photo {
  position: relative;
  padding: 0;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  cursor: zoom-in;
  aspect-ratio: 4 / 3;
  background: #000;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: sepia(0.25) saturate(0.9);
  transition: transform var(--transition-base), filter var(--transition-base);
}

.photo:hover img {
  transform: scale(1.05);
  filter: none;
}

.photo span {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.6rem 0.9rem 0.7rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: #fbf3e6;
  font-size: 0.88rem;
  text-align: left;
}

/* ───── 工作與生活的平衡 ───── */
.balance-section {
  background: var(--bg-white);
  border-radius: 15px;
  padding: 3rem;
  margin: 2.5rem 0 3rem;
  box-shadow: var(--shadow-md);
}

.balance-section h2 {
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
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
  color: var(--color-success, #10b981);
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

/* ───── 燈箱 ───── */
.lightbox-overlay {
  position: fixed;
  inset: 0;
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
}

.lightbox-close,
.lightbox-nav {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.lightbox-close {
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
}

.lightbox-nav {
  top: 40%;
  width: 50px;
  height: 50px;
  font-size: 2rem;
}

.lightbox-prev { left: 1rem; }
.lightbox-next { right: 1rem; }

.lightbox-close:hover,
.lightbox-nav:hover {
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
  padding: 1.5rem 2rem;
  text-align: center;
}

.lightbox-info h3 {
  margin: 0.4rem 0;
  color: var(--color-text-primary);
}

.lightbox-info p {
  margin: 0;
  color: var(--color-text-secondary);
}

.lightbox-counter,
.lightbox-hint {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.lightbox-hint {
  margin-top: 0.8rem;
}

/* ───── 深色模式：美術館與筆記本換成夜間版，運動與音樂本身就是深色 ───── */
[data-theme='dark'] .band-museum {
  background: linear-gradient(180deg, #1f1c18 0%, #17140f 100%);
  color: #ece4d6;
}

[data-theme='dark'] .museum-header .tagline,
[data-theme='dark'] .statement {
  color: #c9bfae;
}

[data-theme='dark'] .museum-header .eyebrow {
  color: #d4b07a;
}

[data-theme='dark'] .frame {
  background: linear-gradient(145deg, #5a4838, #2c231b);
}

[data-theme='dark'] .placard {
  background: #2a251f;
  border-left-color: #d4b07a;
}

[data-theme='dark'] .placard strong {
  color: #f3ebdd;
}

[data-theme='dark'] .placard span {
  color: #b5aa98;
}

[data-theme='dark'] .band-notebook {
  background-color: #151b26;
  background-image:
    linear-gradient(rgba(120, 160, 230, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(120, 160, 230, 0.08) 1px, transparent 1px);
}

[data-theme='dark'] .notebook-rings {
  background: #3a3530;
}

[data-theme='dark'] .notebook-page {
  background:
    linear-gradient(90deg, transparent 54px, rgba(230, 110, 110, 0.35) 54px, rgba(230, 110, 110, 0.35) 56px, transparent 56px),
    repeating-linear-gradient(#202734, #202734 31px, #2c3646 31px, #2c3646 32px);
  color: #dbe3ef;
}

[data-theme='dark'] .notebook-page h2 {
  color: #f1f5fb;
}

[data-theme='dark'] .notebook-page .tagline {
  color: #b8c4d6;
}

[data-theme='dark'] .notebook-page .eyebrow {
  color: #8fb3ec;
}

[data-theme='dark'] .section-chip {
  border-color: #333;
}

/* ───── 響應式 ───── */
@media (max-width: 1024px) {
  .museum-wall {
    grid-template-columns: repeat(3, 1fr);
  }

  .music-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1.25rem 1rem;
  }

  .page-header h1 {
    font-size: 2.2rem;
  }

  .section-nav {
    top: 64px;
    gap: 0.5rem;
  }

  .section-chip {
    padding: 0.4rem 0.85rem;
    font-size: 0.85rem;
  }

  .band {
    padding: 3rem 0;
  }

  .band h2 {
    font-size: 2rem;
  }

  .museum-wall {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1.25rem;
  }

  .mat {
    padding: 10px;
  }

  .notebook {
    transform: none;
  }

  .notebook-rings {
    width: 22px;
  }

  .notebook-rings span {
    width: 14px;
    height: 14px;
  }

  .notebook-page {
    padding: 2rem 1.25rem 3.5rem 3.25rem;
    background:
      linear-gradient(90deg, transparent 38px, rgba(220, 80, 80, 0.35) 38px, rgba(220, 80, 80, 0.35) 40px, transparent 40px),
      repeating-linear-gradient(#fffef8, #fffef8 31px, #d8e3f0 31px, #d8e3f0 32px);
  }

  [data-theme='dark'] .notebook-page {
    background:
      linear-gradient(90deg, transparent 38px, rgba(230, 110, 110, 0.35) 38px, rgba(230, 110, 110, 0.35) 40px, transparent 40px),
      repeating-linear-gradient(#202734, #202734 31px, #2c3646 31px, #2c3646 32px);
  }

  .sports-grid {
    grid-template-columns: 1fr;
  }

  .highlight-empty {
    flex-direction: column;
    align-items: flex-start;
  }

  .player-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .vinyl {
    width: 100px;
    height: 100px;
  }

  .track {
    grid-template-columns: 2rem 1fr auto;
  }

  .track .track-year {
    display: none;
  }

  .photo-strip {
    grid-template-columns: 1fr;
  }

  .balance-section {
    padding: 2rem 1.25rem;
  }

  .balance-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .museum-wall {
    gap: 1.5rem 0.9rem;
  }

  .frame {
    padding: 5px;
  }

  .mat {
    padding: 6px;
  }

  .placard {
    margin-top: 0.6rem;
    padding: 0.45rem 0.55rem;
  }

  .placard strong {
    font-size: 0.8rem;
  }

  .placard span {
    font-size: 0.72rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .vinyl.spinning {
    animation: none;
  }
}
</style>
