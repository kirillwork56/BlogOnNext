import React, { FC } from "react";
import styles from "./Text.module.scss";

type Props = {};

const Text: FC<Props> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default Text;
