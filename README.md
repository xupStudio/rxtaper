# RxTaper 官方網站

RxTaper 是一個強大的數據記錄工具，透過 AI 語音轉文字與視覺化圖表，協助您精確記錄劑量與感受，為您的醫療諮詢提供可靠數據。

## 📋 目錄

- [專案簡介](#專案簡介)
- [技術架構](#技術架構)
- [開發環境設置](#開發環境設置)
- [本地開發預覽](#本地開發預覽)
- [部署流程](#部署流程)
- [專案結構](#專案結構)
- [相關連結](#相關連結)

## 專案簡介

這是 RxTaper App 的官方產品介紹網站，使用純 HTML、CSS 和 JavaScript 構建，無需複雜的框架或構建工具。

### 主要功能

- 📱 響應式設計，支援桌面和移動設備
- 🌐 雙語支援（繁體中文 / English）
- 🎨 現代化 UI 設計
- 📸 產品截圖輪播展示
- 🔒 隱私保護說明
- ⚠️ 醫療免責聲明

## 技術架構

### 前端技術

- **HTML5**: 語義化標籤結構
- **CSS3**: 
  - 自定義 CSS（無框架依賴）
  - Flexbox 和 Grid 佈局
  - CSS 動畫和過渡效果
  - 響應式設計（Media Queries）
- **JavaScript (ES6+)**:
  - 模組化組件系統
  - 動態內容生成
  - 國際化（i18n）支援
  - 輪播圖功能

### 外部資源

- **字體**: 
  - Google Fonts (Inter, Noto Sans TC)
- **圖標**: 
  - Font Awesome 6.4.0

### 開發工具

- **本地伺服器**: Node.js HTTP Server
- **版本控制**: Git
- **部署平台**: GitHub Pages / Vercel / Netlify（根據實際配置）

## 開發環境設置

### 系統需求

- Node.js 12.0 或更高版本
- Git
- 現代瀏覽器（Chrome, Firefox, Safari, Edge）

### 安裝步驟

1. **克隆專案**

```bash
git clone git@github.com:xupStudio/rxtaper.git
cd rxtaper
```

2. **檢查 Node.js 版本**

```bash
node --version
```

如果未安裝 Node.js，請前往 [Node.js 官網](https://nodejs.org/) 下載安裝。

## 本地開發預覽

### 方法一：使用內建的 Simple Server（推薦）

專案已包含一個簡單的 HTTP 伺服器 `simple_server.js`，無需安裝額外依賴。

```bash
# 啟動開發伺服器
node simple_server.js
```

伺服器將在 `http://127.0.0.1:8000/` 啟動。

在瀏覽器中打開 http://127.0.0.1:8000/ 即可預覽網站。

### 方法二：使用 Python HTTP Server

如果您的系統已安裝 Python：

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### 方法三：使用 VS Code Live Server

1. 安裝 VS Code 擴展 "Live Server"
2. 在 VS Code 中打開專案
3. 右鍵點擊 `index.html`
4. 選擇 "Open with Live Server"

### 開發時注意事項

- 修改 HTML、CSS 或 JavaScript 文件後，刷新瀏覽器即可看到變更
- 如果修改了配置文件（`js/config.js`），建議清除瀏覽器快取後重新載入
- 測試時請確保測試雙語版本和響應式佈局

## 部署流程

### 部署前檢查清單

- [ ] 確認所有圖片資源已優化
- [ ] 測試所有連結是否正常運作
- [ ] 驗證雙語切換功能
- [ ] 測試響應式設計（手機、平板、桌面）
- [ ] 檢查瀏覽器控制台是否有錯誤
- [ ] 確認 App Store 和 Google Play 連結正確

### 部署到 GitHub Pages

1. **確保專案已推送到 GitHub**

```bash
git add .
git commit -m "Update website"
git push origin main
```

2. **設置 GitHub Pages**

   - 前往 GitHub 專案頁面
   - 點擊 "Settings"
   - 在左側選單找到 "Pages"
   - 在 "Source" 下拉選單選擇 `main` 分支
   - 選擇根目錄 `/` (root)
   - 點擊 "Save"

3. **等待部署完成**

   GitHub 會自動構建和部署網站，通常需要 1-2 分鐘。
   部署完成後，網站將可在 `https://xupstudio.github.io/rxtaper/` 訪問。

### 部署到 Vercel

1. **安裝 Vercel CLI（可選）**

```bash
npm install -g vercel
```

2. **部署**

```bash
# 首次部署
vercel

# 生產環境部署
vercel --prod
```

或者直接在 [Vercel 網站](https://vercel.com) 導入 GitHub 專案。

### 部署到 Netlify

1. **方法一：拖放部署**
   - 前往 [Netlify Drop](https://app.netlify.com/drop)
   - 將整個專案資料夾拖放到頁面

2. **方法二：Git 連接**
   - 在 Netlify 控制台點擊 "New site from Git"
   - 選擇 GitHub 並授權
   - 選擇 `rxtaper` 專案
   - 部署設置：
     - Build command: 留空（靜態網站無需構建）
     - Publish directory: `/`（根目錄）
   - 點擊 "Deploy site"

### 自定義域名設置

部署完成後，可以在各平台設置自定義域名：

- **GitHub Pages**: Settings → Pages → Custom domain
- **Vercel**: Project Settings → Domains
- **Netlify**: Site settings → Domain management

## 專案結構

```
rxtaper/
├── index.html              # 首頁
├── privacy.html            # 隱私權政策頁面
├── terms.html              # 服務條款頁面
├── support.html            # 技術支援頁面
├── README.md               # 專案說明文件（本文件）
├── simple_server.js        # 本地開發伺服器
│
├── css/
│   └── pages.css           # 頁面專用樣式
│
├── js/
│   ├── config.js           # 網站配置（導航、頁尾等）
│   ├── i18n.js             # 國際化語言切換
│   ├── common.js           # 通用功能（平滑滾動、選單切換）
│   ├── components.js       # 動態組件生成（導航列、頁尾）
│   └── carousel.js         # 輪播圖功能
│
├── screenshots/
│   ├── zh/                 # 中文截圖
│   │   ├── 1.png
│   │   ├── 2.png
│   │   └── ...
│   └── en/                 # 英文截圖
│       ├── 1.png
│       ├── 2.png
│       └── ...
│
├── style.css               # 主要樣式表
├── app_icon.png            # App 圖標（透明背景）
└── app_icon_with_bg.png    # App 圖標（含背景）
```

### 核心文件說明

#### HTML 文件

- `index.html`: 主頁面，包含產品介紹、功能特色、隱私說明和免責聲明
- `privacy.html`: 詳細的隱私權政策
- `terms.html`: 使用者授權合約（EULA）
- `support.html`: 技術支援和常見問題

#### JavaScript 模組

- `config.js`: 集中管理網站配置，包括：
  - 網站名稱（雙語）
  - 導航連結
  - 頁尾連結
  - 聯絡資訊

- `i18n.js`: 語言切換邏輯
  - 自動偵測瀏覽器語言
  - 儲存使用者語言偏好
  - 動態切換頁面內容

- `components.js`: 動態生成共用組件
  - 導航列（Navbar）
  - 頁尾（Footer）
  - 支援雙語和響應式設計

- `common.js`: 通用功能
  - 平滑滾動到錨點
  - 移動選單切換
  - 事件監聽器管理

- `carousel.js`: 產品截圖輪播
  - 自動播放
  - 觸控滑動支援
  - 響應式圖片載入

#### CSS 文件

- `style.css`: 主要樣式表
  - 全局樣式和變數
  - 組件樣式
  - 響應式斷點
  - 動畫效果

- `css/pages.css`: 特定頁面樣式
  - 隱私政策頁面
  - 條款頁面
  - 支援頁面

## 維護和更新

### 更新 App Store 連結

編輯 `index.html` 第 47-50 行：

```html
<a href="YOUR_APP_STORE_LINK" class="btn btn-primary">
    <i class="fab fa-apple"></i> App Store
</a>
<a href="YOUR_GOOGLE_PLAY_LINK" class="btn btn-outline">
    <i class="fab fa-google-play"></i> Google Play
</a>
```

### 更新截圖

1. 將新截圖放入對應的語言資料夾：
   - 中文截圖: `screenshots/zh/`
   - 英文截圖: `screenshots/en/`

2. 確保圖片命名為 `1.png`, `2.png`, `3.png` 等

3. 如需調整截圖數量，編輯 `index.html` 中的輪播項目

### 修改網站配置

所有網站配置集中在 `js/config.js`，包括：

- 網站名稱
- 導航連結
- 頁尾連結
- 聯絡信箱
- 版權年份

### 添加新頁面

1. 創建新的 HTML 文件
2. 在 `<head>` 中引入必要的 CSS 和 JS
3. 添加 `navbar-placeholder` 和 `footer-placeholder`
4. 在 `js/config.js` 中添加導航連結
5. 初始化組件：

```html
<script>
    const lang = initLanguage();
    initComponents(false); // false 表示非首頁
</script>
```

## 相關連結

- **App Store**: https://apps.apple.com/us/app/rxtaper-ai-tapering-diary/id6757333483
- **Google Play**: https://play.google.com/store/apps/details?id=com.xupstudio.rxtaper&hl=zh_TW
- **GitHub 專案**: https://github.com/xupStudio/rxtaper
- **技術支援**: xup654m42@gmail.com

## 常見問題

### Q: 為什麼本地預覽時某些功能不正常？

A: 請確保使用 HTTP 伺服器而非直接打開 HTML 文件。某些功能（如 AJAX、CORS）需要在伺服器環境下運行。

### Q: 如何測試響應式設計？

A: 
1. 使用瀏覽器開發者工具（F12）
2. 切換到裝置模擬模式
3. 測試不同的螢幕尺寸

### Q: 部署後樣式或圖片無法載入？

A: 檢查：
1. 所有資源路徑是否使用相對路徑
2. 圖片檔案名稱大小寫是否正確
3. 瀏覽器控制台是否有 404 錯誤

### Q: 如何更新語言翻譯？

A: 編輯 HTML 文件中的 `data-lang="zh"` 和 `data-lang="en"` 屬性的內容。

## 授權

© 2026 RxTaper. All rights reserved.

---

**注意**: 此網站僅為產品介紹，實際功能以 App 內版本與條款為主。RxTaper 不是醫療器材，不提供醫療建議。
