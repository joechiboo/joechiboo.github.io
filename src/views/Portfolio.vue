<template>
  <div class="portfolio">
    <div class="container">
      <div class="layout-controls">
        <span class="layout-label">{{ t('layoutColumns') }}:</span>
        <button
          v-for="col in [3, 4, 5, 6]"
          :key="col"
          :class="['layout-btn', { active: columns === col }]"
          @click="setColumns(col)"
        >
          {{ col }}
        </button>
      </div>

      <header class="page-header">
        <h1>{{ t('portfolioTitle') }}</h1>
        <p>{{ t('portfolioSubtitle') }}</p>
      </header>

      <div class="portfolio-toolbar">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input
            v-model="searchQuery"
            type="text"
            class="search-input"
            :placeholder="t('searchPlaceholder')"
          />
          <button
            v-if="searchQuery"
            class="search-clear"
            type="button"
            :aria-label="t('clearSearch')"
            @click="searchQuery = ''"
          >
            ×
          </button>
        </div>

        <div class="filter-chips">
          <button
            v-for="cat in categoryFilters"
            :key="cat.value"
            :class="['filter-chip', { active: activeCategory === cat.value }]"
            type="button"
            @click="activeCategory = cat.value"
          >
            <span class="chip-icon">{{ cat.icon }}</span>
            <span class="chip-label">{{ t(cat.labelKey) }}</span>
            <span class="chip-count">{{ cat.count }}</span>
          </button>
        </div>
      </div>

      <p class="result-count">{{ filteredProjects.length }} {{ t('resultCountUnit') }}</p>

      <div v-if="filteredProjects.length" class="portfolio-grid" :class="gridClass">
        <div class="project-card" :class="{ compact: isCompact }" v-for="project in filteredProjects" :key="project.id" @click="handleCardClick(project)">
          <div class="project-image" :class="{ 'compact-image': isCompact }">
            <div class="project-icon">
              <span>{{ getCategoryMeta(project.category).icon }}</span>
            </div>
            <div class="project-category">
              <span>{{ t(getCategoryMeta(project.category).labelKey) }}</span>
            </div>
          </div>
          <div class="project-content">
            <div class="project-header">
              <h3>{{ t(project.titleKey) }}</h3>
              <div class="project-meta">
                <span v-if="project.year" class="project-year">{{ project.year }}</span>
                <span v-if="project.yearKey" class="project-year">{{ t(project.yearKey) }}</span>
                <span v-if="getUpdatedDisplay(project)" class="project-time">{{ getUpdatedDisplay(project) }}</span>
                <span v-if="project.companyKey" class="project-company">{{
                  t(project.companyKey)
                }}</span>
                <span v-if="project.clientKey" class="project-client">{{
                  t(project.clientKey)
                }}</span>
              </div>
            </div>
            <p v-if="!isCompact">{{ t(project.descriptionKey) }}</p>
            <div class="tech-stack" v-if="!isCompact">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="project-links" v-if="!isCompact">
              <a
                v-if="project.demo"
                :href="project.demo"
                :class="project.id === 5 ? 'btn btn-special' : 'btn btn-primary'"
                target="_blank"
                @click.stop="openDemo(project)"
              >
                {{ project.id === 5 ? t('thisWebsite') : t('demo') }}
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                class="btn btn-outline"
                target="_blank"
                @click.stop
              >
                {{ t('github') }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="no-result">
        <div class="no-result-icon">🔍</div>
        <p class="no-result-title">{{ t('searchNoResult') }}</p>
        <p class="no-result-hint">{{ t('searchNoResultHint') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { useSEO } from '../composables/useSEO.js'

const { t, translations, currentLanguage } = useLanguage()

// SEO 設定
useSEO({
  title: 'Joe Chi-Boo - 技術作品集 | Portfolio',
  description: 'Joe Chi-Boo 技術作品集頁面，展示各種 Web 開發專案包括 Vue.js、.NET、JavaScript 等技術實作案例。',
  keywords: 'Joe Chi-Boo, 作品集, Portfolio, Vue.js, .NET, JavaScript, Web Development, 前端開發',
  ogTitle: 'Joe Chi-Boo - 技術作品集',
  ogDescription: '探索 Joe Chi-Boo 的技術作品集，包含多個 Web 開發專案與創意實作案例。',
  twitterTitle: 'Joe Chi-Boo - 技術作品集',
  twitterDescription: '探索 Joe Chi-Boo 的技術作品集，包含多個 Web 開發專案與創意實作案例。'
})

// 排版控制
const columns = ref(3)
const gridClass = computed(() => `grid-${columns.value}`)
const isCompact = computed(() => columns.value >= 5)

const setColumns = (col) => {
  columns.value = col
}

// 搜尋與類別篩選
const searchQuery = ref('')
const activeCategory = ref('all')

// 類別中繼資料（單一來源：卡片圖示/標籤與篩選按鈕共用）
const categoryMeta = {
  web: { icon: '🌐', labelKey: 'webDev' },
  enterprise: { icon: '🏢', labelKey: 'enterprise' },
  freelance: { icon: '🤝', labelKey: 'freelance' },
  tool: { icon: '🛠️', labelKey: 'tool' },
  health: { icon: '❤️', labelKey: 'health' },
  family: { icon: '👨‍👩‍👧', labelKey: 'family' },
  fun: { icon: '🎮', labelKey: 'fun' },
  learning: { icon: '🧠', labelKey: 'learning' },
  insight: { icon: '💡', labelKey: 'insight' },
  creative: { icon: '🎨', labelKey: 'creative' },
}
const DEFAULT_CATEGORY = { icon: '💻', labelKey: 'tech' }
const getCategoryMeta = (category) => categoryMeta[category] || DEFAULT_CATEGORY

// 依資料中實際存在的類別動態 group by 產生篩選按鈕（含「全部」與各類別數量）
const categoryFilters = computed(() => {
  const counts = {}
  for (const p of projects.value) {
    counts[p.category] = (counts[p.category] || 0) + 1
  }
  const chips = [
    { value: 'all', labelKey: 'filterAll', icon: '📂', count: projects.value.length },
  ]
  // 先依 categoryMeta 的定義順序排列，只保留實際有作品的類別
  for (const value of Object.keys(categoryMeta)) {
    if (counts[value]) {
      chips.push({ value, ...categoryMeta[value], count: counts[value] })
    }
  }
  // 補上 categoryMeta 未定義、但資料中出現的類別
  for (const value of Object.keys(counts)) {
    if (value && !categoryMeta[value]) {
      chips.push({ value, ...DEFAULT_CATEGORY, count: counts[value] })
    }
  }
  return chips
})

// 從 GitHub / Demo 連結中取出 repo 名稱（例如 finger-roulette）
const getRepoName = (project) => {
  const url = project.github || project.demo || ''
  const match = url.match(/github\.com\/[^/]+\/([^/]+)/i) || url.match(/github\.io\/([^/]+)/i)
  return match ? match[1] : ''
}

// 建立可搜尋字串：中英文名稱 + repo 名稱 + 連結
const getSearchHaystack = (project) => {
  const zhTitle = translations.zh?.[project.titleKey] || ''
  const enTitle = translations.en?.[project.titleKey] || ''
  return [
    zhTitle,
    enTitle,
    getRepoName(project),
    project.github || '',
    project.demo || '',
  ]
    .join(' ')
    .toLowerCase()
}

const filteredProjects = computed(() => {
  const keyword = searchQuery.value.trim().toLowerCase()
  return sortedProjects.value.filter((project) => {
    const matchCategory =
      activeCategory.value === 'all' || project.category === activeCategory.value
    const matchKeyword = !keyword || getSearchHaystack(project).includes(keyword)
    return matchCategory && matchKeyword
  })
})

const handleCardClick = (project) => {
  if (project.demo) {
    window.open(project.demo, '_blank')
  }
}

const openDemo = (project) => {
  window.open(project.demo, '_blank')
}

// 依 GitHub repo 最後 push 時間排序，沒有 GitHub 的專案排最後
const repoPushedAt = ref({})

onMounted(async () => {
  try {
    const res = await fetch('https://api.github.com/users/joechiboo/repos?per_page=100')
    if (!res.ok) return
    const repos = await res.json()
    const map = {}
    for (const repo of repos) {
      map[repo.name.toLowerCase()] = new Date(repo.pushed_at).getTime()
    }
    repoPushedAt.value = map
  } catch {
    // API 失敗時維持原本順序
  }
})

const getGithubPushedAt = (project) => {
  if (!project.github) return null
  const repoName = project.github.split('/').filter(Boolean).pop().toLowerCase()
  return repoPushedAt.value[repoName] ?? null
}

// GitHub 更新時間的相對顯示（例如「3 天前更新」/ "Updated 3 days ago"）
const getUpdatedDisplay = (project) => {
  const ts = getGithubPushedAt(project)
  if (ts === null) return null
  const locale = currentLanguage.value === 'zh' ? 'zh-TW' : 'en'
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
  const days = Math.round((ts - Date.now()) / 86400000)
  let rel
  if (days > -30) rel = rtf.format(Math.min(days, 0), 'day')
  else if (days > -365) rel = rtf.format(Math.round(days / 30), 'month')
  else rel = rtf.format(Math.round(days / 365), 'year')
  return t('updatedAt').replace('{time}', rel)
}

const sortedProjects = computed(() =>
  [...projects.value].sort((a, b) => {
    const ta = getGithubPushedAt(a)
    const tb = getGithubPushedAt(b)
    if (ta !== null && tb !== null) return tb - ta
    if (ta !== null) return -1
    if (tb !== null) return 1
    return 0
  })
)

const projects = ref([
  {
    id: 31,
    titleKey: 'project31Title',
    descriptionKey: 'project31Description',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'RWD', 'GitHub Pages'],
    demo: 'https://joechiboo.github.io/lucky-draw/',
    github: 'https://github.com/joechiboo/lucky-draw',
    category: 'tool',
    year: '2026',
    createdAt: '2026-07-09T04:25:43Z',
  },
  {
    id: 30,
    titleKey: 'project30Title',
    descriptionKey: 'project30Description',
    technologies: ['Vue 3', 'Vite', 'Tailwind CSS', 'Tesseract.js', 'CSV', 'Seeded RNG', 'GitHub Pages'],
    demo: 'https://joechiboo.github.io/ParkFee/',
    github: 'https://github.com/joechiboo/ParkFee',
    category: 'tool',
    year: '2026',
    createdAt: '2026-06-06T00:00:00Z',
  },
  {
    id: 29,
    titleKey: 'project29Title',
    descriptionKey: 'project29Description',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Path Planning', 'Simulation', 'GitHub Pages', 'GitHub Actions'],
    demo: 'https://joechiboo.github.io/greenkeeper/',
    github: 'https://github.com/joechiboo/greenkeeper',
    category: 'learning',
    year: '2026',
    createdAt: '2026-06-02T00:00:00Z',
  },
  {
    id: 28,
    titleKey: 'project28Title',
    descriptionKey: 'project28Description',
    technologies: ['VitePress', 'Markdown', 'Vue.js', 'GitHub Pages', 'Life Lessons', 'Workplace Insights'],
    demo: 'https://joechiboo.github.io/lessons-after-school/',
    github: 'https://github.com/joechiboo/lessons-after-school',
    category: 'insight',
    year: '2026',
    createdAt: '2026-05-24T12:00:00Z',
  },
  {
    id: 27,
    titleKey: 'project27Title',
    descriptionKey: 'project27Description',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'GitHub Actions'],
    demo: 'https://joechiboo.github.io/CubeLab/',
    github: 'https://github.com/joechiboo/CubeLab',
    category: 'family',
    year: '2026',
    createdAt: '2026-05-24T00:00:00Z',
  },
  {
    id: 26,
    titleKey: 'project26Title',
    descriptionKey: 'project26Description',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'ONNX Runtime', 'JavaScript', 'face-api.js', 'GitHub Pages'],
    demo: 'https://joechiboo.github.io/RoboEye-/',
    github: 'https://github.com/joechiboo/RoboEye-',
    category: 'learning',
    year: '2026',
    createdAt: '2026-04-09T00:00:00Z',
  },
  {
    id: 25,
    titleKey: 'project25Title',
    descriptionKey: 'project25Description',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'JSON/CSV', 'Spec-Driven Development'],
    demo: 'https://joechiboo.github.io/perf-toolkit/',
    github: 'https://github.com/joechiboo/perf-toolkit',
    category: 'enterprise',
    companyKey: 'project25Company',
    year: '2026',
    createdAt: '2026-02-10T00:00:00Z',
  },
  {
    id: 24,
    titleKey: 'project24Title',
    descriptionKey: 'project24Description',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Mobile Sensors', 'Device Orientation API'],
    demo: 'https://joechiboo.github.io/iBeer/',
    github: 'https://github.com/joechiboo/iBeer',
    category: 'fun',
    year: '2026',
    createdAt: '2026-01-29T00:00:00Z',
  },
  {
    id: 23,
    titleKey: 'project23Title',
    descriptionKey: 'project23Description',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas 2D', 'Touch Events API', 'Vibration API'],
    demo: 'https://joechiboo.github.io/finger-roulette/',
    github: 'https://github.com/joechiboo/finger-roulette',
    category: 'fun',
    year: '2025',
    createdAt: '2025-12-12T00:00:00Z',
  },
  {
    id: 22,
    titleKey: 'project22Title',
    descriptionKey: 'project22Description',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'CSS Animation'],
    demo: 'https://joechiboo.github.io/Fullscreen-Marquee/',
    github: 'https://github.com/joechiboo/Fullscreen-Marquee',
    category: 'tool',
    year: '2025',
    createdAt: '2025-12-03T00:00:00Z',
  },
  {
    id: 21,
    titleKey: 'project21Title',
    descriptionKey: 'project21Description',
    technologies: ['Vue 3', 'TypeScript', 'Vite', 'Vue Router 4', 'Pinia', 'Tailwind CSS 4'],
    demo: 'https://joechiboo.github.io/wish-pool/',
    github: 'https://github.com/joechiboo/wish-pool',
    category: 'fun',
    year: '2025',
    createdAt: '2025-11-25T00:00:00Z',
  },
  {
    id: 20,
    titleKey: 'project20Title',
    descriptionKey: 'project20Description',
    technologies: ['Vue.js 3', 'Vite', 'Chart.js', 'Composition API', 'Responsive Design'],
    demo: 'https://joechiboo.github.io/HomeCalc/',
    github: 'https://github.com/joechiboo/HomeCalc',
    category: 'tool',
    year: '2025',
    createdAt: '2025-11-14T00:00:00Z',
  },
  {
    id: 19,
    titleKey: 'project19Title',
    descriptionKey: 'project19Description',
    technologies: ['Vue.js', 'Knowledge Management', 'Note-taking', 'Reading Tracker'],
    demo: 'https://joechiboo.github.io/ReadTrack/',
    github: 'https://github.com/joechiboo/ReadTrack',
    category: 'tool',
    year: '2025',
    createdAt: '2025-11-14T00:00:00Z',
  },
  {
    id: 18,
    titleKey: 'project18Title',
    descriptionKey: 'project18Description',
    technologies: ['Vue.js', 'Web Bluetooth API', 'Gamification', 'Health & Fitness', 'PWA'],
    demo: 'https://joechiboo.github.io/HeartHero/',
    github: 'https://github.com/joechiboo/HeartHero',
    category: 'health',
    year: '2025',
    createdAt: '2025-11-11T00:00:00Z',
  },
  {
    id: 17,
    titleKey: 'project17Title',
    descriptionKey: 'project17Description',
    technologies: ['.NET 8', 'ASP.NET Core', 'SignalR', 'Vue.js', 'SQL Server', 'Entity Framework Core', 'Real-time Collaboration'],
    demo: 'https://joechiboo.github.io/LiveSheet/',
    github: 'https://github.com/joechiboo/LiveSheet',
    category: 'enterprise',
    companyKey: 'project17Company',
    year: '2025',
    createdAt: '2025-11-06T00:00:00Z',
  },
  {
    id: 16,
    titleKey: 'project16Title',
    descriptionKey: 'project16Description',
    technologies: ['Node.js', 'Express', 'Socket.io', 'PostgreSQL', 'Redis', 'Vue.js', 'Flutter'],
    demo: null,
    github: 'https://github.com/joechiboo/kids-time-control',
    category: 'family',
    year: '2025',
    createdAt: '2025-10-23T00:00:00Z',
  },
  {
    id: 15,
    titleKey: 'project15Title',
    descriptionKey: 'project15Description',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Responsive Design', '教育應用'],
    demo: 'https://joechiboo.github.io/Fast-Trivia/',
    github: 'https://github.com/joechiboo/Fast-Trivia',
    category: 'tool',
    year: '2025',
    createdAt: '2025-10-19T00:00:00Z',
  },
  {
    id: 14,
    titleKey: 'project14Title',
    descriptionKey: 'project14Description',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'GitHub Pages', 'Automation', 'Scheduled Tasks'],
    demo: 'https://joechiboo.github.io/work-progress/',
    github: 'https://github.com/joechiboo/work-progress',
    category: 'tool',
    year: '2025',
    createdAt: '2025-10-08T00:00:00Z',
  },
  {
    id: 13,
    titleKey: 'project13Title',
    descriptionKey: 'project13Description',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Node.js', 'Express'],
    demo: 'https://joechiboo.github.io/FridgeMaster',
    github: 'https://github.com/joechiboo/FridgeMaster',
    category: 'freelance',
    year: '2025',
    createdAt: '2025-10-01T00:00:00Z',
  },
  {
    id: 12,
    titleKey: 'project12Title',
    descriptionKey: 'project12Description',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PWA', '生產力工具'],
    demo: 'https://joechiboo.github.io/Pomodoro/',
    github: 'https://github.com/joechiboo/Pomodoro',
    category: 'freelance',
    year: '2025',
    createdAt: '2025-09-26T11:47:49Z',
  },
  {
    id: 11,
    titleKey: 'project11Title',
    descriptionKey: 'project11Description',
    technologies: ['Vue.js', 'PWA', 'Responsive Design', 'JavaScript', 'CSS3', '健康應用'],
    demo: 'https://joechiboo.github.io/CyclePulse/',
    github: 'https://github.com/joechiboo/CyclePulse',
    category: 'health',
    year: '2025',
    createdAt: '2025-09-23T23:13:17Z',
  },
  {
    id: 10,
    titleKey: 'project10Title',
    descriptionKey: 'project10Description',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'PWA', '健康應用'],
    demo: 'https://joechiboo.github.io/water-tracker/',
    github: 'https://github.com/joechiboo/water-tracker',
    category: 'health',
    year: '2025',
    createdAt: '2025-09-22T12:45:00Z',
  },
  {
    id: 9,
    titleKey: 'project9Title',
    descriptionKey: 'project9Description',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'GitHub Pages', '教育應用'],
    demo: 'https://joechiboo.github.io/CharMon/',
    github: 'https://github.com/joechiboo/CharMon',
    category: 'tool',
    year: '2025',
    createdAt: '2025-09-20T07:48:03Z',
  },
  {
    id: 8,
    titleKey: 'project8Title',
    descriptionKey: 'project8Description',
    technologies: ['Vue.js', 'TypeScript', 'CSS3', 'GitHub Pages'],
    demo: 'https://joechiboo.github.io/ZebraSite/',
    github: 'https://github.com/joechiboo/ZebraSite',
    category: 'enterprise',
    year: '2025',
    companyKey: 'project8Company',
    createdAt: '2025-08-30T13:52:35Z',
  },
  {
    id: 7,
    titleKey: 'project7Title',
    descriptionKey: 'project7Description',
    technologies: ['Vue.js', 'TypeScript', 'CSS3', 'GitHub Pages'],
    demo: 'https://joechiboo.github.io/uclcloud/',
    github: 'https://github.com/joechiboo/uclcloud',
    category: 'enterprise',
    year: '2025',
    companyKey: 'project7Company',
    createdAt: '2025-08-06T08:34:43Z',
  },
  {
    id: 6,
    titleKey: 'project6Title',
    descriptionKey: 'project6Description',
    technologies: ['HTML', 'JavaScript', 'CSS3'],
    demo: 'https://joechiboo.github.io/jiayi/',
    github: 'https://github.com/joechiboo/jiayi',
    category: 'family',
    year: '2025',
    createdAt: '2025-08-05T01:06:32Z',
  },
  {
    id: 5,
    titleKey: 'project5Title',
    descriptionKey: 'project5Description',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'GitHub Pages', 'Responsive Design'],
    demo: window.location.origin,
    github: 'https://github.com/joechiboo/joechiboo.github.io',
    category: 'web',
    year: '2025',
    createdAt: '2025-08-01T23:41:43Z',
  },
  {
    id: 4,
    titleKey: 'project4Title',
    descriptionKey: 'project4Description',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'GitHub Pages'],
    demo: 'https://joechiboo.github.io/bordeaux-ii/',
    github: 'https://github.com/joechiboo/bordeaux-ii',
    category: 'web',
    year: '2024',
  },
  {
    id: 3,
    titleKey: 'project3Title',
    descriptionKey: 'project3Description',
    technologies: [
      'Web Development',
      'Database Management',
      'User Authentication',
      'Google Analytics',
    ],
    demo: 'https://www.examservice.com.tw/',
    github: null,
    category: 'enterprise',
    yearKey: 'project3Year',
    companyKey: 'project3Company',
  },
  {
    id: 2,
    titleKey: 'project2Title',
    descriptionKey: 'project2Description',
    technologies: ['Web Development', 'Membership System', 'Event Management', 'Responsive Design'],
    demo: 'https://www.taipeigolf.org.tw/',
    github: null,
    category: 'freelance',
    yearKey: 'project2Year',
    clientKey: 'project2Client',
  },
])
</script>

