import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function LinkPage() {
    return (
        <>
            <Head>
                <title>Dynamic Routes</title>
            </Head>

            <h1>Dynamic Routes</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>

            {/* &lt; &gt; <> ; &#123; &#125; {}*/}
            <h2>Page Path Depends on External Data</h2>
            <ol>
                <a href="https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data">
                    Page Path Depends on External Data
                </a>
                <li>由外部資料來決定頁面的 URL。</li>
                <img
                    src="https://nextjs.org/static/images/learn/dynamic-routes/page-path-external-data.png"
                    alt=""
                    srcset=""
                    style={{ 'max-width': '800px' }}
                />
                <br />
                <li>在 Next.js 中，頁面檔案 [xxx].js 是動態路由檔案，如 [id].js。</li>
            </ol>

            <h2>Implement getStaticPaths</h2>
            <ol>
                <li>在 pages/posts 資料夾中建立 [id].js 檔案。</li>
                <li>在 pages/posts 資料夾中移除 first-post.js 檔案，因為用不上了。</li>
                <li>
                    在 [id].js 檔案中使用 export async function getStaticPaths() &#123;
                    &#125;，並在其中取得一個包含所有靜態檔案的路由參數的 list。
                </li>
            </ol>

            <h2>Implement getStaticProps</h2>
            <ol>
                <li>在 [id].js 檔案中使用 export async function getStaticProps() &#123; &#125;</li>
                <img
                    src="https://nextjs.org/static/images/learn/dynamic-routes/how-to-dynamic-routes.png"
                    alt=""
                    srcset=""
                    style={{ 'max-width': '800px' }}
                />
                <br />
            </ol>

            <h2>Render Markdown</h2>
            <ol>
                <li></li>
            </ol>

            <h2>Polishing the Post Page</h2>
            <ol>
                <li></li>
            </ol>

            <h2>Polishing the Index Page</h2>
            <ol>
                <li></li>
            </ol>

            <h2>Dynamic Routes Details</h2>
            <ol>
                <li>
                    getStaticProps, getStaticPaths 可以從檔案目錄、外部 API、資料庫搜尋(Query
                    Database)，去 fetch 資料。
                </li>
                <li>以上用法主要還是用來做 Static Generation。</li>
                <li>
                    在開發模式時，getStaticPaths 會在每一次頁面被 request 時執行。在 production
                    模式時，getStaticPaths 會在 build 時執行。
                </li>
                <li>
                    getStaticPaths 中的 fallback 如果設定為 false，則當出入的 path 並不是由
                    getStaticPaths 所回傳的 path 時，則會連到 404。如果在開發模式 fallback 設定為
                    true 時，則會 crash 掉跳出某某行程式碼出錯的提示。
                    <ol>
                        <li>
                            If fallback is false, then any paths not returned by getStaticPaths will
                            result in a 404 page.
                        </li>
                        <li>
                            If fallback is true, then the behavior of getStaticProps changes:
                            <ol>
                                <li>
                                    The paths returned from getStaticPaths will be rendered to HTML
                                    at build time.
                                </li>
                                <li>
                                    The paths that have not been generated at build time will not
                                    result in a 404 page. Instead, Next.js will serve a “fallback”
                                    version of the page on the first request to such a path.
                                </li>
                                <li>
                                    In the background, Next.js will statically generate the
                                    requested path. Subsequent requests to the same path will serve
                                    the generated page, just like other pages pre-rendered at build
                                    time.
                                </li>
                            </ol>
                            <li>
                                If fallback is blocking, then new paths will be server-side rendered
                                with getStaticProps, and cached for future requests so it only
                                happens once per path.
                            </li>
                            <li>
                                This is beyond the scope of our lessons, but you can learn more
                                about fallback: true and fallback: 'blocking' in the fallback
                                documentation.
                            </li>
                        </li>
                    </ol>
                </li>
            </ol>
        </>
    )
}
