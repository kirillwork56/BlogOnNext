import React, { Children, FC } from "react";
import styles from "./Wrapper.module.scss";

type Props = {};

const Wrapper: FC<Props> = ({ children }) => {
  return <div className={styles.flexWrapper}>{children}</div>;
};

export default Wrapper;
