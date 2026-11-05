export const instant = false;

import React from "react";
import ReviewDeleteButton from "../component/ReviewDeleteButton";

const MessagesPage = async () => {
  const getData = async (endpoint) => {
    try {
      const res = await fetch(`${process.env.SURVER_URI}/${endpoint}`, {
        cache: "no-store",
      });

      if (!res.ok) return [];

      const data = await res.json();

      return Array.isArray(data) ? data : data.data || [];
    } catch (error) {

      return [];
    }
  };

  const [messages, reviews] = await Promise.all([
    getData("visitor"),
    getData("review"),
  ]);

  return (
    <div className="space-y-12 p-6">
      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage all contact messages
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {messages.length} Messages
          </span>
        </div>

        <div className="grid gap-5">
          {messages.length > 0 ? (
            messages.map((item) => (
              <div
                key={item._id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.name || "Unknown"}
                    </h3>
                    <p className="mt-1 text-sm text-blue-600">
                      {item.email || "No email"}
                    </p>
                  </div>

                  <span className="rounded-lg bg-gray-100 px-3 py-1 text-xs text-gray-600">
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString()
                      : "No date"}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {item.service && (
                    <span className="rounded-lg bg-purple-50 px-3 py-2 text-sm text-purple-700">
                      Service: {item.service}
                    </span>
                  )}

                  {item.budget && (
                    <span className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
                      Budget: {item.budget}
                    </span>
                  )}
                </div>

                <div className="mt-5 rounded-xl bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-700">
                    Message
                  </p>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-gray-600">
                    {item.message || "No message"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed p-10 text-center">
              <p className="font-medium text-gray-500">No messages found.</p>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage all client reviews
            </p>
          </div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {reviews.length} Reviews
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review._id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {review.name || "Anonymous"}
                  </h3>

                  <span className="text-lg tracking-wider text-yellow-500">
                    {"★".repeat(
                      Math.min(5, Math.max(0, Number(review.rating) || 0))
                    )}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {review.role || ""}
                  {review.company ? ` at ${review.company}` : ""}
                </p>

                <div className="mt-5 rounded-xl bg-gray-50 p-4">
                  <p className="text-sm leading-7 text-gray-600">
                    {review.comment || "No review"}
                  </p>
                </div>

                {review.project && (
                  <p className="mt-4 text-xs text-gray-400">
                    Project: {review.project}
                  </p>
                )}

                <div className="flex items-center justify-end">
                  <ReviewDeleteButton id={review._id} />
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed p-10 text-center md:col-span-2">
              <p className="font-medium text-gray-500">No reviews found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MessagesPage;