<style scoped>
.portfolio {
  padding-top: 80px;
  min-height: 100vh;
  background: var(--bg-light);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.container {
  position: relative;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

/* 搜尋 + 篩選工具列 */
.portfolio-toolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.search-box {
  position: relative;
  width: 100%;
  max-width: 480px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  pointer-events: none;
  opacity: 0.6;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.75rem;
  border: 2px solid var(--color-text-secondary);
  border-radius: 25px;
  background: var(--bg-white);
  color: var(--color-text-primary);
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.search-input::placeholder {
  color: var(--color-text-secondary);
  opacity: 0.7;
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
}

.search-clear {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: var(--bg-lighter);
  color: var(--color-text-secondary);
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.search-clear:hover {
  background: #007bff;
  color: white;
}

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.filter-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.9rem;
  border: 2px solid var(--color-text-secondary);
  border-radius: 20px;
  background: transparent;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-chip:hover {
  border-color: #007bff;
  color: #007bff;
}

.filter-chip.active {
  background: #007bff;
  border-color: #007bff;
  color: white;
}

[data-theme='dark'] .filter-chip.active {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

.chip-icon {
  font-size: 0.95rem;
}

.chip-count {
  font-size: 0.72rem;
  font-weight: 600;
  min-width: 1.1rem;
  padding: 0 0.3rem;
  border-radius: 10px;
  background: var(--bg-lighter);
  color: var(--color-text-secondary);
}

.filter-chip.active .chip-count {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}

.result-count {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  margin-bottom: 2rem;
}

/* 無搜尋結果 */
.no-result {
  text-align: center;
  padding: 4rem 1rem;
  color: var(--color-text-secondary);
}

.no-result-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.no-result-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
}

.no-result-hint {
  font-size: 0.9rem;
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

.layout-controls {
  position: absolute;
  top: 1rem;
  right: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.layout-label {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-right: 0.5rem;
}

.layout-btn {
  width: 36px;
  height: 36px;
  border: 2px solid var(--color-text-secondary);
  background: transparent;
  color: var(--color-text-secondary);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.layout-btn:hover {
  border-color: #007bff;
  color: #007bff;
}

.layout-btn.active {
  background: #007bff;
  border-color: #007bff;
  color: white;
}

[data-theme='dark'] .layout-btn.active {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

.portfolio-grid {
  display: grid;
  gap: 2rem;
}

.portfolio-grid.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.portfolio-grid.grid-4 {
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.portfolio-grid.grid-5 {
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.portfolio-grid.grid-6 {
  grid-template-columns: repeat(6, 1fr);
  gap: 0.8rem;
}

/* 平板尺寸 */
@media (max-width: 1024px) and (min-width: 769px) {
  .portfolio-grid.grid-3,
  .portfolio-grid.grid-4 {
    grid-template-columns: repeat(3, 1fr);
  }
  .portfolio-grid.grid-5,
  .portfolio-grid.grid-6 {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* 中等螢幕：2列佈局 */
@media (min-width: 481px) and (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .layout-controls {
    display: none;
  }
}

.project-card {
  background: var(--bg-white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base);
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.project-image.compact-image {
  height: 120px;
}

.project-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.compact .project-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.project-category {
  font-size: 1.1rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.compact .project-category {
  font-size: 0.85rem;
}

.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.compact .project-content {
  padding: 1rem;
}

.project-header {
  margin-bottom: 1rem;
}

.compact .project-header {
  margin-bottom: 0.5rem;
}

.project-content h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.compact .project-content h3 {
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.compact .project-meta {
  gap: 0.3rem;
  margin-bottom: 0.3rem;
}

.project-year,
.project-company,
.project-client {
  background: var(--bg-lighter);
  color: var(--color-text-secondary);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.compact .project-year,
.compact .project-company,
.compact .project-client,
.compact .project-time {
  padding: 0.15rem 0.4rem;
  font-size: 0.7rem;
}

.project-company {
  background: #10b981;
  color: white;
}

.project-client {
  background: #f59e0b;
  color: white;
}

.project-time {
  background: #8b5cf6;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
}

.project-content p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.tech-stack {
  margin-bottom: 1.5rem;
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

/* 深色模式下的tech-tag顏色 */
[data-theme='dark'] .tech-tag {
  background: #1e3a8a;
  color: #bfdbfe;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  width: 100px;
  text-align: center;
}

.compact .btn {
  padding: 0.4rem 0.8rem;
  font-size: 0.75rem;
  width: auto;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

/* 深色模式下的按鈕顏色 */
[data-theme='dark'] .btn-primary {
  background: #1d4ed8;
  color: white;
}

[data-theme='dark'] .btn-primary:hover {
  background: #1e40af;
}

.btn-outline {
  background: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}

.btn-outline:hover {
  background: #007bff;
  color: white;
}

/* 深色模式下的outline按鈕 */
[data-theme='dark'] .btn-outline {
  color: #60a5fa;
  border: 2px solid #60a5fa;
}

[data-theme='dark'] .btn-outline:hover {
  background: #60a5fa;
  color: #1a202c;
}

.btn-special {
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  color: white;
  position: relative;
  overflow: hidden;
}

.btn-special:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);
}

.btn-special::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-special:hover::before {
  left: 100%;
}

/* 平板/手機：縮小篩選按鈕、避免擠壓 */
@media (max-width: 768px) {
  .portfolio-toolbar {
    margin-bottom: 0.75rem;
  }

  .filter-chip {
    padding: 0.35rem 0.75rem;
    font-size: 0.82rem;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .page-header {
    margin-bottom: 1.5rem;
  }

  .portfolio-grid {
    grid-template-columns: 1fr !important;
  }

  .project-links {
    flex-direction: column;
  }

  .layout-controls {
    display: none;
  }

  .search-input {
    font-size: 0.95rem;
    padding: 0.65rem 2.5rem;
  }

  /* 手機上類別篩選改為可橫向滑動，維持單行不換行 */
  .filter-chips {
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    width: 100%;
    padding-bottom: 0.25rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .filter-chips::-webkit-scrollbar {
    display: none;
  }

  .filter-chip {
    flex: 0 0 auto;
  }
}
</style>
