'use client'
import { useState } from "react";
import Photo from "@/components/photo";
import styles from "./page.module.css"; // Assuming you will create a CSS module for styling


export default function Home() {
  const [page, setPage] = useState(0);
  const totalPages = 3; // Example total number of pages

  const handleNavigation = (e: React.MouseEvent | React.TouchEvent) => {
    const screenWidth = window.innerWidth;
    const touchX = "touches" in e ? e.touches[0].clientX : e.clientX;

    if (touchX < screenWidth / 2) {
      setPage((prevPage) => Math.max(prevPage - 1, 0));
    } else {
      setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    }
  };

  return (
    <div className={styles.pageContainer} onClick={handleNavigation}>
      <div className={styles.pageFlip} style={{ transform: `translateX(-${page * 100}%)` }}>
        {/* Render your pages here based on the `page` state */}
        <div className={styles.page}>
          Page 1
          <Photo src="/path/to/photo1.jpg" />
        </div>
        <div className={styles.page}>Page 2</div>
        <div className={styles.page}>Page 3</div>
      </div>
    </div>
  );
}
