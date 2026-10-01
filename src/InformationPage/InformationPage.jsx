import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
    FiCheck,
    FiCloud,
    FiCode,
    FiCompass,
    FiBriefcase,
    FiCreditCard,
    FiFileText,
    FiGlobe,
    FiLayers,
    FiLink,
    FiLock,
    FiMail,
    FiMessageCircle,
    FiPenTool,
    FiRefreshCw,
    FiSearch,
    FiShield,
    FiSmartphone,
    FiTarget,
    FiTrendingUp,
    FiUsers,
    FiUserCheck,
} from "react-icons/fi";

const pageContent = {
    "web-development": {
        kind: "service",
        eyebrow: "Digital products · Web development",
        title: "Websites that work as hard as your business.",
        intro: "From a clear company website to a connected web application, we plan and build digital experiences around your customers and goals.",
        heroFeatures: [
            { icon: FiLayers, title: "User-first structure", description: "Clear journeys that help visitors find information and take action." },
            { icon: FiCode, title: "Frontend to backend", description: "A joined-up build shaped around your content, workflow, and integrations." },
            { icon: FiSearch, title: "Ready to evolve", description: "Responsive foundations planned for performance and future improvements." },
        ],
        overview: {
            title: "A strong digital foundation",
            text: "Your website should make it easy to understand what you do and what to do next. Skylark IT brings design, frontend and backend development together to create responsive, maintainable experiences for real business needs.",
        },
        features: [
            { icon: FiLayers, title: "Frontend experiences", description: "Responsive interfaces that present your brand clearly across mobile, tablet, and desktop." },
            { icon: FiCode, title: "Backend and integrations", description: "Application logic, APIs, and third-party services planned around your workflow and data." },
            { icon: FiSearch, title: "Performance foundations", description: "Thoughtful structure, accessible patterns, and search-friendly implementation from the start." },
        ],
        capabilitiesTitle: "A complete web experience, built with intent",
        capabilitiesIntro: "From the first interaction to the systems behind it, each part of the build supports a clear business purpose.",
        process: ["Discovery and goals", "Structure and visual direction", "Development and review", "Launch and iteration"],
        benefits: ["A consistent experience across screen sizes", "Clearer customer journeys and calls to action", "A maintainable base for future updates"],
        approach: {
            title: "Built for the way your business works",
            text: "We align content, design, and implementation before development gets too far, keeping decisions connected to the people who will use the site.",
            points: ["Responsive layouts", "Frontend and backend planning", "Content and service integrations", "Performance and accessibility foundations"],
        },
        ctaText: "Tell us what your website needs to do. We’ll help you define a practical first step.",
    },
    "digital-marketing": {
        kind: "service",
        eyebrow: "Digital growth · Marketing",
        title: "Make every digital touchpoint more purposeful.",
        intro: "A considered digital marketing plan connects useful content, the right channels, and clear measures of progress.",
        heroFeatures: [
            { icon: FiCompass, title: "Audience-led strategy", description: "Priorities grounded in your customers, offer, and business goals." },
            { icon: FiUsers, title: "Content with consistency", description: "Campaign and social content aligned to a recognizable brand voice." },
            { icon: FiTrendingUp, title: "Learning over time", description: "Use available performance signals to guide practical improvements." },
        ],
        overview: {
            title: "Strategy before activity",
            text: "Skylark IT helps businesses plan and coordinate digital campaigns around their audience and objectives. We bring content, social media, search, and campaign planning into a consistent direction, then use available performance data to guide improvements.",
        },
        features: [
            { icon: FiCompass, title: "Channel strategy", description: "Choose priorities based on your audience, offer, resources, and campaign goals." },
            { icon: FiUsers, title: "Social media", description: "Plan a consistent presence with useful content and brand-aligned creative." },
            { icon: FiTarget, title: "Campaigns and content", description: "Coordinate campaign messages, landing pages, and supporting content around a clear action." },
            { icon: FiTrendingUp, title: "Review and improve", description: "Use campaign results and audience response to inform the next round of work." },
        ],
        capabilitiesTitle: "Connect your message to the right audience",
        capabilitiesIntro: "A coordinated mix of planning, content, campaigns, and review makes digital activity more intentional.",
        process: ["Understand the audience", "Set goals and channels", "Plan and publish", "Review performance"],
        benefits: ["More consistent brand communication", "Campaigns tied to defined objectives", "Clearer insight into what to improve"],
        approach: {
            title: "A practical, measurable approach",
            text: "We start with the outcome and build a campaign plan around the channels and resources that make sense for your organization.",
            points: ["Audience and competitor context", "Content and channel planning", "Campaign coordination", "Performance review and iteration"],
        },
        ctaText: "Share your current marketing goals and we can discuss an approach that fits your team.",
    },
    "graphic-design": {
        kind: "service",
        eyebrow: "Brand experience · Graphic design",
        title: "Give your brand a clear, consistent visual voice.",
        intro: "Thoughtful visual design helps people recognize your business and understand your message wherever they meet it.",
        heroFeatures: [
            { icon: FiPenTool, title: "Distinctive identity", description: "Visual decisions that make your brand recognizable and coherent." },
            { icon: FiLayers, title: "Made for each medium", description: "Layouts considered for digital channels, print, and product interfaces." },
            { icon: FiUsers, title: "Designed for people", description: "Clear visual communication shaped around the audience and message." },
        ],
        overview: {
            title: "Design with a purpose",
            text: "We create practical visual assets that balance brand character with clarity. Whether you are building a new identity or preparing a campaign, we shape the work for the people who will see and use it.",
        },
        features: [
            { icon: FiPenTool, title: "Brand identity", description: "Logo direction, color and type choices, and visual guidelines for a consistent identity." },
            { icon: FiUsers, title: "Social and campaign creative", description: "Platform-ready graphics that support a clear message and recognizable brand presence." },
            { icon: FiLayers, title: "Marketing materials", description: "Presentations, promotional materials, and business collateral prepared for their intended use." },
            { icon: FiCode, title: "UI and product visuals", description: "Interface layouts and visual components that help digital products feel coherent and usable." },
        ],
        capabilitiesTitle: "Visuals that work across the whole brand",
        capabilitiesIntro: "Build recognition and consistency with a flexible design system, then apply it where your audience meets you.",
        process: ["Brief and references", "Concept direction", "Design and feedback", "Final files and handoff"],
        benefits: ["A more recognizable brand presence", "Consistent assets across channels", "Clearer communication at every touchpoint"],
        approach: {
            title: "A cohesive visual system, not one-off decoration",
            text: "We consider the wider brand context and intended use so each design feels connected and remains practical to apply.",
            points: ["Identity and visual guidelines", "Social and campaign assets", "Print and marketing materials", "UI and product visuals"],
        },
        ctaText: "Tell us what you’re creating and where the design needs to show up.",
    },
    "app-development": {
        kind: "service",
        eyebrow: "Digital products · App development",
        title: "Turn a useful idea into an application people can use.",
        intro: "We help shape and build web and mobile applications with a focus on clear user journeys, reliable behavior, and maintainable foundations.",
        heroFeatures: [
            { icon: FiCompass, title: "Product discovery", description: "Clarify the user need and define a valuable, achievable first release." },
            { icon: FiSmartphone, title: "Mobile and web", description: "Choose an application direction based on users and project requirements." },
            { icon: FiCode, title: "Connected services", description: "Plan APIs, testing, and deployment as part of the product—not afterthoughts." },
        ],
        overview: {
            title: "Built around the user and the workflow",
            text: "Application work starts by defining who the product serves and what it should help them accomplish. We can support product planning, interface development, backend integrations, testing, and deployment. Android, iOS, and cross-platform options are considered according to project requirements and agreed scope.",
        },
        features: [
            { icon: FiCompass, title: "Product discovery", description: "Clarify user needs, essential features, constraints, and a realistic first release." },
            { icon: FiLayers, title: "UI and user flows", description: "Map key journeys and design screens around the tasks people need to complete." },
            { icon: FiSmartphone, title: "Mobile applications", description: "Plan Android, iOS, or cross-platform delivery according to the product brief and agreed scope." },
            { icon: FiCode, title: "Web applications", description: "Build browser-based products that support useful workflows across devices." },
            { icon: FiCloud, title: "Backend and APIs", description: "Connect application interfaces to the services and data they need." },
            { icon: FiShield, title: "Testing and release", description: "Review core journeys and prepare deployment, handoff, and future maintenance planning." },
        ],
        capabilitiesTitle: "From early product thinking to a working release",
        capabilitiesIntro: "Application development is a sequence of connected decisions: what to build, how it should feel, and how it will work behind the interface.",
        process: ["Explore the problem", "Define the first release", "Build and test", "Deploy and improve"],
        benefits: ["A clearer first-release scope", "Interfaces shaped around real tasks", "A foundation that can grow with the product"],
        approach: {
            title: "Choose the right platform for the product",
            text: "Android, iOS, cross-platform, and web options have different trade-offs. We evaluate the intended audience, required capabilities, and ongoing needs before recommending a direction.",
            points: ["User flows and interface planning", "Mobile or browser-based delivery", "Backend and API integration", "Testing, deployment, and maintenance planning"],
        },
        ctaText: "Bring us your app idea, even if it is still early. We can help clarify the next step.",
    },
    "cloud-services": {
        kind: "service",
        eyebrow: "Technology foundations · Cloud services",
        title: "A dependable foundation for your digital services.",
        intro: "Plan hosting, deployment, and cloud operations around the needs of your application and the people who rely on it.",
        heroFeatures: [
            { icon: FiCloud, title: "Right-sized hosting", description: "Infrastructure selected for your application and operating requirements." },
            { icon: FiShield, title: "Safer operations", description: "Access, backup, and recovery practices considered from the outset." },
            { icon: FiTrendingUp, title: "Repeatable releases", description: "Deployment workflows designed to support reliable change." },
        ],
        overview: {
            title: "Practical cloud planning and delivery",
            text: "Cloud decisions affect reliability, access, cost, and future change. Skylark IT can help assess your current setup, plan an appropriate hosting or migration approach, and configure deployment and operational practices for the agreed environment.",
        },
        features: [
            { icon: FiCloud, title: "Cloud and hosting setup", description: "Select and configure infrastructure to suit your application, traffic, and operating needs." },
            { icon: FiTrendingUp, title: "Deployment workflows", description: "Make releases more consistent with a deployment approach suited to your team." },
            { icon: FiShield, title: "Access and backups", description: "Review permissions, backup practices, and basic safeguards for your environment." },
            { icon: FiSearch, title: "Monitoring and review", description: "Identify useful health checks and review opportunities for reliability and cost." },
        ],
        capabilitiesTitle: "Cloud foundations with day-to-day operations in mind",
        capabilitiesIntro: "A useful cloud setup supports deployment and ongoing management, not just the initial move.",
        process: ["Review current needs", "Plan the environment", "Configure and deploy", "Document and review"],
        benefits: ["A setup aligned with actual workloads", "More consistent deployment practices", "Better visibility into operational needs"],
        approach: {
            title: "Start with the environment you actually need",
            text: "We review application requirements and existing constraints before recommending hosting, migration, and operating practices. Specific platforms and scope are agreed for each project.",
            points: ["Hosting and infrastructure planning", "Deployment configuration", "Backups and access reviews", "Monitoring and cost awareness"],
        },
        ctaText: "Describe your current hosting or deployment challenge and we can explore options together.",
    },
    "about-us": {
        eyebrow: "About Skylark IT",
        title: "Technology built around your business.",
        intro: "Skylark IT brings design, development, and digital services together to help organizations move forward with confidence.",
        overview: {
            title: "A connected team for digital work",
            text: "We work with clients to understand the business need behind each project, then shape a practical solution. Our capabilities span web and application development, digital marketing, graphic design, and cloud services, so teams can get support across connected parts of their digital presence.",
        },
        features: [
            { icon: FiTarget, title: "Our mission", description: "Make technology useful to our clients by delivering clear, considered digital solutions shaped around real needs." },
            { icon: FiCompass, title: "Our vision", description: "Build lasting working relationships and help businesses adapt and grow through thoughtful use of digital technology." },
            { icon: FiLayers, title: "What we do", description: "Plan and deliver websites, applications, brand design, digital campaigns, and cloud foundations." },
            { icon: FiUsers, title: "How we work", description: "Listen first, communicate clearly, and keep decisions grounded in the project’s goals and scope." },
        ],
        sections: [
            { title: "Why clients work with Skylark IT", body: "Clients need more than a list of technologies. They need a team that understands the intended outcome, explains trade-offs, and follows through on agreed work.", items: ["Solutions tailored to the audience and business objective", "A joined-up view across design, development, and digital channels", "Clear project conversations and practical recommendations", "A maintainable result with a considered handoff"] },
        ],
        ctaText: "Have a project in mind? Tell us where you want to go and what is getting in the way.",
    },
    "live-chat": {
        eyebrow: "Support · Skylark IT",
        title: "Get in touch with our team.",
        intro: "We’re ready to discuss a project, answer questions about our services, or help you find the right way to reach us.",
        overview: {
            title: "A clear way to start a conversation",
            text: "This page does not connect to a real-time chat service. You can contact our team by email, phone, or the message form, and include the information that will help us understand your question.",
        },
        features: [
            { icon: FiMessageCircle, title: "Project questions", description: "Share your idea, current challenge, or the service you are considering." },
            { icon: FiTrendingUp, title: "Existing work", description: "Include the website or product involved and a short description of what needs attention." },
            { icon: FiUsers, title: "Talk to the team", description: "Use our contact form or the published phone and email details to reach Skylark IT." },
        ],
        notice: "Live messaging is not currently available on this website. Messages sent through the contact form are handled by our team, not an automated chat agent.",
        isLiveChat: true,
        action: { label: "Send a message", to: "/contact-us" },
        ctaText: "Choose the contact method that works best for you.",
    },
    privacypolicy: {
        eyebrow: "Legal · Privacy",
        title: "Privacy Policy",
        intro: "How Skylark IT handles information you share through this website and our digital services.",
        heroFeatures: [
            { icon: FiLock, title: "Information you share", description: "We handle details submitted through our contact channels to respond and provide requested services." },
            { icon: FiUserCheck, title: "Your choices", description: "You can ask about, correct, or request deletion of information you have submitted, where applicable." },
            { icon: FiMail, title: "Questions or requests", description: "Contact our team directly about privacy or the information you have shared." },
        ],
        sections: [
            { icon: FiUsers, title: "Information you provide", body: "When you contact us, we may receive the details you choose to submit, such as your name, email address, phone number, and the contents of your message. Please do not include sensitive personal information unless it is necessary for your inquiry." },
            { icon: FiTarget, title: "How we use information", body: "We use submitted information to respond to inquiries, discuss and deliver requested services, communicate about project work, and maintain or improve our website and business operations. We do not sell personal information." },
            { icon: FiLink, title: "Contact forms and service providers", body: "Our contact form is processed using EmailJS so that your message can be delivered to us. The website also loads some fonts and images from third-party providers such as Google Fonts and Cloudinary. Those providers may receive technical information, such as your IP address, when your browser requests their resources; their own privacy terms apply to that processing." },
            { icon: FiFileText, title: "Cookies and similar technologies", body: "This website does not provide a separate cookie-based account or advertising feature. Your browser or hosting environment may use essential technical storage or logs to deliver and secure the website. You can manage cookies through your browser settings, though blocking them may affect some site functions." },
            { icon: FiShield, title: "Sharing, security, and retention", body: "We limit access to submitted information to people and service providers who need it to respond or provide a requested service, and may disclose it when required by law. We use reasonable measures to protect information, but no internet transmission or storage method can be guaranteed completely secure. We keep information only as needed for its stated purpose and applicable business or legal requirements." },
            { icon: FiUserCheck, title: "Your choices and requests", body: "You may contact us to ask about personal information you have submitted, request a correction, or ask us to delete it where applicable. We may need to retain some records when required for legitimate business or legal purposes." },
            { icon: FiMail, title: "Contact about this policy", body: "For privacy questions or requests, email skylarkitltd@gmail.com or call +8801676047350. Our office is at 93, Kazi Nazrul Islam Avenue, Kawran Bazar, Dhaka-1215." },
        ],
        action: { label: "Contact Us", to: "/contact-us" },
        ctaTitle: "Questions about your information?",
        ctaText: "Contact Skylark IT with a privacy question or request.",
    },
    terms: {
        eyebrow: "Legal · Terms of Service",
        title: "Terms of Service",
        intro: "These terms describe the basic expectations for using this website and engaging Skylark IT for project work.",
        heroFeatures: [
            { icon: FiFileText, title: "Clear project scope", description: "Written proposals or agreements define deliverables, schedules, review, and responsibilities." },
            { icon: FiBriefcase, title: "Working together", description: "Clients provide accurate information, necessary materials, access, and timely feedback." },
            { icon: FiRefreshCw, title: "Terms may change", description: "We may update these website terms as our services and practices develop." },
        ],
        sections: [
            { icon: FiGlobe, title: "Website use", body: "You may use this website to learn about Skylark IT and contact us for legitimate business inquiries. Do not misuse the site, attempt unauthorized access, interfere with its operation, or submit unlawful, deceptive, or harmful material." },
            { icon: FiFileText, title: "Services and project scope", body: "Service descriptions on this website are general information, not a binding offer or guarantee of a particular result. For client work, the agreed proposal or written contract defines the services, deliverables, schedule, review process, and responsibilities. Changes to agreed scope may affect fees and timing." },
            { icon: FiBriefcase, title: "Client responsibilities", body: "Clients are responsible for providing accurate project information, necessary access and materials, timely feedback, and approval of content and business claims they supply. You must have permission to provide any materials or data used in a project." },
            { icon: FiCreditCard, title: "Fees and payment", body: "Project fees, payment milestones, taxes, and any applicable expenses are set out in the relevant written proposal or agreement. Work and payment obligations are governed by those project-specific terms; this website does not set a universal price or payment schedule." },
            { icon: FiPenTool, title: "Intellectual property", body: "Ownership and permitted use of project deliverables, source files, third-party materials, and pre-existing tools are defined in the applicable written agreement. Unless otherwise agreed, each party retains rights to materials it owned or created independently of the project." },
            { icon: FiLink, title: "Third-party services", body: "A project or this website may rely on third-party platforms, hosting, libraries, or services. Their availability and terms are controlled by their respective providers, and any project-specific dependencies should be confirmed in the written scope." },
            { icon: FiShield, title: "Limitations", body: "We work to provide accurate website information and dependable services, but the website is provided as available and may change. To the extent permitted by applicable law, Skylark IT is not responsible for indirect or consequential loss arising from general website use. Any liability for contracted project work is governed by the applicable written agreement and law." },
            { icon: FiRefreshCw, title: "Updates and contact", body: "We may update these website terms when our services or practices change. Questions about these terms can be sent to skylarkitltd@gmail.com or discussed with us at 93, Kazi Nazrul Islam Avenue, Kawran Bazar, Dhaka-1215." },
        ],
        action: { label: "Contact Us", to: "/contact-us" },
        ctaTitle: "Need clarification?",
        ctaText: "Contact us about these terms or the written scope for a project.",
    },
};

