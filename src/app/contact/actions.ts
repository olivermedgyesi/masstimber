"use server";

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

  console.info("[contact] new enquiry", enquiry);

  return {
    status: "success",
    message:
      "Thanks — we have your project details and will be in touch shortly.",
  };
}
