import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function LinkPage() {
    return (
        <>
            <Head>
                <title>API Routes</title>
            </Head>

            <h1>API Routes</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>

            {/* &lt; &gt; <> ; &#123; &#125; {}*/}
            <h2>Creating API Routes</h2>
            <ol>
                <a href="https://nextjs.org/learn/basics/api-routes/creating-api-routes">
                    Creating API Routes
                </a>

                <li>
                    API Routes 可以利用 Next.js 來建立 API 的端點，如同 Node.js serverless
                    function。
                </li>
                <li>
                    建立 pages/api 資料夾，並在其中建立 js 檔(例如 hello.js)，在 js 檔中撰寫 req,
                    res function。
                </li>
            </ol>

            <h2>API Routes Details</h2>
            <ol>
                <li>
                    不要使用 getStaticProps or getStaticPaths 來 fetch API Route。而是直接在
                    getStaticProps or getStaticPaths 裡面撰寫 server-side code。因為 getStaticProps
                    and getStaticPaths 只會在 server-side 執行，不會在 client-side
                    執行，也不會被打包到要傳到 client-side 的 js 檔之中。
                </li>
                <li>
                    一個好的使用例子就是處理表單輸入。當頁面上的表單送出資料(發出 request 到 API
                    Route)時，可以在 API Route 直接撰寫操作資料庫的程式碼，因為 API Route
                    並不會被打到到傳送到 client-side 的 js 檔之中，所以不用擔心資料庫的路徑或是
                    query 語法外洩。
                </li>

                <li></li>
            </ol>
        </>
    )
}
