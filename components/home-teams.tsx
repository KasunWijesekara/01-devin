import Image from "next/image";
import React from "react";

const HomeTeams = () => {
  return (
    <div id="about">
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-semibold text-gray-900 sm:text-3xl">
                    The Zero-One Team
                  </h2>

                  <p className="mt-4 text-gray-500 text-base/6">
                    Where AI meets innovation. At Zero-One, we redefine company
                    roles, placing innovation at the heart of everything we do.
                    Together, we bring cutting-edge AI solutions to businesses
                    across Sri Lanka.
                  </p>
                </header>

                {/* <div className="mt-16 flex items-center justify-center gap-x-6">
                  <a
                    className="group relative inline-block focus:outline-none focus:ring"
                    href="/contact"
                  >
                    <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gray-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                      Get Started
                    </span>
                  </a>
                </div> */}
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a
                    href=""
                    className="group relative block h-64 sm:h-80 lg:h-96"
                  >
                    <span className="absolute inset-0 border-2 border-dashed bg-gray-500 border-black"></span>

                    <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                      <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                        <Image
                          src="/assets/user0-spiral.png"
                          alt="AI Automation"
                          width={75}
                          height={75}
                        />

                        <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                          00 / Ai Researcher / Automation Engineer
                        </h2>
                      </div>

                      <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                        <Image
                          className="h-28 w-28 rounded-full grayscale border border-dashed border-black"
                          src="/assets/user-00.png"
                          alt=""
                          width={128}
                          height={120}
                        />

                        <p className="mt-4 text-sm sm:text-base">
                          From coding frameworks to pioneering in AI
                          technologies, pushing boundaries in automation.
                        </p>

                        <p className="mt-8 font-bold">Kasun Wijesekara</p>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="group relative block h-64 sm:h-80 lg:h-96"
                  >
                    <span className="absolute inset-0 border-2 border-dashed bg-gray-500 border-black"></span>

                    <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                      <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                        <Image
                          src="/assets/user1-spiral.png"
                          alt="AI Automation"
                          width={75}
                          height={75}
                        />
                        {/* <Image
                          src="/assets/binary.svg"
                          alt="AI Automation"
                          width={50}
                          height={100}
                        /> */}

                        <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                          01 / Ai Researcher / Prompt Engineer
                        </h2>
                      </div>

                      <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                        <Image
                          className="h-28 w-28 rounded-full grayscale border border-dashed border-black"
                          src="/assets/user-01.png"
                          alt=""
                          width={64}
                          height={64}
                        />

                        <p className="mt-4 text-sm sm:text-base">
                          From linguistic nuances to AI research &amp; prompt
                          engineering, reimagining the confluence of language
                          and technology.
                        </p>

                        <p className="mt-8 font-bold">Rachel Wijesekara</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeTeams;
