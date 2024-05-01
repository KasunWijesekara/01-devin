import React from "react";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const features = [
  {
    name: "Boost Your Business with AI Automation",
    description:
      "Zero-One brings you the best of AI to make your business tasks easier and faster. With us, you can use AI to do more in less time, helping you stay on top and grow.",
    src: "/assets/svg/business.svg",
  },
  {
    name: "Top-notch Chat Solutions for Your Business",
    description:
      "Powered by GPT-4 and other top AI models, our chat tools adapt and learn. They're tailored to your needs, ensuring customer chats are always smooth and on point for a better experience.",
    src: "/assets/svg/chat.svg",
  },
  {
    name: "AI Assistants that Learn and Grow",
    description:
      "Get apps that don't just work but also learn and adjust based on what's needed. It's like having an app that gets better over time, always serving your business's changing needs.",
    src: "/assets/svg/ai.svg",
  },
  {
    name: "Custom AI Solutions for Complex Needs",
    description:
      "Zero-One isn't just about ready-made solutions. We dive deep, crafting advanced AI agents that can remember, learn, and handle many tasks at once. If you have unique needs, we're ready to explore and create just for you.",
    src: "/assets/svg/custom.svg",
  },
];

const HomeFeature = () => {
  return (
    <div id="services">
      <div className="bg-gray-100 py-24 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-gray-600">
              Unleashing the True Power of AI Automation
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Services and Solutions We Offer
            </p>
            <p className="mt-6 text-base/6 text-gray-600">
              In today&apos;s fast-paced world, AI automation is no longer
              optional—it&apos;s essential. Businesses leveraging AI are not
              only streamlining operations but also offering unparalleled
              customer experiences.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xllg:max-w-4xl">
            <dl className="grid gap-x-8 gap-y-10 lg:max-w-none sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-16">
              {features.map((feature) => (
                <a
                  key={feature.name}
                  href="#"
                  className="group relative block h-96 sm:h-96 lg:h-[28rem]"
                >
                  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

                  <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <Image
                        src={feature.src}
                        alt="AI Automation"
                        width={60}
                        height={100}
                      />

                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        {feature.name}
                      </h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        {feature.name}
                      </h3>

                      <p className="mt-4 text-sm sm:text-base">
                        {feature.description}
                      </p>

                      <p className="mt-8 font-bold">Read more</p>
                    </div>
                  </div>
                </a>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
