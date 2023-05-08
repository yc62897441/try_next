import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'

// fetch data function
import { getSortedPostsData } from '../lib/posts'
// pass data into component as props
export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}

export default function Home({ allPostsData }) {
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
                <li>
                    <Link href="/teaching/Pre-renderingAndDataFetching">
                        Pre-rendering and Data Fetching
                    </Link>
                </li>
                <li>
                    <Link href="/teaching/DynamicRoutes">Dynamic Routes</Link>
                </li>
                <li>
                    <Link href="/teaching/APIRoutes">API Routes</Link>
                </li>
            </ol>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
