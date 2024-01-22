import NavMenu from "./components/NavMenu";

export default function Home() {
  return (
    <>
      <main className="flex h-screen w-screen">
        {/* leftConponent */}
        <div className="bg-gray-100 h-full hidden sm:block p-2 md:flex-3">
          <NavMenu></NavMenu>
        </div>
        {/* centerComponent */}
        <div className="bg-gray-300 h-full flex-9 sm:flex-4"></div>
        {/* rightComponent */}
        <div className="bg-gray-200 h-full hidden md:block flex-4"></div>
      </main>
    </>
  );
}
