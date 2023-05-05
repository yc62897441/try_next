import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

export default function LinkPage() {
    return (
        <>
            <Head>
                <title>Assets, Metadata, and CSS</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
            />

            <h1>Assets, Metadata, and CSS</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>

            <h2>Image</h2>
            <ol>
                <li>
                    使用傳統 &lt;img&gt; 的缺點 <br />
                    <ol>
                        <li>
                            需要手動去設定適合銀幕大小尺寸的圖片。Ensuring your image is responsive
                            on different screen sizes
                        </li>
                        <li>
                            須設定第三方套件來增加讀取效能。Optimizing your images with a
                            third-party tool or library
                        </li>
                        <li>
                            只有在進入 viewport 才會開始載入圖片資源。Only loading images when they
                            enter the viewport
                        </li>
                    </ol>
                </li>
                <li>
                    使用 &lt;Image&gt; 的優點 <br />
                    <ol>
                        <li>next/image 是傳統 img tag 的延伸(extension)</li>
                        <li>Next.js also has support for Image Optimization by default.</li>
                        <li>
                            This allows for resizing, optimizing, and serving images in modern
                            formats like WebP when the browser supports it.
                        </li>
                        <li>
                            This avoids shipping large images to devices with a smaller viewport.
                        </li>
                        <li>
                            It also allows Next.js to automatically adopt future image formats and
                            serve them to browsers that support those formats.
                        </li>
                        <li>
                            Automatic Image Optimization works with any image source. Even if the
                            image is hosted by an external data source, like a CMS, it can still be
                            optimized.
                        </li>
                    </ol>
                </li>
                <Image
                    src="/images/profile.jpg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name"
                />
            </ol>

            <h2>Metadata</h2>
            <ol>
                <li>使用 &lt;Head&gt; 在裡面做設定，跟 html 的 head 一樣</li>
                <li>
                    使用 Third-Party JavaScript ，不要在 &lt;Head&gt; 內引入，而是使用
                    &lt;Script&gt;
                </li>
                <ol>
                    <li>
                        next/script 是 HTML script tag 的延伸(extension)，可以 optimizes when
                        additional scripts are fetched and executed.
                    </li>
                    <li>
                        "strategy" 控制何時去載入 the third-party script. "lazyOnload" 告述 Next.js
                        在瀏覽器閒置時間時才去載入。
                    </li>
                    <li>"onLoad" 是在這個資源完成載入後，立即執行 any JavaScript code。</li>
                </ol>
            </ol>

            <h2>CSS</h2>
            <ol>
                <h3>CSS modules</h3>
                <li>
                    CSS modules 會自動在 component 層級中建立獨一無二的 class name，所以可以在不同的
                    files 使用相同的 class name 且不用擔心發生牴觸(collisions)
                    <br />
                    CSS modules allow you to locally scope CSS at the component-level by
                    automatically creating unique class names. This allows you to use the same CSS
                    class name in different files without worrying about class name collisions.
                </li>
                <li>
                    除了使用 CSS modules 以外，Next 也可以使用以下方式進行 style 設定：
                    <br /> In addition to CSS modules, you can style your Next.js application in a
                    variety of ways, including:
                    <ol>
                        <li>Sass which allows you to import .css and .scss files.</li>
                        <li>PostCSS libraries like Tailwind CSS.</li>
                        <li>
                            CSS-in-JS libraries such as styled-jsx, styled-components, and emotion
                        </li>
                    </ol>
                </li>
            </ol>
            <ol>
                <h3>使用 CSS modules</h3>
                <ol>
                    <li>建立 xxxx.module.css 檔案，並在裡面用 class 選擇器撰寫 style</li>
                    <li>
                        在 component 中 import xxxx.module.css 檔案，並且指派一個名稱給它, like
                        styles
                        <br />
                        import styles from './xxx.module.css'
                    </li>
                    <li>
                        指派 styles.container 給 html 標籤作為 className。Use styles.container as
                        the className <br />
                        &lt;div className=&#123;styles.container&#125; &gt; &#123;children&#125;
                        &lt;/div&gt;
                    </li>
                </ol>
            </ol>
            <ol>
                <h3>使用全域 CSS(Global Styles)</h3>
                <li>
                    在 pages 建立 _app.js，在預設下 _app.js 會是所有 pages 的 top-level
                    component，等於是它會包含(wraps)了所有的 pages <br />
                    The default export of _app.js is a top-level React component that wraps all the
                    pages in your application.
                </li>
                <li>在 styles 資料夾中建立 global.css 檔案</li>
                <li>只能在 _app.js import global CSS </li>
            </ol>
            <ol>
                <h3>使用 utils.module.css</h3>
                <li>
                    utils.module.css 建立出 utility classes 可以被大量、重複使用在專案中，甚至是在
                    global.css file 中使用。
                    <br />
                    You can reuse these utility classes throughout your application, and you may
                    even use utility classes in your global.css file. Utility classes refer to an
                    approach of writing CSS selectors rather than a method (e.g. global styles, CSS
                    modules, Sass, etc). Learn more about utility-first CSS.
                </li>
            </ol>
            <ol>
                <h3>其他 styling 小技巧</h3>
                <a href="https://nextjs.org/learn/basics/assets-metadata-css/styling-tips">
                    Assets, Metadata, and CSS - Styling Tips
                </a>
                <li>Using clsx library to toggle classes</li>
                <li>Customizing PostCSS Config</li>
                <li>Using Sass</li>
            </ol>
        </>
    )
}
