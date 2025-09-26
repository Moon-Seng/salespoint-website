import Container from "../components/Container";
import Button from "../components/Button";

export default function Security() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-lg font-semibold text-gray-900">Zaap</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-inter leading-tight">
              Better Security To Better Protection An Experience Of Strength.
            </h2>

            <p className="text-gray-600 font-space-grotesk">
              Class aptent taciti sociosqu ad litora torquent conubia nostrama
              inceptos himenaeos. Donec tristique nibh ipsum dignissim.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-inter">
                  Well Organised User Interface
                </h3>
                <p className="text-gray-600 font-space-grotesk">
                  Etiam id euismod odio. Ut euismod sem a lacus fringilla.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-inter">
                  Completely Bug Free
                </h3>
                <p className="text-gray-600 font-space-grotesk">
                  Cras eleifend leo ac varius tristique suspendisse.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Maximize Your Savings
                </h3>
                <div className="flex gap-2">
                  <div className="w-16 h-10 bg-blue-600 rounded transform rotate-12"></div>
                  <div className="w-16 h-10 bg-gray-800 rounded transform -rotate-12"></div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Maximize Your Savings with Multiple Accounts for Different
                Occasions*
              </p>

              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Log In
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Create Account
                </Button>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-200 rounded-full opacity-50"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-4 h-2 bg-gray-900 rounded-full"></div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4">Transaction</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="font-semibold">Credit Card</p>
                    <p className="text-xs text-gray-500">**** **** **** 4713</p>
                  </div>
                  <div className="ml-auto bg-green-500 text-white px-2 py-1 rounded text-xs">
                    +$4.6
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-2xl font-bold">$328</p>
                <p className="text-sm text-gray-500">Goal this month</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Expenses</span>
                  <span>60%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Income</span>
                  <span>52%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Savings</span>
                  <span>48%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-inter leading-tight">
              Performance Is The Key To Most People Achieving A Better Future
            </h2>

            <p className="text-gray-600 font-space-grotesk">
              Etiam euismod odio euismod lacus fringilla hendrer.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-900">
                  Custom Edit Tool Application
                </span>
                <span className="text-blue-600">+</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-900">
                  Built In Safty Chat Mode Enabled
                </span>
                <span className="text-blue-600">+</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-900">
                  Faster Trust Builds System Always Open
                </span>
                <span className="text-blue-600">+</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-900">
                  Create Auto Layouts In App Interface
                </span>
                <span className="text-blue-600">-</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 font-space-grotesk">
              Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy
              lorem ac scelerisque neque turpis.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
