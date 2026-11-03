import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle";

const reviews = [
  {
    _id: "review-01",
    name: "John Smith",
    role: "Business Owner",
    comment:
      "Hasan did an amazing job creating our website. The design was clean, modern and exactly what we needed.",
    rating: 5,
    isActive: true,
  },
  {
    _id: "review-02",
    name: "Sarah Johnson",
    role: "Startup Founder",
    comment:
      "Great communication and excellent development skills. The final website exceeded my expectations.",
    rating: 5,
    isActive: true,
  },
  {
    _id: "review-03",
    name: "Michael Brown",
    role: "Entrepreneur",
    comment:
      "Very professional work. The website is fast, responsive and looks beautiful on every device.",
    rating: 5,
    isActive: true,
  },
  {
    _id: "review-04",
    name: "David Wilson",
    role: "Marketing Manager",
    comment:
      "Working with Hasan was a great experience. He understood my requirements and delivered a quality product.",
    rating: 5,
    isActive: true,
  },
];

const Reviews = () => {
  const activeReviews = reviews.filter((review) => review.isActive);

  return (
    <section
      id="reviews"
      className="w-full overflow-hidden bg-neutral-100 py-32"
    >
      <div className="mb-16 px-6 md:px-12 lg:px-16">
        <SectionTitle k="Kind words" t="Client reviews" />
      </div>

      <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
        {[...activeReviews, ...activeReviews].map((review, index) => (
          <figure
            key={`${review._id}-${index}`}
            className="w-[320px] shrink-0 rounded-sm border border-neutral-200 bg-[#faf9f6] p-8 md:w-[360px]"
          >
            <div className="mb-5 flex gap-1">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className={`h-4 w-4 ${
                    starIndex < review.rating
                      ? "fill-neutral-950 text-neutral-950"
                      : "text-neutral-300"
                  }`}
                />
              ))}
            </div>

            <blockquote className="mb-8 text-lg leading-8 text-neutral-700">
              {review.comment}
            </blockquote>

            <figcaption>
              <div className="font-bold text-neutral-950">
                {review.name}
              </div>

              <div className="mt-1 text-sm text-neutral-500">
                {review.role}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Reviews;