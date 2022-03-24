import React, { FC } from "react";
import styles from "./Title.module.scss";

type Props = {};

const Title: FC<Props> = () => {
  return <h2 className={styles.title}>Последние записи</h2>;
};

export default Title;
