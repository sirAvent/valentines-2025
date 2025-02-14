"use client";
import { useState } from "react";
import Photo from "@/components/photo";
import styles from "./page.module.css";

export default function Home() {
  const [page, setPage] = useState(0);
  const totalPages = 8;
  let touchStartX = 0;

  const handleNavigation = (e: React.MouseEvent | React.TouchEvent) => {
    const screenWidth = window.innerWidth;
    const touchX = "touches" in e ? e.touches[0].clientX : e.clientX;

    if (touchX < screenWidth / 2) {
      setPage((prevPage) => Math.max(prevPage - 1, 0));
    } else {
      setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right
      setPage((prevPage) => Math.max(prevPage - 1, 0));
    }
  };

  return (
    <div
      className={styles.pageContainer}
      onClick={handleNavigation}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={styles.pageFlip}
        style={{ transform: `translateX(-${page * 100}%)` }}
      >
        <div className={styles.page}>
          <Photo
            src={"santa_barbara.jpg"}
            text="Remember this day? One of my favorites"
          />
        </div>
        <div className={styles.page}>
          <Photo src={"magic.jpeg"} text="Everyday with you is like magic" />
        </div>
        <div className={styles.page}>
          <Photo
            src={"gorgeous.jpeg"}
            text="You are the most beautiful person"
          />
        </div>
        <div className={styles.page}>
          <Photo src={"funny.jpeg"} text="You make me laugh more than anyone" />
        </div>
        <div className={styles.page}>
          <Photo
            src={"loyal.jpeg"}
            text="And you're by my side when I need you"
          />
        </div>
        <div className={styles.page}>
          <Photo src={"cuddly.jpeg"} text="To the most cuddliest person" />
        </div>
        <div className={styles.page}>
          <Photo src={"wheel.jpg"} text="To my one and only love" />
        </div>
        <div className={styles.page}>
          <Photo src={"glasses.jpg"} text="Would you be my valentine? 😎😎😎" />
        </div>
      </div>
    </div>
  );
}
