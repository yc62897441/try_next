import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function LinkPage() {
    return (
        <>
            <Head>
                <title>Pre-rendering and Data Fetching</title>
            </Head>

            <h1>Pre-rendering and Data Fetching</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>

            {/* &lt; &gt; <> ; &#123; &#125; {}*/}
            <h2>Pre-rendering</h2>
            <ol>
                <a href="https://nextjs.org/learn/basics/data-fetching/pre-rendering">
                    Pre-rendering
                </a>
                <li>
                    預設情況下，Next.js 會 pre-renders 每一個 page，即會產生每一個 page 的 HTML
                    並且攜帶最少量、必須的 JS，讓這個 HTML 仍然保有互動功能。
                    <br />
                    By default, Next.js pre-renders every page. This means that Next.js generates
                    HTML for each page in advance, instead of having it all done by client-side
                    JavaScript. Pre-rendering can result in better performance and SEO.
                    <br />
                    Each generated HTML is associated with minimal JavaScript code necessary for
                    that page. When a page is loaded by the browser, its JavaScript code runs and
                    makes the page fully interactive. (This process is called hydration.)
                </li>
                <img
                    src="https://nextjs.org/static/images/learn/data-fetching/pre-rendering.png"
                    alt=""
                    srcset=""
                    style={{ 'max-width': '800px' }}
                />
                <br />
                <img
                    src="https://nextjs.org/static/images/learn/data-fetching/no-pre-rendering.png"
                    alt=""
                    srcset=""
                    style={{ 'max-width': '800px' }}
                />
            </ol>

            <h2>Two Forms of Pre-rendering</h2>
            <ol>
                <a href="https://nextjs.org/learn/basics/data-fetching/two-forms">
                    two Forms of Pre-rendering
                </a>
                <li>Static Generation：在專案 build 的時候產生 HTML。</li>
                <li>Server-side Rendering：在被 request 的時候產生 HTML。</li>
                <li>
                    在開發模式時，為了便於開發所以算是 Static Generation，依然是在 page 被 request
                    時才進行 pre-rendering。
                </li>
                <img
                    src="https://nextjs.org/static/images/learn/data-fetching/static-generation.png"
                    alt=""
                    srcset=""
                    style={{ 'max-width': '800px' }}
                />
                <br />
                <img
                    src="https://nextjs.org/static/images/learn/data-fetching/server-side-rendering.png"
                    alt=""
                    srcset=""
                    style={{ 'max-width': '800px' }}
                />
                <li>
                    可以在專案中混用，某些頁面使用 Static Generation，另一些頁面使用 Server-side
                    Rendering
                </li>
                <ol>
                    <h3>Static Generation v.s. Server-side Rendering 使用時機</h3>
                    <li>
                        官方建議使用 Static Generation(不論這個頁面 with and without
                        data)，因為頁面只須被建立一次、可以使用 CDN、並且被 request 時比 Server-side
                        Rendering 還要快
                    </li>
                    <li>
                        然而，當頁面內容會經常變動，或是每次 request 時都會不同時，則使用
                        Server-side Rendering
                    </li>
                </ol>
            </ol>

            <h2>Static Generation with and without Data</h2>
            <ol>
                <a href="https://nextjs.org/learn/basics/data-fetching/with-data">
                    Static Generation with and without Data
                </a>
                <li>
                    頁面沒有動態 fetch 外部資料時，在 build 的時候，這些頁面會自動地被靜態生成。
                </li>
                <li>
                    而在 build 時，需要使用 access the file system, fetch external API, or query
                    your database，則稱為 Static Generation with data
                </li>
                <img
                    src="https://nextjs.org/static/images/learn/data-fetching/static-generation-with-data.png"
                    alt=""
                    srcset=""
                    style={{ 'max-width': '800px' }}
                />
                <li>實作方式是使用一個 async function: getStaticProps</li>
                <li>
                    getStaticProps 在 build 的時會執行，並且去 fetch 外部資料，再作為 props 傳送給
                    page。
                </li>
                <li>在 development mode，getStaticProps 則是在每次頁面被 request 時執行</li>
            </ol>

            <h2>Creating a simple blog architecture</h2>
            <ol>
                <a href="https://nextjs.org/learn/basics/data-fetching/blog-data">
                    Creating a simple blog architecture
                </a>
            </ol>

            <h2>Implement getStaticProps</h2>
            <ol>
                <a href="https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops">
                    Implement getStaticProps
                </a>
                <li>
                    export async function getStaticProps() &#123; &#125;，在其中 fetch 資料並且設為
                    props。
                </li>
                <Image
                    src="/images/Pre-renderingAndDataFetching-1.png" // Route of the image file
                    width={707} // Desired size with correct aspect ratio
                    height={361} // Desired size with correct aspect ratio
                    alt="Your Name"
                />
                <br />
                <img
                    src="https://nextjs.org/static/images/learn/data-fetching/index-page.png"
                    alt=""
                    srcset=""
                    style={{ 'max-width': '800px' }}
                />
            </ol>

            <h2>getStaticProps Details</h2>
            <ol>
                <a href="https://nextjs.org/learn/basics/data-fetching/getstaticprops-details">
                    getStaticProps Details
                </a>
                <li>可以在 getStaticProps 裡面 fetch API、query database</li>
                <li>
                    Note: Next.js polyfills fetch() on both the client and server. You don't need to
                    import it.
                </li>
                <li>
                    getStaticProps 只會在 server-side 執行，不會在 client-side
                    執行，所以也不會被打包到傳到 client-side 的 JS 檔中。所以不用擔心 query database
                    的語法被傳出去。
                </li>
                <li>
                    在 development mode，getStaticProps 會在每次 page 被 request 時執行；在
                    production mode，mode，getStaticProps 會在 build 時執行，因為只有在 build
                    時執行，所以沒有辦法使用到那些 only available during request time, such as query
                    parameters or HTTP headers 的資料
                </li>
                <li>getStaticProps 只能在 page file 裡面被 exported</li>
                <li>如果需要在 request time 時才 fetch 資料，則需使用 Server-side Rendering</li>
            </ol>

            <h2>Fetching Data at Request Time</h2>
            <ol>
                <a href="https://nextjs.org/learn/basics/data-fetching/request-time">
                    Fetching Data at Request Time
                </a>
                <img
                    src="https://nextjs.org/static/images/learn/data-fetching/server-side-rendering-with-data.png"
                    alt=""
                    srcset=""
                    style={{ 'max-width': '800px' }}
                />
                <li>
                    在 request time 時 fetch 資料，請使用 Server-side Rendering，並且使用 export
                    async function getServerSideProps(context) &#123; &#125;
                </li>
                <li>其中，context 是包含了 request 時的參數(parameters)</li>

                <ol>
                    <h3>Client-side Rendering</h3>
                    <li>如果不需要 pre-render，則可以使用 Client-side Rendering</li>
                    <li>Statically generate 先處理頁面上不需要外部資料的部分。</li>
                    <li>
                        之後，當頁面讀取時，在 client 端再去 fetch 資料，補足需要外部資料的部分。
                    </li>
                    <li>
                        這個策略適合使用在私人的 dashboard(儀錶板)，不需要顧及 SEO，也不需要
                        pre-rendering。
                    </li>
                </ol>

                <ol>
                    <h3>SWR</h3>
                    <li>
                        Next 創造了一個 React hook，叫做 SWR，用來 fetch data。在 client 端 fetch
                        資料，建議使用 SWR，It handles caching, revalidation, focus tracking,
                        refetching on interval, and more.
                    </li>
                    <a href="https://swr.vercel.app/"> SWR documentation </a>
                </ol>
            </ol>
        </>
    )
}
