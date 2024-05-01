import React from "react";

const HomePricing = () => {
  return (
    <div id="pricing">
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-semibold text-gray-900 sm:text-3xl">
                    Our Pricing Plans
                  </h2>

                  <p className="mt-4 text-gray-500 text-base/6">
                    Choose the plan that&apos;s right for you and start innovating with AI today.
                  </p>
                </header>
              </div>
            </div>

            {/* Pricing columns */}
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="lg:col-span-1 lg:py-8">
                <div className="relative flex flex-col h-full transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                    <h3 className="text-lg font-medium sm:text-xl">
                      Plan {index + 1}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {Array.from({ length: 5 }).map((_, featureIndex) => (
                        <li key={featureIndex} className="text-sm sm:text-base">
                          Feature {featureIndex + 1}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto p-4 border-t-2 border-black">
                    <p className="text-sm sm:text-base">
                      Starting at $ {(index + 1) * 19}.99/month
                    </p>
                    <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">
                      Choose Plan {index + 1}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePricing;
