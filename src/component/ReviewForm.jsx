"use client";

import { useState } from "react";
import { Star, Send } from "lucide-react";
import toast from "react-hot-toast";

const ReviewForm = () => {
  const [rating, setRating] = useState(5);

   const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.rating = rating;

    const prom = await fetch(`${process.env.SURVER_URI}/review`,{
      method:"POST",
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(data)
    })
    const res = await prom.json()
    if(!res){
      toast.error('sorry surver is error!')
    }else{
      toast.success(`Thsnks for your review ${data.name}!`)
    }

  };

  return (
    <section className="bg-[#FAF9F6] px-5 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#737373]">
            Client Feedback
          </span>

          <h2 className="mt-4 font-display text-3xl font-semibold text-[#222] sm:text-4xl">
            Share Your Experience
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#737373]">
            Your feedback means a lot. Share your experience working with me.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium">Your Name</label>
            <input
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full border border-[#D6D3CD] bg-transparent px-4 py-3 outline-none focus:border-[#222]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Your Role</label>
            <input
              name="role"
              required
              placeholder="e.g. Founder, CEO, Designer"
              className="w-full border border-[#D6D3CD] bg-transparent px-4 py-3 outline-none focus:border-[#222]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Company</label>
            <input
              name="company"
              required
              placeholder="Company or Organization"
              className="w-full border border-[#D6D3CD] bg-transparent px-4 py-3 outline-none focus:border-[#222]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Project Name</label>
            <input
              name="project"
              required
              placeholder="What project did we work on?"
              className="w-full border border-[#D6D3CD] bg-transparent px-4 py-3 outline-none focus:border-[#222]"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium">Your Rating</label>

            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(i + 1)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={27}
                    fill={i < rating ? "currentColor" : "none"}
                    className={i < rating ? "text-[#C49A43]" : "text-[#D6D3CD]"}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Your Review
            </label>
            <textarea
              name="comment"
              required
              rows={5}
              minLength={10}
              placeholder="Share your experience working with me..."
              className="w-full resize-none border border-[#D6D3CD] bg-transparent px-4 py-3 outline-none focus:border-[#222]"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 bg-[#222] px-6 py-4 text-sm text-white transition hover:bg-[#444]"
          >
            Submit Review
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;