import type { Product } from "@/data/products";
import { useState } from "react";

const ProductTabs = ({ product }: { product: Product }) => {
  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { id: "details", label: "Product Details" },
    { id: "specs", label: "Specifications" },
  ];

  return (
    <div className="mt-16 mb-20">
      {/* Tab Headers */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`whitespace-nowrap cursor-pointer py-4 px-1 text-sm font-medium border-b-2 ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-sm text-gray-700 leading-relaxed">
        {activeTab === "details" && (
          <div>
            <h3 className="font-semibold mb-2 text-xl">Overview</h3>
            {product.description_tabs ? (
              product.description_tabs
                .split("\n")
                .filter((line) => line.trim() !== "") // abaikan baris kosong
                .map((line, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed mb-1">
                    {line.trim()}
                  </p>
                ))
            ) : (
              <p>No description available.</p>
            )}
          </div>
        )}

        {activeTab === "specs" && (
          <div>
            <h3 className="font-semibold mb-2 text-xl">Specifications</h3>
            <ul className="list-disc pl-5 space-y-1">
              {product.specifications?.map((spec, i) => (
                <li key={i}>{spec}</li>
              )) || <p>No specifications available.</p>}
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h3 className="font-semibold mb-4">User Reviews</h3>
            {product.reviews?.length ? (
              product.reviews.map((rev, idx) => (
                <div key={idx} className="mb-4 border-b pb-2">
                  <p className="font-medium">{rev.name}</p>
                  <p className="text-yellow-500">Rating: {rev.rating}/5</p>
                  <p>{rev.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        )}

        {activeTab === "faq" && (
          <div>
            <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
            {product.faqs?.length ? (
              product.faqs.map((faq, idx) => (
                <div key={idx} className="mb-4">
                  <p className="font-medium">{faq.question}</p>
                  <p>{faq.answer}</p>
                </div>
              ))
            ) : (
              <p>No FAQs yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
