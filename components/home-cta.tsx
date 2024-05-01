import Image from "next/image";
import React from "react";

const HomeCta = () => {
  return (
    <div id="cta">
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-gray-600 p-8 md:p-12 lg:px-16 lg:py-32">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Ready to elevate your business with AI? Dive into the future
                  with Zero-One. Contact Us Now!
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block text-base/6">
                  In a world gently transitioning to AI, embracing this
                  evolution isnt just about staying relevant its about
                  flourishing. While we nurture our traditions and values,
                  intertwining them with AI allows us to journey forward with
                  grace, ensuring we don&apos;t just observe the future, but
                  actively shape it.
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="#contact"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-gray-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Connect with us
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <Image
                src="/assets/dark.jpg"
                alt=""
                className="h-40 w-full object-cover sm:h-56 md:h-full grayscale"
                width={1000}
                height={1000}
              />

              <Image
                src="/assets/cmb.jpg"
                alt=""
                className="h-40 w-full object-cover sm:h-56 md:h-full grayscale hover:grayscale-0 transition ease-in-out delay-100 duration-300"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCta;
