"use client";
import { useRouter } from "next/navigation";

export default function Back() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-block bg-gray-600 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1"
    >
      Back
    </button>
  );
}
