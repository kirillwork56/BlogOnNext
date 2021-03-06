import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Text from "../components/UI/Text";
import Title from "../components/UI/Title";
import client from "../contentful";
import { IMain, IMainFields } from "../contentful/contentful";
import styles from "../styles/Home.module.scss";

type Props = {
  home: IMain;
};

const Home: NextPage<Props> = ({ home }) => {
  return (
    <>
      <Head>
        <title>{home.fields.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Layout>
        <div className={styles.centerElement}>
          <Title>{home.fields.title}</Title>
          <Text>{documentToReactComponents(home.fields.description!)}</Text>
        </div>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.getEntries<IMainFields>({
    content_type: "main",
    limit: 1,
  });

  const [homePage] = home.items;

  return {
    props: {
      home: homePage,
    },
    revalidate: 3600,
  };
};
