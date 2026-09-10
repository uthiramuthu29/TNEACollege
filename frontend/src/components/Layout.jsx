import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="px-4 py-6">
      <main>
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}
