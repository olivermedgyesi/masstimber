"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/contact/actions";

const SOURCES = [
  "Google",
  "Referral",
  "Woodworks Innovation Network",
  "naturally:wood directory",
  "Other",
];

const initialState: ContactFormState = { status: "idle" };

const labelClass =
  "block text-xs font-medium uppercase tracking-[0.16em] text-nero/70";
const inputClass =
  "mt-3 block w-full border-2 border-nero/20 bg-transparent px-4 py-3 text-base text-nero placeholder:text-nero/40 transition-colors hover:border-nero/40 focus:border-pumpkin focus:outline-none aria-[invalid=true]:border-pumpkin";

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? (
          <span className="text-pumpkin" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="normal-case tracking-normal text-nero/45">
            {" "}
            (optional)
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-pumpkin">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="border-l-[3px] border-pumpkin bg-nero/[0.04] px-8 py-10"
      >
        <p className="text-2xl font-semibold leading-snug text-nero">
          Thank you.
        </p>
        <p className="mt-3 text-lg leading-relaxed text-nero/75">
          {state.message}
        </p>
      </div>
    );
  }

  const errorProps = (id: keyof NonNullable<ContactFormState["errors"]>) =>
    errors[id]
      ? { "aria-invalid": true, "aria-describedby": `${id}-error` }
      : {};

  return (
    <form action={formAction} className="grid gap-8">
      {state.status === "error" && state.message ? (
        <p role="alert" className="text-sm font-medium text-pumpkin">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-8 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            {...errorProps("name")}
          />
        </Field>

        <Field id="company" label="Company" required error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            className={inputClass}
            {...errorProps("company")}
          />
        </Field>

        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            {...errorProps("email")}
          />
        </Field>

        <Field id="phone" label="Phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
      </div>

      <Field
        id="project"
        label="Project description"
        required
        error={errors.project}
      >
        <textarea
          id="project"
          name="project"
          rows={6}
          required
          placeholder="Tell us about your project: scope, location, timeline, and where you are in the design process."
          className={`${inputClass} resize-y`}
          {...errorProps("project")}
        />
      </Field>

      <Field id="source" label="How did you hear about us?">
        <div className="relative">
          <select
            id="source"
            name="source"
            defaultValue=""
            className={`${inputClass} appearance-none pr-12`}
          >
            <option value="">Select one</option>
            {SOURCES.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 mt-1.5 -translate-y-1/2 text-nero/60"
          >
            <path
              d="M3 6l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-3 bg-pumpkin px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-seashell transition-colors hover:bg-[#c74d08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pumpkin disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending…" : "Contact Us"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            <path
              d="M2 8h11M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
