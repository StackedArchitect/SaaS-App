"use client";
import Image from "next/image";
import { useState } from "react";

const plans = [
    {
        name: "Basic",
        priceMonthly: 0,
        priceAnnual: 0,
        features:
            [
                "10 Conversations/month",
                "3 active companions",
                "basic session recaps"
            ],
        highlight: false,
        cta: { label: "Get Started", href: "/sign-in" },
    },
    {
        name: "Core",
        priceMonthly: 29,
        priceAnnual: 24 * 12,
        features: [
            "Everything in Basic",
            "Inline Quizzes and Recaps",
            "Monthly Progress ",
            "Save Conversation History",
            "Unlimited Conversations",
            "Upto 10 Active Companions"
        ],
        highlight: true,
        cta: { label: "Upgrade to Core", href: "/subscription" },
    },
    {
        name: "Pro",
        priceMonthly: 49,
        priceAnnual: 39 * 12,
        features: [
            "Everything in Core",
            "Daily Learning Reminders",
            "Unlimited Companions",
            "Early Access to New ",
            "Full Performance ",
            "Priority "
        ],
        highlight: false,
        cta: { label: "Go Pro", href: "/subscription" },
    },
];

function formatPrice(price: number) {
    if (price === 0) return "$0";
    return `$${price.toFixed(0)}`;
}

