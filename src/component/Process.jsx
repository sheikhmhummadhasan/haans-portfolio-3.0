import SectionTitle from "./SectionTitle";

const steps = [
  ["Discover", "We talk about your goals, audience and ideas."],
  ["Design", "I sketch, design and share previews for feedback."],
  ["Build", "Your design becomes a fast, animated website."],
  ["Launch", "We go live and I stay around for support."],
];

const Process = () => {
  return (
    <section className="w-full bg-[#0d0d0d] px-6 py-32 text-white md:px-12 lg:px-16">
      <div className="mb-16">
        <SectionTitle k="How I work" t="My process" light />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(([title, description], index) => (
          <div
            key={title}
            className="reveal border-t border-white/30 pt-6"
            style={{ transitionDelay: `${index * 0.12}s` }}
          >
            <div className="mb-4 font-display text-5xl font-bold text-white/30">
              0{index + 1}
            </div>

            <h3 className="mb-2 text-2xl font-bold">{title}</h3>

            <p className="text-sm leading-7 text-white/65">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;