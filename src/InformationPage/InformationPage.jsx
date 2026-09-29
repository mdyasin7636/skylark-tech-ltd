import { Link, useParams } from "react-router-dom";

const pageContent = {
    "web-development": {
        eyebrow: "Our Services",
        title: "Web Development",
        intro: "Fast, secure, and scalable websites built around your business goals.",
        overview:
            "We create responsive websites that make it easy for customers to understand your offer, trust your brand, and take action. Every build is planned around your content, audience, and long-term growth.",
        deliverables: [
            "Business websites and landing pages",
            "Responsive layouts for mobile, tablet, and desktop",
            "Content management and third-party integrations",
            "Performance, accessibility, and search-friendly foundations",
        ],
    },
    "digital-marketing": {
        eyebrow: "Our Services",
        title: "Digital Marketing",
        intro: "Practical digital campaigns that put your brand in front of the right people.",
        overview:
            "Our digital marketing service connects strategy, content, and measurable campaigns. We help you build awareness, attract qualified visitors, and turn attention into meaningful business results.",
        deliverables: [
            "Digital strategy and campaign planning",
            "Social media content and campaign support",
            "Search and paid campaign coordination",
            "Performance reporting and ongoing improvements",
        ],
    },
    "graphic-design": {
        eyebrow: "Our Services",
        title: "Graphic Design",
        intro: "Clear, memorable visual communication for every customer touchpoint.",
        overview:
            "We turn your ideas into a consistent visual identity that customers can recognize. From a single campaign asset to a complete brand system, our designs balance creativity with clarity.",
        deliverables: [
            "Logo and visual identity systems",
            "Social media and campaign creatives",
            "Business stationery and marketing materials",
            "Presentation, illustration, and promotional design",
        ],
    },
    "app-development": {
        eyebrow: "Our Services",
        title: "App Development",
        intro: "Useful, reliable digital products designed for the way your customers work.",
        overview:
            "We help transform product ideas into intuitive applications. Our process keeps the user experience at the center while creating a maintainable foundation for future features and growth.",
        deliverables: [
            "Product discovery and feature planning",
            "Web and mobile application interfaces",
            "API and service integrations",
            "Testing, deployment, and post-launch improvements",
        ],
    },
    "cloud-services": {
        eyebrow: "Our Services",
        title: "Cloud Services",
        intro: "Flexible cloud foundations that keep your technology available and ready to grow.",
        overview:
            "We help businesses move toward dependable cloud workflows with practical planning and implementation. The result is technology that is easier to manage, scale, and protect.",
        deliverables: [
            "Cloud setup and migration planning",
            "Deployment and hosting configuration",
            "Backups, monitoring, and access controls",
            "Scalability and cost-efficiency reviews",
        ],
    },
    terms: {
        eyebrow: "Legal",
        title: "Terms of Service",
        intro: "The terms that guide our work together.",
        overview:
            "By using this website or engaging Skylark IT, you agree to communicate accurate project information and to work with us in good faith. A written proposal or agreement will define the scope, fees, delivery schedule, ownership, and support terms for each project.",
        deliverables: [
            "Project scope is confirmed before work begins.",
            "Content, approvals, and feedback should be provided on time.",
            "Changes outside the agreed scope may affect cost and delivery time.",
            "Clients are responsible for confirming final content and business claims.",
        ],
    },
    "live-chat": {
        eyebrow: "Support",
        title: "Live Chat",
        intro: "Talk with the Skylark IT team about your next digital project.",
        overview:
            "Our team is ready to help you understand the best next step, whether you are starting from an idea, improving an existing website, or looking for ongoing technical support.",
        deliverables: [
            "Quick guidance about our services",
            "Project and website requirement discussions",
            "Support with choosing the right starting point",
            "A clear path to a detailed consultation",
        ],
    },
};

const InformationPage = () => {
    const { page } = useParams();
    const content = pageContent[page];

    if (!content) {
        return null;
    }

    return (
        <main className="bg-white">
            <section className="bg-[#1A1D2B] px-6 py-20 text-white md:px-12 lg:px-24">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
                        {content.eyebrow}
                    </p>
                    <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                        {content.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-200">
                        {content.intro}
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-24">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">How we can help</h2>
                    <p className="mt-5 text-lg leading-8 text-gray-600">{content.overview}</p>
                </div>

                <div className="border-l-4 border-sky-500 bg-slate-50 p-8">
                    <h2 className="text-2xl font-bold text-gray-900">What you can expect</h2>
                    <ul className="mt-5 space-y-4 text-gray-600">
                        {content.deliverables.map((item) => (
                            <li key={item} className="flex gap-3 leading-7">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="bg-slate-100 px-6 py-14 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Ready to get started?</h2>
                <p className="mx-auto mt-3 max-w-xl text-gray-600">
                    Tell us what you are building and we will help you plan the right next step.
                </p>
                <Link
                    to="/contact-us"
                    className="mt-7 inline-flex rounded-md bg-[#1A1D2B] px-7 py-3 font-semibold text-white transition hover:bg-sky-600"
                >
                    Contact Us
                </Link>
            </section>
        </main>
    );
};

export default InformationPage;