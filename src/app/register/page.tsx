import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 flex items-center min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 w-2/3">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          アカウント登録
        </h2>

        <form className="mx-auto max-w-lg rounded-lg border">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                htmlFor="username"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-sky-300 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-sky-300 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-sky-300 transition duration-100 focus:ring mb-4"
              />
            </div>

            <button className="block rounded-lg bg-sky-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
              サインアップ
            </button>
          </div>

          <div className="flex items-center justify-center bg-gray-100 p-4">
            <p className="text-center text-sm text-gray-500">
              既にアカウントをお持ちですか？
              <Link
                href="/login"
                className="text-sky-500 transition duration-100 hover:text-sky-600 active:text-sky-700"
              >
                ログイン
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
