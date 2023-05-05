import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

            <ol>
                <h2>教案筆記</h2>
                <li>
                    <Link href="/teaching/link">Link page</Link>
                </li>
                <li>
                    <Link href="/teaching/AssetsMetadataCSS">Assets, Metadata, and CSS</Link>
                </li>
            </ol>

            <h1>process.env.apiKey：{process.env.apiKey}</h1>
        </Layout>
    )
}
