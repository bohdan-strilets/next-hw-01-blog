import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Mango</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
          leo egestas, fermentum quam aliquet, finibus turpis. Donec sed
          dignissim turpis, a efficitur diam. Aenean varius turpis est, at
          dapibus justo egestas quis. Sed lacinia lacinia erat aliquam
          fermentum. Phasellus nulla elit, mollis eu mauris at, laoreet pretium
          ipsum. Quisque felis sem, ullamcorper ut mattis quis, porttitor vel
          augue. Nulla convallis mauris et purus gravida, nec euismod odio
          maximus. In condimentum nec massa vel tristique. Ut suscipit tincidunt
          odio sed aliquet. Sed ultricies lacus sit amet faucibus efficitur.
          Vestibulum nec auctor mauris. Nullam egestas enim sed dui faucibus,
          nec pulvinar eros scelerisque. Praesent enim urna, fermentum quis
          tincidunt in, semper at diam. Integer sodales sapien massa, nec auctor
          quam euismod eget. Cras vitae convallis arcu.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
