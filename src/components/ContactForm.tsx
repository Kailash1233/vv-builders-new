"use client";

import { useState, type FormEvent } from "react";
import { ArrowIcon } from "@/components/icons";
import { site } from "@/lib/site";

const projectTypes = [
  "Residential Construction",
  "Villa Construction",
  "Renovation / Home Extension",
  "Interiors",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const projectType = String(form.get("projectType") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full bg-transparent border-b border-ink-900/20 py-3 focus:border-gold-500 outline-none"
          />
        </Field>
        <Field label="Email Address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full bg-transparent border-b border-ink-900/20 py-3 focus:border-gold-500 outline-none"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Phone Number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full bg-transparent border-b border-ink-900/20 py-3 focus:border-gold-500 outline-none"
          />
        </Field>
        <Field label="Project Type" htmlFor="projectType">
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            required
            className="w-full bg-transparent border-b border-ink-900/20 py-3 focus:border-gold-500 outline-none"
          >
            <option value="" disabled>
              Select an option
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell Us About Your Project" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-b border-ink-900/20 py-3 focus:border-gold-500 outline-none resize-none"
        />
      </Field>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-navy-950 text-cream-50 text-[12px] tracking-[0.14em] uppercase font-semibold px-7 py-4 hover:bg-navy-800 transition-colors"
      >
        Send Message
        <ArrowIcon className="w-4 h-4" />
      </button>

      {submitted && (
        <p role="status" className="text-sm text-gold-600">
          Thanks! Your email app should open with your message ready to send.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs uppercase tracking-wide text-ink-500 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
