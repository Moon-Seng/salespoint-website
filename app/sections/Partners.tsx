import Container from "../components/Container";

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Google
              </text>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Microsoft
              </text>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Amazon
              </text>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Netflix
              </text>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Spotify
              </text>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              className="h-8 w-auto"
              viewBox="0 0 120 40"
              fill="currentColor"
            >
              <text x="10" y="25" className="text-lg font-bold">
                Airbnb
              </text>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
