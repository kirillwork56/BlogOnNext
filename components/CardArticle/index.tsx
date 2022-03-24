import Link from "next/link";
import React, { FC } from "react";
import styles from "./CardArticle.module.scss";

type Props = {};

const CardArticle: FC<Props> = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>This is an article title</h3>
      <p className={styles.card__text}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <Link href={"/Blog"} passHref>
        <a className={styles.card__link}>Читать</a>
      </Link>
    </div>
  );
};

export default CardArticle;
