"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Truck, Package, Globe, Building2, ArrowRight } from "lucide-react";

export default function Services() {
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

  const services = [
    {
      icon: Truck,
      title: "Local Trucking",
      description:
        "Fast and reliable local transportation services for your immediate needs. Perfect for same-day and next-day deliveries within your region.",
      features: [
        "Same-day delivery",
        "Real-time tracking",
        "Flexible scheduling",
      ],
      color: "from-blue-600 to-blue-700",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2073",
    },
    {
      icon: Package,
      title: "Freight Transport",
      description:
        "Comprehensive freight solutions for businesses of all sizes. We handle everything from palletized goods to specialized cargo.",
      features: ["LTL & FTL options", "Secure handling", "Competitive rates"],
      color: "from-red-600 to-red-700",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2065",
    },
    {
      icon: Globe,
      title: "Long-Distance Delivery",
      description:
        "Nationwide coverage with our extensive network. Cross-country shipments delivered safely and on schedule, every time.",
      features: [
        "Coast-to-coast service",
        "Temperature control",
        "Expedited options",
      ],
      color: "from-blue-700 to-blue-800",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070",
    },
    {
      icon: Building2,
      title: "Business Logistics Solutions",
      description:
        "End-to-end supply chain management tailored to your business. From warehousing to final mile delivery, we have got you covered.",
      features: [
        "Custom solutions",
        "Inventory management",
        "Dedicated support",
      ],
      color: "from-red-700 to-red-800",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2035",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <section
        id="services"
        ref={sectionRef}
        className="py-24 bg-gray-50"
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
              Our Services
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4"
              style={{ fontFamily: "Libre Caslon Text, serif" }}
            >
              Comprehensive Transportation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From local deliveries to nationwide logistics, we offer a complete
              range of services to meet all your transportation needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                  ></div>
                  <div className="absolute top-6 left-6">
                    <div
                      className={`inline-flex p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg`}
                    >
                      <service.icon className="text-white" size={32} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="group/btn flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-700 to-red-700 rounded-2xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Every business is unique. Let us discuss how we can tailor our
                services to meet your specific needs.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
