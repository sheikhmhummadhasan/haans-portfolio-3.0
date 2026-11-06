
import Link from "next/link";
import {
  ArrowUpRight,
  Star,
  Quote,
  MessageCircle,
} from "lucide-react";
import ReviewForm from "@/component/ReviewForm";


const ReviewComp = ({activeReviews}) => {
//   const activeReviews = reviews.filter((review) => review.isActive);

  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#1A1A1A]">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-10">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#737373]">
            Client feedback
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[1.1] tracking-tight sm:text-7xl">
            Words that
            <span className="text-[#88847D]"> matter.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#737373]">
            Every project is an opportunity to create something meaningful.
            Heres a space for sharing feedback and experiences from people
            Ive worked with.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activeReviews.map((review, index) => (
            <article
              key={review._id}
              className="reveal flex flex-col border border-[#D6D3CD] bg-[#FAF9F6] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-8"
            >
              <div className="flex items-center justify-between">
                <Quote size={28} strokeWidth={1.3} />

                <span className="text-xs tracking-widest text-[#737373]">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-8 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill="currentColor"
                    strokeWidth={1}
                  />
                ))}
              </div>

              <p className="mt-6 flex-1 text-sm leading-8 text-[#66615A]">
                {review.comment}
              </p>

              <div className="my-7 h-px bg-[#D6D3CD]" />

              <div className="flex items-end justify-between gap-3">
                <div>
                  <h2 className="font-display text-lg font-semibold">
                    {review.name}
                  </h2>

                  <p className="mt-1 text-xs text-[#737373]">
                    {review.role}
                  </p>

                  <p className="mt-1 text-xs text-[#737373]">
                    {review.company}
                  </p>
                </div>

                <span className="text-right text-[10px] uppercase tracking-wider text-[#737373]">
                  {review.date}
                </span>
              </div>

              <p className="mt-5 border-t border-[#D6D3CD] pt-4 text-xs text-[#737373]">
                Project: {review.project}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#D6D3CD] bg-[#EBE6DE] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#737373]">
            Your experience matters
          </p>

          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Have we worked together?
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#737373]">
            Id appreciate your honest feedback about our collaboration
            and the work we completed together.
          </p>
          <ReviewForm />

         
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-6 py-24 text-[#F5F2EB]">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Lets work together
          </p>

          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Your project could be the next success story.
            </h2>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 self-start border-b border-white/50 pb-3 text-sm hover:border-white md:self-auto"
            >
              Start a project
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReviewComp;
