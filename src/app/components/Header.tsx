import React from "react";

const Header = () => {
  return (
      <header className="w-2/3 h-20 bg-gradient-to-b from-blue-300 to-blue-500 px-12 flex justify-center items-center rounded-full">
        {/* 仮のロゴを設定 */}
        <div>
          <svg
            width="95"
            height="94"
            viewBox="0 0 95 94"
            className="h-auto w-8 text-white mr-4"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white italic tracking-wide">CrisisLink</h1>
      </header>
  );
};

export default Header;
