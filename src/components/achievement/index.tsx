import clsx from "clsx";
import React from "react";

const special = [
  {
    name: "個人開発",
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "開発中",
    color: "bg-gray-50 text-gray-600",
  },
];

export function Achievement({ children }: { children: string }) {
  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ",
        special.find((s) => s.name === children)?.color ??
          "bg-yellow-50 text-yellow-600"
      )}
    >
      <span>{children}</span>
    </div>
  );
}
