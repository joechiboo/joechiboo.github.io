# Azure Static Web Apps 部署指南

## 🚀 Azure 部署設定

本專案已經完成 Azure Static Web Apps 的部署配置，可以實現自動化 CI/CD 部署。

### 📋 已完成的配置

1. **路由設定** (`public/routes.json`)
   - 配置 SPA 路由支援
   - 確保 Vue Router history mode 正常運作
   - 設定靜態資源處理

2. **GitHub Actions 工作流程** (`.github/workflows/azure-static-web-apps.yml`)
   - 自動建置和部署
   - Pull Request 預覽部署
   - Node.js 20 環境設定

### 🔧 部署步驟

#### 1️⃣ 建立 Azure Static Web Apps 資源

1. 登入 [Azure Portal](https://portal.azure.com)
2. 點擊 "Create a resource" → 搜尋 "Static Web Apps"
3. 點擊 "Create"

#### 2️⃣ 基本設定

- **Subscription**: 選擇您的訂閱
- **Resource Group**: 建立新的或選擇現有的
- **Name**: `joechiboo-resume` (或您偏好的名稱)
- **Plan Type**: Free (適合個人履歷網站)
- **Region**: East Asia 或 Southeast Asia

#### 3️⃣ 部署詳細資訊

- **Source**: GitHub
- **Organization**: 您的 GitHub 用戶名
- **Repository**: `joechiboo-resume`
- **Branch**: `main`

#### 4️⃣ 建置詳細資訊

- **Build Presets**: Vue.js
- **App location**: `/` (根目錄)
- **Api location**: 留空
- **Output location**: `dist`

#### 5️⃣ 完成建立

1. 點擊 "Review + create"
2. 檢查設定後點擊 "Create"
3. Azure 會自動：
   - 在您的 GitHub repository 中建立工作流程文件
   - 設定部署密鑰
   - 開始第一次部署

### 🔐 環境變數設定 (可選)

如果需要設定環境變數（如 EmailJS 配置）：

1. 在 Azure Portal 中前往您的 Static Web Apps 資源
2. 選擇 "Configuration"
3. 新增應用程式設定：
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### 📱 自訂網域 (可選)

1. 在 Azure Portal 中選擇 "Custom domains"
2. 點擊 "Add"
3. 輸入您的網域名稱
4. 按照指示設定 DNS 記錄

### 🔍 監控和記錄

- **部署歷史**: GitHub Actions 頁面查看建置記錄
- **應用程式洞察**: Azure Portal 中檢視效能和使用情況
- **錯誤記錄**: Azure Portal 的診斷設定

### ⚡ 部署後驗證

部署完成後，您可以：

1. 檢查 Azure 提供的預設 URL
2. 測試所有頁面和功能
3. 驗證聯絡表單是否正常運作
4. 確認響應式設計在不同裝置上的表現

### 🔄 持續部署

一旦設定完成，任何推送到 `main` 分支的更改都會自動觸發：

1. **自動建置**: GitHub Actions 執行 `npm run build`
2. **自動部署**: 將建置結果部署到 Azure
3. **即時更新**: 網站內容會在幾分鐘內更新

### 💡 最佳實務

- 使用 Pull Requests 進行程式碼審查
- 在部署前本地測試所有功能
- 定期備份重要配置
- 監控網站效能和可用性

---

**預估部署時間**: 5-10 分鐘
**每月免費額度**: 100GB 頻寬，0.5GB 儲存空間
**自動 HTTPS**: 免費 SSL 憑證