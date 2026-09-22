import { motion } from "motion/react";

export function DesktopNotice({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-md border border-ash-border rounded-xl bg-white p-6 "
      >
        <button onClick={onClose} className="absolute top-1.5 right-3 ">
          X
        </button>
        <p className="text-[16px] text-light-black ">
          <strong className="block">Mobile experience available 📱</strong>{" "}
          We're currently developing the desktop version. For the best
          experience, please open TNEA College Finder on a mobile device.
        </p>
      </motion.div>
    </motion.div>
  );
}
