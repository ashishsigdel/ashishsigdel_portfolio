"use client";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=""
    >
      {theme === "dark" ? (
        <div className="text-[26px] text-skin font-bold">
          <IoSunny />
        </div>
      ) : (
        <div className="text-[26px] text-skin font-bold">
          <IoMoon />
        </div>
      )}
    </button>
  );
}
