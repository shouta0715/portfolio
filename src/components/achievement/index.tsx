import clsx from "clsx";
import React from "react";

const special = {
  targets: ["個人開発"],
  color: "bg-sky-50 text-sky-700",
};

export function Achievement({ children }: { children: string }) {
  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ",
        special.targets.includes(children)
          ? special.color
          : "bg-yellow-50 text-yellow-600"
      )}
    >
      <span>{children}</span>
    </div>
  );
}
