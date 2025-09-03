import React from "react";
import styles from "./Pagination.module.scss";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  pageSize,
  pageSizeOptions = [10, 20, 50, 100],
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  const getPageList = (totalPages: number, current: number): (number | "...")[] => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages: (number | "...")[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - current) <= 1) {
        pages.push(i);
      } else {
        const prev = pages[pages.length - 1];
        if (prev !== "...") pages.push("...");
      }
    }
    return pages;
  };

  const pages = getPageList(totalPages, currentPage);

  const goto = (page: number) => {
    const p = Math.min(Math.max(1, page), totalPages);
    onPageChange(p);
  };

  return (
    <div className={styles.paginationBar}>
      {/* Left: Showing X out of Y */}
      <div className={styles.left}>
        <span className={styles.label}>Showing</span>
        <select
          className={styles.select}
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          aria-label="Rows per page"
        >
          {pageSizeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className={styles.label}>out of {totalItems}</span>
      </div>

      {/* Right: Controls */}
      <div className={styles.right}>
        {/* <button
          className={styles.iconBtn}
          onClick={() => goto(1)}
          disabled={currentPage === 1}
          aria-label="First page"
        >
          <FiChevronsLeft />
        </button> */}
        <button
          className={styles.iconBtn}
          onClick={() => goto(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <FiChevronLeft />
        </button>

        {pages.map((p, idx) =>
          p === "..." ? (
            <span key={`e-${idx}`} className={styles.ellipsis}>
              …
            </span>
          ) : (
            <button
              key={p}
              className={`${styles.pageBtn} ${currentPage === p ? styles.active : ""}`}
              onClick={() => goto(p)}
              aria-current={currentPage === p ? "page" : undefined}
            >
              {p}
            </button>
          )
        )}

        <button
          className={styles.iconBtn}
          onClick={() => goto(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <FiChevronRight />
        </button>
        {/* <button
          className={styles.iconBtn}
          onClick={() => goto(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last page"
        >
          <FiChevronsRight />
        </button> */}
      </div>
    </div>
  );
};

export default Pagination;
