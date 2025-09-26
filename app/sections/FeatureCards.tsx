import Container from "../components/Container";

export default function FeatureCards() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Creative Ideas</h3>
            <p className="text-gray-600 font-inter">Class aptent taciti sociq u litora torquen conub.</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-6 text-red-500">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Awesome Design</h3>
            <p className="text-gray-600 font-inter">Integer a elit pellentesqu e semper sem ultricies.</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-6 text-orange-500">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Best Features</h3>
            <p className="text-gray-600 font-inter">Fusce risus lorem pulvin ar eu posuere vitae.</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-6 text-green-500">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Easy Solutions</h3>
            <p className="text-gray-600 font-inter">Aenean eget nulla eu dui malesuad convallis vel.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}