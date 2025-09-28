const config = {
  API_BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api",
  endpoints: {
    pricing: "/membership/list/",
    knowledgeBase: "/blog/list/knowledge-base/",
  },
};

export default config;
