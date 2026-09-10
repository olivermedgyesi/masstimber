/*
  Sits between two page sections in place of a rule — a simple centred
  downward chevron in the whitespace where a border used to be.
*/
export function SectionDivider() {
  return (
    <div className="flex justify-center py-4 text-nero/30" aria-hidden="true">
      <svg width="30" height="16" viewBox="0 0 30 16" fill="none">
        <path
          d="M3 3l12 10L27 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
}
