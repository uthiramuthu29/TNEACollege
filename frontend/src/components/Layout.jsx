import { Outlet } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";
import { useIsMobile } from "../utils";
import { useState } from "react";
import { DesktopNotice } from "../resuableChunks/Popups";
import { AnimatePresence } from "motion/react";

export default function Layout() {
  const isMobile = useIsMobile();
  const [showNotice, setShowNotice] = useState(true);
  return (
    <div className=" relative">
      <AnimatePresence>
        {!isMobile && showNotice && (
          <DesktopNotice onClose={() => setShowNotice(false)} />
        )}
      </AnimatePresence>

      <Header />
      <main className="px-4 pt-20 pb-40 ">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}