const InformationPage = () => {
    const { page } = useParams();
    const pageKey = page?.toLowerCase();
    const content = pageContent[pageKey];
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (!content) return;

        document.title = `${content.title} | Skylark IT`;
        let description = document.querySelector('meta[name="description"]');
        if (!description) {
            description = document.createElement("meta");
            description.name = "description";
            document.head.appendChild(description);
        }
        description.content = content.intro;
    }, [content]);

    if (!content) return null;

    if (content.kind === "service") {
        const cardVariants = {
            hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
            visible: { opacity: 1, y: 0 },
        };

        return (
            <main className="bg-white text-[#1A1D2B]" key={pageKey}>
                <motion.section
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
                    className="relative overflow-hidden bg-[#1A1D2B] px-6 py-12 text-white sm:py-14 md:px-10 lg:py-16 xl:px-16"
                >
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] border-l border-white/10 bg-gradient-to-br from-[#1C75BC]/10 to-transparent lg:block" />
                    <div className="relative mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
                        <div className="max-w-2xl">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#2FB3E3]">
                                {content.eyebrow}
                            </p>
                            <motion.h1
                                initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: reduceMotion ? 0 : 0.08, duration: 0.45 }}
                                className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.35rem]"
                            >
                                {content.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: reduceMotion ? 0 : 0.16, duration: 0.45 }}
                                className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
                            >
                                {content.intro}
                            </motion.p>
                            <Link
                                to="/contact-us"
                                className="mt-7 inline-flex items-center gap-2 border border-[#2FB3E3] bg-[#2FB3E3] px-5 py-3 text-sm font-semibold text-[#1A1D2B] transition-colors hover:border-white hover:bg-white"
                            >
                                Discuss your project
                                <FiCheck aria-hidden="true" />
                            </Link>
                        </div>

                        <motion.aside
                            initial={{ opacity: 0, x: reduceMotion ? 0 : 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: reduceMotion ? 0 : 0.12, duration: 0.5 }}
                            whileHover={reduceMotion ? undefined : { y: -3 }}
                            className="group relative border border-white/10 bg-gradient-to-br from-[#1C75BC]/20 to-white/[0.035] p-5 transition-colors hover:border-[#55C5EA]/40 sm:p-7 lg:mx-10 lg:p-8 xl:mx-14"
                        >
                            <span className="absolute left-0 top-0 h-12 w-1 bg-gradient-to-b from-[#2FB3E3] to-[#1C75BC]" />
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#55C5EA]">A considered approach</p>
                            <div className="mt-5 space-y-5">
                                {content.heroFeatures.map(({ icon: Icon, title, description }) => (
                                    <motion.div key={title} whileHover={reduceMotion ? undefined : { x: 3 }} className="group/feature flex gap-3.5 border border-white/10 bg-[#111722]/35 p-3.5 transition-colors hover:border-[#55C5EA]/50 hover:bg-white/[0.07]">
                                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-[#2FB3E3]/30 bg-[#1C75BC]/15 text-[#55C5EA] transition-colors group-hover/feature:bg-[#2FB3E3] group-hover/feature:text-[#1A1D2B]">
                                            <Icon className="h-4 w-4" aria-hidden="true" />
                                        </span>
                                        <div>
                                            <h2 className="text-sm font-semibold text-white">{title}</h2>
                                            <p className="mt-1 text-sm leading-5 text-slate-400">{description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.aside>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto grid max-w-7xl gap-7 px-6 py-10 sm:py-12 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14 xl:px-16"
                >
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1C75BC]">Overview</p>
                        <h2 className="mt-2.5 max-w-md text-2xl font-bold leading-tight sm:text-3xl">{content.overview.title}</h2>
                    </div>
                    <div>
                        <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">{content.overview.text}</p>
                        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-4">
                            {content.benefits.map((benefit) => (
                                <span key={benefit} className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1D2B]">
                                    <FiCheck className="h-4 w-4 text-[#1C75BC]" aria-hidden="true" />
                                    {benefit}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ staggerChildren: reduceMotion ? 0 : 0.08 }}
                    className="bg-slate-50 px-6 py-11 sm:py-13 md:px-10 lg:py-14 xl:px-16"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1C75BC]">Capabilities</p>
                                <h2 className="mt-2.5 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl">{content.capabilitiesTitle}</h2>
                            </div>
                            <p className="max-w-md text-sm leading-6 text-gray-600">{content.capabilitiesIntro}</p>
                        </div>
                        <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
                            {content.features.map(({ icon: Icon, title, description }, index) => (
                                <motion.article
                                    key={title}
                                    variants={cardVariants}
                                    transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
                                    whileHover={reduceMotion ? undefined : { y: -3 }}
                                    className="group relative border border-slate-200 bg-white p-5 transition-colors hover:border-[#1C75BC]/40 hover:shadow-[0_12px_28px_rgba(26,29,43,0.07)] sm:p-6"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <span className="flex h-10 w-10 items-center justify-center bg-[#1C75BC]/[0.08] text-[#1C75BC] transition-colors group-hover:bg-[#1C75BC] group-hover:text-white">
                                            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                                        </span>
                                        <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                                    </div>
                                    <h3 className="mt-5 text-base font-semibold">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto max-w-7xl px-6 py-11 sm:py-13 md:px-10 lg:py-14 xl:px-16"
                >
                    <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1C75BC]">How we work</p>
                            <h2 className="mt-2.5 text-2xl font-bold sm:text-3xl">A clear path from brief to delivery</h2>
                        </div>
                        <p className="text-sm text-gray-500">Collaborative at every step.</p>
                    </div>
                    <ol className="grid border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
                        {content.process.map((step, index) => (
                            <motion.li
                                key={step}
                                initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: 0.35 }}
                                whileHover={reduceMotion ? undefined : { y: -2 }}
                                className="flex gap-4 border-b border-slate-200 py-4 transition-colors hover:bg-[#EFF8FC] sm:border-r sm:px-4 sm:py-5 lg:border-b-0 lg:first:pl-0 lg:last:border-r-0"
                            >
                                <span className="font-mono text-sm font-semibold text-[#1C75BC]">0{index + 1}</span>
                                <span className="text-sm font-semibold leading-6">{step}</span>
                            </motion.li>
                        ))}
                    </ol>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.16 }}
                    transition={{ duration: 0.4 }}
                    className="bg-[#EFF8FC] px-6 py-10 sm:py-12 md:px-10 xl:px-16"
                >
                    <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1C75BC]">Delivery approach</p>
                            <h2 className="mt-2.5 text-2xl font-bold leading-tight sm:text-3xl">{content.approach.title}</h2>
                            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">{content.approach.text}</p>
                        </div>
                        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                            {content.approach.points.map((point) => (
                                <li key={point} className="flex items-center gap-3 border-b border-[#1C75BC]/15 py-3 text-sm font-medium transition-colors hover:text-[#1C75BC]">
                                    <FiCheck className="h-4 w-4 shrink-0 text-[#1C75BC]" aria-hidden="true" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.4 }}
                    className="bg-[#1A1D2B] px-6 py-10 text-white md:px-10 lg:py-12 xl:px-16"
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-5 border-l-2 border-[#2FB3E3] pl-5 sm:flex-row sm:items-center sm:justify-between sm:pl-7">
                        <div className="max-w-2xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FB3E3]">Start a conversation</p>
                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Let’s make your next digital step count.</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-300">{content.ctaText}</p>
                        </div>
                        <motion.div whileHover={reduceMotion ? undefined : { x: 3 }}>
                            <Link to="/contact-us" className="inline-flex min-w-max items-center gap-2 bg-[#2FB3E3] px-5 py-3 text-sm font-semibold text-[#1A1D2B] transition-colors hover:bg-white">
                                Contact Skylark IT
                                <FiCheck aria-hidden="true" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>
            </main>
        );
    }

    return (
        <main className="bg-white text-[#1A1D2B]" key={pageKey}>
            <motion.section
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="relative isolate overflow-hidden bg-[#1A1D2B] px-6 py-16 text-white sm:py-20 md:px-12 lg:px-24"
            >
                <div className="absolute inset-y-0 right-0 -z-10 hidden w-[45%] border-l border-white/10 bg-white/[0.02] lg:block" />
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div>
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#2FB3E3]">
                            {content.eyebrow}
                        </p>
                        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            {content.title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                            {content.intro}
                        </p>
                    </div>
                    <motion.aside
                        initial={{ opacity: 0, x: reduceMotion ? 0 : 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: reduceMotion ? 0 : 0.12, duration: 0.5 }}
                        className="relative border border-white/10 bg-gradient-to-br from-[#1C75BC]/25 to-white/[0.03] p-5 sm:p-7 lg:p-8"
                    >
                        <span className="absolute left-0 top-0 h-14 w-1 bg-gradient-to-b from-[#55C5EA] to-[#F2A65A]" />
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#55C5EA]">
                            {content.heroLabel || (pageKey === "about-us" ? "What guides us" : "At a glance")}
                        </p>
                        <ul className="space-y-4">
                            {(content.heroFeatures || content.features || []).slice(0, 3).map(({ icon: Icon, title, description }) => (
                                <li key={title} className="group flex gap-3.5 border border-white/10 bg-[#111722]/40 p-3.5 transition-colors hover:border-[#55C5EA]/50 hover:bg-white/[0.07]">
                                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-[#2FB3E3]/15 text-[#55C5EA] transition-colors group-hover:bg-[#2FB3E3] group-hover:text-[#1A1D2B]">
                                        <Icon className="h-4 w-4" aria-hidden="true" />
                                    </span>
                                    <span>
                                        <span className="block text-sm font-semibold text-white">{title}</span>
                                        {description && <span className="mt-1 block text-sm leading-5 text-slate-300">{description}</span>}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.aside>
                </div>
            </motion.section>

            <>
                {content.overview && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#EFF8FC] px-6 py-12 md:px-12 lg:px-24 lg:py-16"
                    >
                        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1C75BC]">Overview</p>
                                <h2 className="mt-3 text-3xl font-bold leading-tight">{content.overview.title}</h2>
                            </div>
                            <p className="border-l-2 border-[#2FB3E3] bg-white/80 p-5 text-lg leading-8 text-gray-700 shadow-sm transition-shadow hover:shadow-md sm:p-7">{content.overview.text}</p>
                        </div>
                    </motion.section>
                )}

                {content.notice && (
                    <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-24">
                        <div className="flex gap-4 border-l-4 border-[#1C75BC] bg-[#EFF8FC] p-5 text-gray-700 shadow-sm transition-shadow hover:shadow-md sm:p-6">
                            <FiMessageCircle className="mt-1 h-5 w-5 shrink-0 text-[#1C75BC]" aria-hidden="true" />
                            <p className="leading-7">{content.notice}</p>
                        </div>
                    </div>
                )}

                {content.features && (
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}
                        transition={{ staggerChildren: 0.1 }}
                        className="bg-slate-50 px-6 py-16 md:px-12 lg:px-24 lg:py-20"
                    >
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-10 max-w-2xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1C75BC]">What we do</p>
                                <h2 className="mt-3 text-3xl font-bold">A thoughtful mix of expertise</h2>
                            </div>
                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {content.features.map(({ icon: Icon, title, description }) => (
                                    <motion.article
                                        key={title}
                                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                                        transition={{ duration: 0.45, ease: "easeOut" }}
                                        whileHover={reduceMotion ? undefined : { y: -4 }}
                                        className="group border border-slate-200 border-t-2 border-t-[#2FB3E3] bg-white p-6 shadow-sm transition-colors hover:border-[#1C75BC]/50 hover:shadow-[0_14px_30px_rgba(26,29,43,0.1)]"
                                    >
                                        <span className="mb-5 inline-flex h-11 w-11 items-center justify-center bg-[#1C75BC]/10 text-[#1C75BC] transition-colors group-hover:bg-[#1C75BC] group-hover:text-white">
                                            <Icon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                        <h3 className="text-lg font-semibold">{title}</h3>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}

                {content.sections && (
                    <motion.section
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.12 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#F5F8FA] px-6 py-12 md:px-12 lg:px-24 lg:py-16"
                    >
                        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
                            {content.sections.map((section, index) => {
                                const SectionIcon = section.icon || FiFileText;

                                return (
                                    <motion.article
                                        key={section.title}
                                        whileHover={reduceMotion ? undefined : { y: -3 }}
                                        transition={{ duration: reduceMotion ? 0 : 0.2 }}
                                        className="group relative overflow-hidden border border-[#D8E6ED] bg-white p-5 shadow-sm transition-all hover:border-[#1C75BC]/50 hover:shadow-[0_12px_26px_rgba(26,29,43,0.09)] sm:p-6"
                                    >
                                        <span className={`absolute inset-x-0 top-0 h-1 ${index % 2 === 0 ? "bg-[#2FB3E3]" : "bg-[#F2A65A]"}`} />
                                        <div className="flex items-start gap-3.5">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#1C75BC]/10 text-[#1C75BC] transition-colors group-hover:bg-[#1C75BC] group-hover:text-white">
                                                <SectionIcon className="h-[18px] w-[18px]" aria-hidden="true" />
                                            </span>
                                            <div>
                                                <h2 className="text-lg font-bold leading-snug">{section.title}</h2>
                                                <p className="mt-3 text-sm leading-7 text-gray-600">{section.body}</p>
                                            </div>
                                        </div>
                                        {section.items && (
                                            <ul className="mt-4 grid gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2">
                                                {section.items.map((item) => (
                                                    <li key={item} className="flex gap-3 text-gray-600">
                                                        <FiCheck className="mt-1 h-4 w-4 shrink-0 text-[#1C75BC]" aria-hidden="true" />
                                                        <span className="leading-6">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </motion.article>
                                );
                            })}
                        </div>
                    </motion.section>
                )}

                {content.process && (
                    <motion.section
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.16 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-24 lg:py-20"
                    >
                        <div className="mb-9 max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1C75BC]">How we work</p>
                            <h2 className="mt-3 text-3xl font-bold">A clear path from brief to delivery</h2>
                        </div>
                        <ol className="grid gap-0 border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
                            {content.process.map((step, index) => (
                                <motion.li key={step} whileHover={reduceMotion ? undefined : { y: -2 }} className="border-b border-slate-200 py-6 pr-5 transition-colors hover:bg-[#EFF8FC] sm:border-r sm:px-5 lg:first:pl-0">
                                    <span className="text-sm font-semibold text-[#1C75BC]">0{index + 1}</span>
                                    <h3 className="mt-3 font-semibold">{step}</h3>
                                </motion.li>
                            ))}
                        </ol>
                    </motion.section>
                )}

                {content.isLiveChat && (
                    <section className="mx-auto max-w-6xl px-6 pb-16 md:px-12 lg:px-24">
                        <div className="grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-3">
                            <a href="mailto:skylarkitltd@gmail.com" className="font-medium text-[#1C75BC] transition-colors hover:text-[#1A1D2B] hover:underline">skylarkitltd@gmail.com</a>
                            <a href="tel:+8801676047350" className="font-medium text-[#1C75BC] transition-colors hover:text-[#1A1D2B] hover:underline">+8801676047350</a>
                            <a href="tel:+8801976369111" className="font-medium text-[#1C75BC] transition-colors hover:text-[#1A1D2B] hover:underline">+8801976369111</a>
                        </div>
                    </section>
                )}

                <motion.section
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="bg-[#1A1D2B] px-6 py-14 text-center text-white md:px-12"
                >
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold">{content.ctaTitle || "Ready to get started?"}</h2>
                        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
                            {content.ctaText || "Tell us what you are building and we will help you plan the right next step."}
                        </p>
                        <Link
                            to={content.action?.to || "/contact-us"}
                            className="mt-7 inline-flex items-center gap-2 bg-[#2FB3E3] px-6 py-3 font-semibold text-[#1A1D2B] transition-colors hover:bg-white"
                        >
                            {content.action?.label || "Contact Us"}
                            <FiCheck aria-hidden="true" />
                        </Link>
                    </div>
                </motion.section>
            </>
        </main>
    );
};

export default InformationPage;