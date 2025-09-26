import Container from "../components/Container";

export default function Stats() {
  return (
    <section className="py-20 bg-primary">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-inter mb-6">
            We Help To Grow Your Business
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto font-inter">
            Quisque fermentum porta tincidunt. Interdum semper. Pellentesque
            facilisis augue dolor mollis suscipit erat libero fermentum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-white font-inter mb-2">
              142
            </div>
            <div className="text-blue-100 font-space-grotesk">New Features</div>
          </div>

          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-white font-inter mb-2">
              28k
            </div>
            <div className="text-blue-100 font-space-grotesk">APP Download</div>
          </div>

          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-white font-inter mb-2">
              53M
            </div>
            <div className="text-blue-100 font-space-grotesk">Active Users</div>
          </div>

          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-white font-inter mb-2">
              90%
            </div>
            <div className="text-blue-100 font-space-grotesk">
              Positive Rate
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
