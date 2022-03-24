import React, { FC } from "react";
import styles from "./Title.module.scss";

type Props = {};

const Title: FC<Props> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default Title;
