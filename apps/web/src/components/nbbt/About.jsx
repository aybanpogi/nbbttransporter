"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Target, Eye, Award } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide exceptional transportation services that exceed client expectations through reliability, safety, and innovation in logistics.",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the most trusted and preferred transportation partner nationwide, setting industry standards for excellence and customer satisfaction.",
      color: "from-red-600 to-red-700",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Integrity, safety, reliability, and customer-first approach drive everything we do. We are committed to building lasting partnerships.",
      color: "from-blue-700 to-blue-800",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <section
        id="about"
        ref={sectionRef}
        className="py-24 bg-gradient-to-b from-white to-gray-50"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              About NBBT
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4"
              style={{ fontFamily: "Libre Caslon Text, serif" }}
            >
              Leading the Way in Transportation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience, NBBT Transporter has become a
              trusted name in logistics, delivering excellence across the
              nation.
            </p>
          </motion.div>

          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Who We Are
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  NBBT Transporter is a premier logistics and transportation
                  company dedicated to moving your business forward. Founded in
                  2009, we have grown from a small local operation to a
                  nationwide network of excellence.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our fleet of modern vehicles, experienced drivers, and
                  cutting-edge tracking technology ensure your cargo arrives
                  safely, on time, every time. We understand that your shipment
                  is more than just freight—it is your business, your
                  reputation, and your promise to your customers.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From small parcels to full truckload shipments, from local
                  deliveries to cross-country hauls, we handle it all with the
                  same commitment to excellence.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                    alt="NBBT Fleet"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-red-600 text-white p-6 rounded-xl shadow-2xl max-w-xs">
                  <p className="text-3xl font-bold">10,000+</p>
                  <p className="text-sm">Successful Deliveries in 2023</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
