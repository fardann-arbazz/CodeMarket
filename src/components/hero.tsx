import { FiArrowRight, FiCode, FiLayers } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl sm:w-[650px] md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Premium <span className="text-blue-600">Source Code</span> for Your
            Projects
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
            High-quality, well-documented code snippets and complete projects to
            accelerate your development process. Save hundreds of hours with our
            ready-to-use solutions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to={"/product"}
              className="bg-blue-600 scroll-auto hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition"
            >
              Browse Products <FiArrowRight className="ml-2" />
            </Link>
            <a
              href="#features"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Learn More
            </a>
          </div>
          <div className="mt-10 flex items-center space-x-6">
            <div className="flex items-center">
              <FiCode className="text-indigo-600 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">
                100+ Projects
              </span>
            </div>
            <div className="flex items-center">
              <FiLayers className="text-indigo-600 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">
                Modular Code
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-2xl opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-100 dark:bg-purple-900 rounded-2xl opacity-50"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-100 dark:bg-gray-700 p-3 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-6">
                <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
                  <code>
                    {`// Clean, well-documented code
function calculateTotal(items) {
  return items.reduce(
    (total, item) => total + item.price, 
    0
  );
}

// Responsive design included
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}

// Easy to customize
const theme = {
  primary: '#4f46e5',
  secondary: '#7c3aed'
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
