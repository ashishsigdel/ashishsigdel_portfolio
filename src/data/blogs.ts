export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "agentic-interfaces",
    title: "The Architecture of Agentic Interfaces",
    excerpt: "Exploring the fundamental principles behind building interfaces that can think, act, and respond on behalf of the user.",
    content: "Building an agentic interface is more than just connecting an LLM to a frontend. It requires a fundamental shift in how we think about user interactions. Traditionally, interfaces have been declarative—the user tells the system exactly what to do. Agentic interfaces, on the other hand, are intent-driven. The user provides a goal, and the system figures out the steps to achieve it. In this piece, I'll go over the core architectural patterns needed to build robust agentic systems that users can trust.",
    date: "March 15, 2026",
    readTime: "5 min read",
    author: {
      name: "Ashish Sigdel",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2930&auto=format&fit=crop",
    tags: ["AI", "Architecture", "UX"],
  },
  {
    id: "2",
    slug: "vercel-ai-sdk",
    title: "Vercel AI SDK: A Paradigm Shift in React State",
    excerpt: "How Vercel's generative UI primitives are changing the way we handle complex asynchronous state in React applications.",
    content: "The Vercel AI SDK introduces a groundbreaking way to stream UI components directly from the server. This shifts the complexity from client-side state management into the structured output of AI models. By streaming React components instead of raw JSON, we can render complex, interactive UIs without the traditional loading spinner waterfall. Here is how I use it to build dynamic, real-time dashboards.",
    date: "February 28, 2026",
    readTime: "8 min read",
    author: {
      name: "Ashish Sigdel",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
    tags: ["React", "Next.js", "AI"],
  },
  {
    id: "3",
    slug: "micro-animations",
    title: "Micro-animations with Framer Motion and Tailwind v4",
    excerpt: "Crafting delightful user experiences with subtle motion design and modern CSS frameworks.",
    content: "Framer Motion paired with Tailwind CSS v4 provides an incredibly powerful toolkit for motion design. Micro-animations—those subtle hover effects, active states, and transition details—are what elevate a good UI to a great one. In this tutorial, we explore the math behind spring animations and how to create natural-feeling components.",
    date: "January 14, 2026",
    readTime: "6 min read",
    author: {
      name: "Ashish Sigdel",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop",
    tags: ["Animation", "Frontend", "Design"],
  },
  {
    id: "4",
    slug: "modern-state-management",
    title: "Modern State Management Options in 2026",
    excerpt: "Zustand, Jotai, or React Context? A deep dive into choosing the right state management tool for your Next.js project.",
    content: "React state management has evolved immensely. I see Many developers still reaching for Redux by default, but the ecosystem has provided much lighter, more performant alternatives. We will break down Zustand, Jotai, and native Context API, discussing atomic state versus global monolithic state models.",
    date: "December 10, 2025",
    readTime: "10 min read",
    author: {
      name: "Ashish Sigdel",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
    tags: ["React", "State Management", "Performance"],
  },
  {
    id: "5",
    slug: "server-components-deep-dive",
    title: "React Server Components: A Deep Dive",
    excerpt: "Understanding the true power of React Server Components and how they can optimize your bundle size.",
    content: "RSC is not just a routing feature; it's a completely new mental model for writing React. By executing components safely on the server and only shipping the required HTML and interactive hydration scripts, we drastically reduce our client bundle. Let's look at a practical refactor from a traditional SPA to a Server Component architecture.",
    date: "November 22, 2025",
    readTime: "12 min read",
    author: {
      name: "Ashish Sigdel",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2787&auto=format&fit=crop",
    tags: ["React", "Next.js", "Performance"],
  },
  {
    id: "6",
    slug: "building-design-systems",
    title: "Building Scalable Design Systems",
    excerpt: "Strategies for avoiding common pitfalls when maintaining a component library across multiple teams.",
    content: "A successful design system is 80% about communication and 20% about code. We'll cover how to enforce design tokens using Tailwind Configuration, implement visual regression testing with Playwright, and create a governance model for accepting new component contributions.",
    date: "October 05, 2025",
    readTime: "7 min read",
    author: {
      name: "Ashish Sigdel",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2800&auto=format&fit=crop",
    tags: ["Design System", "CSS", "Teamwork"],
  },
  {
    id: "7",
    slug: "optimizing-web-fonts",
    title: "The Dark Art of Web Font Optimization",
    excerpt: "Stop your site from jumping around. A definitive guide to resolving Cumulative Layout Shift (CLS) caused by custom fonts.",
    content: "We've all seen it: a beautiful layout suddenly repaints and jumps because a 400kb bold font file finally downloaded. Through font-display swap, preloading, and optimizing variable fonts, we can achieve perfect Lighthouse scores. Here's exactly how to configure `next/font` for maximum performance.",
    date: "September 18, 2025",
    readTime: "6 min read",
    author: {
      name: "Ashish Sigdel",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=2888&auto=format&fit=crop",
    tags: ["Performance", "Typography", "Next.js"],
  }
];
