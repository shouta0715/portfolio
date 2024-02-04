"use client";

export default function Error({
  message = "Something went wrong!",
}: {
  message?: string;
}) {
  return (
    <p
      className="py-10 text-center text-lg font-semibold text-destructive"
      role="alert"
    >
      {message}
    </p>
  );
}
