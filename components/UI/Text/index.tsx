import React, { FC } from "react";
import styles from "./Text.module.scss";

type Props = {};

const Text: FC<Props> = ({ children }) => {
  return <div className={styles.text}>{children}</div>;
};

export default Text;
