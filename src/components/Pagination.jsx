"use client";

import { useState, useEffect } from "react";

import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useRouter } from "next/navigation";
export default function Pagination({ totalPage, maxPageView }) {
  if (maxPageView > totalPage) maxPageView = totalPage;
  const [pages, setPages] = useState({
    currentPage: 1,
    totalPage: totalPage,
    startVisible: 1,
    endVisible: 1 + maxPageView - 1,
    prevPage: 0,
    nextPage: 2,
    startPage: 1,
    endPage: totalPage,
  });
  const router = useRouter();

  // Update URL with ?page=pageNo whenever currentPage changes
  useEffect(() => {
    router.push(`?page=${pages.currentPage}`);
  }, [pages.currentPage, router]);

  function createArray(x, y) {
    return Array.from({ length: y - x + 1 }, (v, i) => i + x);
  }

  const handleNextPage = () => {
    // current page is the last page
    const middle = Math.floor((pages.startVisible + pages.endVisible) / 2);

    if (pages.currentPage === totalPage) return;
    else if (pages.currentPage + 1 > middle) {
      setPages((prev) => {
        return {
          ...prev,
          currentPage: prev.currentPage + 1,
          startVisible:
            prev.endVisible === prev.endPage
              ? prev.startVisible
              : prev.startVisible + 1,
          endVisible:
            prev.endVisible === prev.endPage
              ? prev.endVisible
              : prev.endVisible + 1,
        };
      });
    } else {
      setPages((prev) => {
        return {
          ...prev,
          currentPage: prev.currentPage + 1,
        };
      });
    }
  };

  const handlePrevPage = () => {
    // current page is the last page
    const middle = Math.floor((pages.startVisible + pages.endVisible) / 2);

    if (pages.currentPage === 1) return;
    else if (pages.currentPage - 1 < middle) {
      setPages((prev) => {
        return {
          ...prev,
          currentPage: prev.currentPage - 1,
          startVisible:
            prev.startVisible === 1 ? prev.startVisible : prev.startVisible - 1,
          endVisible:
            prev.startVisible === 1 ? prev.endVisible : prev.endVisible - 1,
        };
      });
    } else {
      setPages((prev) => {
        return {
          ...prev,
          currentPage: prev.currentPage - 1,
        };
      });
    }
  };

  const handleEndPage = () => {
    setPages((prev) => {
      return {
        ...prev,
        currentPage: prev.endPage,
        startVisible: prev.endPage - maxPageView + 1,
        endVisible: prev.endPage,
      };
    });
  };

  const handleStartPage = () => {
    setPages((prev) => {
      return {
        ...prev,
        currentPage: 1,
        startVisible: 1,
        endVisible: maxPageView,
      };
    });
  };

  return (
    <div className="flex flex-row gap-3 items-center justify-center">
      {pages.currentPage !== 1 && (
        <>
          <div className="bg-slate-300 p-3" onClick={handleStartPage}>
            <MdOutlineKeyboardDoubleArrowLeft />
          </div>
          <div onClick={handlePrevPage} className="bg-slate-300 p-2">
            <MdKeyboardArrowLeft />
          </div>
        </>
      )}
      <div className="flex flex-row gap-1 items-center">
        {createArray(pages.startVisible, pages.endVisible).map(
          (number, index) => {
            return (
              <div
                className={`${
                  pages.currentPage === number ? "bg-slate-900" : "bg-slate-500"
                }  p-2  text-white`}
                key={index}
              >
                {number}
              </div>
            );
          }
        )}
      </div>
      {pages.currentPage !== totalPage && (
        <>
          <div onClick={handleNextPage} className="bg-slate-300 p-2">
            <MdKeyboardArrowRight />
          </div>
          <div className="bg-slate-300 p-2" onClick={handleEndPage}>
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        </>
      )}
    </div>
  );
}
