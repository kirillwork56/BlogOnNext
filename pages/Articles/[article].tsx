import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import Layout from "../../components/Layout";
import Text from "../../components/UI/Text";
import Title from "../../components/UI/Title";
import client from "../../contentful";
import { IArticle, IArticleFields } from "../../contentful/contentful";

type Props = {
  article: IArticle;
};

const Article: FC<Props> = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.fields.title}</title>
      </Head>

      <Layout>
        <Title>{article.fields.title}</Title>
        <Text>{documentToReactComponents(article.fields.content!)}</Text>
      </Layout>
    </>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const articleEntries = await client.getEntries<IArticleFields>({
    content_type: "Article",
    select: "fields.slug",
  });

  return {
    paths: articleEntries.items.map((item) => ({
      params: {
        article: item.fields.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.article!;

  const articleEntries = await client.getEntries<IArticleFields>({
    content_type: "Article",
    limit: 1,
    "fields.slug": slug,
  });

  const [article] = articleEntries.items;

  return {
    props: {
      article,
    },
  };
};
