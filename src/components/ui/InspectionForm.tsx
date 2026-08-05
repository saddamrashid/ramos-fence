"use client";

import { FormEvent, useState } from "react";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";

interface InspectionFormProps {
  variant?: "dark" | "light";
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showEmail?: boolean;
  showServiceField?: boolean;
  className?: string;
}

type Status = "idle" | "submitting" | "success";

export function InspectionForm({
  variant = "dark",
  eyebrow,
  title,
  subtitle,
  showEmail = false,
  showServiceField = false,
  className,
}: InspectionFormProps) {
  const { formConfig } = siteConfig;
  const [status, setStatus] = useState<Status>("idle");
  const isDark = variant === "dark";

  const formEyebrow = eyebrow || formConfig.defaultEyebrow;
  const formTitle = title || formConfig.defaultTitle;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Wire up to API route or email provider:
    // await fetch("/api/lead", { method: "POST", body: new FormData(e.currentTarget) });
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
  }

  const inputClass = cn(
    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink-muted/60",
    isDark
      ? "border-white/15 bg-white/5 text-white focus:border-accent"
      : "border-black/10 bg-surface-alt text-ink focus:border-primary"
  );

  const labelClass = cn("mb-1.5 block text-xs font-medium", isDark ? "text-white/80" : "text-ink-soft");

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-7",
        isDark ? "border border-white/10 bg-primary-dark/60 backdrop-blur" : "card p-6 sm:p-8",
        className
      )}
    >
      <span className={cn("eyebrow", isDark && "text-accent-light")}>{formEyebrow}</span>
      <h3 className={cn("mt-1.5 font-display text-xl font-bold", isDark ? "text-white" : "text-ink")}>
        {formTitle}
      </h3>
      {subtitle && (
        <p className={cn("mt-1 text-xs", isDark ? "text-white/60" : "text-ink-muted")}>{subtitle}</p>
      )}

      {status === "success" ? (
        <div
          className={cn(
            "mt-6 flex flex-col items-center gap-3 rounded-xl py-8 text-center",
            isDark ? "bg-white/5" : "bg-surface-alt"
          )}
        >
          <CheckCircle2 className="h-9 w-9 text-accent" aria-hidden />
          <p className={cn("text-sm font-medium", isDark ? "text-white" : "text-ink")}>
            {formConfig.successMessage}
          </p>
        </div>
      ) : (
        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <div className={showEmail ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : ""}>
            <div>
              <label className={labelClass} htmlFor="fullName">
                Full Name *
              </label>
              <input id="fullName" name="fullName" required placeholder="John Smith" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">
                Phone {!showEmail && "*"}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(559) 000-0000"
                className={inputClass}
              />
            </div>
          </div>

          {showEmail && (
            <div>
              <label className={labelClass} htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                className={inputClass}
              />
            </div>
          )}

          {showServiceField && (
            <div>
              <label className={labelClass} htmlFor="serviceType">
                {formConfig.serviceFieldLabel}
              </label>
              <input
                id="serviceType"
                name="serviceType"
                required
                placeholder={formConfig.serviceFieldPlaceholder}
                className={inputClass}
              />
            </div>
          )}

          <div>
            <label className={labelClass} htmlFor="message">
              {showServiceField ? formConfig.messageLabelOptional : formConfig.messageLabelRequired}
            </label>
            <textarea
              id="message"
              name="message"
              required={!showServiceField}
              rows={3}
              placeholder={
                showServiceField
                  ? formConfig.messagePlaceholderOptional
                  : formConfig.messagePlaceholderRequired
              }
              className={cn(inputClass, "resize-none")}
            />
          </div>

          {!showServiceField && (
            <label className={cn("flex items-start gap-2 text-xs", isDark ? "text-white/60" : "text-ink-muted")}>
              <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 rounded border-black/20 accent-accent" />
              <span>{formConfig.disclaimerText}</span>
            </label>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Sending...
              </>
            ) : (
              <>
                {showServiceField ? formConfig.submitButtonText : "Send"}
                <Send className="h-4 w-4" aria-hidden />
              </>
            )}
          </button>

          <p className={cn("text-center text-[11px]", isDark ? "text-white/50" : "text-ink-muted")}>
            {formConfig.footerNote}
          </p>
        </form>
      )}
    </div>
  );
}