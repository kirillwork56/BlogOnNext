import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import styles from "./Header.module.scss";

type Props = {};

const Header: FC<Props> = ({}) => {
  const router = useRouter();
  const activePage = router.route;

  const arrLinks = [
    {
      link: "/",
      name: "Главная",
    },
    {
      link: "/CV",
      name: "Резюме",
    },
    {
      link: "/Blog",
      name: "Блог",
    },
  ];

  return (
    <div>
      <header className={styles.header}>
        {arrLinks.map((e) => (
          <Link href={e.link} passHref key={e.name}>
            <a
              className={`${styles.header__link} ${
                activePage === e.link && styles.header__link_active
              }`}
            >
              {e.name}
            </a>
          </Link>
        ))}
      </header>
    </div>
  );
};

export default Header;
