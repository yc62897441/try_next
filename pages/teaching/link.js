import Link from 'next/link'

export default function LinkPage() {
    return (
        <>
            <h1>LinkPage</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <ol>
                <li>&lt;Link&gt; 是使用 js 在 client side 進行頁面路由切換。</li>
                <li>
                    The Link component enables client-side navigation between two pages in the same
                    Next.js app.
                </li>
                <li>
                    Client-side navigation means that the page transition happens using JavaScript,
                    which is faster than the default navigation done by the browser.{' '}
                </li>
                <li>
                    每個 page 的 code 都是獨立的切開的，每次只會 load 被 request 的 page
                    所需要的東西，所以不會拖慢速度。
                </li>
                <li>因為 code 是獨立切開的，所以如果一個 page 發生 error，不會影響其他 page。</li>
                <li>
                    在 production 模式，next 會預先去載入在目前這個頁面上所有的 Link 所對應到的
                    pages。所以再切換頁面時會 near-instant。
                </li>
                <li>如果要連到專案外部的頁面，使用 &lt;a&gt; tag。</li>
            </ol>
        </>
    )
}