const LandingPage = () => {
    const [annual, setAnnual] = useState(false);
    return (
        <main className="landing-page bg-[#fff7ed] min-h-screen text-orange-900">
            {/* Hero Section */}
            <section className="hero flex flex-col items-center justify-center py-20 text-center">
                <Image
                    src="/images/logo.png"
                    alt="Elucidra Logo"
                    width={180}
                    height={180}
                    className="mx-auto mb-6 drop-shadow-lg"
                />
                <p className="text-2xl max-w-3xl mx-auto mb-8 text-orange-800/90">
                    Elucidra is an AI-powered learning platform that lets you interact with smart virtual tutors in real time. Whether by voice or chat, explore personalized lessons, track your progress, and enjoy a seamless, modern learning experience—anytime, anywhere.
                </p>
                <a
                    href="/sign-in"
                    className="btn-primary px-10 py-4 text-xl bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg rounded-lg text-white"
                >
                    Get Started
                </a>
            </section>

            {/* Features Section */}
            <section className="w-full flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-600 text-center">
                    Why Choose Elucidra?
                </h2>
                <div className="features grid grid-cols-1 md:grid-cols-3 gap-8 py-12 max-w-5xl mx-auto w-full">
                    <div className="feature-card p-6 rounded-lg shadow bg-[#fff3e0] border border-orange-200">
                        <h3 className="font-bold text-xl mb-2 text-orange-500">
                            Create Your Own AI Tutor
                        </h3>
                        <p className="text-orange-800/80">
                            Design companions with unique personalities, voices, and expertise.
                            Tailor them to your learning style and goals for a truly custom
                            experience.
                        </p>
                    </div>
                    <div className="feature-card p-6 rounded-lg shadow bg-[#fff3e0] border border-orange-200">
                        <h3 className="font-bold text-xl mb-2 text-orange-500">
                            Conversational Learning
                        </h3>
                        <p className="text-orange-800/80">
                            Engage in natural, real-time conversations—by voice or text. Ask
                            questions, get explanations, and practice skills in a supportive,
                            interactive environment.
                        </p>
                    </div>
                    <div className="feature-card p-6 rounded-lg shadow bg-[#fff3e0] border border-orange-200">
                        <h3 className="font-bold text-xl mb-2 text-orange-500">
                            Track Progress & Achievements
                        </h3>
                        <p className="text-orange-800/80">
                            Monitor your learning journey with detailed session history, progress
                            tracking, and personalized recommendations to help you grow.
                        </p>
                    </div>
                </div>
            </section>

            {/* Subscription Section - Custom Pricing Table */}
            <section className="subscription py-12 bg-[#ffe6c7] text-center border-y border-orange-200">
                <h2 className="text-3xl font-bold mb-4 text-orange-600">
                    Choose Your Plan
                </h2>
                <p className="mb-8 text-orange-700">
                    Flexible plans for every learner. Upgrade to unlock more companions,
                    advanced features, and premium support.
                </p>
                <div className="flex flex-col items-center mb-8">
                    <div className="flex items-center gap-4 bg-white rounded-full px-4 py-2 shadow border border-orange-200">
                        <span
                            className={`font-semibold text-base ${!annual ? "text-orange-600" : "text-orange-400"
                                }`}
                        >
                            Monthly
                        </span>
                        <button
                            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${annual ? "bg-orange-400" : "bg-orange-200"
                                }`}
                            onClick={() => setAnnual((a) => !a)}
                            aria-label="Toggle annual pricing"
                            type="button"
                        >
                            <span
                                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${annual ? "translate-x-6" : "translate-x-0"
                                    }`}
                                style={{
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
                                }}
                            />
                        </button>
                        <span
                            className={`font-semibold text-base ${annual ? "text-orange-600" : "text-orange-400"
                                }`}
                        >
                            Annual{" "}
                            <span className="ml-1 text-xs font-bold text-orange-500">
                                *T&C
                            </span>
                        </span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-5xl">
                        <div className="flex flex-row gap-6 items-stretch justify-center">
                            {plans.map((plan, idx) => {
                                const price = annual ? plan.priceAnnual : plan.priceMonthly;
                                return (
                                    <div
                                        key={plan.name}
                                        className={`flex-1 min-w-[220px] max-w-xs bg-[#fff3e0] border ${plan.highlight
                                            ? "border-2 border-orange-500 scale-105"
                                            : "border-orange-200"
                                            } rounded-xl p-6 flex flex-col items-center shadow-lg transition-transform`}
                                    >
                                        <div className="text-2xl font-bold mb-2 text-orange-600">
                                            {plan.name}
                                        </div>
                                        <div className="text-4xl font-extrabold mb-1 text-orange-500">
                                            {formatPrice(price)}
                                            <span className="text-lg font-normal text-orange-400">
                                                {annual ? "/yr" : "/mo"}
                                            </span>
                                        </div>
                                        {annual && plan.priceMonthly > 0 && (
                                            <div className="text-xs text-orange-500 mb-2">
                                                Billed annually
                                            </div>
                                        )}
                                        <ul className="text-left text-orange-800/90 mb-4 mt-2 space-y-1 text-base">
                                            {plan.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <span className="inline-block w-2 h-2 rounded-full bg-orange-400" /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <a
                                            href={plan.cta.href}
                                            className={`mt-auto btn-primary px-5 py-2 rounded-lg text-base font-semibold ${plan.highlight
                                                ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white"
                                                : "bg-orange-200 hover:bg-orange-300 text-orange-900"
                                                }`}
                                        >
                                            {plan.cta.label}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials py-12 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center text-orange-600">
                    What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="testimonial-card p-6 rounded-lg shadow bg-[#fff3e0] border border-orange-200">
                        <p className="text-orange-800/90">
                            “I never thought learning calculus could be this fun! My Elucidra companion explains concepts in a way that finally makes sense. I love being able to ask questions out loud and get instant, clear answers.”
                        </p>
                        <span className="block mt-4 font-semibold text-orange-500">
                            – Alex P., University Student
                        </span>
                    </div>
                    <div className="testimonial-card p-6 rounded-lg shadow bg-[#fff3e0] border border-orange-200">
                        <p className="text-orange-800/90">
                            “As a teacher, Elucidra has transformed my classroom. I created a custom AI assistant for my students, and now they’re more engaged and confident than ever. The progress tracking helps me support every learner.”
                        </p>
                        <span className="block mt-4 font-semibold text-orange-500">
                            – Jamie L., High School Educator
                        </span>
                    </div>
                    <div className="testimonial-card p-6 rounded-lg shadow bg-[#fff3e0] border border-orange-200">
                        <p className="text-orange-800/90">
                            “I use Elucidra to practice new languages and brush up on science topics. The voice chat feels so natural, and I can learn whenever I want—even on the go. Highly recommended for lifelong learners!”
                        </p>
                        <span className="block mt-4 font-semibold text-orange-500">
                            – Taylor S., Lifelong Learner
                        </span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer py-8 text-center text-orange-500 text-sm bg-[#fff7ed] border-t border-orange-200">
                <div className="mb-2 flex items-center justify-center">
                    <Image
                        src="/images/logo.png"
                        alt="Elucidra Logo"
                        width={48}
                        height={48}
                        className="inline-block align-middle mr-3 drop-shadow-lg"
                    />
                    <span className="align-middle font-extrabold text-2xl tracking-wide text-orange-600">
                        Elucidra
                    </span>
                </div>
                <div>&copy; {new Date().getFullYear()} Elucidra. All rights reserved.</div>
            </footer>
        </main>
    );
};

export default LandingPage;
