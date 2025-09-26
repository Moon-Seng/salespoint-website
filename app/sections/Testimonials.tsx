import Container from "../components/Container";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-inter mb-6">
            What People Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Quisque fermentum porta tincidunt. Interdum semper.
            Pellentesque facilisis augue mollis suscipit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
              alt="Jenny Wilson"
              className="w-20 h-20 rounded-full mx-auto mb-6"
            />
            <p className="text-gray-700 mb-6 font-inter">
              "I just simply love tools that make my life easier! I have everything that I need in one place, and that allows our team to be more organized and user-oriented."
            </p>
            <h4 className="font-bold text-gray-900 font-inter">Jenny Wilson</h4>
            <p className="text-gray-600 text-sm font-inter">Project Manager at Microsoft</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
              alt="Robert Fox"
              className="w-20 h-20 rounded-full mx-auto mb-6"
            />
            <p className="text-gray-700 mb-6 font-inter">
              "I really like that I can have all in one place: I can send emails and text messages, I can have live chat, show pop-ups and push notifications on my website and create dynamic page content"
            </p>
            <h4 className="font-bold text-gray-900 font-inter">Robert Fox</h4>
            <p className="text-gray-600 text-sm font-inter">Founder at Brain.co</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
              alt="Kristin Watson"
              className="w-20 h-20 rounded-full mx-auto mb-6"
            />
            <p className="text-gray-700 mb-6 font-inter">
              "Very easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations."
            </p>
            <h4 className="font-bold text-gray-900 font-inter">Kristin Watson</h4>
            <p className="text-gray-600 text-sm font-inter">UX Designer at Google</p>
          </div>
        </div>
      </Container>
    </section>
  );
}