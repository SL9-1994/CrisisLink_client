import NavMenu from "./components/NavMenu";

export default function Home() {
  return (
    <>
      <main className="flex h-screen w-screen">
        {/* leftConponent */}
        <div className="bg-gray-100 h-full" style={{ flex: "2.5" }}>
          <NavMenu></NavMenu>
        </div>
        {/* centerComponent */}
        <div className="bg-gray-300 h-full" style={{ flex: "4.5" }}></div>
        {/* rightComponent */}
        <div className="bg-gray-200 h-full" style={{ flex: "3" }}></div>
      </main>
    </>
  );
}
