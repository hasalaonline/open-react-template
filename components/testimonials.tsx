import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";
import TestimonialImage04 from "@/public/images/testimonial-04.jpg";
import TestimonialImage05 from "@/public/images/testimonial-05.jpg";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet our team</h2>
            <p className="text-xl text-gray-400">
              "We strive to create innovative solutions that contribute to
              making the world a better place."
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-5 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div className="text-center mb-4">
                <Image
                  className="rounded-full mx-auto"
                  src={TestimonialImage01}
                  width={120}
                  height={120}
                  alt="Testimonial 01"
                />
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Hasala Abhilasha</cite> -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Lead Developer
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div className="text-center mb-4">
                <Image
                  className="rounded-full mx-auto"
                  src={TestimonialImage02}
                  width={120}
                  height={120}
                  alt="Testimonial 01"
                />
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Keshan Kavinda</cite> -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  UX/UI Designer & Front-End Developer
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div className="text-center mb-4">
                <Image
                  className="rounded-full mx-auto"
                  src={TestimonialImage03}
                  width={120}
                  height={120}
                  alt="Testimonial 01"
                />
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Gihansa Abeygunawardana</cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                 Back-End Developer
                </a>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div className="text-center mb-4">
                <Image
                  className="rounded-full mx-auto"
                  src={TestimonialImage04}
                  width={120}
                  height={120}
                  alt="Testimonial 01"
                />
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Dinura Amarasinghe</cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Full Stack Developer
                </a>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div className="text-center mb-4">
                <Image
                  className="rounded-full mx-auto"
                  src={TestimonialImage05}
                  width={120}
                  height={120}
                  alt="Testimonial 01"
                />
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Gihan Kanchana</cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Front-End & Database Developer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
