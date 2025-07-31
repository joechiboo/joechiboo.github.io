# Azure Static Web Apps API Token 設定指南

## 🔑 修復 CI/CD 部署錯誤

你的網站已經成功部署到：**https://lemon-wave-0caaa291e.1.azurestaticapps.net/**

但是 GitHub Actions 需要正確的 API Token 才能自動部署更新。

## 📋 步驟一：獲取 API Token

### 方法 1：從 Azure Portal 獲取

1. **登入 Azure Portal**
   - 前往 https://portal.azure.com
   - 登入你的 Azure 帳號

2. **找到你的 Static Web App**
   - 在搜尋框輸入 "static web apps"
   - 點選你的應用程式（可能名為 `joechiboo-resume` 或類似）

3. **獲取 Deployment Token**
   - 在左側選單找到 **"Deployment tokens"** 或 **"Management"**
   - 複製 **Deployment token** 或 **API key**

### 方法 2：從 GitHub Actions 記錄獲取

1. 前往 https://github.com/joechiboo/joechiboo-resume/actions
2. 查看最新的部署記錄
3. 在部署步驟中可能會顯示 token 的前幾個字元

## 📋 步驟二：設定 GitHub Secret

1. **前往 GitHub Repository Settings**
   - https://github.com/joechiboo/joechiboo-resume/settings/secrets/actions

2. **建立新的 Secret**
   - 點擊 **"New repository secret"**
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: 貼上步驟一獲取的 API Token
   - 點擊 **"Add secret"**

## 📋 步驟三：測試自動部署

### 方法 1：推送程式碼更改
```bash
# 對任何檔案做小修改
echo "# Test update" >> README.md
git add README.md
git commit -m "Test CI/CD fix"
git push origin main
```

### 方法 2：手動觸發工作流程
1. 前往 https://github.com/joechiboo/joechiboo-resume/actions
2. 選擇 "Azure Static Web Apps CI/CD" 工作流程
3. 點擊 **"Run workflow"**

## ✅ 驗證部署成功

部署成功後，你應該會看到：
- ✅ GitHub Actions 顯示綠色 checkmark
- ✅ 網站內容自動更新
- ✅ 無錯誤訊息

## 🔧 工作流程改進

我已經更新了 `.github/workflows/azure-static-web-apps.yml` 包含：
- 升級到最新的 GitHub Actions 版本
- 增加建置驗證步驟
- 改善錯誤處理
- 添加 `skip_app_build: true` 避免重複建置

## 🆘 疑難排解

### 如果仍然出現錯誤：

1. **檢查 Token 格式**
   - Token 應該是長字串，通常以數字和字母組成
   - 確保沒有複製到額外的空格

2. **重新產生 Token**
   - 在 Azure Portal 中刪除並重新建立 Deployment token
   - 更新 GitHub Secret

3. **檢查 Resource 名稱**
   - 確認 Azure Static Web App 的名稱和 GitHub repository 匹配

4. **聯絡支援**
   - 如果問題持續，可以在 GitHub Issues 求助

---

**當前狀況：**
- ✅ 網站運行正常：https://lemon-wave-0caaa291e.1.azurestaticapps.net/
- ⚠️ CI/CD 需要正確的 API Token
- ✅ 工作流程已經更新和優化