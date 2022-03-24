import Link from "next/link";
import React, { FC } from "react";
import styles from "./Card.module.scss";

type Props = {
  title: string;
  text: string;
  link: string;
  linkName?: string;
};

const Card: FC<Props> = ({ title, text, link, linkName }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__text}>{text}</p>
      <Link href={link} passHref>
        <a className={styles.card__link}>{linkName || "Читать"}</a>
      </Link>
    </div>
  );
};

export default Card;
