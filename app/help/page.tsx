"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../sections/Navbar";
import Container from "../components/Container";
import Button from "../components/Button";
import config from "../../lib/config";

gsap.registerPlugin(ScrollTrigger);

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
}

interface ApiResponse {
  category: Category;
  blogs: Blog[];
}

interface HelpCategory {
  title: string;
  icon: string;
  items: Blog[];
}

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [helpCategories, setHelpCategories] = useState<HelpCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<Blog[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const fetchHelpData = async () => {
      setLoading(true);
      try {
        const url = searchQuery.trim()
          ? `${config.API_BASE_URL}${
              config.endpoints.knowledgeBase
            }?search=${encodeURIComponent(searchQuery)}`
          : `${config.API_BASE_URL}${config.endpoints.knowledgeBase}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("API Response:", data);

        // Handle both single object and array responses
        const responseArray = Array.isArray(data) ? data : [data];
        const categoryMap = new Map<string, HelpCategory>();
        const allBlogs: Blog[] = [];

        responseArray.forEach((item: ApiResponse) => {
          if (item.blogs) {
            allBlogs.push(...item.blogs);
            item.blogs.forEach((blog) => {
              blog.category.forEach((cat) => {
                if (!categoryMap.has(cat.name)) {
                  categoryMap.set(cat.name, {
                    title: cat.name,
                    icon: getCategoryIcon(cat.name),
                    items: [],
                  });
                }
                categoryMap.get(cat.name)!.items.push(blog);
              });
            });
          }
        });

        setHelpCategories(Array.from(categoryMap.values()));
        setSearchResults(searchQuery.trim() ? allBlogs : []);
        console.log("Processed categories:", Array.from(categoryMap.values()));
      } catch (error) {
        console.error("Failed to fetch help data:", error);
        setHelpCategories([]);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchHelpData();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".help-categories",
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play pause restart pause",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [helpCategories]);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      "Getting Started": "📖",
      Products: "📦",
      Orders: "📋",
      Customers: "👥",
      Settings: "⚙️",
      Billing: "💰",
    };
    return icons[category] || "📄";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary py-20">
        <Container>
          <div className="text-center">
            <h1
              ref={titleRef}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Have a Question?
            </h1>
            <div ref={searchRef} className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search the documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 border-2 border-white rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-lg">
                🔍
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <Container>
          {loading ? (
            <div className="text-center py-20">
              <div className="text-2xl">Loading...</div>
            </div>
          ) : searchResults.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Search Results for "{searchQuery}"
              </h2>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="bg-white rounded-lg p-4 border border-gray-200"
                  >
                    <a
                      href={`/help/article/${result.id}`}
                      className="block hover:text-primary"
                    >
                      <h3 className="font-semibold mb-2">{result.title}</h3>
                      <div
                        className="text-gray-600 text-sm"
                        dangerouslySetInnerHTML={{
                          __html: result.description.substring(0, 200) + "...",
                        }}
                      />
                    </a>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-6">All Categories</h2>
            </div>
          ) : null}
          {!loading && (
            <div className="help-categories grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <div
                  key={index}
                  ref={(el) => el && (cardsRef.current[index] = el)}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 font-space-grotesk">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`/help/article/${item.id}`}
                          className="flex items-center text-gray-600 hover:text-primary transition-colors"
                        >
                          <span className="text-primary mr-3">📄</span>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Please let us know if there is anything we can help you with.
            </p>
            <Button className="bg-primary text-white hover:bg-primary-hover">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
