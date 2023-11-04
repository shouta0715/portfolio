"use server";

import React from "react";

export async function Paginator<T extends unknown[]>({
  children,
  data,
  paginating = false,
  slice = 12,
  currentPage,
}: {
  children: ({
    pageData,
    hasMore,
  }: {
    pageData: T;
    hasMore: boolean;
  }) => React.ReactNode;
  data: T;
  paginating?: boolean;
  slice?: number;
  currentPage: number;
}) {
  const page = currentPage ?? 1;
  const pageData = data.slice(
    paginating ? (page - 1) * slice : 0,
    page * slice
  ) as T;
  const hasMore = data.length > page * slice;

  return <>{children({ pageData, hasMore })}</>;
}
