import Link from "next/link";
import React, { FC } from "react";
import styles from "./Header.module.scss";

type Props = {};

const Header: FC<Props> = () => {
  return (
    <div>
      <header className={styles.header}>
        <Link href={"/"} passHref>
          <a className={`${styles.header__link} ${styles.header__link_active}`}>
            Главная
          </a>
        </Link>
        <Link href={"/CV"} passHref>
          <a className={styles.header__link}>Резюме</a>
        </Link>
        <Link href={"/Blog"} passHref>
          <a className={styles.header__link}>Блог</a>
        </Link>
      </header>
    </div>
  );
};

export default Header;
