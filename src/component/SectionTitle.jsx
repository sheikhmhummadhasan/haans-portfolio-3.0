const SectionTitle = ({ k, t, light = false }) => {
  return (
    <div>
      <p
        className={`mb-4 text-sm uppercase tracking-[0.3em] ${
          light ? "text-white/60" : "text-neutral-500"
        }`}
      >
        {k}
      </p>

      <h2
        className={`font-display text-5xl font-bold tracking-tight md:text-7xl ${
          light ? "text-white" : "text-neutral-950"
        }`}
      >
        {t}
      </h2>
    </div>
  );
};

export default SectionTitle;