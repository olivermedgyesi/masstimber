const BELIEFS = [
  {
    title: "The constructability conversation has to happen first.",
    body: "Most installation problems are design problems that nobody caught early enough in the design process. We push for pre-construction involvement on every project because it is the stage where experienced field-level eyes can add the most value and circumvent constructability issues before they become a reality.",
  },
  {
    title: "A date is a commitment, not an estimate.",
    body: "General contractors build the schedule for every downstream trade around the timber installation. We do not give dates we cannot keep, and we do not move them without telling you why.",
  },
  {
    title: "The connection is the job.",
    body: "Setting beams is the straightforward part. Getting the connections right, in the right sequence, to the right tolerances, while coordinating with the structural steel and concrete crews is the true art. That is where mass timber projects succeed or fail. We build our teams around people who understand that.",
  },
];

export function Beliefs() {
  return (
    <section
      id="approach"
      className="relative isolate overflow-hidden bg-nero px-6 py-20 text-seashell md:px-10 md:py-28 lg:py-32"
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1280px]">
        <h2 className="font-display text-3xl uppercase leading-[1.05] tracking-tight md:whitespace-nowrap lg:text-4xl xl:text-5xl">
          How We Approach Every Project
        </h2>

        <ol className="mt-12 border-t border-seashell/20 md:mt-16">
          {BELIEFS.map((belief, index) => (
            <li
              key={belief.title}
              className="grid gap-5 border-b border-seashell/20 py-10 md:grid-cols-12 md:gap-8 md:py-14 lg:gap-12"
            >
              <span
                className="font-body text-5xl font-bold leading-none tracking-tight text-pumpkin md:col-span-2 md:text-6xl lg:text-7xl"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-balance text-2xl font-semibold leading-snug text-seashell md:col-span-5 md:text-3xl">
                {belief.title}
              </h3>

              <p className="leading-relaxed text-seashell/70 md:col-span-5 md:pt-1 md:text-lg">
                {belief.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
