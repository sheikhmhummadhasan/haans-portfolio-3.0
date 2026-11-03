import SectionTitle from "./SectionTitle";

const About = () => {
  const stats = [
    ["5+", "Years"],
    ["40+", "Projects"],
    ["20+", "Clients"],
  ];

  return (
    <section
      id="about"
      className="grid w-full gap-12 px-6 py-32 md:grid-cols-2 md:px-12 lg:px-16"
    >
      <SectionTitle k="Who I am" t="About me" />

      <div className="reveal space-y-6 text-lg text-neutral-600">
        <p>
          Im a designer and developer who loves turning ideas into simple,
          beautiful products. I mix strong visuals with smooth motion so every
          brand feels alive.
        </p>

        <div className="grid grid-cols-3 gap-6 pt-6 text-neutral-950">
          {stats.map(([value, label]) => (
            <div key={label}>
              <div className="font-display text-4xl font-bold">{value}</div>
              <div className="text-sm text-neutral-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;