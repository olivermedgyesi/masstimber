import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ServiceDetailProps = {
  id: string;
  title: string;
  subhead?: string;
  paragraphs: string[];
  list?: { heading: string; items: string[] };
  closing?: string;
  cta: { label: string; href?: string };
  image: { src: string; alt: string };
};

export function ServiceDetail({
  id,
  title,
  subhead,
  paragraphs,
  list,
  closing,
  cta,
  image,
}: ServiceDetailProps) {
  return (
    <article
      id={id}
      className="group relative grid scroll-mt-28 gap-8 bg-seashell/90 p-4 backdrop-blur-sm sm:p-6 md:grid-cols-2 md:gap-12"
    >
      <div className="relative min-h-[18rem] overflow-hidden bg-nero/5 sm:min-h-[26rem] md:min-h-[36rem] lg:min-h-[41rem]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
      </div>

      <div className="flex flex-col justify-between gap-12 md:py-4 md:pr-2">
        <div>
          <h2 className="font-display text-[clamp(1.5rem,7.5vw,1.875rem)] uppercase leading-[1.05] tracking-tight text-nero md:text-[clamp(1.5rem,3.4vw,2.25rem)]">
            {title}
          </h2>

          {subhead ? (
            <p className="mt-5 text-lg font-semibold leading-snug text-nero md:text-xl">
              {subhead}
            </p>
          ) : null}

          <div className="mt-5 grid gap-4 leading-relaxed text-nero/80">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          {list ? (
            <div className="mt-8 border-t border-nero/15 pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-pumpkin">
                {list.heading}
              </p>
              <ul className="mt-4 grid gap-3">
                {list.items.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span
                      className="mt-[0.55rem] h-2 w-2 shrink-0 bg-pumpkin"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed text-nero/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {closing ? (
            <p className="mt-6 leading-relaxed text-nero">{closing}</p>
          ) : null}
        </div>

        <CardLink href={cta.href ?? "/contact"}>{cta.label}</CardLink>
      </div>
    </article>
  );
}

function CardLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group/link inline-flex items-center gap-3 self-start font-medium text-nero/80 transition-colors hover:text-nero focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pumpkin"
    >
      {children}
      <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden bg-pumpkin text-seashell transition-colors group-hover/link:bg-[#c74d08]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="-rotate-45 transition-transform duration-300 group-hover/link:rotate-0"
        >
          <path
            d="M3.33 8h8.67M8 3.33 12.67 8 8 12.67"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="square"
          />
        </svg>
      </span>
    </Link>
  );
}

export function ServiceList({ children }: { children: ReactNode }) {
  return (
    <section className="relative isolate bg-nero/[0.07] px-2 py-10 sm:px-4 sm:py-14 md:px-6 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 grid grid-cols-2 md:grid-cols-4"
        aria-hidden="true"
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={[
              "border-r border-nero/10",
              i > 1 ? "hidden md:block" : "",
            ].join(" ")}
          />
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 md:gap-6">
        {children}
      </div>
    </section>
  );
}
