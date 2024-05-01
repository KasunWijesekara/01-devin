"use client";

import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function isInputNamedElement(
  e: Element
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

const HomeContact = () => {
  const [state, setState] = useState<string>();
  const [status, setStatus] = useState<string>();

  const handleSubmit = async () => {
    try {
      // Your submission logic here...
      setStatus("success");
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    setState("loading");

    try {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          option: formData.option,
          message: formData.message,
        }),
      });

      setState("ready");
      setStatus("success");
    } catch (error) {
      console.error("Error:", error);
      setState("ready"); // or you might want to set it to some error state
      setStatus("error");
    }
  }

  return (
    <div id="contact">
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <h2 className="text-xl font-semibold text-gray-800 sm:text-3xl">
                AI in business? We have got the answers!
              </h2>
              <p className="max-w-xl pt-5 text-base/6 text-gray-600">
                Want to see how AI can help your business or your personal self?
                Contact Zero-One and let&apos;s explore the possibilities
                together.
              </p>

              <div className="mt-8">
                <a href="" className="text-xl font-semibold text-gray-800">
                  hello@zero-one.online <br />
                </a>
              </div>
              <div className="mt-2">
                <a
                  href="tell:+94754924046"
                  className="text-xl font-semibold text-gray-800"
                >
                  +94 754 92 4046
                </a>
              </div>
              <div className="mt-2">
                <a href="" className="text-xl font-semibold text-gray-800">
                  Colombo, Sri Lanka.
                </a>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-black lg:col-span-3 lg:p-12">
              <form onSubmit={handleOnSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-black p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-black p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border border-black p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="grid text-gray-400 pt-5">
                  <div>
                    <Label>Select the type of Inquiry</Label>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      className="peer sr-only"
                      id="option1"
                      type="radio"
                      tabIndex={-1}
                      name="option"
                      value="General"
                      required
                    />

                    <label
                      htmlFor="option1"
                      className="block w-full rounded-lg border border-black p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-gray-700 peer-checked:text-white"
                      tabIndex={0}
                    >
                      <span className="text-sm"> General </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="peer sr-only"
                      id="option2"
                      type="radio"
                      tabIndex={-1}
                      name="option"
                      value="Business"
                      required
                    />

                    <label
                      htmlFor="option2"
                      className="block w-full rounded-lg border border-black p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-gray-700 peer-checked:text-white"
                      tabIndex={0}
                    >
                      <span className="text-sm"> Business </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="peer sr-only"
                      id="option3"
                      type="radio"
                      tabIndex={-1}
                      name="option"
                      value="Personal"
                      required
                    />

                    <label
                      htmlFor="option3"
                      className="block w-full rounded-lg border border-black p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-gray-700 peer-checked:text-white"
                      tabIndex={0}
                    >
                      <span className="text-sm"> Personal </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-black p-3 text-sm"
                    placeholder="Message"
                    rows={8}
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>

                {status === "success" && (
                  <Alert>
                    <AlertTitle className="text-green-700">
                      Let&apos;s Go! 🥳
                    </AlertTitle>
                    <AlertDescription className="mt-2 text-green-700">
                      You are awesome! We will be in touch soon OR maybe one of
                      my AI Assistants will contact you. 👀
                    </AlertDescription>
                  </Alert>
                )}

                {status === "error" && (
                  <Alert variant="destructive">
                    {/* You can customize this error alert as needed */}
                    <AlertTitle>Oops! 😔</AlertTitle>
                    <AlertDescription>
                      Something went wrong. Please try again later or contact
                      one of the contact numbers. Sorry for the inconvience.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="mt-4">
                  <button
                    type="submit"
                    className="group relative inline-block focus:outline-none focus:ring"
                    disabled={state === "loading"}
                  >
                    <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gray-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                      Send it
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContact;
