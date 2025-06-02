# Elucidra – Real-time AI Teaching Platform

**Elucidra** is a next-generation AI-powered learning platform that enables users to interact with intelligent virtual tutors in real time. Designed for students, lifelong learners, and educators, Elucidra offers a seamless, modern educational experience through personalized AI companions, voice and chat interaction, and rich progress tracking—all in a beautiful, responsive UI.

---

## 🌟 App Features

- **AI Companions**: Create and customize your own AI tutors with unique personalities, voices, and expertise. Each companion can be tailored to specific subjects or learning styles.
- **Conversational Learning**: Engage in natural, real-time conversations with your AI tutors via both voice and text. Ask questions, get explanations, and practice skills in a supportive, interactive environment.
- **Session History & Recaps**: Every learning session is automatically saved. Review past conversations, receive session recaps, and track your learning journey over time.
- **Progress Tracking**: Visualize your achievements, monitor your activity, and receive personalized recommendations to help you grow.
- **Modern UI/UX**: Enjoy a clean, accessible, and visually appealing interface with a light orange theme, large logo, and responsive design for all devices.
- **Testimonials**: Real user stories from students, educators, and lifelong learners highlight the impact and versatility of Elucidra.
- **Customizable Landing Page**: The landing page features a hero section, feature highlights, plan comparison, testimonials, and a branded footer—all easily editable in a single file.

---

## 🗂️ Project Structure

```
my-app/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── LandingPageClient.tsx
│   ├── LandingPageWrapper.tsx          # Client wrapper for server compatibility
│   ├── api/                            # API route handlers (REST endpoints, e.g. Sentry test)
│   │   └── sentry-example-api/
│   │       └── route.t
│   ├── companions/
│   │   ├── page.tsx
│   │   ├── new/
│   │   │   └── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── my-journey/
│   │   └── page.tsx
│   ├── sentry-example-page/
│   │   └── page.tsx
│   ├── sign-in/
│   │   └── [[...sign-in]]/
│   │       └── page.tsx
│   ├── subscription/
│   │   └── page.tsx
│   └── global-error.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── NavItems.tsx
│   ├── CompanionCard.tsx
│   ├── CompanionsList.tsx
│   ├── CompanionForm.tsx
│   ├── Cta.tsx
│   ├── SearchInput.tsx
│   ├── SubjectFilter.tsx
│   └── ui/
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── table.tsx
│       └── textarea.tsx
│
├── constants/
│   ├── index.ts
│   └── soundwaves.json
│
├── lib/
│   ├── supabase.ts                     # Supabase client setup (if used)
│   ├── utils.ts
│   ├── vapi.sdk.ts                     # Vapi AI SDK integration (if used)
│   └── actions/
│       └── companion.actions.tsx
│
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo.svg
│   │   ├── cta.svg
│   │   └── ...
│   ├── icons/
│   └── readme/
│
├── types/
│   ├── index.d.ts
│   └── vapi.d.ts
│
├── middleware.ts
├── next.config.ts
├── package.json
├── README.md
├── tsconfig.json
└── ...
```

---

## 🚀 Key Features & UI Highlights

- **Authentication**: Secure sign-in/sign-up with Clerk, integrated throughout the app.
- **Personalized AI Tutors**: Users can create, edit, and interact with multiple AI companions, each with their own subject focus and personality.
- **Voice & Text Chat**: Real-time, natural conversations using both voice and text interfaces.
- **Session Management**: Save, revisit, and analyze previous learning sessions.
- **Progress Analytics**: Visual dashboards and recaps to help users understand their learning journey.
- **Responsive Design**: Fully mobile-friendly and accessible, with a modern, inviting color palette.
- **Easy Customization**: All landing page content (hero, features, plans, testimonials, footer) is editable in `app/LandingPageClient.tsx`.
- **Component-Based Architecture**: Clean separation of UI, logic, and data fetching for maintainability and scalability.

---

## 🛠️ Tech Stack & Setup

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/docs)
- **Language**: TypeScript
- **Styling**: Tailwind CSS for rapid, utility-first styling
- **Authentication**: [Clerk](https://clerk.com/) for user management and secure authentication
- **UI Components**: Custom React components, Radix UI primitives
- **State & Data**: React hooks, server components, and Clerk's server/client helpers
- **Assets**: All branding and images in `/public/images/`
- **Testing & Monitoring**: (Optional) Sentry integration for error monitoring

---

## 🧑‍💻 Local Development

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

---

## 🚀 Deployment

The easiest way to deploy Elucidra is with [Vercel](https://vercel.com/):

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import your project.
3. Set up environment variables for Clerk and any other providers as needed.
4. Click **Deploy** and your app will be live in minutes!

For more details, see the [Vercel Next.js deployment guide](https://vercel.com/docs/concepts/projects/overview).

---

## 🌐 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Authentication](https://clerk.com/docs/quickstarts/nextjs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/docs/primitives/components/)
- [Sentry for Next.js](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Vapi AI SDK](https://docs.vapi.ai/quickstart)
- [Lottie React](https://lottiereact.com/)
- [Lucide React Icons](https://lucide.dev/docs/lucide-react/)
- [React Hook Form](https://react-hook-form.com/get-started/)
- [Zod Validation](https://zod.dev/)
- [Class Variance Authority](https://cva.style/docs)

---

## 🔮 Future Upgrades

- **In-app Payments**: Integrate Stripe or Lemon Squeezy for seamless plan upgrades.
- **Admin Dashboard**: Add analytics and management tools for admins.
- **More AI Models**: Support for additional LLMs and voice providers.
- **Mobile App**: Build a React Native or Expo version for iOS/Android.
- **Gamification**: Add badges, streaks, and rewards for learning milestones.
- **Social Features**: Allow users to share progress, invite friends, or collaborate.
- **Accessibility**: Further improve accessibility for all users.
- **Localization**: Add support for multiple languages and regions.
- **Offline Mode**: Allow limited use without an internet connection.
- **Custom Themes**: Let users personalize the app's appearance.

---

## 📄 License
MIT License
