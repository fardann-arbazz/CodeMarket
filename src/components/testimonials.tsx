import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "The React dashboard template saved me weeks of development time. The code is clean and well-organized, making customization a breeze.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Fullstack Engineer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "I've purchased several code snippets from CodeMarket and each one has been exceptionally high quality with great documentation.",
    rating: 4,
  },
  {
    name: "David Wilson",
    role: "CTO",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    content:
      "Our team uses these code samples as learning resources and productivity boosters. Worth every penny for the time savings.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            What Developers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to
            say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
