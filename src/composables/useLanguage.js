import { ref, watch } from 'vue'

const currentLanguage = ref('zh')

// 語言文本映射
const translations = {
  zh: {
    // 導航
    home: '首頁',
    about: '關於我',
    experience: '經歷',
    leisure: '休閒',
    portfolio: '作品集',
    contact: '聯絡',

    // 通用
    demo: '線上展示',
    github: 'GitHub',
    thisWebsite: '本網站',

    // 主題
    lightMode: '淺色模式',
    darkMode: '深色模式',
    language: '語言',
    chinese: '中文',
    english: 'English',

    // 作品集頁面
    portfolioTitle: '技術作品集',
    portfolioSubtitle: '我的技術專案與開發經驗展示',
    layoutColumns: '每行顯示',
    webDev: '網站開發',
    enterprise: '企業專案',
    creative: '創意專案',
    freelance: '外包專案',
    tech: '技術專案',

    // 語音介紹
    voiceIntro: '自我介紹',
    voiceIntroTitle: '語音自我介紹',
    voiceIntroTooltip: '點擊收聽一分鐘自我介紹',
    voiceNotSupported: '您的瀏覽器不支援語音功能',
    currentlyPlaying: '正在播放：',
    websiteGuide: '🧭 網站導覽：',
    speakerName: '紀伯喬 Joe Chi-Boo',

    // 語音介紹內容
    introText:
      '我是紀伯喬，一位擁有十五年dot NET開發經驗的軟體工程師。目前任職於大安聯合醫事檢驗所，擔任資訊室主任，並於臺北教育大學資訊科學系在職專班進修中。我曾在上海工作多年，累積超過兩萬小時的專業開發實戰經驗，擅長網頁技術整合與應用。這個網站整理了我的專業背景與創作內容，如果有任何問題，歡迎隨時聯繫我！',

    // 導覽說明
    jumpToExperience: '跳轉工作經歷',
    currentPosition: '目前職務介紹',
    continuingEducation: '在職專班進修中',
    shanghaExperience: '上海TutorABC經歷',
    jumpToContact: '跳轉聯絡頁面',
    scrollToTop: '滑動到頂部',

    // 首頁內容
    name: 'Joe, Chi-Boo',
    jobTitle: '軟體工程師 & 在職專班就讀中 & 執行者',
    dailyEquation: '工程腦 × 商業魂 × 生活流',
    lifeQuote: '「人生像寫程式 — 複雜的事，讓自己簡單做；重要的事，寫進 daily commit。」',
    downloadResume: '下載履歷',
    contactMe: '聯絡我',
    professionalSkills: '專業技能',
    professionalSkillsDesc: '具備全端開發能力，專精於現代Web技術',
    teamwork: '團隊合作',
    teamworkDesc: '重視溝通與協作，擅長跨部門協調',
    continuousLearning: '持續學習',
    continuousLearningDesc: '保持對新技術的好奇心，不斷提升自我',

    // Toast 通知
    resumeInDevelopment: '履歷下載功能開發中',
    thankYouForAttention: '感謝您的關注，敬請期待！',

    // 關於頁面
    aboutPageTitle: '關於我',
    aboutPageSubtitle: '軟體工程師的成長歷程與人生哲學',

    // 個人資訊
    profileName: 'Joe, Chi-Boo',
    profileRole: '資訊室主任',
    profileLocation: '位置:',
    profileLocationValue: '台灣、台北',
    profileSpecialty: '專長:',
    profileSpecialtyValue: '全端開發',
    profileLanguage: '語言:',
    profileLanguageValue: '中文、英文',
    profileAlt: 'Joe Chi-Boo 個人照片',

    // 工程哲學
    myPhilosophy: '我的工程哲學',
    engineeringCore: '工程師的核心：解決問題',

    // 三步驟解決問題
    stepFace: '面對',
    stepFaceDesc:
      '人們大多不喜好直視問題、避重就輕，因而造就決策失準。勇於面對問題是解決的第一步。',
    stepDiscover: '發現/了解',
    stepDiscoverDesc:
      '減少「未知的未知」就可以讓能力越來越精煉。深入理解問題本質比急於解決更重要。',
    stepPDCA: 'PDCA',
    stepPDCADesc: '制度化的概念可以確立目標、減少浪費。持續改進是工程師的核心素養。',

    // 學習的藝術
    learningArt: '學習的藝術',
    learningEssence: '學生的本質是「<strong>熱忱、快速、持續學習</strong>」',
    learningQuote:
      '發現自己有著「三分鐘熱度」的特性，最近想到一個方法可以保持熱度——就是在三分鐘內完成任務！',
    scrumNote:
      '我很喜歡<strong>Scrum 的精神</strong>，設立階段性目標，努力衝刺。把大西瓜去皮切片，更利於獲得成就感。',

    // 團隊協作
    socialBeing: '人是群居的生物',
    smallScrewImportant: '每個小螺絲都至關重要',
    internalExternalCollab: '內外協作',
    internalExternalCollabDesc:
      '團隊合作不僅僅是內部，也必須和客戶合作。在缺乏溝通的狀況下，很難體會對方的感受。',
    bidirectionalComm: '雙向溝通',
    bidirectionalCommDesc: '溝通是雙向的，單面的你說我做容易產生許多問題。',
    trustBuilding: '信任建立',
    trustBuildingDesc: '初期的信任感建立相當重要，這是一切合作的基礎。',

    // 技術與人文
    techAndHumanities: '技術與人文',
    techHumanitiesDesc: '我相信軟體開發不僅僅是寫程式碼，更是理解問題本質、設計解決方案的過程。',
    beliefTechChallenge: '每個技術挑戰都是一次學習機會',
    beliefTeamCollab: '每次團隊協作都是提升溝通能力的練習',
    beliefTechServesPeople: '技術服務於人，而非人服務於技術',

    // 技能專長
    skillsTitle: '技能專長',
    frontendDev: '前端開發',
    backendDev: '後端開發',
    mobileDev: '移動端開發',
    projectManagement: '專案管理',
    systemAdmin: '系統管理',
    dataToolsTitle: '數據處理 & 工具',

    // 技能標籤
    responsiveDesign: '響應式設計',
    agileDev: '敏捷開發',
    teamCollaboration: '團隊協作',
    securityManagement: '資安管理',
    medicalInfoSystem: '醫療資訊系統',
    systemArchitecture: '系統架構',

    // 工作價值觀
    workValuesTitle: '工作價值觀',
    problemSolving: '解決問題',
    problemSolvingDesc: '專注於理解問題本質，提供有效且可維護的解決方案',
    teamworkValue: '團隊合作',
    teamworkValueDesc: '重視溝通與協作，相信團隊的力量能創造更大的價值',
    continuousLearningValue: '持續學習',
    continuousLearningValueDesc: '保持對新技術的好奇心，持續提升專業技能和知識深度',
    innovativeThinking: '創新思維',
    innovativeThinkingDesc: '勇於嘗試新方法，在既有框架中尋找創新的可能性',
    qualityFirst: '品質至上',
    qualityFirstDesc: '坚持繭寫高品質程式碼，重視測試覆蓋和程式碼審查',
    growthMindset: '成長心態',
    growthMindsetDesc: '擁抱挑戰和變化，將困難視為成長的機會而非障礙',

    // 技能亮點
    skillHighlightsTitle: '技能亮點',
    dotnetExpert: '.NET 生態<br>系統專家',
    dotnetExpertYears: '15年經驗',
    dotnetExpertDesc: '從 .NET Framework 到 .NET Core，擁有完整的微軟技術栈開發經驗',
    crossPlatformDev: '跨平台<br>開發經驗',
    crossPlatformDevYears: 'Web · App · 系統整合',
    crossPlatformDevDesc: '具備全端開發能力，擅長不同平台間的技術整合與架構設計',
    teamLeadership: '團隊領導能力',
    teamLeadershipYears: '帶領 10 人團隊',
    teamLeadershipDesc: '擁有實際管理經驗，擅長團隊協作、技術指導和專案管理',
    internationalExp: '跨國工作經驗',
    internationalExpYears: '台灣 · 上海 · 多地協作',
    internationalExpDesc: '具備跨文化溝通能力，熟悉不同地區的工作文化與商業習慣',

    // 經歷頁面
    experiencePageTitle: '工作經歷',
    experiencePageSubtitle: '專業背景與技術成長歷程',
    educationTitle: '教育背景',
    certificationsTitle: '專業訓練與認證',

    // 工作經驗
    workExp1Position: '資訊室主任',
    workExp1Company: '大安聯合醫事檢驗所',
    workExp1Period: '2019年7月 - 現在',
    workExp1Description: '負責醫檢所整體資訊系統規劃、管理與維護，確保醫療資訊系統穩定運行。',
    workExp1Resp1: '規劃和管理醫檢所資訊系統架構',
    workExp1Resp2: '監督系統維護和資安管理',
    workExp1Resp3: '協調跨部門資訊需求與專案執行',
    workExp1Resp4: '評估和導入新技術解決方案',
    workExp1Resp5: '管理資訊團隊並制定技術標準',

    workExp2Position: '研發工程師',
    workExp2Company: 'TutorABC (上海/台灣)',
    workExp2Period: '2016年6月 - 2019年7月',
    workExp2Description: '負責電銷/客服CTI平台的研發工作，專注於提升系統效能。',
    workExp2Resp1: '開發和維護CTI電話平台功能',
    workExp2Resp2: '優化即時監控戰情中心系統效能',
    workExp2Resp3: '與產品團隊協作改善使用者體驗',
    workExp2Resp4: '進行系統測試和品質保證',

    workExp3Position: 'IT工程師',
    workExp3Company: '五甫科技 (上海)',
    workExp3Period: '2015年8月 - 2016年6月',
    workExp3Description: '負責企業資訊系統開發與維護，支援業務流程自動化需求。',
    workExp3Resp1: '開發企業內部管理系統',
    workExp3Resp2: '維護和優化現有業務系統',
    workExp3Resp3: '協助IT基礎設施建置',
    workExp3Resp4: '提供技術支援和系統培訓',
    workExp3Resp5: '參與業務流程分析和改善',

    workExp4Position: '程式設計師',
    workExp4Company: 'TOEIC - 忠欣/掌方科技',
    workExp4Period: '2012年3月 - 2015年8月',
    workExp4Description: '參與電商平台與相關行政流程開發，累積軟體開發基礎經驗。',
    workExp4Resp1: '開發維護測驗報名網站含商店街功能',
    workExp4Resp2: '開發國際志工系統和報名平台',
    workExp4Resp3: '實作資料處理和報表功能',
    workExp4Resp4: '進行系統測試和除錯',
    workExp4Resp5: '協助系統部署和維護',
    workExp4Resp6: '開發獎學金申請系統',

    // 教育背景
    edu1Degree: '資訊科學碩士(在職專班)',
    edu1DegreeWithBreak: '資訊科學碩士<br>(在職專班)',
    edu1School: '國立臺北教育大學',
    edu1Period: '2024 - 就讀中',
    edu1Description:
      '主修軟體工程、人工智慧等核心課程，論文方向：用少量的檢驗項目預測其他項目的檢驗值',

    edu2Degree: '資訊工程學士',
    edu2School: '國立臺北科技大學',
    edu2Period: '2005年 - 2009年',
    edu2Description: '主修軟體工程、資料結構、演算法等核心課程。',

    edu3Degree: '電子科',
    edu3School: '臺北市立木柵高工',
    edu3Period: '2002年 - 2005年',
    edu3Description: '理組背景，數學和物理基礎紮實，開始對程式設計產生興趣。',

    // 專業認證
    cert1Name: 'ISO/IEC 27001 Lead Auditor',
    cert1FullName: 'Information Security Management Systems Lead Auditor Training Course',
    cert1Issuer: 'BSI 英國標準協會',
    cert1Category: '資訊安全',
    cert1Description: '資訊安全管理系統主導稽核員訓練課程，具備 ISO 27001 標準的深入了解與稽核能力',

    cert2Name: 'ISO 14971:2019',
    cert2FullName: '醫療器材風險管理訓練課程',
    cert2Issuer: '專業訓練機構',
    cert2Category: '醫療器材',
    cert2Description: '醫療器材風險管理國際標準訓練，專精於醫療器材全生命週期風險識別與管理',

    cert3Name: 'ISO 13485:2016',
    cert3FullName:
      'Medical Devices Quality Management System Internal Auditor Training Course (ISO 13485:2016)',
    cert3Issuer: 'BSI 英國標準協會',
    cert3Category: '品質管理',
    cert3Description: '醫療器材品質管理系統內部稽核員訓練，熟悉 ISO 13485 標準要求與稽核技巧',

    // 認證日期
    cert1Date: '2023年',
    cert2Date: '2022年',
    cert3Date: '2021年',

    // 技術標籤
    techDotNetMVC: '.NET Core',
    techSQLServer: 'Vue',
    techMedicalInfoSys: '醫療資訊系統',
    techSecurityMgmt: '資安管理',
    techWindowsServer: 'Claude Code',
    techJQuery: 'jQuery',
    techEntityFramework: 'Entity Framework',
    techMSSQL: 'MS SQL',
    techRedis: 'Redis',
    techCSharp: 'C#',
    techJavaScript: 'JavaScript',
    techIIS: 'IIS',

    // 休閒頁面
    leisurePageTitle: '休閒生活',
    leisurePageSubtitle: '平衡工作與生活的藝術',

    // 興趣愛好
    drawing: '繪畫',
    drawingDesc: '透過畫筆記錄生活，用色彩表達情感',
    drawingReason:
      '繪畫讓我能夠靜下心來觀察世界的美好，每一筆都是對生活的記錄和情感的釋放。在繪畫的過程中，時間似乎靜止，只有我和畫布之間的對話。',

    creation: '創作',
    creationDesc: '發揮想像力，創造有意思的想法',
    creationReason:
      '創作是一種純粹的快樂，在發想與實作之間找到平衡。每當完成一件作品時，那種「原來我也可以」的成就感是無法取代的。',

    sports: '運動',
    sportsDesc: '保持健康體魄，挑戰自我極限',
    sportsReason:
      '運動讓我感受到身心的平衡與活力。每次流汗都是對自己的挑戰，每次超越都是對極限的探索。在運動中找到的不只是健康，更是內心的平靜與自信。',

    music: '音樂',
    musicDesc: '用旋律豐富生活，用節奏調節心情',
    musicReason:
      '音樂是心靈的語言，能夠觸及文字無法表達的情感深處。彈奏時的專注與投入，讓我在旋律中找到寧靜，在和聲中感受生命的美好。音樂不僅豐富了我的生活，更是情感的出口。',

    // 互動提示
    clickToView: '點擊查看作品',
    whyLike: '為什麼喜歡：',

    // 作品展示
    galleryTitle: '創作展示',
    galleryIntro: '以下是一些個人創作和興趣活動的記錄',

    // 分類標題
    drawingWorks: '繪畫作品',
    drawingWorksDesc: '記錄繪畫練習與創作的成長歷程',
    musicWorks: '音樂作品',
    musicWorksDesc: '音樂演奏與表演的珍貴記錄',

    // 作品描述
    frogSketch: '青蛙素描',
    frogSketchDesc: '寫實風格的青蛙素描，展現對細節的觀察力',

    practiceDrawing6: 'Practice Drawing #6',
    practiceDrawing6Desc: '繪畫練習作品，持續探索不同的繪畫技法',

    practiceDrawing5: 'Practice Drawing #5',
    practiceDrawing5Desc: '展現對線條和陰影處理的進步',

    motherPortrait: '母親肖像',
    motherPortraitDesc: '溫馨的母親肖像畫，表達對家人的愛',

    practiceDrawing10: 'Practice Drawing #10',
    practiceDrawing10Desc: '技法更加成熟的練習作品，展現繪畫水平的提升',

    practiceDrawing3: 'Practice Drawing #3',
    practiceDrawing3Desc: '早期練習作品，展現對藝術的熱愛與投入',

    chickenFamily: '母雞帶小雞',
    chickenFamilyDesc: '可愛的動物主題創作，充滿生活情趣',

    pigSketch: '小豬素描',
    pigSketchDesc: '活潑可愛的豬豬繪畫，展現對動物形態的掌握',

    // 音樂作品
    companyPerformance: '公司尾牙表演',
    companyPerformanceDesc: '在公司年終聚會上的鋼琴演奏，與同事分享音樂的美好',

    hotelPiano: '飯店有架鋼琴',
    hotelPianoDesc: '詢問了之後可以彈，即興演奏的美好時光',

    violinPractice: '小提琴練習',
    violinPracticeDesc: '探索不同樂器的表達方式，挑戰新的音樂領域',

    duetPiece1: '4手聯彈-曲目1-好棒',
    duetPiece1Desc: '與大兒子的鋼琴四手聯彈，美好的親子音樂時光',

    duetPiece2: '4手聯彈-曲目2-噢！蘇珊娜',
    duetPiece2Desc: '繼續與大兒子的音樂練習，培養默契與技巧',

    duetPiece3: '4手聯彈-曲目3-321嘿嘿',
    duetPiece3Desc: '聽起來很困難，彈起來很容易的趣味曲目',

    rockRadish: '4手聯彈-曲目4-搖滾的蘿莉塔',
    rockRadishDesc: '活潑有趣的一首歌',

    // 空狀態
    emptyCategory: '🚧 此類別的作品即將更新，敬請期待！',
    comingSoon: '待續...',
    toBeUpdated: '即將更新',

    // 燈箱/圖片檢視
    viewImage: '點擊查看',
    switchImages: '← → 切換圖片 | ESC 關閉',
    youtubePlay: 'YouTube 播放',

    // 工作與生活平衡
    workLifeBalance: '工作與生活的平衡',
    workLifeBalanceIntro:
      '我相信優秀的軟體工程師不只是技術專家，更是一個全面發展的人。透過多元化的興趣愛好，我能夠：',

    balanceBenefit1: '培養創意思維，在程式設計中找到新的靈感',
    balanceBenefit2: '透過藝術創作訓練細緻觀察力和美感',
    balanceBenefit3: '運動讓我保持健康的身體和清晰的思維',
    balanceBenefit4: '音樂提升我的專注力和對節奏的敏感度',
    balanceBenefit5: '多元化的經驗讓我更能理解不同使用者的需求',

    balanceQuote1: '創意來自於不同領域的碰撞，技術與藝術的結合往往能產生最驚艷的作品。',
    balanceQuote2: '健康的身心是持續創造的基礎，工作效率與生活品質同等重要。',

    // 未來目標
    futureGoals: '未來目標',
    sportsChallenge: '運動挑戰',
    musicProduction: '音樂製作',

    divingLicense: '考潛水執照',
    sunMoonLakeSwim: '❌ 日月潭泳渡',
    keeluneSwim: '❌ 基隆外木山長泳',
    marathonRun: '✅ 寶礦力路跑 4k',
    musicPerformance: '與大兒子一同四手聯彈，上台表演',

    // 作品集專案內容
    project25Title: 'Perf-Toolkit 績效管理工具包',
    project25Description:
      '專為 5-15 人 IT 團隊打造的績效管理系統，涵蓋從資料蒐集到報告生成的完整工作流程。包含四大核心模組：考核評分框架（五維度加權評分）、里程碑追蹤（年度計畫與月度進度監控）、出缺勤分析（HR CSV 匯入統計分析）、報告產生器（主管版/公開版/個人版）。系統設計強調工具不做決策，僅提供數據供人為判斷。採用 JSON/CSV 儲存的輕量架構，零部署成本，支援模組漸進式導入，並預設資料匿名化保護隱私。採用規格驅動開發（SDD）方法論結合 AI 協作進行開發。',
    project25Company: '大安聯合',

    project24Title: 'iBeer 虛擬啤酒',
    project24Description:
      '🍺 傾斜手機來喝酒！一款趣味互動的虛擬啤酒 App，使用手機的陀螺儀和方向感測器，模擬真實喝啤酒的體驗。只需傾斜手機，就能看到啤酒隨著重力流動，泡沫逐漸減少，帶來逼真的互動效果。採用純 HTML5 技術打造，使用 Device Orientation API 讀取手機傾斜角度，搭配流暢的 CSS3 動畫效果。適合在聚會或休閒時刻使用，為朋友帶來歡樂氛圍。輕量級設計，無需安裝，打開網頁即可使用。',

    project23Title: '手指輪盤',
    project23Description:
      '一款互動式多點觸控遊戲，專為團體決策設計。多人同時將手指放在螢幕上，倒數計時後隨機選出一位「幸運兒」——非常適合決定誰請客、誰先開始等場景。支援多點觸控同時偵測，每根手指都有獨特的顏色視覺效果。可調整倒數時間（1-5秒），搭配旋轉掃描光束和粒子爆炸動畫效果。支援設備震動回饋，離開螢幕後自動重置。採用純 HTML/CSS/JavaScript 開發，運用 Canvas 2D 繪圖、Touch Events API 和 Vibration API，無需任何框架依賴。',

    project22Title: '全螢幕跑馬燈',
    project22Description:
      '一個簡潔有趣的全螢幕跑馬燈應用，讓文字在螢幕上滾動展示。適合用於活動現場、演講展示、店面公告等場景。支援自訂文字內容、滾動速度、顏色設定等功能，操作簡單直覺。採用純 HTML/CSS/JavaScript 實作，無需任何框架依賴，輕量快速。響應式設計確保在各種設備上都能完美呈現。',

    project21Title: 'Wish Pool 許願池',
    project21Description:
      '投幣許願平台 - 讓你的專案願望成真，也可以資助別人的夢想。一個社群導向的許願分享應用，使用者可以發布個人願望、為他人的願望送上支持、分享願望實現的喜悅。支援匿名許願，搭配星星飄散動畫效果營造溫馨氛圍。採用現代化技術棧：Vue 3 + TypeScript + Vite + Pinia + Tailwind CSS 4，提供流暢的使用體驗。透過社群力量將夢想化為現實，讓每個願望都有被實現的機會。',

    project20Title: 'HomeCalc 房貸計算助手',
    project20Description:
      '從頭期款儲蓄到房貸管理的完整購屋工具。提供精準的本息平均攤還計算，與銀行試算結果相符。支援多方案比較、視覺化圖表展示本金與利息趨勢、還款進度追蹤等功能。採用 Vue.js 3 Composition API 與 Chart.js 打造，提供跨裝置響應式介面。所有計算在本地完成，保護使用者隱私。分階段開發中，目前處於 MVP 階段，專注於架構設計、計算邏輯與基礎介面實作。適合正在規劃購屋的族群，協助做出明智的財務決策。',

    project19Title: 'ReadTrack 閱讀追蹤系統',
    project19Description:
      '將閱讀轉化為lasting見解的知識管理工具。幫助使用者記錄閱讀進度、捕捉思考筆記、建立專屬知識庫。透過系統化的追蹤機制，讓每天一點時間的閱讀累積成一生的智慧。專案目前處於開發初期，採用 Spec-Driven Development 方法論進行規劃。適合喜愛閱讀、希望將閱讀內容內化為個人知識體系的使用者。未來計畫整合筆記功能、知識圖譜視覺化等進階特色。',

    project18Title: 'HeartHero 心跳英雄',
    project18Description:
      '用心跳打敗魔王！一款結合心率監測與遊戲化的創新健身應用。透過藍牙心率監測設備，將使用者的即時心跳轉化為遊戲戰鬥力，心率越高攻擊越強，讓運動變得有趣且充滿動力。採用 Spec-Driven Development (SDD) 開發模式，目前處於規格定義階段。計畫使用 Vue.js + Web Bluetooth API 打造跨平台 PWA 應用，讓使用者在享受遊戲樂趣的同時達到健身目標。適合不愛運動但喜歡遊戲的族群，透過遊戲化機制培養運動習慣。',

    project17Title: 'LiveSheet 即時協作試算表系統',
    project17Description:
      '基於 .NET 8 + SignalR + Vue.js 打造的即時協作試算表系統，讓團隊成員能夠同時編輯共享工作表，實現類似 Google Sheets 的協作體驗但可自主部署。採用 SignalR 實現亞秒級即時同步，支援 5-10 人同時編輯，提供熟悉的試算表介面與操作流程。後端使用 ASP.NET Core 8 與 Entity Framework Core (DB First)，資料持久化儲存於 SQL Server，確保資料不遺失。專案採分階段開發，目前已完成規格設計（Phase 0），正進行 MVP 開發。',
    project17Company: '大安聯合',

    project16Title: 'Kids Time Control 兒童數位健康控制系統',
    project16Description:
      '基於兒童發展心理學的數位健康管理系統，協助家長透過建立常規、環境設計、自然後果引導孩子培養內在動機與自律能力。摒棄遊戲化獎勵機制，避免孩子因外在獎勵而失去內在動力。參考美國兒科學會（AAP）與世界衛生組織（WHO）指南，強調溫暖陪伴與正向溝通，幫助 4-12 歲兒童建立健康的數位使用習慣。採用跨平台架構（Vue.js 家長管理端 + Flutter 兒童互動端），提供時間管理、使用數據分析與教育內容推薦。',

    project15Title: 'Fast-Trivia 快問快答',
    project15Description:
      'Fast-Trivia 是一款互動式益智問答遊戲應用，提供多樣化的問答挑戰和即時反饋。遊戲設計簡潔直覺，適合各年齡層玩家。透過趣味性的問答形式，提升知識學習的樂趣與效率，是寓教於樂的最佳選擇。',

    project14Title: '工作進度自動化排程',
    project14Description:
      '自動化工作進度管理系統，每日透過排程自動將昨天的工作進度上傳至系統。系統區分「工作專案」與「個人 Side Project」兩大類別，讓工作內容與個人創作專案清楚分類。透過自動化排程減少手動記錄負擔，提升進度追蹤效率與透明度。',

    project13Title: '冰箱管理大師',
    project13Description:
      '「冰箱管理大師」Web 版是一款食材管理平台，使用者可以透過電腦快速輸入與管理冰箱食材資訊。系統會在食材即將過期前主動提醒，並提供清晰的庫存檢視、分類與篩選工具，協助使用者減少浪費與規劃餐點。',

    project12Title: '番茄鐘專注計時器',
    project12Description:
      '基於經典番茄工作法的專注計時應用，承接他人的創意靈感並加以實現。番茄工作法是一種時間管理方法，通過25分鐘專注工作與5分鐘休息的循環，幫助提高工作效率與專注力。應用提供簡潔直觀的倒數計時介面，是提升工作和學習效率的實用工具。',

    project11Title: '飛輪訓練計時器',
    project11Description:
      'CyclePulse 是一款專為飛輪訓練設計的智能 Web 應用程式，提供個人化計時、強度監控和多種訓練模式。針對手機橫向放置在飛輪手把上的使用場景進行優化，為運動愛好者打造專業的訓練體驗。支援自定義訓練計劃、即時數據追蹤和進度分析功能。',

    project8Title: '聯合官方網站重構',
    project8Description:
      '聯合醫事檢驗所官方網站的全面重構專案，採用現代化Web技術提升網站效能和使用者體驗。重新設計視覺風格與資訊架構，優化行動裝置瀏覽體驗，整合醫事服務展示、聯絡資訊管理等功能，為醫療檢驗服務提供更專業、更友善的線上平台。',
    project8Company: '大安聯合',

    project7Title: '聯合檢驗雲重構',
    project7Description:
      '醫事檢驗所核心業務系統的現代化重構專案，採用Vue.js + TypeScript架構提升系統效能與用戶體驗。整合檢驗報告查詢、醫事機構管理、資料統計分析等核心功能，為醫療檢驗產業提供更穩定高效的數位化解決方案。',
    project7Company: '大安聯合',
    project7Year: '企業專案',

    project6Title: '家一 創意專案',
    project6Description:
      '與七歲大兒子共同構思的創意專案，結合孩子的天真想像力與技術實現。專案體現親子合作的美好，將童心與創意轉化為實際的網站應用，展現家庭生活與技術創作的完美結合。',

    project5Title: '個人履歷',
    project5Description:
      '使用 Vue.js 開發的個人作品集網站，展示技術專案、工作經驗和個人資訊。採用響應式設計和現代化UI，並整合語音導覽功能，提供互動式用戶體驗。',

    project4Title: '波爾多社區網站',
    project4Description:
      '使用 Vue.js 開發的現代化社區門戶網站，提供社區資訊展示、互動功能和用戶參與平台。專案採用響應式設計，確保在各種設備上的最佳體驗。',

    project3Title: '測驗服務專區',
    project3Description:
      '專業的英語檢定考試報名平台，支援TOEIC、TOEFL等多種測驗註冊。整合考試行事曆、線上報名、用戶管理和多語言介面，提供完整的考試服務生態系統。',
    project3Company: 'Chun Shin Limited',
    project3Year: '前公司專案',

    project2Title: '台北市高爾夫球協會',
    project2Description:
      '台北市高爾夫球協會官方網站，提供會員管理、賽事資訊、活動報名等功能。整合會員系統與線上報名機制，支援協會各項業務運作與會員服務。響應式設計確保各裝置良好體驗。',
    project2Client: '台北市高爾夫球協會',
    project2Year: '外包專案',

    project9Title: '字樂園',
    project9Description:
      '針對4-12歲兒童的互動式中文學習應用，結合寶可夢主題教學、筆畫練習和注音符號學習。可生成A4列印練習單，附家長管理功能。透過遊戲化學習方式，讓孩子在趣味中掌握中文基礎。',

    project10Title: '飲水追蹤應用',
    project10Description:
      '專為不愛喝水的人設計的零壓力飲水追蹤應用。目標用戶是幾乎不喝水、每天喝不到1000ml的族群。核心理念是從小目標開始（250ml），湯、茶、咖啡都算數。特色包含無壓力提醒、慶祝小進步、友善鼓勵，讓喝水變成一件輕鬆愉快的事。',

    // 聯絡頁面
    contactPageTitle: '聯絡我',
    contactPageSubtitle: '歡迎與我交流技術、工作機會或任何有趣的想法',

    // 聯絡方式
    lineContact: 'Line',
    lineContactDesc: '即時通訊聯繫',
    lineContactButton: '微信聯繫',

    phoneContact: '電話',
    phoneNumber: '+886 986 642 519',
    phoneCallButton: '撥打電話',

    facebookContact: 'Facebook',
    facebookContactDesc: '社交媒體聯繫',
    facebookViewButton: '查看檔案',

    primaryEmail: '主要郵箱',
    primaryEmailAddress: 'joechiboo@gmail.com',
    sendEmailButton: '發送郵件',

    backupEmail: '備用郵箱',
    backupEmailAddress: 'stst1239joe@hotmail.com',

    wechatContact: 'WeChat',
    wechatContactDesc: '即時通訊聯繫',
    wechatContactButton: '微信聯繫',

    // LINE Pay 商業模式
    supportMyWork: '支持我的工作',
    linePayTitle: 'LINE Pay 贊助支持',
    linePayDesc: '如果我的工作對您有幫助，歡迎透過 LINE Pay 支持我的開源專案與技術分享。每一份支持都是我繼續前進的動力。',
    whySupportTitle: '為什麼支持？',
    linePayPoint1: '持續產出高品質的技術文章與教學內容',
    linePayPoint2: '維護並更新開源專案，讓更多人受益',
    linePayPoint3: '提供技術諮詢與問題解答服務',
    supportOptionsTitle: '參考贊助金額選項',
    supportOption1: '一杯咖啡 (給作者加油打氣)',
    supportOption2: '一頓大餐 (支持持續開發)',
    supportOption3: '實現你的願望 (客製化功能開發 - 一個晚上的工作)',
    linePayScanHint: '掃描 QR Code 進行贊助',
    linePaySupport: '您的每一份支持都讓我能夠投入更多時間在技術分享與開源貢獻上。感謝您的贊助！',

    // 聯絡表單
    sendMessage: '發送訊息',
    formName: '姓名',
    formEmail: '電子郵件',
    formSubject: '主旨',
    formMessage: '訊息內容',
    formNameRequired: '請輸入姓名',
    formEmailRequired: '請輸入電子郵件',
    formEmailInvalid: '請輸入有效的電子郵件格式',
    formSubjectRequired: '請輸入主旨',
    formMessageRequired: '請輸入訊息內容',
    formMessageTooShort: '訊息內容至少需要10個字元',
    sendingMessage: '發送中...',
    sendMessageButton: '發送訊息',

    // 工作狀態
    workStatus: '工作狀態',
    currentStatus: '目前狀態：免費或收費兼職專案',
    projectInterests: '我正在尋找新的挑戰和機會，特別對以下類型的專案感興趣：',
    interestFrontend: '前端開發專案（Vue.js）',
    interestFullstack: '全端 Web 應用程式開發',
    interestDotNet: '.NET MVC / .NET Core',
    interestInnovation: '創新科技專案',
    interestConsulting: '技術諮詢與指導',
    responseTime: '回覆時間：通常在24小時內回覆郵件',

    // 位置資訊
    locationInfo: '位置資訊',
    locationTaiwan: '台灣',
    locationDesc: '基於台灣，可配合不同時區的工作安排',
    timezone: '時區：UTC+8 (台北時間)',
    workingHours: '工作時間：彈性安排，可配合團隊需求',
    remoteWork: '遠端工作：支援遠端協作',
    bestContactTime: '最佳聯絡時間',
    weekdays: '週一至週五',
    weekdaysTime: '09:00 - 18:00',
    emergencyContact: '緊急聯繫',
    emergencyTime: '隨時歡迎',
  },
  en: {
    // 導航
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    leisure: 'Leisure',
    portfolio: 'Portfolio',
    contact: 'Contact',

    // 通用
    demo: 'Demo',
    github: 'GitHub',
    thisWebsite: 'This Site',

    // 主題
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    language: 'Language',
    chinese: '中文',
    english: 'English',

    // 作品集頁面
    portfolioTitle: 'Technical Portfolio',
    portfolioSubtitle: 'Showcase of my technical projects and development experience',
    layoutColumns: 'Columns',
    webDev: 'Web Development',
    enterprise: 'Enterprise Projects',
    creative: 'Creative Projects',
    freelance: 'Freelance Projects',
    tech: 'Technical Projects',

    // 語音介紹
    voiceIntro: 'Voice Intro',
    voiceIntroTitle: 'Voice Introduction',
    voiceIntroTooltip: 'Click to listen to my one-minute introduction',
    voiceNotSupported: 'Your browser does not support voice features',
    currentlyPlaying: 'Now Playing:',
    websiteGuide: '🧭 Website Guide:',
    speakerName: 'Joe Chi-Boo',

    // 語音介紹內容
    introText:
      'I am Ji, Po-Chiao, a software engineer with fifteen years of .NET development experience. I currently work as IT Director at Ta-An Medical Laboratory and am pursuing a part-time degree in Information Science at Taipei University of Education. I worked in Shanghai for many years, accumulating over 20,000 hours of professional development experience, specializing in web technology integration and applications. This website showcases my professional background and creative content. Please feel free to contact me if you have any questions!',

    // 導覽說明
    jumpToExperience: 'Jump to Experience',
    currentPosition: 'Current Position',
    continuingEducation: 'Continuing Education',
    shanghaExperience: 'Shanghai TutorABC Experience',
    jumpToContact: 'Jump to Contact',
    scrollToTop: 'Scroll to Top',

    // 首頁內容
    name: 'Joe, Chi-Boo',
    jobTitle: 'Software Engineer & Graduate Student & Executor',
    dailyEquation: 'Engineering Mind × Business Soul × Life Flow',
    lifeQuote:
      '"Life is like programming — Keep complex things simple; Write important things in daily commits."',
    downloadResume: 'Resume',
    contactMe: 'Contact',
    professionalSkills: 'Professional Skills',
    professionalSkillsDesc:
      'Full-stack development capabilities with expertise in modern web technologies',
    teamwork: 'Teamwork',
    teamworkDesc: 'Value communication and collaboration, excel at cross-department coordination',
    continuousLearning: 'Continuous Learning',
    continuousLearningDesc:
      'Maintain curiosity about new technologies and continuously improve myself',

    // Toast 通知
    resumeInDevelopment: 'Resume Download Feature Under Development',
    thankYouForAttention: 'Thank you for your attention, stay tuned!',

    // 關於頁面
    aboutPageTitle: 'About Me',
    aboutPageSubtitle: "A Software Engineer's Growth Journey and Life Philosophy",

    // 個人資訊
    profileName: 'Joe, Chi-Boo',
    profileRole: 'IT Director',
    profileLocation: 'Location:',
    profileLocationValue: 'Taiwan, Taipei',
    profileSpecialty: 'Expertise:',
    profileSpecialtyValue: 'Full-stack Development',
    profileLanguage: 'Languages:',
    profileLanguageValue: 'Chinese, english',
    profileAlt: 'Joe Chi-Boo personal photo',

    // 工程哲學
    myPhilosophy: 'My Engineering Philosophy',
    engineeringCore: 'The Core of Engineering: Problem Solving',

    // 三步驟解決問題
    stepFace: 'Face',
    stepFaceDesc:
      'Most people dislike facing problems directly and tend to avoid the important issues, leading to poor decision-making. Courage to face problems is the first step to solving them.',
    stepDiscover: 'Discover/Understand',
    stepDiscoverDesc:
      'Reducing "unknown unknowns" makes your abilities more refined. Understanding the essence of problems is more important than rushing to solve them.',
    stepPDCA: 'PDCA',
    stepPDCADesc:
      'Systematization helps establish goals and reduce waste. Continuous improvement is the core competency of engineers.',

    // 學習的藝術
    learningArt: 'The Art of Learning',
    learningEssence:
      'The essence of being a student is "<strong>Passion, Speed, and Continuous Learning</strong>"',
    learningQuote:
      'I discovered I have "three-minute enthusiasm" - recently I thought of a way to maintain enthusiasm: complete tasks within three minutes!',
    scrumNote:
      'I really like the <strong>spirit of Scrum</strong> - setting phased goals and sprinting hard. Peeling and slicing a big watermelon makes it easier to gain a sense of achievement.',

    // 團隊協作
    socialBeing: 'Humans are Social Beings',
    smallScrewImportant: 'Every small screw is crucial',
    internalExternalCollab: 'Internal & External Collaboration',
    internalExternalCollabDesc:
      "Teamwork is not just internal - we must also collaborate with clients. Without communication, it's hard to understand each other's feelings.",
    bidirectionalComm: 'Bidirectional Communication',
    bidirectionalCommDesc:
      'Communication is bidirectional. One-sided "you talk, I do" approaches easily create many problems.',
    trustBuilding: 'Trust Building',
    trustBuildingDesc:
      "Building initial trust is extremely important - it's the foundation of all cooperation.",

    // 技術與人文
    techAndHumanities: 'Technology and Humanities',
    techHumanitiesDesc:
      'I believe software development is not just about writing code, but understanding problem essence and designing solutions.',
    beliefTechChallenge: 'Every technical challenge is a learning opportunity',
    beliefTeamCollab: 'Every team collaboration is practice for improving communication skills',
    beliefTechServesPeople: 'Technology serves people, not the other way around',

    // 技能專長
    skillsTitle: 'Skills & Expertise',
    frontendDev: 'Frontend Development',
    backendDev: 'Backend Development',
    mobileDev: 'Mobile Development',
    projectManagement: 'Project Management',
    systemAdmin: 'System Administration',
    dataToolsTitle: 'Data Processing & Tools',

    // 技能標籤
    responsiveDesign: 'Responsive Design',
    agileDev: 'Agile Development',
    teamCollaboration: 'Team Collaboration',
    securityManagement: 'Security Management',
    medicalInfoSystem: 'Medical Information Systems',
    systemArchitecture: 'System Architecture',

    // 工作價值觀
    workValuesTitle: 'Work Values',
    problemSolving: 'Problem Solving',
    problemSolvingDesc:
      'Focus on understanding problem essence and providing effective, maintainable solutions',
    teamworkValue: 'Teamwork',
    teamworkValueDesc:
      'Value communication and collaboration, believing team strength creates greater value',
    continuousLearningValue: 'Continuous Learning',
    continuousLearningValueDesc:
      'Maintain curiosity about new technologies and continuously improve professional skills and knowledge depth',
    innovativeThinking: 'Innovative Thinking',
    innovativeThinkingDesc:
      'Dare to try new methods and find innovative possibilities within existing frameworks',
    qualityFirst: 'Quality First',
    qualityFirstDesc:
      'Insist on writing high-quality code, emphasizing test coverage and code reviews',
    growthMindset: 'Growth Mindset',
    growthMindsetDesc:
      'Embrace challenges and changes, viewing difficulties as growth opportunities rather than obstacles',

    // 技能亮點
    skillHighlightsTitle: 'Skill Highlights',
    dotnetExpert: '.NET Ecosystem<br>Expert',
    dotnetExpertYears: '15 Years Experience',
    dotnetExpertDesc:
      'From .NET Framework to .NET Core, complete Microsoft technology stack development experience',
    crossPlatformDev: 'Cross-Platform<br>Development Experience',
    crossPlatformDevYears: 'Web · App · System Integration',
    crossPlatformDevDesc:
      'Full-stack development capabilities with expertise in technical integration and architecture design across platforms',
    teamLeadership: 'Team Leadership',
    teamLeadershipYears: 'Leading 10-Person Team',
    teamLeadershipDesc:
      'Actual management experience, skilled in team collaboration, technical guidance, and project management',
    internationalExp: 'International Work Experience',
    internationalExpYears: 'Taiwan · Shanghai · Multi-location Collaboration',
    internationalExpDesc:
      'Cross-cultural communication skills, familiar with work cultures and business practices in different regions',

    // Experience Page
    experiencePageTitle: 'Work Experience',
    experiencePageSubtitle: 'Professional Background and Technical Growth Journey',
    educationTitle: 'Education',
    certificationsTitle: 'Professional Training & Certifications',

    // Work Experience
    workExp1Position: 'IT Director',
    workExp1Company: 'Ta-An Medical Laboratory',
    workExp1Period: 'July 2019 - Present',
    workExp1Description:
      'Responsible for overall IT system planning, management and maintenance at the medical laboratory, ensuring stable operation of medical information systems.',
    workExp1Resp1: 'Plan and manage medical laboratory IT system architecture',
    workExp1Resp2: 'Supervise system maintenance and security management',
    workExp1Resp3: 'Coordinate cross-departmental IT requirements and project execution',
    workExp1Resp4: 'Evaluate and implement new technology solutions',
    workExp1Resp5: 'Manage IT team and establish technical standards',

    workExp2Position: 'R&D Engineer',
    workExp2Company: 'TutorABC (Shanghai/Taiwan)',
    workExp2Period: 'June 2016 - July 2019',
    workExp2Description:
      'Responsible for R&D work on telesales/customer service CTI platform, focusing on improving system performance.',
    workExp2Resp1: 'Develop and maintain CTI phone platform functionality',
    workExp2Resp2: 'Optimize real-time monitoring command center system performance',
    workExp2Resp3: 'Collaborate with product team to improve user experience',
    workExp2Resp4: 'Conduct system testing and quality assurance',

    workExp3Position: 'IT Engineer',
    workExp3Company: 'Wufu Technology (Shanghai)',
    workExp3Period: 'August 2015 - June 2016',
    workExp3Description:
      'Responsible for enterprise information system development and maintenance, supporting business process automation needs.',
    workExp3Resp1: 'Develop enterprise internal management systems',
    workExp3Resp2: 'Maintain and optimize existing business systems',
    workExp3Resp3: 'Assist with IT infrastructure setup',
    workExp3Resp4: 'Provide technical support and system training',
    workExp3Resp5: 'Participate in business process analysis and improvement',

    workExp4Position: 'Programmer',
    workExp4Company: 'TOEIC - Zhongxin/Zhangfang Technology',
    workExp4Period: 'March 2012 - August 2015',
    workExp4Description:
      'Participated in e-commerce platform and related administrative process development, accumulating fundamental software development experience.',
    workExp4Resp1:
      'Develop and maintain exam registration website with shopping mall functionality',
    workExp4Resp2: 'Develop international volunteer system and registration platform',
    workExp4Resp3: 'Implement data processing and reporting functions',
    workExp4Resp4: 'Conduct system testing and debugging',
    workExp4Resp5: 'Assist with system deployment and maintenance',
    workExp4Resp6: 'Develop scholarship application system',

    // Education
    edu1Degree: 'Master of Information Science (Part-time Program)',
    edu1DegreeWithBreak: 'Master of Information Science<br>(Part-time Program)',
    edu1School: 'National Taipei University of Education',
    edu1Period: '2024 - Current',
    edu1Description:
      'Major in Software Engineering, Artificial Intelligence and other core courses. Thesis direction: Predicting other test values using a small number of test items',

    edu2Degree: 'Bachelor of Information Engineering',
    edu2School: 'National Taipei University of Technology',
    edu2Period: '2005 - 2009',
    edu2Description:
      'Major in Software Engineering, Data Structures, Algorithms and other core courses.',

    edu3Degree: 'Electronics Department',
    edu3School: 'Taipei Municipal Muzha Industrial High School',
    edu3Period: '2002 - 2005',
    edu3Description:
      'Science track background with solid mathematics and physics foundation, began developing interest in programming.',

    // Professional Certifications
    cert1Name: 'ISO/IEC 27001 Lead Auditor',
    cert1FullName: 'Information Security Management Systems Lead Auditor Training Course',
    cert1Issuer: 'BSI British Standards Institution',
    cert1Category: 'Information Security',
    cert1Description:
      'Information Security Management Systems Lead Auditor Training Course, with deep understanding of ISO 27001 standards and audit capabilities',

    cert2Name: 'ISO 14971:2019',
    cert2FullName: 'Medical Device Risk Management Training Course',
    cert2Issuer: 'Professional Training Institution',
    cert2Category: 'Medical Devices',
    cert2Description:
      'Medical device risk management international standard training, specializing in medical device full lifecycle risk identification and management',

    cert3Name: 'ISO 13485:2016',
    cert3FullName:
      'Medical Devices Quality Management System Internal Auditor Training Course (ISO 13485:2016)',
    cert3Issuer: 'BSI British Standards Institution',
    cert3Category: 'Quality Management',
    cert3Description:
      'Medical device quality management system internal auditor training, familiar with ISO 13485 standard requirements and audit techniques',

    // Certification Dates
    cert1Date: '2023',
    cert2Date: '2022',
    cert3Date: '2021',

    // Technology Tags
    techDotNetMVC: '.NET Core',
    techSQLServer: 'Vue',
    techMedicalInfoSys: 'Medical Information Systems',
    techSecurityMgmt: 'Security Management',
    techWindowsServer: 'Claude Code',
    techJQuery: 'jQuery',
    techEntityFramework: 'Entity Framework',
    techMSSQL: 'MS SQL',
    techRedis: 'Redis',
    techCSharp: 'C#',
    techJavaScript: 'JavaScript',
    techIIS: 'IIS',

    // Leisure Page
    leisurePageTitle: 'Leisure Life',
    leisurePageSubtitle: 'The Art of Balancing Work and Life',

    // Hobbies
    drawing: 'Drawing',
    drawingDesc: 'Recording life through brushes, expressing emotions with colors',
    drawingReason:
      'Drawing allows me to calm down and observe the beauty of the world. Every stroke is a record of life and release of emotions. In the process of drawing, time seems to stand still, with only dialogue between me and the canvas.',

    creation: 'Creation',
    creationDesc: 'Unleashing imagination to create interesting ideas',
    creationReason:
      'Creation is pure joy, finding balance between conception and implementation. Every time I complete a work, the sense of achievement "I can do it too" is irreplaceable.',

    sports: 'Sports',
    sportsDesc: 'Maintaining healthy physique, challenging personal limits',
    sportsReason:
      'Sports make me feel the balance and vitality of body and mind. Every sweat is a challenge to myself, every breakthrough is exploration of limits. In sports, I find not just health, but inner peace and confidence.',

    music: 'Music',
    musicDesc: 'Enriching life with melodies, adjusting mood with rhythms',
    musicReason:
      'Music is the language of the soul, touching emotional depths that words cannot express. The focus and dedication when playing allow me to find tranquility in melodies and feel the beauty of life in harmonies. Music not only enriches my life but serves as an emotional outlet.',

    // Interactive Hints
    clickToView: 'Click to view works',
    whyLike: 'Why I like it:',

    // Gallery
    galleryTitle: 'Creative Showcase',
    galleryIntro: 'Here are some records of personal creations and hobby activities',

    // Category Titles
    drawingWorks: 'Drawing Works',
    drawingWorksDesc: 'Recording the growth journey of drawing practice and creation',
    musicWorks: 'Music Works',
    musicWorksDesc: 'Precious records of musical performances and shows',

    // Work Descriptions
    frogSketch: 'Frog Sketch',
    frogSketchDesc: 'Realistic frog sketch showcasing attention to detail',

    practiceDrawing6: 'Practice Drawing #6',
    practiceDrawing6Desc:
      'Drawing practice work, continuously exploring different drawing techniques',

    practiceDrawing5: 'Practice Drawing #5',
    practiceDrawing5Desc: 'Showing progress in line and shadow handling',

    motherPortrait: 'Mother Portrait',
    motherPortraitDesc: 'Warm mother portrait expressing love for family',

    practiceDrawing10: 'Practice Drawing #10',
    practiceDrawing10Desc: 'More mature practice work showing improvement in drawing skills',

    practiceDrawing3: 'Practice Drawing #3',
    practiceDrawing3Desc: 'Early practice work showing love and dedication to art',

    chickenFamily: 'Hen with Chicks',
    chickenFamilyDesc: 'Cute animal-themed creation full of life interest',

    pigSketch: 'Pig Sketch',
    pigSketchDesc: 'Lively and cute pig drawing showing mastery of animal forms',

    // Music Works
    companyPerformance: 'Company Annual Party Performance',
    companyPerformanceDesc:
      'Piano performance at company year-end gathering, sharing the beauty of music with colleagues',

    hotelPiano: 'Hotel Piano',
    hotelPianoDesc: 'Asked permission to play, wonderful time of improvised performance',

    violinPractice: 'Violin Practice',
    violinPracticeDesc:
      'Exploring different instruments expressions, challenging new musical territories',

    duetPiece1: '4-Hand Duet - Piece 1 - Great',
    duetPiece1Desc: 'Piano four-hand duet with eldest son, wonderful parent-child music time',

    duetPiece2: '4-Hand Duet - Piece 2 - Oh! Susanna',
    duetPiece2Desc: 'Continuing music practice with eldest son, developing rapport and technique',

    duetPiece3: '4-Hand Duet - Piece 3 - 321 Hey Hey',
    duetPiece3Desc: 'Sounds difficult but easy to play - a fun and interesting piece',

    rockRadish: 'Four-Hands Duet - Piece 4 - Rock Lolita',
    rockRadishDesc: 'A lively and interesting song',

    // Empty States
    emptyCategory: '🚧 Works in this category are coming soon, stay tuned!',
    comingSoon: 'Coming soon...',
    toBeUpdated: 'To be updated',

    // Lightbox/Image Viewer
    viewImage: 'Click to view',
    switchImages: '← → Switch images | ESC Close',
    youtubePlay: 'YouTube Play',

    // Work-Life Balance
    workLifeBalance: 'Work and Life Balance',
    workLifeBalanceIntro:
      'I believe excellent software engineers are not just technical experts, but well-rounded individuals. Through diverse hobbies, I can:',

    balanceBenefit1: 'Cultivate creative thinking and find new inspiration in programming',
    balanceBenefit2: 'Train keen observation and aesthetic sense through artistic creation',
    balanceBenefit3: 'Exercise keeps my body healthy and mind clear',
    balanceBenefit4: 'Music enhances my focus and sensitivity to rhythm',
    balanceBenefit5: 'Diverse experiences help me better understand different user needs',

    balanceQuote1:
      'Creativity comes from collisions between different fields; the combination of technology and art often produces the most amazing works.',
    balanceQuote2:
      'Healthy body and mind are the foundation of continuous creation; work efficiency and quality of life are equally important.',

    // Future Goals
    futureGoals: 'Future Goals',
    sportsChallenge: 'Sports Challenge',
    musicProduction: 'Music Production',

    divingLicense: 'Get diving license',
    sunMoonLakeSwim: '❌ Sun Moon Lake Swimming',
    keeluneSwim: '❌ Keelung Waimushan Long Distance Swimming',
    marathonRun: '✅ Pocari Run 4k',
    musicPerformance: 'Four-hand piano duet performance with eldest son on stage',

    // Portfolio Project Content
    project25Title: 'Perf-Toolkit Performance Management',
    project25Description:
      'A performance management system designed for 5-15 person IT teams, covering the complete workflow from data collection to report generation. Features four core modules: Assessment Framework (weighted scoring across five dimensions), Milestone Tracking (annual work plans and monthly progress monitoring), Attendance Analysis (HR CSV import and statistical analysis), and Report Generator (manager, public, and individual versions). The system emphasizes that tools don\'t make decisions but provide data for human judgment. Uses lightweight JSON/CSV storage architecture with zero deployment cost, supports gradual adoption of individual modules, and defaults to data anonymization for privacy. Developed using Spec-Driven Development (SDD) methodology combined with AI collaboration.',
    project25Company: 'Ta-An United',

    project24Title: 'iBeer Virtual Beer',
    project24Description:
      '🍺 Tilt your phone to drink! A fun interactive virtual beer app that uses your phone\'s gyroscope and orientation sensors to simulate a realistic beer-drinking experience. Simply tilt your phone to watch the beer flow with gravity and foam gradually decrease, creating an authentic interactive effect. Built with pure HTML5 technology, utilizing the Device Orientation API to read phone tilt angles, combined with smooth CSS3 animation effects. Perfect for parties or leisure moments, bringing joy to friends. Lightweight design with no installation required - just open the webpage and use.',

    project23Title: 'Finger Roulette',
    project23Description:
      'An interactive multi-touch game designed for group decision-making. Multiple people place their fingers on the screen simultaneously, and after a countdown, one finger is randomly selected as the "winner" — perfect for deciding who pays, who goes first, and more. Features multi-touch support with unique color effects for each finger. Adjustable countdown timer (1-5 seconds) with rotating scan beam and particle explosion animations. Supports device vibration feedback and automatic reset when all fingers leave the screen. Built with pure HTML/CSS/JavaScript using Canvas 2D graphics, Touch Events API, and Vibration API — no framework dependencies required.',

    project22Title: 'Fullscreen Marquee',
    project22Description:
      'A simple and fun fullscreen marquee application that scrolls text across the screen. Perfect for events, presentations, store announcements, and more. Features customizable text content, scroll speed, and color settings with an intuitive interface. Built with pure HTML/CSS/JavaScript without any framework dependencies, making it lightweight and fast. Responsive design ensures perfect display on all devices.',

    project21Title: 'Wish Pool',
    project21Description:
      'A coin-toss wishing platform - Make your project wishes come true and support others\' dreams. A community-driven wish-sharing application where users can post personal wishes, send support to others\' wishes, and share the joy of wish fulfillment. Features anonymous wishing with star-scattering animation effects creating a warm atmosphere. Built with modern tech stack: Vue 3 + TypeScript + Vite + Pinia + Tailwind CSS 4, providing a smooth user experience. Turn dreams into reality through community power, giving every wish a chance to come true.',

    project20Title: 'HomeCalc Mortgage Calculator',
    project20Description:
      'A comprehensive home buying assistant from down payment savings to mortgage management. Provides precise equal principal and interest repayment calculations that match bank estimates. Features multi-plan comparison, visual charts showing principal and interest trends, and payment progress tracking. Built with Vue.js 3 Composition API and Chart.js, offering responsive cross-device interface. All calculations performed locally to protect user privacy. Currently in MVP phase, focusing on architecture design, calculation logic, and basic interface implementation. Perfect for those planning home purchases, helping make informed financial decisions.',

    project19Title: 'ReadTrack Reading Tracker',
    project19Description:
      'A knowledge management tool that transforms reading into lasting insights. Helps users track reading progress, capture thoughtful notes, and build a personal knowledge base. Through systematic tracking mechanisms, daily reading accumulates into lifelong wisdom. Currently in early development using Spec-Driven Development methodology. Ideal for avid readers who want to internalize reading content into their personal knowledge system. Future plans include note integration, knowledge graph visualization, and other advanced features.',

    project18Title: 'HeartHero',
    project18Description:
      'Defeat monsters with your heartbeat! An innovative fitness app that combines heart rate monitoring with gamification. Using Bluetooth heart rate devices, it transforms your real-time heartbeat into gaming combat power - the higher your heart rate, the stronger your attacks, making exercise fun and motivating. Developed using Spec-Driven Development (SDD) methodology, currently in specification phase. Plans to build a cross-platform PWA using Vue.js + Web Bluetooth API, allowing users to achieve fitness goals while enjoying gameplay. Perfect for people who dislike exercise but love gaming, cultivating exercise habits through gamification.',

    project17Title: 'LiveSheet Real-time Collaborative Spreadsheet',
    project17Description:
      'A real-time collaborative spreadsheet system built with .NET 8 + SignalR + Vue.js, enabling team members to simultaneously edit shared worksheets with a Google Sheets-like experience but self-hosted. Utilizes SignalR for sub-second real-time synchronization, supporting 5-10 concurrent editors with a familiar spreadsheet interface and workflow. Backend powered by ASP.NET Core 8 and Entity Framework Core (DB First approach), with persistent data storage in SQL Server to prevent data loss. The project follows a phased development approach, currently in Phase 0 (specification complete) and moving toward MVP development.',
    project17Company: 'Ta-An United',

    project16Title: 'Kids Time Control',
    project16Description:
      'A digital health management system grounded in child developmental psychology, helping parents guide children to develop intrinsic motivation and self-discipline through establishing routines, environmental design, and natural consequences. Avoids gamification and reward mechanisms that can undermine intrinsic motivation. Based on AAP (American Academy of Pediatrics) and WHO (World Health Organization) guidelines, emphasizing warm companionship and positive communication to help children aged 4-12 establish healthy digital usage habits. Built with cross-platform architecture (Vue.js parent management + Flutter child interaction), providing time management, usage analytics, and educational content recommendations.',

    project15Title: 'Fast-Trivia',
    project15Description:
      'Fast-Trivia is an interactive trivia quiz game application offering diverse question challenges with instant feedback. The game features a clean and intuitive design suitable for players of all ages. Through engaging quiz formats, it enhances the joy and efficiency of knowledge learning, making it the perfect choice for educational entertainment.',

    project14Title: 'Automated Work Progress Scheduler',
    project14Description:
      'An automated work progress management system that uploads yesterday\'s work progress to the system daily via scheduled tasks. The system categorizes content into "Work Projects" and "Personal Side Projects", providing clear separation between work tasks and personal creative endeavors. Through automation, it reduces manual logging burden and enhances progress tracking efficiency and transparency.',

    project13Title: 'FridgeMaster',
    project13Description:
      'FridgeMaster Web version is a food ingredient management platform that allows users to quickly input and manage fridge food information via computer. The system proactively reminds users before ingredients expire and provides clear inventory views, categorization, and filtering tools to help users reduce waste and plan meals.',

    project12Title: 'Pomodoro Focus Timer',
    project12Description:
      'A focus timer application based on the classic Pomodoro Technique, building upon others\' creative inspiration. The Pomodoro Technique is a time management method that uses 25-minute focused work sessions followed by 5-minute breaks to enhance productivity and concentration. The application provides a clean, intuitive countdown interface, serving as a practical tool for improving work and study efficiency.',

    project11Title: 'CyclePulse',
    project11Description:
      'CyclePulse is an intelligent web application designed specifically for spinning workouts, providing personalized timing, intensity monitoring, and multiple training modes. Optimized for mobile phones placed horizontally on spinning bike handlebars, creating a professional training experience for fitness enthusiasts. Features custom training plans, real-time data tracking, and progress analysis.',

    project8Title: 'United Official Website Refactoring',
    project8Description:
      'Comprehensive refactoring project for the official website of United Medical Laboratory, using modern web technologies to enhance website performance and user experience. Redesigned visual style and information architecture, optimized mobile browsing experience, integrated medical service displays and contact information management functions, providing a more professional and user-friendly online platform for medical testing services.',
    project8Company: 'Ta-An United',

    project7Title: 'UCL Cloud System Refactoring',
    project7Description:
      'Modern refactoring project for the core business system of medical laboratory services, using Vue.js + TypeScript architecture to enhance system performance and user experience. Integrates core functions including laboratory report queries, medical institution management, and data statistical analysis, providing stable and efficient digital solutions for the medical testing industry.',
    project7Company: 'Ta-An United',
    project7Year: 'Enterprise Project',

    project6Title: 'Jiayi Creative Project',
    project6Description:
      'Creative project co-conceived with my seven-year-old eldest son, combining childlike imagination with technical implementation. The project embodies the beauty of parent-child collaboration, transforming innocent creativity into actual web applications, showcasing the perfect blend of family life and technical creation.',

    project5Title: 'Personal Portfolio',
    project5Description:
      'Personal portfolio website developed using Vue.js, showcasing technical projects, work experience, and personal information. Features responsive design and modern UI, integrated with voice navigation for interactive user experience.',

    project4Title: 'Bordeaux Community Website',
    project4Description:
      'Modern community portal website developed using Vue.js, providing community information display, interactive features, and user engagement platform. The project adopts responsive design to ensure optimal experience on various devices.',

    project3Title: 'Exam Service Center',
    project3Description:
      'Professional English proficiency test registration platform supporting various tests including TOEIC, TOEFL registration. Integrates exam calendar, online registration, user management, and multilingual interface, providing complete exam service ecosystem.',
    project3Company: 'Chun Shin Limited',
    project3Year: 'Previous Company Project',

    project2Title: 'Taipei Golf Association',
    project2Description:
      'Official website for Taipei Golf Association, featuring membership management, event information, and activity registration. Integrates member system with online registration mechanism, supporting association operations and member services. Responsive design ensures great experience across all devices.',
    project2Client: 'Taipei Golf Association',
    project2Year: 'Freelance Project',

    project9Title: 'CharMon (字樂園)',
    project9Description:
      'Interactive Chinese learning application for children aged 4-12, combining Pokémon-themed teaching, stroke practice, and phonetic symbol learning. Features A4 printable worksheets and parental management functions. Through gamified learning, children can master Chinese fundamentals in an engaging and fun way.',

    project10Title: 'Water Tracker',
    project10Description:
      'A zero-pressure hydration tracking app designed for people who dont like drinking water. Target users are those who barely drink water, consuming less than 1000ml daily. Core concept: start small (250ml), soup, tea, coffee all count. Features include no-pressure reminders, celebrating small progress, and friendly encouragement to make drinking water easy and enjoyable.',

    // Contact Page
    contactPageTitle: 'Contact Me',
    contactPageSubtitle:
      'Welcome to discuss technology, job opportunities, or any interesting ideas',

    // Contact Methods
    lineContact: 'Line',
    lineContactDesc: 'Instant messaging',
    lineContactButton: 'WeChat Contact',

    phoneContact: 'Phone',
    phoneNumber: '+886 986 642 519',
    phoneCallButton: 'Call',

    facebookContact: 'Facebook',
    facebookContactDesc: 'Social media contact',
    facebookViewButton: 'View Profile',

    primaryEmail: 'Primary Email',
    primaryEmailAddress: 'joechiboo@gmail.com',
    sendEmailButton: 'Send Email',

    backupEmail: 'Backup Email',
    backupEmailAddress: 'stst1239joe@hotmail.com',

    wechatContact: 'WeChat',
    wechatContactDesc: 'Instant messaging',
    wechatContactButton: 'WeChat Contact',

    // LINE Pay Business Model
    supportMyWork: 'Support My Work',
    linePayTitle: 'LINE Pay Sponsorship',
    linePayDesc: 'If my work has been helpful to you, feel free to support my open source projects and tech sharing via LINE Pay. Every bit of support motivates me to keep going.',
    whySupportTitle: 'Why Support?',
    linePayPoint1: 'Continuous production of high-quality technical articles and tutorials',
    linePayPoint2: 'Maintaining and updating open source projects for everyone',
    linePayPoint3: 'Providing technical consultation and Q&A services',
    supportOptionsTitle: 'Reference Sponsorship Amount Options',
    supportOption1: 'A cup of coffee (Cheer up the author)',
    supportOption2: 'A big meal (Support continuous development)',
    supportOption3: 'Make your wish come true (Custom feature development - One night work)',
    linePayScanHint: 'Scan QR Code to sponsor',
    linePaySupport: 'Your support allows me to dedicate more time to tech sharing and open source contributions. Thank you for your sponsorship!',

    // Contact Form
    sendMessage: 'Send Message',
    formName: 'Name',
    formEmail: 'Email',
    formSubject: 'Subject',
    formMessage: 'Message',
    formNameRequired: 'Please enter your name',
    formEmailRequired: 'Please enter your email',
    formEmailInvalid: 'Please enter a valid email format',
    formSubjectRequired: 'Please enter a subject',
    formMessageRequired: 'Please enter a message',
    formMessageTooShort: 'Message must have at least 10 characters',
    sendingMessage: 'Sending...',
    sendMessageButton: 'Send Message',

    // Work Status
    workStatus: 'Work Status',
    currentStatus: 'Current Status: Available for freelance projects (free or paid)',
    projectInterests:
      'I am looking for new challenges and opportunities, especially interested in the following types of projects:',
    interestFrontend: 'Frontend development projects (Vue.js)',
    interestFullstack: 'Full-stack web application development',
    interestDotNet: '.NET MVC / .NET Core',
    interestInnovation: 'Innovative technology projects',
    interestConsulting: 'Technical consulting and guidance',
    responseTime: 'Response Time: Usually reply within 24 hours',

    // Location Information
    locationInfo: 'Location Information',
    locationTaiwan: 'Taiwan',
    locationDesc: 'Based in Taiwan, can accommodate different time zone work arrangements',
    timezone: 'Time Zone: UTC+8 (Taipei Time)',
    workingHours: 'Working Hours: Flexible arrangement, can accommodate team needs',
    remoteWork: 'Remote Work: Supports remote collaboration',
    bestContactTime: 'Best Contact Time',
    weekdays: 'Monday to Friday',
    weekdaysTime: '09:00 - 18:00',
    emergencyContact: 'Emergency Contact',
    emergencyTime: 'Anytime welcome',
  },
}

// 從 localStorage 獲取保存的語言設定
const initLanguage = () => {
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage.value = savedLanguage
  } else {
    // 檢查瀏覽器語言偏好
    const browserLang = navigator.language.toLowerCase()
    currentLanguage.value = browserLang.startsWith('zh') ? 'zh' : 'en'
  }
}

// 切換語言
const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'zh' ? 'en' : 'zh'
}

// 獲取翻譯文本
const t = (key) => {
  return translations[currentLanguage.value]?.[key] || key
}

// 監聽語言變化並保存到 localStorage
watch(currentLanguage, (newValue) => {
  localStorage.setItem('language', newValue)
})

export function useLanguage() {
  return {
    currentLanguage,
    toggleLanguage,
    initLanguage,
    t,
    translations,
  }
}
