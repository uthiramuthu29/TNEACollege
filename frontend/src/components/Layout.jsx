import { Outlet } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className=" relative">
      <Header />
      <main className="px-4 pt-20 pb-40 ">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}
