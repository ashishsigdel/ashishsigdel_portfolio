"use client";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";
export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=""
    >
      {theme === "dark" ? (
        <div className="text-[26px] text-dark-black dark:text-light-white font-bold">
          <IoSunny />
        </div>
      ) : (
        <div className="text-[26px] text-dark-black dark:text-light-white font-bold">
          <IoMoon />
        </div>
      )}
    </button>
  );
}
