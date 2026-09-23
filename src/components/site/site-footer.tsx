import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#how-it-works", label: "Process" },
  { href: "/#projects", label: "Projects" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-nero px-6 pb-16 pt-12 text-seashell md:px-10">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col gap-12 border-b border-seashell/15 pb-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/brand/logo-primary-white-orange.png"
              alt="Contech Mass Timber"
              width={220}
              height={60}
              className="h-9 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed text-seashell/60">
              Mass timber installation for general contractors across BC and the
              Pacific Northwest.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <nav>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-seashell/40">
                Explore
              </p>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-seashell/70 transition-colors hover:text-seashell"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-seashell/40">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-seashell/70">
                <li>
                  <a
                    href="tel:+16045191711"
                    className="transition-colors hover:text-seashell"
                  >
                    (604) 519-1711
                  </a>
                </li>
                <li>
                  12860 Clarke Pl #150
                  <br />
                  Richmond, BC V6V 2H1
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-seashell/40 sm:flex-row sm:justify-between">
          <p>&copy; {year} Contech Mass Timber</p>
          <p>A division of Contech Construction Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
