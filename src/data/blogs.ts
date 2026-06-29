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

const author = {
  name: "Ashish Sigdel",
  avatar: "/ashish/sequence00086400.jpg",
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "shipping-production-ai-agents",
    title: "Shipping Production-Grade AI Agents That Don't Break",
    excerpt: "Lessons from taking an LLM agent from a flashy demo to a reliable system that real users depend on every day.",
    content: "A demo agent and a production agent are two very different beasts. The demo works because you control the inputs; production fails because users don't. In this piece I walk through the patterns that actually move the needle: bounded tool-calling loops, deterministic guardrails around non-deterministic models, structured outputs validated with Zod, retry budgets, and observability that lets you replay any failed run. I also cover evals—why a 50-case eval suite caught more regressions than any amount of manual testing, and how I wire them into CI so a prompt change can't silently degrade quality.",
    date: "June 22, 2026",
    readTime: "9 min read",
    author,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2930&auto=format&fit=crop",
    tags: ["AI Agents", "LLM", "Production"],
  },
  {
    id: "2",
    slug: "rag-that-actually-works",
    title: "RAG That Actually Works: Beyond the Naive Vector Search",
    excerpt: "Why most retrieval-augmented generation pipelines disappoint, and the hybrid retrieval architecture I reach for instead.",
    content: "Naive RAG—embed everything, cosine-similarity search, stuff the top-k into a prompt—gets you a demo and not much more. The hard part is retrieval quality. I break down the stack that has consistently worked for me: hybrid search combining BM25 with dense embeddings, a reranker pass to fix the ordering, query rewriting so the user's messy question matches your clean chunks, and metadata filtering to scope the search. I also dig into chunking strategy, why chunk size is a product decision and not a technical one, and how to evaluate retrieval independently from generation so you know which half is failing.",
    date: "May 30, 2026",
    readTime: "11 min read",
    author,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
    tags: ["RAG", "AI", "Search"],
  },
  {
    id: "3",
    slug: "streaming-generative-ui-nextjs",
    title: "Streaming Generative UI in Next.js with the AI SDK",
    excerpt: "Streaming React components straight from the server lets you build AI interfaces with zero loading-spinner waterfalls.",
    content: "The AI SDK lets you stream typed UI directly from server actions instead of shuttling raw JSON to the client and reassembling it. That single shift collapses a whole category of client state. I show how I build a real-time research assistant: tool calls render their own loading and result components, partial responses stream token-by-token, and the entire thing degrades gracefully when a model call times out. We cover the mental model behind streamUI, how to keep server and client boundaries clean in the App Router, and where this approach starts to hurt.",
    date: "May 8, 2026",
    readTime: "8 min read",
    author,
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2787&auto=format&fit=crop",
    tags: ["Next.js", "AI", "React"],
  },
  {
    id: "4",
    slug: "fullstack-typescript-end-to-end",
    title: "End-to-End Type Safety Across a Full-Stack TypeScript App",
    excerpt: "Drizzle, tRPC, and Zod give you a single source of truth from the database row all the way to the React component.",
    content: "Nothing kills velocity like a backend change that silently breaks the frontend at runtime. With Drizzle for the schema, tRPC for the API layer, and Zod for validation at the edges, a column rename becomes a compile error in your component—exactly where you want it. I walk through wiring this stack in a Next.js project, sharing inferred types from database to UI without a single hand-written interface, and how this setup pays off most when an AI coding agent is editing the code alongside you.",
    date: "April 19, 2026",
    readTime: "10 min read",
    author,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
    tags: ["TypeScript", "Full Stack", "tRPC"],
  },
  {
    id: "5",
    slug: "model-context-protocol-explained",
    title: "The Model Context Protocol, Explained for Builders",
    excerpt: "MCP is becoming the USB-C of AI tooling. Here's what it is, why it matters, and how to build your first server.",
    content: "Every AI app was reinventing the same glue code to connect models to tools and data. The Model Context Protocol standardizes that boundary, so a tool you write once can be used by any MCP-aware client. In this guide I demystify the protocol—resources, tools, and prompts—and build a small MCP server that exposes a Postgres database to an assistant. I also cover the security model, why you should think hard about what you expose, and how MCP changes the way I architect AI features in full-stack apps.",
    date: "March 27, 2026",
    readTime: "9 min read",
    author,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2800&auto=format&fit=crop",
    tags: ["MCP", "AI", "Tooling"],
  },
  {
    id: "6",
    slug: "ai-assisted-development-workflow",
    title: "My AI-Assisted Development Workflow in 2026",
    excerpt: "How I actually use coding agents day to day—where they shine, where they waste your time, and how to stay in control.",
    content: "Coding agents went from novelty to core tooling fast, but using them well is a skill. I share the workflow that has stuck: tight feedback loops, treating the agent like a fast junior who needs clear specs, writing tests first so the agent has a target, and keeping a human in the loop for architecture. I cover the failure modes too—confidently wrong refactors, context rot on large codebases, and the temptation to accept code you don't understand. The goal isn't to write less code; it's to spend your attention where it matters.",
    date: "February 14, 2026",
    readTime: "7 min read",
    author,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2872&auto=format&fit=crop",
    tags: ["AI", "Developer Tools", "Productivity"],
  },
  {
    id: "7",
    slug: "vector-databases-when-and-why",
    title: "Vector Databases: When You Need One and When You Don't",
    excerpt: "pgvector, Pinecone, or just an in-memory index? A practical guide to choosing storage for your AI features.",
    content: "The vector database hype made it feel mandatory, but most apps reach for one too early. I break down the real decision: at small scale, pgvector inside the Postgres you already run beats adding a new service. At larger scale, dedicated vector stores earn their keep with filtering, sharding, and managed scaling. I benchmark recall versus latency trade-offs, explain HNSW versus IVF indexes in plain terms, and share a rule of thumb for when to graduate from one tier to the next—so you spend complexity budget only where it buys you something.",
    date: "January 9, 2026",
    readTime: "8 min read",
    author,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2834&auto=format&fit=crop",
    tags: ["Vector DB", "AI", "Backend"],
  }
];
