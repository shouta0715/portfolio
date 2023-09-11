import React, { ReactNode } from "react";

export function Achievement({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-md bg-amber-100 px-2 py-1 text-sm font-medium text-amber-700">
      <span>{children}</span>
    </div>
  );
}
