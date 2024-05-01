import React from "react";

const HomeHero = () => {
  return (
    <div>
      <div>
        <div className="relative isolate px-6 pt-16 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-28">
            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 pt-2 sm:text-6xl">
                <strong className="font-extrabold text-gray-600 sm:block pb-6">
                  Zero-One
                </strong>
                We specialize in creating advanced AI chat solutions for
                businesses.
              </h1>
              <p className="mt-6 lg:mt-18 text-lg leading-8 text-gray-800">
                Crafting advanced AI chatbots and other ai systems tailored to
                your business needs.
              </p>
              <div className="mt-16 flex items-center justify-center gap-x-6">
                <a
                  className="group relative inline-block focus:outline-none focus:ring"
                  href="#services"
                >
                  <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gray-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                  <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                    Get Started
                  </span>
                </a>

                <a
                  className="group relative inline-block focus:outline-none focus:ring"
                  href="#contact"
                >
                  <span className="absolute inset-0 translate-x-0 translate-y-0 bg-gray-600 transition-transform"></span>

                  <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                    Learn More
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
