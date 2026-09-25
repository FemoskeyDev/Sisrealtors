import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";

type SubmissionState = "ready" | "submitting" | "success" | "error";

const transition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
};

const fieldClassName =
    "mt-2 min-h-12 w-full border border-black/15 bg-transparent px-4 py-3 text-base text-black outline-none transition-colors placeholder:text-black/35 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/25";

export function ContactPage() {
    const [submissionState, setSubmissionState] =
        useState<SubmissionState>("ready");

    const isSubmitting = submissionState === "submitting";

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isSubmitting) return;

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            if (import.meta.env.DEV) {
                console.warn(
                    "VITE_WEB3FORMS_ACCESS_KEY is not configured. Add it to the environment before submitting enquiries.",
                );
            }
            setSubmissionState("error");
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);

        setSubmissionState("submitting");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    enquiryType: formData.get("enquiryType"),
                    message: formData.get("message"),
                    botcheck: formData.get("botcheck"),
                    subject: "New Dominion Leisure City Website Enquiry",
                    from_name: "Dominion Leisure City Website",
                }),
            });

            const result: { success?: boolean } = await response.json();
            if (!response.ok || result.success !== true) {
                throw new Error("Web3Forms did not accept the enquiry.");
            }

            form.reset();
            setSubmissionState("success");
        } catch {
            setSubmissionState("error");
        }
    };

    return (
        <main className="bg-white pb-24 pt-32 text-black md:pb-32 md:pt-40">
            <Container>
                {/* Page introduction */}
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={transition}
                    >
                        <SectionLabel>LET&apos;S CONNECT.</SectionLabel>
                        <h1 className="mt-5 max-w-5xl text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.92] tracking-[-0.055em]">
                            Get in Touch {" "}
                            <span className="font-serif italic text-black/45">
                                with Us.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...transition, delay: 0.12 }}
                        className="max-w-lg text-base leading-7 text-black/60 md:text-lg md:leading-8 lg:pb-1"
                    >
                        Have a question, partnership opportunity, tenant
                        enquiry or investment interest? Tell us how we can help.
                    </motion.p>
                </div>

                {/* Contact form and company details */}
                <div className="mt-16 grid gap-16 pt-10 md:mt-20 md:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
                    <motion.form
                        onSubmit={handleSubmit}
                        aria-busy={isSubmitting}
                        aria-describedby={
                            submissionState === "success" || submissionState === "error"
                                ? "contact-submission-status"
                                : undefined
                        }
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...transition, delay: 0.18 }}
                        className="space-y-7"
                    >
                        <input
                            type="checkbox"
                            name="botcheck"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="hidden"
                        />

                        <div className="grid gap-7 sm:grid-cols-2 sm:gap-6">
                            <div>
                                <label htmlFor="contact-name" className="text-sm text-black/70">
                                    Name
                                </label>
                                <input
                                    className={fieldClassName}
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="text-sm text-black/70">
                                    Email
                                </label>
                                <input
                                    className={fieldClassName}
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid gap-7 sm:grid-cols-2 sm:gap-6">
                            <div>
                                <label htmlFor="contact-phone" className="text-sm text-black/70">
                                    Phone Number
                                </label>
                                <input
                                    className={fieldClassName}
                                    id="contact-phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-enquiry-type" className="text-sm text-black/70">
                                    Enquiry Type
                                </label>
                                <select
                                    className={fieldClassName}
                                    id="contact-enquiry-type"
                                    name="enquiryType"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>
                                        Select enquiry type
                                    </option>
                                    <option>General Enquiry</option>
                                    <option>Brand / Tenant Enquiry</option>
                                    <option>Partnership Enquiry</option>
                                    <option>Investor Enquiry</option>
                                    <option>Media Enquiry</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="text-sm text-black/70">
                                Message
                            </label>
                            <textarea
                                className={`${fieldClassName} min-h-36 resize-y`}
                                id="contact-message"
                                name="message"
                                rows={5}
                                required
                            />
                        </div>

                        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting && (
                                    <span role="status" aria-live="polite" className="sr-only">
                                        Sending your enquiry
                                    </span>
                                )}
                                {isSubmitting ? "SENDING..." : "SEND YOUR ENQUIRY"}
                            </Button>
                            {submissionState === "success" && (
                                <p id="contact-submission-status" role="status" aria-live="polite" className="max-w-md text-sm leading-6 text-green-800">
                                    Thank you for getting in touch. Your enquiry has been received and our team will get back to you.
                                </p>
                            )}
                            {submissionState === "error" && (
                                <p id="contact-submission-status" role="alert" aria-live="assertive" className="max-w-md text-sm leading-6 text-red-800">
                                    Something went wrong while sending your enquiry. Please try again or contact us directly by email.
                                </p>
                            )}
                        </div>
                    </motion.form>

                    <motion.aside
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...transition, delay: 0.24 }}
                        className="lg:border-l lg:border-black/10 lg:pl-12"
                    >
                        <h2 className="text-xl font-medium tracking-[-0.02em]">
                            S.I.S. REALTORS Limited
                        </h2>

                        <div className="mt-8 border-t border-black/10 pt-6">
                            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                                Address
                            </p>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=20%20Olowu%20Street%2C%20Off%20Awolowo%20Way%2C%20Ikeja%2C%20Lagos%20State%2C%20Nigeria"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-3 inline-block text-base leading-7 text-black/70 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
                            >
                                20 Olowu Street,
                                <br />
                                Off Awolowo Way,
                                <br />
                                Ikeja, Lagos State, Nigeria.
                            </a>
                        </div>

                        <div className="mt-8 border-t border-black/10 pt-6">
                            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                                CONTACT
                            </p>
                            <dl className="mt-4 space-y-4">
                                <div>
                                    <dt className="text-sm text-black/45">Nigeria:</dt>
                                    <dd>
                                        <a className="mt-1 inline-block text-base text-black/75 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary" href="tel:+2348133237589">
                                            +234 813 323 7589
                                        </a>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm text-black/45">International:</dt>
                                    <dd>
                                        <a className="mt-1 inline-block text-base text-black/75 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary" href="tel:+61450430527">
                                            +61 450 430 527
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="mt-8 border-t border-black/10 pt-6">
                            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                                EMAIL
                            </p>
                            <ul className="mt-4 space-y-3">
                                <li>
                                    <a className="text-base text-black/75 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary" href="mailto:info@sisrealtors.com">
                                        info@sisrealtors.com
                                    </a>
                                </li>
                                <li>
                                    <a className="text-base text-black/75 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary" href="mailto:partnership@sisrealtors.com">
                                        partnership@sisrealtors.com
                                    </a>
                                </li>
                                <li>
                                    <a className="text-base text-black/75 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary" href="mailto:admin@sisrealtors.com">
                                        admin@sisrealtors.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.aside>
                </div>
            </Container>
        </main>
    );
}
