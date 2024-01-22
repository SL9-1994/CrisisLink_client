import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <div className="py-4 md:py-12 md:px-2 lg:pr-4 text-base md:text-xl flex flex-col sticky">
      <div className="flex flex-col items-center lg:items-end">
        <div className="border-y-2 border-none md:border-sky-300 md:border-dotted p-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-xl font-bold text-sky-400 md:text-2xl"
            aria-label="nav-logo"
          >
            {/* 仮のロゴ */}
            <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              className="h-auto w-4 md:w-6 text-white-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            <span className="hidden md:block">CrisisLink</span>
          </Link>
        </div>
        <nav className="p-2 md:p-4">
          <ul className="space-y-2 sm:space-y-4  text-gray-600">
            <li className="flex active:text-gray-900 hover:text-gray-900 cursor-pointer">
              <span className="material-symbols-outlined">home</span>
              <span className="pl-2 hidden md:block">ホーム</span>
            </li>
            <li className="flex active:text-gray-900 hover:text-gray-900 cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
              <span className="pl-2 hidden md:block">通知</span>
            </li>
            <li className="flex active:text-gray-900 hover:text-gray-900 cursor-pointer">
              <span className="material-symbols-outlined">person</span>
              <span className="pl-2 hidden md:block">プロフィール</span>
            </li>
            <li className="flex active:text-gray-900 hover:text-gray-900 cursor-pointer">
              <span className="material-symbols-outlined">bookmarks</span>
              <span className="pl-2 hidden md:block">ブックマーク</span>
            </li>
            <li className="flex active:text-gray-900 hover:text-gray-900 cursor-pointer">
              <span className="material-symbols-outlined">crisis_alert</span>
              <span className="pl-2 hidden md:block">防災マップ</span>
            </li>
            <li className="flex active:text-gray-900 hover:text-gray-900 cursor-pointer">
              <span className="material-symbols-outlined">forum</span>
              <span className="pl-2 hidden md:block">メッセージ</span>
            </li>
            <li className="flex active:text-gray-900 hover:text-gray-900 cursor-pointer">
              <span className="material-symbols-outlined">manufacturing</span>
              <span className="pl-2 hidden md:block">詳細設定</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavMenu;
