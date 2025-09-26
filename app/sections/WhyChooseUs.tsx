import Container from "../components/Container";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-inter mb-6">
            Why Will You Choose Our
            <br />
            Application
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Class aptent taciti sociosqu ad litora torquen conubia nostramae
            inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
          </p>
        </div>

        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Central Circle */}
          <div className="relative">
            <svg className="w-80 h-80" viewBox="0 0 320 320">
              <circle
                cx="160"
                cy="160"
                r="140"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="160"
                cy="160"
                r="140"
                fill="none"
                stroke="#4ca456"
                strokeWidth="8"
                strokeDasharray="879"
                strokeDashoffset="220"
                strokeLinecap="round"
                className="rotate-[-90deg] origin-center"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary font-inter">5M+</div>
                <div className="text-gray-600 font-inter">Active Members</div>
              </div>
            </div>
          </div>

          {/* User Avatars and Notifications */}
          {/* Top User */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3 bg-white rounded-lg shadow-lg p-3 max-w-xs">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-900">Karen</span>
              </div>
              <p className="text-xs text-gray-600">change project info on Project Homepage</p>
              <p className="text-xs text-gray-400 mt-1">Aug 10</p>
            </div>
          </div>

          {/* Right User */}
          <div className="absolute top-1/3 right-8 flex items-center">
            <div className="bg-white rounded-lg shadow-lg p-3 max-w-xs mr-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-900">Andrea</span>
              </div>
              <p className="text-xs text-gray-600">change the due date of Project Homepage</p>
              <p className="text-xs text-gray-400 mt-1">June 03</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
          </div>

          {/* Left User */}
          <div className="absolute bottom-1/3 left-8 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3 bg-white rounded-lg shadow-lg p-3 max-w-xs">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-900">Karen</span>
              </div>
              <p className="text-xs text-gray-600">leave some comments on Illustrasi</p>
              <p className="text-xs text-gray-400 mt-1">July 25</p>
            </div>
          </div>

          {/* Bottom User */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}