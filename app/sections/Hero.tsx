import Container from "../components/Container";
import Button from "../components/Button";
import CheckIcon from "../components/CheckIcon";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 font-space-grotesk leading-tight">
            Smart-Thinking &<br />
            Innovative Solution.
          </h1>
          <p className="text-lg text-[#4F4F4F] max-w-lg font-inter">
            Class aptent taciti sociosqu ad litora torquent conubia nostrama
            inceptos himenaeos. Donec tristique nibh ipsum dignissim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              Discover More
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-400 text-gray-700 hover:bg-gray-100"
            >
              Explore Service →
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <CheckIcon />
              Get 15 days free trial
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon />
              No credit card is required
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon />
              Cancel anytime
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Main Dashboard Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
            {/* Top Stats */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">👤</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    User Active Possibility
                  </p>
                  <p className="text-xl font-bold text-gray-900">$44.3578</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">$4.8k</p>
                <p className="text-sm text-gray-500">/ Daily</p>
              </div>
            </div>

            {/* Wave Chart */}
            <div className="h-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-6 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 300 80">
                <path
                  d="M0,40 Q75,20 150,40 T300,40"
                  stroke="#4ca456"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="280" cy="40" r="3" fill="#4ca456" />
              </svg>
            </div>

            {/* Data Analysis Section */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Data Analysis
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>● Aliquam</span>
                <span>● Morbi</span>
                <span>● Molestie</span>
                <span>Current</span>
                <span>Set</span>
              </div>

              {/* Bar Chart */}
              <div className="h-24 flex items-end justify-center gap-1 bg-gray-50 rounded-lg p-4">
                <div className="w-4 h-8 bg-primary rounded-sm"></div>
                <div className="w-4 h-12 bg-primary rounded-sm"></div>
                <div className="w-4 h-6 bg-primary rounded-sm opacity-70"></div>
                <div className="w-4 h-16 bg-primary rounded-sm"></div>
                <div className="w-4 h-10 bg-primary rounded-sm opacity-80"></div>
                <div className="w-4 h-14 bg-primary rounded-sm"></div>
                <div className="w-4 h-8 bg-primary rounded-sm opacity-70"></div>
                <div className="w-4 h-18 bg-primary rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-pink-200 rounded-full opacity-60"></div>
          <div className="absolute top-20 -left-8 w-8 h-8 bg-green-300 rounded-full opacity-50"></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-200 rounded-full opacity-40"></div>
          <div className="absolute top-1/3 -right-6 w-6 h-6 bg-yellow-200 rounded-full opacity-60"></div>

          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center opacity-80">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
