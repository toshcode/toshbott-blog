import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout>
            <Head>
              <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>I am Dennis, a budding Software Engineer</p>
                <p>
                  This is a sample blog - I'll be building a site like this. Join me on {''}
                  <a href='https://nextjs.org/learn'>My next steps</a>
                </p>
            </section>
        </Layout>
    );
  }
