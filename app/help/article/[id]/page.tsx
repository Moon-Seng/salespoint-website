"use client";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../../sections/Navbar";
import Container from "../../../components/Container";
import config from "../../../../lib/config";

gsap.registerPlugin(ScrollTrigger);
import moment from "moment";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Blog {
  id: number;
  title: string;
  description: string;
  category: Category[];
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  category: Category;
  blogs: Blog[];
}

export default function HelpArticle() {
  const params = useParams();
  const [article, setArticle] = useState<Blog | null>(null);
  const [allCategories, setAllCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${config.API_BASE_URL}${config.endpoints.knowledgeBase}`
        );
        const data = await response.json();

        const responseArray = Array.isArray(data) ? data : [data];
        const allBlogs: Blog[] = [];
        const categoryMap = new Map();

        responseArray.forEach((item: ApiResponse) => {
          if (item.blogs) {
            allBlogs.push(...item.blogs);
            item.blogs.forEach((blog) => {
              blog.category.forEach((cat) => {
                if (!categoryMap.has(cat.name)) {
                  categoryMap.set(cat.name, {
                    title: cat.name,
                    items: [],
                  });
                }
                categoryMap.get(cat.name).items.push(blog);
              });
            });
          }
        });

        const foundArticle = allBlogs.find(
          (blog) => blog.id === parseInt(params.id as string)
        );
        setArticle(foundArticle || null);
        setAllCategories(Array.from(categoryMap.values()));
        setAllBlogs(allBlogs);
      } catch (error) {
        console.error("Failed to fetch article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  useEffect(() => {
    const searchData = async () => {
      try {
        const url = searchQuery.trim()
          ? `${config.API_BASE_URL}${
              config.endpoints.knowledgeBase
            }?search=${encodeURIComponent(searchQuery)}`
          : `${config.API_BASE_URL}${config.endpoints.knowledgeBase}`;
        const response = await fetch(url);
        const data = await response.json();

        const responseArray = Array.isArray(data) ? data : [data];
        const categoryMap = new Map();

        responseArray.forEach((item: ApiResponse) => {
          if (item.blogs) {
            item.blogs.forEach((blog) => {
              blog.category.forEach((cat) => {
                if (!categoryMap.has(cat.name)) {
                  categoryMap.set(cat.name, {
                    title: cat.name,
                    items: [],
                  });
                }
                categoryMap.get(cat.name).items.push(blog);
              });
            });
          }
        });

        setAllCategories(Array.from(categoryMap.values()));
      } catch (error) {
        console.error("Search failed:", error);
      }
    };

    const timeoutId = setTimeout(searchData, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    if (!loading && article) {
      const ctx = gsap.context(() => {
        // gsap.fromTo(titleRef.current,
        //   { y: 50, opacity: 0 },
        //   { y: 0, opacity: 1, duration: 1 }
        // );

        // gsap.fromTo(searchRef.current,
        //   { y: 30, opacity: 0 },
        //   { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
        // );

        // gsap.fromTo(sidebarRef.current,
        //   { x: -50, opacity: 0 },
        //   { x: 0, opacity: 1, duration: 0.8, delay: 0.5 }
        // );

        gsap.fromTo(
          contentRef.current,
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 }
        );
      });

      return () => ctx.revert();
    }
  }, [loading, article]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="text-center py-20">Loading...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <section className="bg-primary py-12 md:py-16 lg:py-20">
          <Container>
            <div className="text-center px-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
                Have a Question?
              </h1>
              <div className="max-w-2xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search the documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 border border-white rounded-lg text-gray-700 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 md:p-3 rounded-lg">
                  🔍
                </div>
              </div>
            </div>
          </Container>
        </section>
        <div className="text-center py-20">Article not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-16 lg:py-20">
        <Container>
          <div className="text-center px-4">
            <h1
              ref={titleRef}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6"
            >
              Have a Question?
            </h1>
            <div ref={searchRef} className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search the documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 md:px-6 py-3 md:py-4 border border-white rounded-lg text-white text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 md:p-3 rounded-lg">
                🔍
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-4 md:py-6 lg:py-8">
        <Container>
          <div className="px-4">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
              {/* Sidebar */}
              <div className="w-full lg:w-1/4 order-2 lg:order-1">
                <div
                  ref={sidebarRef}
                  className="bg-white rounded-lg p-3 md:p-4 lg:sticky lg:top-4 max-h-screen lg:overflow-y-auto"
                >
                  {allCategories.map((category, index) => (
                    <div key={index} className="mb-3 md:mb-4">
                      <h3 className="font-semibold text-primary bg-green-100 px-2 md:px-3 py-1.5 md:py-2 rounded mb-2 text-sm md:text-base">
                        {category.title}
                      </h3>
                      <ul className="space-y-1">
                        {category.items.map((item: Blog) => (
                          <li key={item.id}>
                            <a
                              href={`/help/article/${item.id}`}
                              className={`block px-2 md:px-3 py-1 text-xs md:text-sm hover:text-primary transition-colors truncate ${
                                item.id === article.id
                                  ? "text-primary font-medium"
                                  : "text-gray-600"
                              }`}
                              title={item.title}
                            >
                              📄 {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-3/4 order-1 lg:order-2">
                <div ref={contentRef} className="bg-white rounded-lg p-4 md:p-6 lg:p-8">
                  <div className="mb-3 md:mb-4 text-xs md:text-sm text-gray-800 flex flex-col sm:flex-row sm:gap-4">
                    <span>📅 Posted {moment(article.created_at).format("MMM D, YYYY")}</span>
                    <span>📝 Updated {moment(article.updated_at).format("MMM D, YYYY")}</span>
                  </div>

                  <div
                    className="prose prose-sm md:prose-base max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                    dangerouslySetInnerHTML={{ __html: article.description }}
                  />

                  {/* Navigation */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 md:mt-8 pt-4 border-t gap-4 sm:gap-0">
                    {(() => {
                      const currentIndex = allBlogs.findIndex(
                        (blog) => blog.id === article.id
                      );
                      const prevArticle =
                        currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
                      const nextArticle =
                        currentIndex < allBlogs.length - 1
                          ? allBlogs[currentIndex + 1]
                          : null;

                      return (
                        <>
                          <div className="text-xs md:text-sm text-gray-500 w-full sm:w-auto">
                            {prevArticle ? (
                              <a
                                href={`/help/article/${prevArticle.id}`}
                                className="hover:text-primary block"
                              >
                                <span className="block">← Previous</span>
                                <span className="block truncate max-w-xs">📄 {prevArticle.title}</span>
                              </a>
                            ) : (
                              <span className="block">
                                <span className="block">← Previous</span>
                                <span className="block">📄 No previous article</span>
                              </span>
                            )}
                          </div>
                          <div className="text-xs md:text-sm text-gray-500 text-left sm:text-right w-full sm:w-auto">
                            {nextArticle ? (
                              <a
                                href={`/help/article/${nextArticle.id}`}
                                className="hover:text-primary block"
                              >
                                <span className="block">Next →</span>
                                <span className="block truncate max-w-xs">{nextArticle.title} 📄</span>
                              </a>
                            ) : (
                              <span className="block">
                                <span className="block">Next →</span>
                                <span className="block">No next article 📄</span>
                              </span>
                            )}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
