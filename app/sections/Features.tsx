import Container from "../components/Container";

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-inter mb-6">
            How To Grow Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Class aptent taciti sociosqu ad litora torquen conubia nostramase
            inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
              Active User Analytics
            </h3>
            <p className="text-gray-600 font-inter">
              Class aptent taciti sociosqu litora torquen conubia nostram.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
              Smart Coding Development
            </h3>
            <p className="text-gray-600 font-inter">
              Morbi eget aliquet finibus, best condimentum aliquet quam.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
              User Friendly Interface
            </h3>
            <p className="text-gray-600 font-inter">
              Quisque magna, sollicitudin vitae, lobortis feugiat arcu.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 font-inter">
            Approx <span className="text-2xl font-bold text-primary">875+</span> team members ready to online support for you
          </p>
        </div>
      </Container>
    </section>
  );
}