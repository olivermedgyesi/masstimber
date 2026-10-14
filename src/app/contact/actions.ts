// Runs in the browser: Web3Forms rejects server-side submissions on the free plan.
// The access key is public by design.
const WEB3FORMS_ACCESS_KEY = "46de3949-a55b-4a26-816d-5705b050b688";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "company" | "email" | "project", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const field = (key: string) => String(formData.get(key) ?? "").trim();

  if (field("website")) return { status: "success" };

  const enquiry = {
    name: field("name"),
    company: field("company"),
    email: field("email"),
    phone: field("phone"),
    project: field("project"),
    source: field("source"),
  };

  const errors: ContactFormState["errors"] = {};
  if (!enquiry.name) errors.name = "Please enter your name.";
  if (!enquiry.company) errors.company = "Please enter your company.";
  if (!enquiry.email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(enquiry.email))
    errors.email = "Please enter a valid email address.";
  if (!enquiry.project)
    errors.project = "Please tell us a little about your project.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
    };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New enquiry from ${enquiry.name} (${enquiry.company})`,
        from_name: "Contech Mass Timber website",
        replyto: enquiry.email,
        ...enquiry,
      }),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.success)
      throw new Error(data?.message ?? res.statusText);
  } catch (err) {
    console.error("[contact] submission failed", err);
    return {
      status: "error",
      message:
        "Sorry, something went wrong sending your message. Please try again or email us directly.",
    };
  }

  return {
    status: "success",
    message:
      "Thanks — we have your project details and will be in touch shortly.",
  };
}
