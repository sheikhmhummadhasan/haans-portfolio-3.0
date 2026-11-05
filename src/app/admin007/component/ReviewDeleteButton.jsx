"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ReviewDeleteButton = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
const handleDelete = async () => {
  try {
    const prom = await fetch(`${process.env.SURVER_URI}/review/${id}`, {
      method: "DELETE",
      cache: "no-store",
    });

    const res = await prom.json();

    if (!prom.ok) {
      toast.error(res.message || "Try again later!");
      return;
    }

    toast.success("Delete Successfully done!");

    router.refresh();
  } catch (error) {
    toast.error("Something went wrong!");

  }
};

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default ReviewDeleteButton;