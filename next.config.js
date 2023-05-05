// Day02 - 為什麼你需要 Next.js ?
// https://ithelp.ithome.com.tw/articles/10265138

// 我們經常會在程式碼中使用環境變數，而常見的做法是會建立一個 .env 檔案，然後再搭配 dotenv 之類的套件使用環境變，而 Next.js 的作法則是可以在 next.config.js 中定義我們需要的環境變數。

// 接下來，你就可以 react 中使用 process.env.apiKey
// 例如 return <h1>環境變數 apiKey: {process.env.apiKey}</h1>;

module.exports = {
    env: {
        apiKey: 'api-keyxxxx',
    },
}
