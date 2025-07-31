# EmailJS 配置說明

## 📧 EmailJS 設定指南

聯絡表單已整合 EmailJS 服務，可以直接將表單內容發送到您的郵箱。請按照以下步驟完成設定：

### 1️⃣ 註冊 EmailJS 帳號
1. 前往 [EmailJS 官網](https://www.emailjs.com/)
2. 註冊免費帳號（每月可發送 200 封郵件）

### 2️⃣ 設定郵件服務
1. 登入 EmailJS 後台
2. 點擊 "Add New Service"
3. 選擇 Gmail 或 Outlook
4. 按照指示連接您的郵箱帳號
5. 記下產生的 **Service ID**

### 3️⃣ 建立郵件模板
1. 點擊 "Email Templates"
2. 點擊 "Create New Template"
3. 設定模板內容，建議使用以下變數：
   ```
   主旨：來自網站的新訊息 - {{subject}}
   
   內容：
   姓名：{{from_name}}
   郵件：{{from_email}}
   主旨：{{subject}}
   
   訊息內容：
   {{message}}
   ```
4. 儲存並記下 **Template ID**

### 4️⃣ 取得公鑰
1. 前往 "Account" > "General"
2. 找到 "Public Key" 並複製

### 5️⃣ 更新程式碼配置
編輯 `src/views/Contact.vue` 檔案，找到以下區段並替換：

```javascript
const EMAILJS_CONFIG = {
  serviceID: 'YOUR_SERVICE_ID',     // 替換為步驟 2 的 Service ID
  templateID: 'YOUR_TEMPLATE_ID',   // 替換為步驟 3 的 Template ID  
  publicKey: 'YOUR_PUBLIC_KEY'      // 替換為步驟 4 的 Public Key
}
```

### ⚡ 測試功能
設定完成後：
1. 執行 `npm run dev` 啟動開發伺服器
2. 前往聯絡頁面填寫表單測試
3. 檢查是否收到郵件

### 🔒 安全性說明
- Public Key 可以安全地暴露在前端程式碼中
- EmailJS 會處理郵件發送的安全性
- 建議在 EmailJS 後台設定發送限制避免濫用

### 💡 其他功能
- 可在 EmailJS 後台查看發送記錄
- 可設定自動回覆郵件
- 可新增多個郵件模板用於不同用途

---
**目前狀態：** 未配置（使用模擬發送）
**配置後：** 真實郵件發送功能啟用