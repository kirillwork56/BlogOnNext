import React, { Children, FC } from "react";
import Header from "../UI/Header";
import styles from "./Layout.module.scss";

type Props = {};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
