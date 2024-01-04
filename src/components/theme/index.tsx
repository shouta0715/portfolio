"use client";

import { SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MoonIcon } from "@/components/icons/MoonIcon";

export function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const oppositionTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label={
        mounted ? `${oppositionTheme} mode に切り替える` : "読み込み中..."
      }
      className="relative z-10 rounded-full bg-white p-1.5 shadow-lg ring-1 ring-gray-900/5 hover:ring-gray-800/20 md:p-2 dark:border-gray-700 dark:bg-gray-800 dark:hover:ring-gray-700"
      onClick={() => setTheme(oppositionTheme)}
      type="button"
    >
      <SunIcon className="h-5 w-5 fill-sky-400 md:h-6 md:w-6 dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 stroke-teal-400 md:h-6 md:w-6 dark:block" />
    </button>
  );
}
