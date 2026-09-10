type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
};

/*
  Temporary page shell — real section content is built per the copy deck.
  Keeps nav links functional and each route's <title> / H1 correct in the meantime.
*/
export function PagePlaceholder({ eyebrow, title }: PagePlaceholderProps) {
  return (
    <section className="mx-auto w-full max-w-[1280px] flex-1 px-6 py-24 md:px-10 md:py-32">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-pumpkin">
        {eyebrow}
      </p>
      <h1 className="mt-5 max-w-4xl font-body text-4xl font-bold leading-[1.1] tracking-tight text-nero sm:text-5xl">
        {title}
      </h1>
      <p className="mt-8 text-sm uppercase tracking-[0.14em] text-nero/40">
        Page content in progress
      </p>
    </section>
  );
}
