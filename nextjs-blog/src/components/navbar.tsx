import React from "react";
import Link from "next/link";
import { FiBell, FiSettings, FiUser } from "react-icons/fi";
import styles from "../styles/Navbar.module.css"; // 引入 CSS Modules

const Navbar = () => {
  return (
    <div style={{ paddingTop: "120px" }}>
      {" "}
      {/* Apply padding here */}
      {/* 頂部導航列 */}
      <nav className={styles.navbar}>
        {/* 左側 LOGO */}
        <div className={styles.logo}>誰敢跟我桌隊</div>

        {/* 中間的搜尋框 */}
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search for..."
            className={styles.searchInput}
          />
        </div>

        {/* 右側圖示 */}
        <div className={styles.iconContainer}>
          <div className={styles.notificationWrapper}>
            <FiBell size={24} className={styles.icon} />
            <span className={styles.notificationBadge}>9</span>
          </div>
          <FiSettings size={24} className={styles.icon} />
          <FiUser size={24} className={styles.icon} />
        </div>
      </nav>
      {/* 次級導航列 */}
      <div className={styles.subNavbar}>
        {/* 中間 Tabs */}
        <ul className={styles.linkContainer}>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/Signup" className={styles.link}>
              Signup
            </Link>
          </li>
          <li>
            <Link href="/competition" className={styles.link}>
              Competition
            </Link>
          </li>
        </ul>

        {/* 右側 日期篩選器 */}
        <div className={styles.dateFilter}>
          <input type="date" className={styles.dateInput} />
          <span className={styles.arrow}>→</span>
          <input type="date" className={styles.dateInput} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
