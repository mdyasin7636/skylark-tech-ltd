import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const contactOptions = [
    {
        icon: FiMail,
        label: "Email",
        value: "skylarkitltd@gmail.com",
        href: "mailto:skylarkitltd@gmail.com",
    },
    {
        icon: FiPhone,
        label: "Call our team",
        value: "+8801676047350",
        href: "tel:+8801676047350",
    },
    {
        icon: FiPhone,
        label: "Alternate number",
        value: "+8801976369111",
        href: "tel:+8801976369111",
    },
    {
        icon: FiMapPin,
        label: "Office",
        value: "93, Kazi Nazrul Islam Avenue, Kawran Bazar, Dhaka-1215",
        href: "https://maps.google.com/?q=93+Kazi+Nazrul+Islam+Avenue+Kawran+Bazar+Dhaka",
    },
];

const ContactPage = () => {
    const formRef = useRef(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        document.title = "Contact Us | Skylark IT";
        let description = document.querySelector('meta[name="description"]');
        if (!description) {
            description = document.createElement("meta");
            description.name = "description";
            document.head.appendChild(description);
        }
        description.content = "Contact Skylark IT to discuss web, app, design, digital marketing, and cloud projects.";
    }, []);

    const sendEmail = async (event) => {
        event.preventDefault();
        setIsSending(true);
        setStatus("");

        try {
            await emailjs.sendForm("service_58nz7tr", "template_dkxwjte", formRef.current, {
                publicKey: "6_oGBpY10MFeXYVul",
            });
            formRef.current.reset();
            setStatus("Thanks for reaching out. Your message has been sent.");
        } catch {
            setStatus("We could not send your message just now. Please email skylarkitltd@gmail.com or call us directly.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <main className="bg-white text-[#1A1D2B]">
            <motion.section
                initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
                className="relative overflow-hidden bg-[#1A1D2B] px-6 py-12 text-white sm:py-14 md:px-10 lg:py-16 xl:px-16"
            >
                <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] border-l border-white/10 bg-gradient-to-br from-[#1C75BC]/10 to-transparent lg:block" />
                <div className="relative mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
                    <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2FB3E3]">Start a conversation · Contact Skylark IT</p>
                        <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.35rem]">Let’s talk about what you’re building.</h1>
                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Share your goals, the challenge you’re solving, or the service you’re exploring. Our team will review your message and get back to you.</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: reduceMotion ? 0 : 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: reduceMotion ? 0 : 0.12, duration: 0.5 }}
                        whileHover={reduceMotion ? undefined : { y: -3 }}
                        className="group relative border border-white/10 bg-gradient-to-br from-[#1C75BC]/25 to-white/[0.03] p-5 transition-colors hover:border-[#55C5EA]/40 sm:p-7 lg:mx-4 lg:p-8 xl:mx-6"
                    >
                        <span className="absolute left-0 top-0 h-12 w-1 bg-gradient-to-b from-[#55C5EA] to-[#F2A65A]" />
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#55C5EA]">A useful first message</p>
                        <div className="mt-5 space-y-4">
                            {[
                                "What you want to achieve",
                                "Who the project is for",
                                "Your timing or current challenges",
                            ].map((item, index) => (
                                <motion.div key={item} whileHover={reduceMotion ? undefined : { x: 3 }} className="group/item flex items-center gap-3 border border-white/10 bg-[#111722]/35 p-3.5 text-sm text-slate-200 transition-colors hover:border-[#55C5EA]/50 hover:bg-white/[0.07]">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#2FB3E3]/30 bg-[#1C75BC]/15 font-mono text-xs text-[#55C5EA] transition-colors group-hover/item:bg-[#2FB3E3] group-hover/item:text-[#1A1D2B]">0{index + 1}</span>
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:py-12 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:px-16">
                <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4 }}
                >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1C75BC]">Contact details</p>
                    <h2 className="mt-2.5 text-2xl font-bold sm:text-3xl">Reach us directly</h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">Choose the contact method that suits you. For a project inquiry, the message form helps us collect the details in one place.</p>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ staggerChildren: reduceMotion ? 0 : 0.07 }}
                        className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
                    >
                        {contactOptions.map(({ icon: Icon, label, value, href }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target={label === "Office" ? "_blank" : undefined}
                                rel={label === "Office" ? "noreferrer" : undefined}
                                variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 10 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: reduceMotion ? 0 : 0.35 }}
                                whileHover={reduceMotion ? undefined : { x: 2 }}
                                className="group flex min-h-[88px] items-start gap-3.5 border border-slate-200 bg-white p-4 transition-colors hover:border-[#1C75BC]/40"
                            >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#1C75BC]/[0.08] text-[#1C75BC] transition-colors group-hover:bg-[#1C75BC] group-hover:text-white">
                                    <Icon className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</span>
                                    <span className="mt-1 block break-words text-sm font-medium leading-5 text-[#1A1D2B]">{value}</span>
                                </span>
                                <FiArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-[#1C75BC]" aria-hidden="true" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.08 }}
                    className="border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(26,29,43,0.06)] sm:p-7 lg:p-8"
                >
                    <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1C75BC]">Project inquiry</p>
                            <h2 className="mt-2 text-2xl font-bold">Send us a message</h2>
                        </div>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#1C75BC]/[0.08] text-[#1C75BC]">
                            <FiSend className="h-5 w-5" aria-hidden="true" />
                        </span>
                    </div>

                    <form ref={formRef} onSubmit={sendEmail} className="mt-5 space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="contact-name" className="text-sm font-medium text-gray-700">Name</label>
                                <input id="contact-name" required name="user_name" type="text" autoComplete="name" placeholder="Your name" className="mt-1.5 block w-full border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-[#1A1D2B] outline-none transition focus:border-[#1C75BC] focus:bg-white focus:ring-2 focus:ring-[#1C75BC]/10" />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="text-sm font-medium text-gray-700">Email</label>
                                <input id="contact-email" required name="user_email" type="email" autoComplete="email" placeholder="you@company.com" className="mt-1.5 block w-full border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-[#1A1D2B] outline-none transition focus:border-[#1C75BC] focus:bg-white focus:ring-2 focus:ring-[#1C75BC]/10" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="contact-phone" className="text-sm font-medium text-gray-700">Phone <span className="font-normal text-gray-400">(optional)</span></label>
                            <input id="contact-phone" name="mobile_number" type="tel" autoComplete="tel" placeholder="Your phone number" className="mt-1.5 block w-full border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-[#1A1D2B] outline-none transition focus:border-[#1C75BC] focus:bg-white focus:ring-2 focus:ring-[#1C75BC]/10" />
                        </div>
                        <div>
                            <label htmlFor="contact-message" className="text-sm font-medium text-gray-700">How can we help?</label>
                            <textarea id="contact-message" required name="message" rows="5" placeholder="A little about your project, goals, and timeline..." className="mt-1.5 block w-full resize-y border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm leading-6 text-[#1A1D2B] outline-none transition focus:border-[#1C75BC] focus:bg-white focus:ring-2 focus:ring-[#1C75BC]/10" />
                        </div>
                        <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
                            <p role="status" aria-live="polite" className={`text-sm leading-5 ${status.includes("could not") ? "text-red-700" : "text-gray-500"}`}>
                                {status || "Your details will only be used to respond to your inquiry."}
                            </p>
                            <motion.button
                                type="submit"
                                disabled={isSending}
                                whileHover={reduceMotion || isSending ? undefined : { y: -2 }}
                                whileTap={reduceMotion || isSending ? undefined : { scale: 0.98 }}
                                className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#1A1D2B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1C75BC] disabled:cursor-wait disabled:opacity-70"
                            >
                                {isSending ? "Sending..." : "Send inquiry"}
                                {status && !status.includes("could not") ? <FiCheck aria-hidden="true" /> : <FiSend aria-hidden="true" />}
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </section>
        </main>
    );
};

export default ContactPage;
