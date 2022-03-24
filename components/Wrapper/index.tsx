import React, { Children, FC } from "react";
import styles from "./Wrapper.module.scss";

type Props = {};

const Wrapper: FC<Props> = ({ children }) => {
  return <h2 className={styles.flexWrapper}>{children}</h2>;
};

export default Wrapper;
