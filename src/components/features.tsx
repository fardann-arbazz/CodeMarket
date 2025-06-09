import {
  FiCode,
  FiDownload,
  FiLayers,
  FiShield,
  FiClock,
  FiLifeBuoy,
} from "react-icons/fi";

const features = [
  {
    icon: <FiCode className="w-6 h-6 text-indigo-600" />,
    title: "Clean Code",
    description:
      "All our source code follows best practices with proper documentation and comments.",
  },
  {
    icon: <FiDownload className="w-6 h-6 text-indigo-600" />,
    title: "Easy to Implement",
    description:
      "Ready-to-use code that you can easily integrate into your projects.",
  },
  {
    icon: <FiLayers className="w-6 h-6 text-indigo-600" />,
    title: "Modular Design",
    description:
      "Components are built to be reusable and customizable for different use cases.",
  },
  {
    icon: <FiShield className="w-6 h-6 text-indigo-600" />,
    title: "Secure",
    description:
      "We prioritize security in all our code samples to protect your applications.",
  },
  {
    icon: <FiClock className="w-6 h-6 text-indigo-600" />,
    title: "Save Time",
    description:
      "Cut development time significantly with our pre-built solutions.",
  },
  {
    icon: <FiLifeBuoy className="w-6 h-6 text-indigo-600" />,
    title: "Support",
    description:
      "Get help from our community and developers if you encounter any issues.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Why Choose Our Source Code
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide high-quality code that helps developers build better
            applications faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
